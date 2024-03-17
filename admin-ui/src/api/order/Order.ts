import { Prodcut } from "../prodcut/Prodcut";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  paymentintent: string | null;
  paymentStatus: boolean | null;
  price: number | null;
  products?: Array<Prodcut>;
  status: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
