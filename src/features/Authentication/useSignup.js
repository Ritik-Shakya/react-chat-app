import { useMutation } from "@tanstack/react-query";
import {  signupAndcreateFriend } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signupAndcreateFriend,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please log in"
      );
    },
    onError: (err) =>
      toast.error(`Account could not be create due to ${err.message}`),
  });
  return { signUp, isLoading };
}