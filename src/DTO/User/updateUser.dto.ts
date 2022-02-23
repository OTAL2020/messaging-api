import { IsNotEmpty, IsInt, IsString } from "class-validator";

export class updateuserDTO {
    @IsNotEmpty({ message: "UserId Field is Required" })
    @IsInt({ message: "UserId Field Must Contain A Interger"})
    userId: number;

    @IsString({ message: "Username Field Must Contain A String" })
    username: string;

    @IsInt({ message: "Level Field Must Contain A Interger" })
    level: number;

    @IsInt({ message: "GuildId Field Must Contain A Interger" })
    guildId: number;
}