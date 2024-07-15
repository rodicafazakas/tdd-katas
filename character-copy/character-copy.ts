export interface Source {
  readChar(): string;
};
export interface Destination {
  writeChar(c: string): void;
};

export class Copier {
  constructor(
    private source: Source, 
    private destination: Destination) {}

  copy(){
    let char = this.source.readChar();
    while (char !== '\n') {
      this.destination.writeChar(char); 
      char = this.source.readChar();
    }
  };
};