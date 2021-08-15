"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
class Token {
    create(id) {
        const tokne = jsonwebtoken_1.sign({ id }, "shhhhh");
        console.log(tokne);
        return tokne;
    }
    vefify(token) {
        const id = jsonwebtoken_1.verify(token, "shhhhh");
        return id;
    }
}
exports.default = Token;
//# sourceMappingURL=index.js.map