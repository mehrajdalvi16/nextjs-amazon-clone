import { ProdcutCreateNestedManyWithoutOrdersInput } from "./ProdcutCreateNestedManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  paymentintent?: string | null;
  paymentStatus?: boolean | null;
  price?: number | null;
  products?: ProdcutCreateNestedManyWithoutOrdersInput;
  status?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
