export class Part {
  _id: String;
  name: String;
  partId: String;
  description: String;
  price: number;


  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
}
