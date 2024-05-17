import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";
import { RoleListRelationFilter } from "../role/RoleListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  organisation?: OrganisationWhereUniqueInput;
  password?: StringNullableFilter;
  roles?: RoleListRelationFilter;
};
