import { Customer } from "./customer";
import { CustomerCsvFileWriter } from "./customer-csv-file-writer";

export class DeduplicatingCustomerCsvFileWriter {
  constructor(private customerCsvFileWriter: CustomerCsvFileWriter){}

  writeCustomers(fileName: string, customers: Customer[]){
    // remove duplicate
    const deduplicatedCustomers = customers.filter(
      (customer, index, array) => array.findIndex(elem => customer.name === elem.name) === index
    );
    this.customerCsvFileWriter.writeCustomers(fileName, deduplicatedCustomers);
  }

};