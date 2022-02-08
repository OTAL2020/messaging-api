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

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
