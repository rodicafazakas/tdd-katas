// SOLID
// Single Responsibility Principle
// Open/Closed Principle
// Liskov Substitution Principle
// Interface Segregation Principle
// Dependency Inversion Principle

import { Customer } from "./customer";
import { CustomerCsvFileWriter} from "./customer-csv-file-writer";
import { BatchedCustomerCsvFileWriter } from "./batched-customer-csv-file-writer";
import { FileWriter } from "./file-writer";
import { DeduplicatingCustomerCsvFileWriter } from "./deduplicating-customer-csv-file-writer";


export interface MockFileWriter extends FileWriter {
  assertCustomerWasWrittenToFile(fileName: string, customer: Customer): void,
  assertCustomersWereWrittenToFile(fileName: string, customers: Customer[]): void,
  assertNumberOfCustomersWritten(numberOfCustomers: number): void,
}; 
export function createFileWriter(): MockFileWriter {
  return {
    writeLine: jest.fn(),
    assertCustomerWasWrittenToFile: function(fileName: string, customer: Customer) {
      expect(this.writeLine).toHaveBeenCalledWith(fileName, `${customer.name}, ${customer.contactNumber}`)
    },
    assertCustomersWereWrittenToFile: function(fileName: string, customers: Customer[]) {
      customers.forEach(customer => {
        this.assertCustomerWasWrittenToFile(fileName, customer);
      })
    },
    assertNumberOfCustomersWritten: function(numberOfCustomers: number) {
      expect(this.writeLine).toHaveBeenCalledTimes(numberOfCustomers);
    },
  }
};

export function createCustomerCsvFileWriter(fileWriter: MockFileWriter) {
  return new CustomerCsvFileWriter(fileWriter);
}

export function createBatchedCustomerCsvFileWriter(fileWriter: MockFileWriter, batchLength: number = 10) {
  return new BatchedCustomerCsvFileWriter(fileWriter, batchLength);
}

export function createDeduplicatingCustomerCsvFileWriter(fileWriter: MockFileWriter) {
  const csvFileWriter = createCustomerCsvFileWriter(fileWriter);
  return new DeduplicatingCustomerCsvFileWriter(csvFileWriter); 
};

export function createCustomer(name: string, contactNumber: string) {
  return new Customer(name, contactNumber);
};

export function createCustomers(numberOfCustomers: number): Customer[] {
  let customers: Customer[] = [];
  for (let i = 0; i <= numberOfCustomers; i += 1) {
    customers.push(createCustomer("i","i"));
  }
  
  return customers;
};

