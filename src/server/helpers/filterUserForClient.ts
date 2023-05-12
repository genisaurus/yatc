import { type User } from "@clerk/nextjs/server";

export const filterUserForClient = (user: User) => {
  const fullName =
    (user.firstName ?? "Anonymous") + "_" + (user.lastName ?? "Poster");
  return {
    id: user.id,
    username: user.username ?? fullName,
    profileImageUrl: user.profileImageUrl,
  };
};
