import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://assignment-08-sun-cart-red.vercel.app"
});

export const { signIn, signUp, signOut, useSession, updateUser, changePassword, changeEmail,} = authClient;