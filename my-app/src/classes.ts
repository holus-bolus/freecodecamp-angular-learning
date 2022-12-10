import {} from './interface';

interface Address {
  street: string;
  city: string;
  state: string;
  pin: number;
}

class EmployeeInformation {
  //In order to create a private property we should add a hash sumbol to the property
  #id: number;
  protected name!: string;
  address: string;

  constructor(id: number, name: string, address: string) {
    this.address = address;
    this.#id = id;
    this.name = name;
  }

  getANameWithAnAddress(): string {
    return `${this.name} + ' ' + ${this.address};`;
  }
}

let john = new EmployeeInformation(1, 'John', 'Highway71');

// john.id = 1;
// john.name = 'John';
// john.address = 'Highway 71';
