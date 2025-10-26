import { FaRegCircleCheck } from "react-icons/fa6";

interface Props {
  message?: string;
}

function FormSuccess({ message }: Props) {
  if (!message) return null;

  return (
    <div className="bg-emerald-100 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-700">
      <FaRegCircleCheck className="size-4" />
      <p>{message}</p>
    </div>
  );
}
export default FormSuccess;
