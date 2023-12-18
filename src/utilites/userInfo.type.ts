import { USER_ROLE } from "@/constants/role";

export type UserInfoData = {
  exp: number;
  iat: number;
  role:
    | USER_ROLE.ADMIN
    | USER_ROLE.CUSTOMER
    | USER_ROLE.PAINTER
    | USER_ROLE.SUPER_ADMIN;
  userId: string;
};
