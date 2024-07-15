// SOLID
// Single Responsibility Principle
// Open/Closed Principle
// Liskov Substitution Principle
// Interface Segregation Principle
// Dependency Inversion Principle

import { Customer } from "./customer";
import {
  createCustomer,
  createCustomers,
  createFileWriter,
  createCustomerCsvFileWriter,
} from "./helper-functions";

describe('CustomerCsvFileWriter', () => {
  describe('writeCustomers method', () => {
    describe('null customers array', () => {
      test('should throw an argument exception', () => {
        // Arrange
        const fileWriter = createFileWriter();
        const sut = createCustomerCsvFileWriter(fileWriter);
        const fileName = "customers.csv";
        // Act/Assert
        expect(() => sut.writeCustomers(fileName, null!)).toThrowError('customers');
      });
    })
    describe('no customer', () => {
      test('should not write any lines', () => {
        // Arrange
        const fileWriter = createFileWriter();
        const sut = createCustomerCsvFileWriter(fileWriter);
        const fileName = "customers.csv";
        const costumers: Customer[] = []; 
        // Act
        sut.writeCustomers(fileName, costumers);
        // Assert
        fileWriter.assertCustomersWereWrittenToFile(fileName, costumers);
      });
    })
    describe('one customer', () => {
      test.each([
        {customer: createCustomer("Peter Wiles", "12345697123") },
        {customer: createCustomer("Brandon Page", "45648484654") },
      ])('customer $customer', ({customer}) => {
        // Arrange
        const fileWriter = createFileWriter();
        const sut = createCustomerCsvFileWriter(fileWriter);
        const fileName = "customers.csv";
        const customers = [customer];
        // Act
        sut.writeCustomers(fileName, customers);
        // Assert
        expect(fileWriter.writeLine).toHaveBeenCalledTimes(1);
        fileWriter.assertCustomersWereWrittenToFile(fileName, customers);
      });
    })
    describe('many customers', () => {
      test('should write all customers', () => {
        // Arrange 
        const customers = createCustomers(8);
        const fileWriter = createFileWriter();
        const sut = createCustomerCsvFileWriter(fileWriter);
        const fileName = "cust.csv";
        // Act
        sut.writeCustomers(fileName, customers);
        // Assert
        fileWriter.assertCustomersWereWrittenToFile(fileName, customers);
      })
    })
  })
}); 