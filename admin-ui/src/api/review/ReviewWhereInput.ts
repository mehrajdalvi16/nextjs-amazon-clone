import { StringFilter } from "../../util/StringFilter";
import { ProdcutWhereUniqueInput } from "../prodcut/ProdcutWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  id?: StringFilter;
  prodcuts?: ProdcutWhereUniqueInput;
  rating?: IntFilter;
  user?: UserWhereUniqueInput;
};
