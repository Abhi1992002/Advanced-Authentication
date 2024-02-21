"use client";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
import Link from "next/link";
import { SubscribeButton } from "@/components/payment/subscribe-button";
import { useState } from "react";
import { MoonLoader } from "react-spinners";
import { Features } from "@/components/features";
import { ShimmerButton } from "@/components/shimmer";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  const [loginLoading, setloginLoading] = useState(false);
  return (
    <main className="flex pb-20 bg-black w-full text-white space-y-10 flex-col text-center items-center pt-10 animate-none transition-none">
      <div className="hidden md:visible md:w-[60%] mb-14">
        <Button asChild className="text-xs">
          <div className="flex gap-1">
            <p className="text-xs">
              🎉 Want to Know more about this project visit{" "}
            </p>

            <Link
              href={"https://github.com/Abhi1992002/Advanced-Authentication"}
              className="text-xs hover:underline"
            >
              here.
            </Link>
          </div>
        </Button>
      </div>

      <h1 className="text-7xl">🔐</h1>
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-slate-200">
        Advanced Authentications
      </h1>
      <p className="w-[90%] md:w-[80%] text-sm md:text-base lg:text-lg text-slate-400">
        🔐 Advanced-authentication is a nextAuth-based authentication system,
        offering hooks and server-side functions for secure user sign-in and
        profile access. A project that brings Clerk-level security and ease to
        your development workflow.
      </p>
      <div className="space-x-4">
        <LoginButton>
          <Button
            className=" w-[90%] md:w-fit md:mb-0 mb-4"
            variant={"secondary"}
            onClick={() => setloginLoading(true)}
          >
            {loginLoading ? (
              <MoonLoader color="#000000" size={14} />
            ) : (
              " Sign in Demo"
            )}
          </Button>
        </LoginButton>
        <Button
          asChild
          variant={"outline"}
          className="bg-black w-[90%] md:w-fit text-white"
        >
          <Link href={"https://cli.abhimanyu.tech"}>
            Start your Project with our cli
          </Link>
        </Button>
      </div>

      <div className="w-[90%] md:w-[80%] aspect-video relative  ">
        <Image
          fill
          src={"/main.png"}
          alt="main page"
          className="rounded-xl mt-10"
        />
      </div>

      <Features />
    </main>
  );
}
