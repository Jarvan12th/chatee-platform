"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, set, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";

type Variant = "LOGIN" | "REGISTER";

export default function AuthForm() {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "LOGIN") {
      // Next Auth Login
      console.log("Logging in with", data);
    }
    if (variant === "REGISTER") {
      console.log("Registering with", data);
      axios.post("/api/register", data);
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    console.log("Social action", action);
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              label="Name"
              id="name"
              register={register}
              disabled={isLoading}
              errors={errors}
            />
          )}
          <Input
            label="Email address"
            id="email"
            register={register}
            disabled={isLoading}
            errors={errors}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            register={register}
            disabled={isLoading}
            errors={errors}
          />
          <Button type="submit" fullWidth disabled={isLoading}>
            {variant === "LOGIN" ? "Sign in" : "Register"}
          </Button>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>
        <div className="mt-6 flex gap-2 justify-center text-sm px-2 text-gray-500">
          <div>
            {variant === "LOGIN"
              ? "New to Chatee?"
              : "Already have an account?"}
          </div>
          <div className="underline cursor-pointer" onClick={toggleVariant}>
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
}
