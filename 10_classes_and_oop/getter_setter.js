class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

// get and set wil come together. 
// We can also use get and set for other properties as well like email (name should be same as per constructor)

    get password(){
        return this._password.toUpperCase()   // used underscore(_) with name to avoid race condition between constructor and get set 
        // as it has now become private property
    }

    set password(value){
        this._password = value
    }
}

const deepak = new User("d@deepak.ai", "abc")

console.log(deepak.password);
