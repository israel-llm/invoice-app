import { Client } from "./client";
import { Company } from "./company";
import { Item } from "./item";

export class Invoice{
  id!: number;
  name!: string;
  cliente!: Client;
  company!: Company;
  items!: Item[];
}