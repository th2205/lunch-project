import { sign, verify } from "jsonwebtoken";

export default class Token {
  create(id: number) {
    const tokne = sign({ id }, "shhhhh");
    console.log(tokne);
    return tokne;
  }

  vefify(token: string) {
    const id = verify(token, "shhhhh");

    return id;
  }
}
