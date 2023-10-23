interface PersonInterface {
  getInfo(): string;
  getStatus(): string;
  getFIO(): string;
}

// Базовый класс Persons для хранения общих полей
class Persons {
  name: string;
  birthYear: number;
  address: string;

  constructor(name: string, birthYear: number, address: string) {
    this.name = name;
    this.birthYear = birthYear;
    this.address = address;
  }
}

class Supervisers extends Persons implements PersonInterface {
  static count: number = 0; // Для подсчета числа сотрудников класса Supervisers
  position: string;
  department: string;
  phone: string;

  constructor(name: string, birthYear: number, address: string, position: string, department: string, phone: string) {
    super(name, birthYear, address);
    this.position = position;
    this.department = department;
    this.phone = phone;
    Supervisers.count++;
  }

  getInfo(): string {
    return `Name: ${this.name}, Position: ${this.position}, Department: ${this.department}`;
  }

  getStatus(): string {
    return `Position: ${this.position}`;
  }

  getFIO(): string {
    return `Full Name: ${this.name}`;
  }
}

class Jobs extends Persons implements PersonInterface {
  static count: number = 0; // Для подсчета числа сотрудников класса Jobs
  position: string;
  department: string;
  phone: string;

  constructor(name: string, birthYear: number, address: string, position: string, department: string, phone: string) {
    super(name, birthYear, address);
    this.position = position;
    this.department = department;
    this.phone = phone;
    Jobs.count++;
  }

  getInfo(): string {
    return `Name: ${this.name}, Position: ${this.position}, Department: ${this.department}`;
  }

  getStatus(): string {
    return `Position: ${this.position}`;
  }

  getFIO(): string {
    return `Full Name: ${this.name}`;
  }
}

class Clients extends Persons implements PersonInterface {
  static count_clients: number = 0; // Для подсчета числа клиентов класса Clients
  phone: string;

  constructor(name: string, birthYear: number, address: string, phone: string) {
    super(name, birthYear, address);
    this.phone = phone;
    Clients.count_clients++;
  }

  getInfo(): string {
    return `Name: ${this.name}, Phone: ${this.phone}, Address: ${this.address}`;
  }

  getStatus(): string {
    return `Client`;
  }

  getFIO(): string {
    return `Full Name: ${this.name}`;
  }
}

const supervisor = new Supervisers('John Doe', 1980, '123 Main St', 'Manager', 'Sales', '555-123-4567');
const job = new Jobs('Bob Johnson', 1990, '789 Oak St', 'Engineer', 'Engineering', '555-222-3333');
const client = new Clients('Client A', 1985, '789 Maple St', '555-111-2222');

function printPersonInfo(person: PersonInterface) {
  console.log(person.getInfo());
  console.log(person.getStatus());
  console.log(person.getFIO());
  console.log();
}

printPersonInfo(supervisor);
printPersonInfo(job);
printPersonInfo(client);

console.log(`Всего сотрудников: ${Supervisers.count + Jobs.count}`);
console.log(`Всего клиентов: ${Clients.count_clients}`);
