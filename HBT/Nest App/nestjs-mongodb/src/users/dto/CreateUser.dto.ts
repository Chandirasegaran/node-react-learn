// import { IsNotEmpty, IsString } from "class-validator";

// export class createUserDto{
//     @IsNotEmpty()
//     @IsString()
//     userName: string;

//     @IsString()
//     displayName: string;
// }


import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  userName!: string;

  @IsString()
  displayName?: string;
}
