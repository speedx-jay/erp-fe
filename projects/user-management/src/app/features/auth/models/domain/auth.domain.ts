export interface LoginDomain {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  expiration: string;
  refreshToken: string;
}

export interface CreateAccountDomain {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userImage: string;
}

export interface UserSessionDomain {
  id: number;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  userImage: string;
}