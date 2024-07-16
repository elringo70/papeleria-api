interface IAddress {
  street: string;
  number: string;
  municipality?: string;
  city?: string;
  state?: string;
  place_id?: string;
}

export interface IUser {
  phone: string;
  name: string;
  lastName?: string;
  maternalSurname?: string;
  address?: IAddress;
  active: boolean;
  balance: {
    pendingBalance: boolean;
    dueBalance: number;
  };
}

export interface ICustomer extends IUser {
  balance: {
    pendingBalance: boolean;
    dueBalance: number;
  };
}
