import { Injectable } from "@nestjs/common";

@Injectable()
export class userService{

    createUser(data)
    {
        return data; // send data to DB when its up and running
    }
}