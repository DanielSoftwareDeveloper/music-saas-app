import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "~/server/db";
import { Polar } from "@polar-sh/sdk";
import { env } from "~/env";
import { polar, checkout, portal, webhooks } from "@polar-sh/better-auth";
import { Resend } from "resend";
import ForgotPasswordEmail from "~/components/emails/reset-password-email";
import VerifyEmail from "~/components/emails/verify-email";

const polarClient = new Polar({
  accessToken: env.POLAR_ACCESS_TOKEN,
  server: "sandbox",
});

const resend = new Resend(env.RESEND_API_KEY);

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: user.email,
        subject: "Reset your password",
        react: ForgotPasswordEmail({
          username: user.name ?? "User",
          userEmail: user.email,
          resetUrl: url,
        }),
      });
    },
  },
  emailVerification: {
    autoSignInAfterVerification: true,
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: user.email,
        subject: "Verify your email",
        react: VerifyEmail({
          username: user.name ?? "User",
          verifyUrl: url,
        }),
      });
    },
  },
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products: [
            {
              productId: "cc849e9b-6b45-403b-b733-730a3f49f040",
              slug: "small",
            },
            {
              productId: "952ba74b-f042-4330-b224-bc5835e162a4",
              slug: "medium",
            },
            {
              productId: "d2cd34e1-bcbe-4149-a55c-7d38e5d60440",
              slug: "large",
            },
          ],
          successUrl: "/overview",
          authenticatedUsersOnly: true,
        }),
        portal(),
        webhooks({
          secret: env.POLAR_WEBHOOK_SECRET,
          onOrderPaid: async (order) => {
            const externalCustomerId = order.data.customer.externalId;

            if (!externalCustomerId) {
              console.error("No external customer ID found.");
              throw new Error("No external customer id found.");
            }

            const productId = order.data.productId;

            let creditsToAdd = 0;

            switch (productId) {
              case "cc849e9b-6b45-403b-b733-730a3f49f040":
                creditsToAdd = 10;
                break;
              case "952ba74b-f042-4330-b224-bc5835e162a4":
                creditsToAdd = 25;
                break;
              case "d2cd34e1-bcbe-4149-a55c-7d38e5d60440":
                creditsToAdd = 50;
                break;
            }

            await db.user.update({
              where: { id: externalCustomerId },
              data: {
                credits: {
                  increment: creditsToAdd,
                },
              },
            });
          },
        }),
      ],
    }),
  ],
});
