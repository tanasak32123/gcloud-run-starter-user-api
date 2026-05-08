import Elysia, { status } from "elysia";
import { GetUserByIdUseCase, GetUsersUseCase } from "./usecases";

export const user = new Elysia({ prefix: "/users" })
  .get("/", () => GetUsersUseCase.execute())
  .get("/:id", ({ params: { id } }) => {
    const user = GetUserByIdUseCase.execute(Number(id));
    if (!user) {
      return status(404, "User not found");
    }

    return user;
  });
