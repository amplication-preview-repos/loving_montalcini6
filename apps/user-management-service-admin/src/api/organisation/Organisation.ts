import { User } from "../user/User";

export type Organisation = {
  createdAt: Date;
  id: string;
  licenseStatus: string | null;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
