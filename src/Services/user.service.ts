import { Injectable } from "@nestjs/common";
import { userDTO } from "src/DTO/user.dto";

@Injectable()
export class userService{

    createUser(user: userDTO){
        return user;
    }
}