interface User {
  name: string;
  //We can make a field optional adding a question mark to it
  age?: number;
  id: number;
  email: string;
}

let user: User = {
  name: 'John',
  age: 30,
  id: 258,
  email: 'email@email.com',
};



interface Employees extends User {
  salary: number;
}


let employee: Employees = {
  name: 'John',
  age: 25,
  id: 2,
  email: 'test@test.test',
  salary: 1000,
}


interface Login {
  login():User;
}

export default User;
