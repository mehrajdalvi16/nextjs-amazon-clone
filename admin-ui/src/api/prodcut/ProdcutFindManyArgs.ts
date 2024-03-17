import { ProdcutWhereInput } from "./ProdcutWhereInput";
import { ProdcutOrderByInput } from "./ProdcutOrderByInput";

export type ProdcutFindManyArgs = {
  where?: ProdcutWhereInput;
  orderBy?: Array<ProdcutOrderByInput>;
  skip?: number;
  take?: number;
};
