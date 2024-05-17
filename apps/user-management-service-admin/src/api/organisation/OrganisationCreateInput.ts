import { UserCreateNestedManyWithoutOrganisationsInput } from "./UserCreateNestedManyWithoutOrganisationsInput";

export type OrganisationCreateInput = {
  licenseStatus?: string | null;
  name?: string | null;
  users?: UserCreateNestedManyWithoutOrganisationsInput;
};
