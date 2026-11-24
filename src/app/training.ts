// 6 пункт
interface IUser {
  id: number;
  name: string;
  surname: string;
  age: number;
  email?: string;
}

// 7 пункт
interface IHero extends IUser {
  universe: string;
  weapon: string;
  isWorthWatching: boolean;
}

// 4 пункт
let uploadStatus: 'loading' | 'success' | 'error';

// 5 пункт
let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

// 10 пункт
const users: IUser[] = [
  { id: 1, name: 'Джон', surname: 'Уик', email: 'babayaga@continental.hotel', age: 45 },
  { id: 2, name: 'Доминик', surname: 'Торетто', email: 'dominik@family.com', age: 46 },
  { id: 3, name: 'Кевин', surname: 'Маккалистер', email: 'kevin@stayed.home', age: 10 },
  { id: 4, name: 'Питер', surname: 'Паркер', age: 21 },
  { id: 5, name: 'Джеки', surname: 'Чан', age: 50 },
  { id: 6, name: 'Панда', surname: 'По', age: 22 },
];

function getUsersWithEmail(users: IUser[]): IUser[] {
  return users.filter((user) => user.email !== undefined);
}

function getYoungUsers(users: IUser[]): IUser[] {
  return users.filter((user) => user.age < 25);
}

// 3 пункт
function calc(a: number, b: number): number {
  return a + b;
}

// 8 пункт
function formatText(text: string, format: 'uppercase' | 'lowercase' | 'capitalize'): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  }
  if (format === 'lowercase') {
    return text.toLowerCase();
  }
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// 9 пункт
function removeSymbol(text: string, symbolToRemove: string): string {
  return text.replaceAll(symbolToRemove, '');
}
