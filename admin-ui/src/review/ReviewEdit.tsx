import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ProdcutTitle } from "../prodcut/ProdcutTitle";
import { UserTitle } from "../user/UserTitle";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="prodcuts.id"
          reference="Prodcut"
          label="prodcuts"
        >
          <SelectInput optionText={ProdcutTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="rating" source="rating" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
