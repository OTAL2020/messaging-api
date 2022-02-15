import { Injectable } from "@nestjs/common";
import { createuserDTO} from "src/DTO/user.dto";

@Injectable()
export class userService{

    createUser(user: createuserDTO){
        return user;
    }
}