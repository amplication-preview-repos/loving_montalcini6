import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Role = {
  createdAt: Date;
  id: string;
  permissions: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
