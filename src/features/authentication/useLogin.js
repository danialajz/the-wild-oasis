import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPi } from "../../services/apiAuth";
import { useNavigate } from "react-router";

import toast from "react-hot-toast";
import { useUser } from "./useUser";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPi({ email, password }),
    onSuccess: (user) => {
      const name = user.user.user_metadata.fullName || "";
      toast.success(`Welcome ${name}`);

      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      toast.error("provided email or password are incorrect");
    },
  });
  return { login, isLoading };
}
