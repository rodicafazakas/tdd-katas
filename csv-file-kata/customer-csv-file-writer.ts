import { Customer } from "./customer";
import { FileWriter } from "./file-writer";

export class CustomerCsvFileWriter {
  constructor(private fileWriter: FileWriter) {};
  
  writeCustomers(fileName: string, customers: Customer[]) {
    if (customers === null) {
      throw Error('argument is null: `customers`');
    }
    for (let customer of customers) {
      this.fileWriter.writeLine(fileName, this.formatAsCsvRow(customer));
    }
  }

  private formatAsCsvRow(customer: Customer): string {
    return `${customer.name}, ${customer.contactNumber}`;
  }
};

