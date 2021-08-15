export default class Token {
    create(id: number): string;
    vefify(token: string): string | import("jsonwebtoken").JwtPayload;
}
