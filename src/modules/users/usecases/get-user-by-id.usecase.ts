import { User } from "@src/models";
import { UserRepository } from "@src/repositories";

export const GetUserByIdUseCase = {
  execute: (id: number): User | null => {
    const user = UserRepository.getUsers().find((user) => user.id === id);
    if (!user) {
      return null;
    }
    return user;
  },
};
