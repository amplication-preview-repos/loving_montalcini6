import { Organisation } from "../organisation/Organisation";
import { Role } from "../role/Role";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  organisation?: Organisation | null;
  password: string | null;
  roles?: Array<Role>;
  updatedAt: Date;
};
