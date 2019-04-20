import {Part} from "./part.model.client";

export class Order {
  _id: String;

  name: String;
  parts: Part[];
  price: number;


  constructor(name, parts, price) {
    this.name = name;
    this.parts = parts;
    this.price = price;
  }
}
