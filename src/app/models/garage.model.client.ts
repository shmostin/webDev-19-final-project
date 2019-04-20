export class Garage {
  _id: String;
  name: String;
  developerId: String;
  description: String;

  constructor(name, developerId, description) {
    this.name = name;
    this.developerId = developerId;
    this.description = description;
  }
}
