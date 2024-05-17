import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RoleUpdateInput = {
  permissions?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
