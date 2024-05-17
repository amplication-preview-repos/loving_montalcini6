import { SortOrder } from "../../util/SortOrder";

export type RoleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  permissions?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
