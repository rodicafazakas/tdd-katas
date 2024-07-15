export class Customer {
  private _name: string = "";
  private _contactNumber: string = "";

  constructor (name: string, contactNumber: string) {
    this._name = name;
    this._contactNumber = contactNumber;
  }

  public get name() {
    return this._name;
  };

  public set name(name: string) {
    this._name = name;
  };

  public get contactNumber() {
    return this._contactNumber;
  };

  public set contactNumber(contactNumber: string) {
    this._contactNumber = contactNumber;
  };
}