import AuthCard from "~/components/auth/AuthCard";
import MessageResetLink from "~/components/auth/MessageResetLink";

export default function ResetLinkSent() {
  return (
    <AuthCard
      title="Check your email"
      description="📬 We've sent you a link to reset your password. Please check your inbox and follow the instructions."
    >
      <MessageResetLink />
    </AuthCard>
  );
}
