import { ProdcutWhereUniqueInput } from "../prodcut/ProdcutWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  prodcuts?: ProdcutWhereUniqueInput | null;
  rating?: number;
  user?: UserWhereUniqueInput | null;
};
