import AuthCard from "~/components/auth/AuthCard";
import MessageVerification from "~/components/auth/MessageVerification";

export default function VerifyEmailPage() {
  return (
    <AuthCard
      title="Confirm your email"
      description="🎉 A confirmation email has been sent. Click the link to complete your registration."
    >
      <MessageVerification />
    </AuthCard>
  );
}
