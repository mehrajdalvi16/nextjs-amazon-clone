import { Prodcut } from "../prodcut/Prodcut";

export type Category = {
  createdAt: Date;
  id: string;
  name: string | null;
  prodcuts?: Array<Prodcut>;
  updatedAt: Date;
};
