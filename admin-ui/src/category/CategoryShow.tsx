import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "./CategoryTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { REVIEW_TITLE_FIELD } from "../review/ReviewTitle";

export const CategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Prodcut"
          target="categoryId"
          label="prodcuts"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="colors" source="colors" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="discountedPrice" source="discountedPrice" />
            <TextField label="ID" source="id" />
            <TextField label="images" source="images" />
            <ReferenceField label="orders" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="reviews"
              source="review.id"
              reference="Review"
            >
              <TextField source={REVIEW_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="title" source="title" />
            <TextField label="titlePrice" source="titlePrice" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="varients" source="varients" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
