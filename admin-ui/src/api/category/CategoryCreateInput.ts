import { ProdcutCreateNestedManyWithoutCategoriesInput } from "./ProdcutCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  prodcuts?: ProdcutCreateNestedManyWithoutCategoriesInput;
};
