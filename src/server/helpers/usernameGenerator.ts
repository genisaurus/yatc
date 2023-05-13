import type { UserResource } from "@clerk/types";

export const generateUsername = (user: UserResource) => {
  if (!user) return "";
  else if (user.username) return user.username;
  else if (user.firstName && user.lastName)
    return user.firstName + "_" + user.lastName;
  else return "anon_" + user.id.substring(5);
};
