import { USER_MOCK_LIST } from "@src/__mock__/user.mock";

export const UserRepository = {
  getUsers: () => {
    return USER_MOCK_LIST;
  },
};
