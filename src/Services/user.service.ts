import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { createuserDTO} from "src/DTO/User/createUser.dto";
import { updateuserDTO } from "src/DTO/User/updateUser.dto";
import { User, UserDocument } from "src/Schema/user.schema";

@Injectable()
export class userService{
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    ) {}

    async createUser(user: createuserDTO): Promise<User>{
        const createdUser = await this.userModel.create(user)
        return createdUser;
    }

    async getAllUsers(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async getUser(id: number): Promise<User> {
        return this.userModel.findOne({ userId: id }).exec();
    }

    async updateUser(userdata : updateuserDTO){
        await this.userModel.updateOne({userId:userdata.userId},userdata);
    }

    async deleteUser(id: number) {
        const deletedUser = await this.userModel
          .findOneAndDelete({ userId: id })
          .exec();
        return deletedUser;
    }
}