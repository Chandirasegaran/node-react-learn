import { IsNotEmpty, IsString } from "class-validator";

export class createUserDto{
    @IsNotEmpty()
    @IsString()
    userName: string;

    @IsString()
    displayName: string;
}