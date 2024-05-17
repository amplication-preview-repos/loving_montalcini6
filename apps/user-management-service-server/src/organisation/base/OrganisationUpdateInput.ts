/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { UserUpdateManyWithoutOrganisationsInput } from "./UserUpdateManyWithoutOrganisationsInput";
import { Type } from "class-transformer";

@InputType()
class OrganisationUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  licenseStatus?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutOrganisationsInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutOrganisationsInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutOrganisationsInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutOrganisationsInput;
}

export { OrganisationUpdateInput as OrganisationUpdateInput };
