import { useMutation } from "@tanstack/react-query";
import { login as loginAPi } from "../../services/apiAuth";
import { useNavigate } from "react-router";

import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPi({ email, password }),
    onSuccess: () => {
      toast.success(`login ${{ email }}`);
      navigate("/dashboard");
    },
    onError: (err) => {
      console.log(err);
      toast.error("provided email or password are incorrect");
    },
  });
  return { login, isLoading };
}
