import { FiAlertTriangle } from "react-icons/fi";

interface Props {
  message?: string;
}

function FormError({ message }: Props) {
  if (!message) return null;

  return (
    <div className="bg-destructive/13 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <FiAlertTriangle className="size-4" />
      <p>{message}</p>
    </div>
  );
}
export default FormError;
