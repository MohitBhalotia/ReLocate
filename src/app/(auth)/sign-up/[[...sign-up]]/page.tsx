import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <main className="flex justify-center items-center h-screen">
      <SignUp signInUrl="/sign-in" />
    </main>
  );
};

export default SignUpPage;
