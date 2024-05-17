import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RoleCreateInput = {
  permissions?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
