import { NanoCollection } from './collection';
import { AddressType } from './util';

/**
 * User Collection
 */
export class User extends NanoCollection {
  static path = 'users';
  name?: string;
  email?: string;
  phone?: string;
  cpfCnpj?: string;
  type?: UserType;
  address?: AddressType;

  //frontend
  password?: string;
}

export type UserType = 'admin' | 'client';
