import { useRouter } from "@/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export const usePrivateRoute = (redirect) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push(`/${redirect}`);
    }
  }, [status, router, redirect]);
};
