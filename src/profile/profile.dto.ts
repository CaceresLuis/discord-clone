import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateProfileDto {
    @IsString()
    @IsNotEmpty()
    @Field()
    name: string

    @IsString()
    @IsNotEmpty()
    @Field()
    email: string

    @IsString()
    @IsNotEmpty()
    @Field()
    imageUrl: string
}