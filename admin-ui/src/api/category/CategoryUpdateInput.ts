import { ProdcutUpdateManyWithoutCategoriesInput } from "./ProdcutUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  prodcuts?: ProdcutUpdateManyWithoutCategoriesInput;
};
