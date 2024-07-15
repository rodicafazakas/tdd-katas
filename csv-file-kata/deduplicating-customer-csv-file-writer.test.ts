import {
    createCustomer,
    createCustomers,
    createFileWriter,
    createDeduplicatingCustomerCsvFileWriter,  
  } from "./helper-functions";
  
  describe('DeduplicatingCustomerCsvFileWriter', () => {
    describe('writeCustomers', () => {
      describe('no duplicates', () => {
        test('should write all', () => {
          // Arrange 
          const customers = createCustomers(5);
          const fileWriter = createFileWriter();
          const sut = createDeduplicatingCustomerCsvFileWriter(fileWriter);
          // Act
          sut.writeCustomers("deduped.csv", customers);
          // Assert
          fileWriter.assertNumberOfCustomersWritten(customers.length);
        })
      })
      describe('one duplicate', () => {
        test('should write only one entry of the duplicate', () => {
          // Arrange 
          const expected = createCustomer('Peter', '12');
          const customers = [
            expected,
            createCustomer('Peter', '123'),
            createCustomer('Peter', '123'),
          ];
          const fileWriter = createFileWriter();
          const fileName = "deduped-other.csv";
          const sut = createDeduplicatingCustomerCsvFileWriter(fileWriter);
          // Act
          sut.writeCustomers(fileName, customers);
          // Assert
          fileWriter.assertCustomersWereWrittenToFile(fileName, [expected]);
          fileWriter.assertNumberOfCustomersWritten(1);
        })
      })
      describe('many duplicates', () => {
        test('should write only one entry of each duplicate', () => {
          // Arrange 
          const expected = [
            createCustomer('Peter', '12'),
            createCustomer('Thomas', '125'),
          ];
          const customers = [
            ...expected,
            createCustomer('Peter', '123'),
            createCustomer('Thomas', '125'),
          ];
          const fileWriter = createFileWriter();
          const fileName = "deduped-other.csv";
          const sut = createDeduplicatingCustomerCsvFileWriter(fileWriter);
          // Act
          sut.writeCustomers(fileName, customers);
          // Assert
          fileWriter.assertCustomersWereWrittenToFile(fileName, [...expected]);
          fileWriter.assertNumberOfCustomersWritten(2);
        })
      })
    })
  }); 