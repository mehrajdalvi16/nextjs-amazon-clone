import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProdcutListRelationFilter } from "../prodcut/ProdcutListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  prodcuts?: ProdcutListRelationFilter;
};
