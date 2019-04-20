export class Part {
  _id: String;
  name: String;
  partId: String;
  description: String;
  price: number;


  constructor(name, partId, description, price) {
    this.name = name;
    this.description = description;
    this.partId = partId;
    this.price = price;
  }
}
