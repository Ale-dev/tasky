export interface User {
  email: string;
  password: string;
}

export interface authResponse {
  token: string;
  expiresIn: number;
}
