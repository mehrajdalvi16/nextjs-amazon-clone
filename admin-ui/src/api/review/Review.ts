import { Prodcut } from "../prodcut/Prodcut";
import { User } from "../user/User";

export type Review = {
  createdAt: Date;
  id: string;
  prodcuts?: Prodcut | null;
  rating: number;
  updatedAt: Date;
  user?: User | null;
};
