import { Customer } from "./customer";
import { CustomerCsvFileWriter } from "./customer-csv-file-writer";
import { FileWriter } from "./file-writer";

export class BatchedCustomerCsvFileWriter extends CustomerCsvFileWriter {
    constructor(fileWriter: FileWriter, private batchLength: number = 10) {
      super(fileWriter);
    };
  
    writeCustomersBatched(fileName: string, customers: Customer[]) {
      let hasExtension = fileName.lastIndexOf('.');
      let fileExtension = (hasExtension > 0)  ? fileName.substring(fileName.lastIndexOf('.')) : "";
      let fileBase = (hasExtension > 0) ? fileName.substring(0,fileName.lastIndexOf('.')) : fileName;
  
      if (customers.length > this.batchLength) {
        const numberOfBatches = Math.ceil(customers.length/this.batchLength);
        let batch;
        for (let i = 0; i < numberOfBatches; i+= 1) {
          batch = customers.slice(i*this.batchLength,(i+1)*this.batchLength);
          this.writeCustomers(`${fileBase}_${i+1}${fileExtension}`, batch);  
        }
      } else {
        this.writeCustomers(`${fileName}${fileExtension}`, customers);
      }  
    }
  };