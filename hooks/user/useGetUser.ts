import { useQuery } from "@tanstack/react-query";

interface User {
  id: string;
  email: string;
  name: string;
  image: string | null;
}

interface UserResponse {
  user: User;
}

async function fetchUser(): Promise<UserResponse> {
  const response = await fetch("/api/user");
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  return response.json();
}

export function useGetUser() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  const user = data?.user;

  return { user, isLoading, error };
}
