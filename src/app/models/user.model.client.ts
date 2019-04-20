export class User {
  _id: String;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  email: String;

  constructor(username, password, firstName, lastName, email) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}


//possibly add store id to this users model???
//possibly add a cart and orders as well????
