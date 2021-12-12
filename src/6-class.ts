/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

/**
 * Object User :
 * - User have personal like such id, firstName, lastName
 * - User have method such as login(), register()
 * - Max Failed login = 5
 */

// class --> OOP ( Object Oriented Programming)
// class --> Object Instance
//Access Modifier : public, private, protected

//abstrak
abstract class Root{
    abstract done:boolean;
}

class User extends Root{
    //Properties
    id:number;
    firstName:string;
    lastName:string;
    protected save:boolean;
    private token:string;
    static MAX_FAILED_LOGIN =2

    private retryLogin = 0 
    done : boolean;

    //Method
    login(username:string, password:string){
        this.retryLogin +=1;
        if(username =="admin" && password == "admin"){
            return true;
        }

        if(this.retryLogin >= User.MAX_FAILED_LOGIN){
            return "max login attemped"
        }

        return false
    }
    register(){}

    //constructor
    constructor(id:number, firstName:string, lastName:string ){
        super()
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.save = false;
        this.token = "";
        this.done = false
    }
}

User.MAX_FAILED_LOGIN = 3

//Instance
let myUser = new User(1,'alif','niko');
console.log(myUser.login("",""))
console.log(myUser.login("",""))
console.log(myUser.login("",""))

// myUser.firstName;
console.log(myUser);


//Subclass
class EnhancementUser extends User{
    location:string;

    constructor(
        location:string,
        id:number,
        firstName:string,
        lastName:string
    ){
        super(id,firstName,lastName)
        this.location =location;
        this.save;
    }
}
let myNewUser = new EnhancementUser("medan",'2','ucok','cool');


