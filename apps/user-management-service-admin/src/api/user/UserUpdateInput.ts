import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";
import { RoleUpdateManyWithoutUsersInput } from "./RoleUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  organisation?: OrganisationWhereUniqueInput | null;
  password?: string | null;
  roles?: RoleUpdateManyWithoutUsersInput;
};
