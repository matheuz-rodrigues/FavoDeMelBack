import { User } from './user.entitie';


describe("UserEntities successful Tests",()=>{
    it("should to create a new user entities ",()=>{
        const dateNow = new Date();

        const user:User = new User({
            createdAt: dateNow,
            updateAt: dateNow,
            email:"teste@gmail.com",
            name:"Fulano",
            password:"fulano123",
            admin:false,
        });

        expect(user.email).toEqual("teste@gmail.com");
        expect(user.name).toEqual("Fulano");
        expect(user.createdAt).toEqual(dateNow);
        expect(user.updateAt).toEqual(dateNow);
        expect(user.admin).toEqual(false);
        console.log(user.id);
    })
})


