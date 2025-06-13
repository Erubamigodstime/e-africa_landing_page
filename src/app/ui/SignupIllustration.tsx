"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Image from "next/image";

const SignupIllustration = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      {/* Mobile form UI */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md bg-white shadow-lg rounded-lg p-6 z-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-green-700">Sign up</h2>
          <button className="text-xl text-gray-400 hover:text-gray-600">✕</button>
        </div>

        <button className="flex items-center justify-center gap-2 mt-6 w-full border border-gray-300 rounded-md py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
          <FcGoogle className="text-xl" /> Sign up with Google
        </button>

        <div className="my-4 flex items-center">
          <div className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-sm text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300" />
        </div>

        <form className="space-y-3">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Full Name"
              className="w-1/2 px-3 py-2 border rounded-md text-sm"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-1/2 px-3 py-2 border rounded-md text-sm"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-3 py-2 border rounded-md text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-md text-sm"
          />

          {/* Green bar */}
          <div className="h-1 bg-green-600 rounded w-1/3 my-2" />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 text-sm font-semibold"
          >
            Create Account
          </button>
        </form>
      </div>

      {/* Illustration (laying woman + checkmark) */}
      <div className="absolute bottom-0 left-4 w-48 hidden md:block">
        {/* You can replace this Image with your own illustration if needed */}
        <Image
          src="/illustration-placeholder.svg"
          alt="Woman illustration"
          width={300}
          height={300}
          className="object-contain"
        />
        <AiOutlineCheckCircle className="text-green-600 text-3xl mt-2 ml-2" />
      </div>
    </div>
  );
};

export default SignupIllustration;
