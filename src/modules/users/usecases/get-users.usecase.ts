import { USER_MOCK_LIST } from "@src/__mock__/user.mock";

export const GetUsersUseCase = {
  execute: () => {
    return USER_MOCK_LIST;
  },
};
