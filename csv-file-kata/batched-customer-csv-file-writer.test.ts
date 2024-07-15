// SOLID
// Single Responsibility Principle
// Open/Closed Principle
// Liskov Substitution Principle
// Interface Segregation Principle
// Dependency Inversion Principle

import {
  createCustomers,
  createFileWriter,
  createBatchedCustomerCsvFileWriter,  
} from "./helper-functions";

describe('BatchedCustomerCsvFileWriter', () => {
  describe('writeCustomersBatched method', () => {
    describe('given many customers', () => {
      test('should write all', () => {
        // Arrange 
        const customers = createCustomers(100);
        const fileWriter = createFileWriter();
        const sut = createBatchedCustomerCsvFileWriter(fileWriter);
        // Act
        sut.writeCustomersBatched("batchedcustomers.csv", customers);
        // Assert
        fileWriter.assertNumberOfCustomersWritten(customers.length);
      })
      test('should write file names without extension correctly', () => {
        // Arrange 
        const customers = createCustomers(15);
        const fileWriter = createFileWriter();
        const sut = createBatchedCustomerCsvFileWriter(fileWriter);
        // Act
        sut.writeCustomersBatched("noext", customers);
        // Assert
        fileWriter.assertCustomersWereWrittenToFile("noext_1", customers.slice(0,10));
        fileWriter.assertCustomersWereWrittenToFile("noext_2", customers.slice(10,15));
      })
    })
    describe('given 12 customers', () => {
      test('should batch the customers in a group of 10 and a group of 2', () => {
        // Arrange 
        const customers = createCustomers(12);
        const fileWriter = createFileWriter();
        const sut = createBatchedCustomerCsvFileWriter(fileWriter);
        // Act
        sut.writeCustomersBatched("batchedcustomers.csv", customers);
        // Assert
        fileWriter.assertCustomersWereWrittenToFile("batchedcustomers_1.csv", customers.slice(0,10));
        fileWriter.assertCustomersWereWrittenToFile("batchedcustomers_2.csv", customers.slice(10,12));
      })
    })
    describe('given 23 customers', () => {
      test('should batch the customers in 2 groups of 10 and one group of 3', () => {
        // Arrange 
        const customers = createCustomers(23);
        const fileWriter = createFileWriter();
        const sut = createBatchedCustomerCsvFileWriter(fileWriter);
        // Act
        sut.writeCustomersBatched("batchedcustomers.csv", customers);
        // Assert
        fileWriter.assertCustomersWereWrittenToFile("batchedcustomers_1.csv", customers.slice(0,10));
        fileWriter.assertCustomersWereWrittenToFile("batchedcustomers_2.csv", customers.slice(10,20));
        fileWriter.assertCustomersWereWrittenToFile("batchedcustomers_3.csv", customers.slice(20,23));
      })
    })
    describe('given 7 customers and a batch size of 5', () => {
      test('should batch the customers in one group of 5 and one group of 2', () => {
        // Arrange 
        const customers = createCustomers(7);
        const fileWriter = createFileWriter();
        const sut = createBatchedCustomerCsvFileWriter(fileWriter, 5);
        // Act
        sut.writeCustomersBatched("batchedcustomers.csv", customers);
        // Assert
        fileWriter.assertCustomersWereWrittenToFile("batchedcustomers_1.csv", customers.slice(0,5));
        fileWriter.assertCustomersWereWrittenToFile("batchedcustomers_2.csv", customers.slice(5,7));
      })
    })
  })
}); 