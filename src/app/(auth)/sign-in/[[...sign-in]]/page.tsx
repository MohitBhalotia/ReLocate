import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <main className="flex justify-center items-center h-screen">
      <SignIn signUpUrl="/sign-up" />
    </main>
  );
};

export default SignInPage;
