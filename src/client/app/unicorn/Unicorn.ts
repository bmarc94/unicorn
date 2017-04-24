export class Unicorn {
  private _id: String;

  constructor(
    public name: String,
    public color: String,
    public age: Number,
    public gender: String,
  ) {
    this._id = "" + this.name + this.color;
  }
  
  get id() {
    return this._id
  }

}
