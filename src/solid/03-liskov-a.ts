import { Tesla, Audi, Toyota, Honda, Volvo, Ford, Vehicle } from './03-liskov-b';

(() => {
    
  const printCarSeats = ( cars: Vehicle[] ) => {
      
    // for (const car of cars) {
      
    //   if( car instanceof Tesla ) {
    //     console.log( 'Tesla', car.getNumberOfSets() )
    //     continue;
    //   }
    //   if( car instanceof Audi ) {
    //     console.log( 'Audi', car.getNumberOfSets() )
    //     continue;
    //   }
    //   if( car instanceof Toyota ) {
    //     console.log( 'Toyota', car.getNumberOfSets() )
    //     continue;
    //   }
    //   if( car instanceof Honda ) {
    //     console.log( 'Honda', car.getNumberOfSets() )
    //     continue;
    //   }

    //   if( car instanceof Volvo ) {
    //     console.log( 'Volvo', car.getNumberOfSets() )
    //     continue;
    //   }

    //   if( car instanceof Ford ) {
    //     console.log( 'Ford', car.getNumberOfSets() )
    //     continue;
    //   }
    // }

    cars.forEach(car => {
      console.log(car.constructor.name, car.getNumberOfSets() );
    });
  }
    
  const cars = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(5),
    new Volvo(2),
    new Ford(2),
  ];

  printCarSeats( cars );

})();