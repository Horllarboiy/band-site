import React from "react";

function Button({ name }) {
  return (
    <button className="mt-4 mb-5 text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
      {name}
    </button>
  );
}

export default Button;
