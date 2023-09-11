import { useEffect } from "react";

type ToastProps = {
  message: string;
  onClose: () => void;
};

const Toast = ({ message, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1000);
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div className="text-white z-50 absolute top-8 right-2 rounded-md text-center bg-dark p-3 shadow-black transition-colors duration-300 ease-in">
      {message}
    </div>
  );
};

export default Toast;
