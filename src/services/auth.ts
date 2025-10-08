import api from "./api";

interface LoginData {
  username: string;
  password: string;
}

interface UserResponse {
  id: number;
  username: string;
  token: string;
}

export async function login(data: LoginData): Promise<UserResponse> {
  const response = await api.post<UserResponse>("/auth/login", data);
  return response.data;
}