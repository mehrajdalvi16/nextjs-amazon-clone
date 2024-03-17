import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";

export type ProdcutCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors: InputJsonValue;
  description: InputJsonValue;
  discountedPrice: number;
  images: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  review?: ReviewWhereUniqueInput | null;
  title: string;
  titlePrice: number;
  varients: InputJsonValue;
};
