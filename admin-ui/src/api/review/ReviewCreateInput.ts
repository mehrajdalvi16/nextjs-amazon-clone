import { ProdcutWhereUniqueInput } from "../prodcut/ProdcutWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  prodcuts?: ProdcutWhereUniqueInput | null;
  rating: number;
  user?: UserWhereUniqueInput | null;
};
