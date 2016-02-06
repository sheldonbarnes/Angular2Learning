
import {Address} from './Address';


export class Customer {
  name: String;
  streetaddress: String;
  state: String;
  phonenumber: String;
  email: String;
  address: Address;

  public route: String;

  public toString() : String {
    return this.toString();
  }

  constructor () {
    this.address = new Address();
    this.route = "Customer";
  }

}
