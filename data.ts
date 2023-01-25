interface Name {
  id: number;
  name: string;
  gender: Gender;
  popularity: Popularity;
  length: Length;
}

export enum Gender {
  GIRL = 'Girl',
  BOY = 'Boy'
}

export enum Popularity {
  TRENDY = 'Trendy',
  UNIQUE = 'Unique'
}

export enum Length {
  LONG = 'Long',
  ALL = 'All',
  SHORT = 'Short'
}

export const names: Name[] = [
  {
    id: 1,
    name: 'Joy',
    gender: Gender.BOY,
    popularity: Popularity.UNIQUE,
    length: Length.SHORT,
  },
  {
    id: 2,
    name: 'Joy',
    gender: Gender.GIRL,
    popularity: Popularity.TRENDY,
    length: Length.SHORT,
  },
  {
    id: 3,
    name: 'Brian',
    gender: Gender.BOY,
    popularity: Popularity.UNIQUE,
    length: Length.SHORT,
  },
  {
    id: 4,
    name: 'Emmanuel',
    gender: Gender.BOY,
    popularity: Popularity.TRENDY,
    length: Length.LONG,
  },
  {
    id: 5,
    name: 'Darlington',
    gender: Gender.BOY,
    popularity: Popularity.UNIQUE,
    length: Length.LONG,
  },
  {
    id: 6,
    name: 'Helen',
    gender: Gender.GIRL,
    popularity: Popularity.UNIQUE,
    length: Length.SHORT,
  },
  {
    id: 7,
    name: 'Rosemond',
    gender: Gender.GIRL,
    popularity: Popularity.UNIQUE,
    length: Length.LONG,
  },
  {
    id: 8,
    name: 'Angelina',
    gender: Gender.GIRL,
    popularity: Popularity.TRENDY,
    length: Length.LONG,
  },
  {
    id: 9,
    name: 'Moses',
    gender: Gender.BOY,
    popularity: Popularity.TRENDY,
    length: Length.SHORT,
  },
  {
    id: 10,
    name: 'Esther',
    gender: Gender.GIRL,
    popularity: Popularity.TRENDY,
    length: Length.SHORT,
  },
  {
    id: 11,
    name: 'Jude',
    gender: Gender.BOY,
    popularity: Popularity.UNIQUE,
    length: Length.SHORT,
  },
  {
    id: 12,
    name: 'Ruby',
    gender: Gender.GIRL,
    popularity: Popularity.UNIQUE,
    length: Length.SHORT,
  },
  {
    id: 13,
    name: 'Modeccai',
    gender: Gender.BOY,
    popularity: Popularity.UNIQUE,
    length: Length.SHORT,
  },
  {
    id: 14,
    name: 'Hephziba',
    gender: Gender.GIRL,
    popularity: Popularity.UNIQUE,
    length: Length.LONG,
  },
  {
    id: 16,
    name: 'Emilia',
    gender: Gender.GIRL,
    popularity: Popularity.TRENDY,
    length: Length.SHORT,
  },
  {
    id: 17,
    name: 'Elijah Malope',
    gender: Gender.BOY,
    popularity: Popularity.UNIQUE,
    length: Length.ALL,
  },
  {
    id: 18,
    name: 'John Doe',
    gender: Gender.BOY,
    popularity: Popularity.TRENDY,
    length: Length.ALL,
  },
  {
    id: 19,
    name: 'Freya Mikelson',
    gender: Gender.GIRL,
    popularity: Popularity.UNIQUE,
    length: Length.ALL,
  },
  {
    id: 20,
    name: 'Angela Jolie',
    gender: Gender.GIRL,
    popularity: Popularity.TRENDY,
    length: Length.ALL,
  },
];
