import { UserUpdateManyWithoutOrganisationsInput } from "./UserUpdateManyWithoutOrganisationsInput";

export type OrganisationUpdateInput = {
  licenseStatus?: string | null;
  name?: string | null;
  users?: UserUpdateManyWithoutOrganisationsInput;
};
