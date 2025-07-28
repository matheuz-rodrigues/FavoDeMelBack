import { randomUUID } from "crypto"

interface UserProps {
    id?: string;
    name:string;
    createdAt: Date;
    updateAt: Date;
    email:string;
    password:string;
    admin:boolean;
}

export class User {
    private user: UserProps;
    constructor(user: UserProps) {
        this.user = { ...user };

        if (!this.user.id) {
            this.user.id = randomUUID();
        }
    }

    get name(){
        return this.user.name;
    }
    get email(){
        return this.user.email;
    }
    get id(){
        return this.user.id;
    }
    get createdAt(){
        return this.user.createdAt
    }
    get updateAt(){
        return this.user.updateAt
    }
    get admin(){
        return this.user.admin
    }
}