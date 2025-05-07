import React from "react";
import { toast } from "react-toastify";
// import { XMarkIcon } from '@heroicons/react/24/solid'; // For solid icons

// Custom Toast component
const CustomToast = ({ message, type, closeToast }) => {
  const background = type === "error" ? "bg-red-500" : "bg-green-500";
  const icon = type === "error" ? "❌" : "✅"; // Simple icon for toast type

  return (
    <div
      className={`flex items-center p-4 rounded-lg shadow-xl text-white ${background} max-w-xs w-full animate__animated animate__fadeIn animate__faster`}
    >
      {/* <span className="text-xl mr-4">{icon}</span> */}
      <p className="flex-1">{message}</p>
      {/* <button
        onClick={closeToast}
        className="ml-4 text-white hover:text-gray-200 transition-all duration-200"
      >
      <XMarkIcon className="h-5 w-5 text-gray-500 cursor-pointer" onClick={() => toast.dismiss()} />
      </button> */}
    </div>
  );
};

export default CustomToast;
// import React from "react";
// import { toast } from "react-toastify";
// import { XMarkIcon } from "@heroicons/react/24/solid"; // Heroicons v2

// const CustomToast = ({ message }) => {
//   return (
//     <div className="flex items-center space-x-2">
//       <div>{message}</div>
//       {/* <XMarkIcon className="h-5 w-5 text-gray-500 cursor-pointer" onClick={() => toast.dismiss()} /> */}
//     </div>
//   );
// };

// export default CustomToast;
