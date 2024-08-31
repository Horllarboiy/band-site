import React from "react";
import Button from "./button";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Form = () => {
  return (
    <form className="grid md:grid-cols-2 xs:grid-cols-1 gap-6 px-5 mt-12">
      <div>
        <ul className="md:ml-48">
          <li className="my-2">
            <span className="inline-block">
              <FaLocationDot />
            </span>
            <span className="font-semibold text-lg ml-3">Lagos, Nigeria</span>
          </li>
          <li className="my-2">
            <span className="inline-block">
              <FaPhone />
            </span>
            <span className="font-semibold text-lg ml-3">
              Phone: +00 151515
            </span>
          </li>
          <li className="">
            <span className="inline-block">
              <IoIosMail />
            </span>
            <span className="font-semibold text-lg ml-3">
              Email: mail@mail.com
            </span>
          </li>
        </ul>
      </div>
      <div>
        <div className="grid gap-3 mb-5 md:grid-cols-2">
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Name.."
              required
            />
          </div>

          <div>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email.."
              required
            />
          </div>
        </div>
        <textarea
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
        <Button name="Send" />
      </div>
    </form>
  );
};

export default Form;
