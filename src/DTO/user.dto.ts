import { IsNotEmpty, IsInt, IsString } from "class-validator";

export class userDTO {
    @IsNotEmpty({ message: "UserId Field is Required" })
    @IsInt({ message: "UserId Field Must Contain A Interger"})
    userId: number;

    @IsNotEmpty({ message: "Username Field is Required" })
    @IsString({ message: "Username Field Must Contain A String" })
    username: string;

    @IsNotEmpty({ message: "Level Field is Required" })
    @IsInt({ message: "Level Field Must Contain A Interger" })
    level: number;

    @IsNotEmpty({ message: "GuildId Field is Required" })
    @IsInt({ message: "GuildId Field Must Contain A Interger" })
    guildId: number;
}

export class readuserDTO {
    @IsNotEmpty({ message: "UserId Field is Required" })
    @IsInt({ message: "UserId Field Must Contain A Interger"})
    userId: number;
}

export class edituserDTO {
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

export class deleteuserDTO {
    @IsNotEmpty({ message: "UserId Field is Required" })
    @IsInt({ message: "UserId Field Must Contain A Interger"})
    userId: number;
}