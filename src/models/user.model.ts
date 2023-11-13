export interface UsersData {
    info: any;
    results: UserData[];
  }

export interface UserData {
    name?: Name;
    picture?: Picture;
}

interface Name {
    first: string;
    last: string;
}

interface Picture {
    medium: string;
}