import { DataType } from "ts-postgres";
import { UserModel } from "./models/user.model";

class User {
  signUp(user: UserModel): boolean | undefined {
    try {
      return true;
    } catch (error) {
      console.error(error);
    }
  }

  signIn(): number {
    let x: number;
    x = 1;
    return x;
  }
}
