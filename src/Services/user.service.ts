import { Injectable } from "@nestjs/common";
import { createuserDTO} from "src/DTO/user.dto";

@Injectable()
export class userService{
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    ) {}

    createUser(user: createuserDTO){
        return user;
    }
}