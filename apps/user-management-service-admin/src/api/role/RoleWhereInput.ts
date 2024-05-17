import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RoleWhereInput = {
  id?: StringFilter;
  permissions?: JsonFilter;
  user?: UserWhereUniqueInput;
};
