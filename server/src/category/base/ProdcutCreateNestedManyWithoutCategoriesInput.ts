/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProdcutWhereUniqueInput } from "../../prodcut/base/ProdcutWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProdcutCreateNestedManyWithoutCategoriesInput {
  @Field(() => [ProdcutWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProdcutWhereUniqueInput],
  })
  connect?: Array<ProdcutWhereUniqueInput>;
}

export { ProdcutCreateNestedManyWithoutCategoriesInput as ProdcutCreateNestedManyWithoutCategoriesInput };
