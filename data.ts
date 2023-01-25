interface Name {
  id: number;
  name: string;
  gender: string;
  popularity: string;
  length: string;
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
