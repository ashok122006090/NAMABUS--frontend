export enum BusType {
    LUXURY = "LUXURY",
    DELUXE = "DELUXE",
    EXPRESS = "EXPRESS",
    ORDINARY = "ORDINARY",
    SUPERLUXURY = "SUPERLUXURY",
  }
  
  export class Bus {
    id!: number;
    price!: number;
    seats!: number;
    busTypes!: BusType;
    startpoint!: string;
    endpoint!: string;
  
    
  }
  