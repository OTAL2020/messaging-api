import { Test, TestingModule } from '@nestjs/testing';
import { userService } from '../Services/user.service';
import { UserController } from '../Controllers/user.controller';

describe('UserController', () => {
  let userController: UserController;
  let UserService: userService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [userService],
    }).compile();

    userController = module.get<UserController>(UserController);
  });

  describe('createUser', () => {
    it('should respond with json object', async () => {
      const result = {userId : 1, username :  "lewis", level : 4, guildId : 12345}

      jest.spyOn(UserService, 'createUser').mockImplementation(() => result)
      expect(await userController.createUser(result)).toReturn();
    });
  });
});
