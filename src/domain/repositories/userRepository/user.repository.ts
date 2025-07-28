import { User } from "src/domain/entities/userEntitie/user.entitie";

export interface UserRepository{
    createUser(user:User): void;
    deleteUser(user:User): void;
    findOne(identifier: { email?: string; id?: string; name?: string }): User | undefined;
}