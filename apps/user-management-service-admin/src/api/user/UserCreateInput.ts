import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";
import { RoleCreateNestedManyWithoutUsersInput } from "./RoleCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  organisation?: OrganisationWhereUniqueInput | null;
  password?: string | null;
  roles?: RoleCreateNestedManyWithoutUsersInput;
};
