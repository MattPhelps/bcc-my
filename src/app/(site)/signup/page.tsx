"use client";
import { Metadata } from "next";
import React from "react";
import PageTitle from "../../../components/Common/PageTitle";
import { signIn, useSession } from "next-auth/react";
import GoogleButton from "react-google-button";
import { redirect } from "next/navigation";
import useSignupForm from "@/hooks/useSignupForm";

const pageTitle = `Signup to InkGen`;
const pageDescription = `Design your own tattoos!`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const SignupPage = () => {
  const { userData, errors, loading, onHandleInput, handleSubmit } = useSignupForm();
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    // If the user is authenticated, redirect to the home page
    redirect('/');
  }

    return (
      <>
        <section className="relative pt-3 pb-25 bg-cover bg-center" style={{ backgroundImage: "url('/images/auth/background.jpeg')", position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
            
          <div className="max-w-[1170px] text-[black]/70 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
            <div className="form-box-gradient-light relative overflow-hidden rounded-[25px] bg-dark p-6 sm:p-8 xl:p-15 w-1/2 mx-auto">
              <PageTitle title="Sign up" paragraph="" />
  
            <form
              method="post"
              className="relative z-10"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col items-center">
                <div className="w-full max-w-md mx-auto mb-5">
                  <input
                    id="name"
                    type="name"
                    name="name"
                    placeholder="Full name"
                    required
                    value={userData.name}
                    onChange={onHandleInput}
                    className="rounded-lg border border-[#00000041] dark:border-white/[0.12] bg-[#ffffffb1] dark:bg-white/[0.05] w-full py-3 px-6 outline-none text-[black] dark:text-[white]"
                  />
                  {errors.name && (
                    <span className="text-red-500">{errors.name}</span>
                  )}
                </div>
                <div className="w-full max-w-md mx-auto mb-5">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={userData.email}
                    onChange={onHandleInput}
                    className="rounded-lg border border-[#00000041] dark:border-white/[0.12] bg-[#ffffffb1] dark:bg-white/[0.05] w-full py-3 px-6 outline-none text-[black] dark:text-[white]"
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email}</span>
                  )}
                </div>
                <div className="w-full max-w-md mx-auto mb-5">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={userData.password}
                    onChange={onHandleInput}
                    className="rounded-lg border border-[#00000041] dark:border-white/[0.12] bg-[#ffffffb1] dark:bg-white/[0.05] w-full py-3 px-6 outline-none text-[black] dark:text-[white]"
                  />
                  {errors.password && (
                    <span className="text-red-500">{errors.password}</span>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="button-styling bg-[#8b3eff] block rounded-lg py-3 px-7 w-full text-white font-medium ease-in duration-300 hover:opacity-80"
              >
                 {loading ? "Loading..." : "Continue"}
              </button>
            </form>
            <div className="w-full max-w-md mx-auto mb-2">
              <GoogleButton
                style={{ margin: "20px auto 0 auto", borderRadius: "5px" }}
                type="light"
                label="Sign up with Google"
                onClick={() => signIn("google")}
              />
            </div>

            <div className="w-full max-w-md mx-auto py-2">
              <p className="text-xs text-[gray] text-center">
                By signing up, you agree to InkGen's{" "}
                <a href="/terms" className="">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="/privacy" className="">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* New text under the button */}
            <div className="w-full max-w-md mx-auto py-4">
              <p className="text-center text-s text-[gray]">
                Already have an account?{" "}
                <a href="/login" className="text-[#00baffcc] underline">
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      </>
    );
};
  
export default SignupPage;

