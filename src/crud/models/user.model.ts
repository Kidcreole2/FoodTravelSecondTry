// Model User -- model for all users contains all field of database

export interface UserModel {
  id: number;
  first_name: string;
  last_name: string;
  role: string;
  password: string;
  hash_password: string;
  mail: string;
  phone: string;
  address: string;
}
