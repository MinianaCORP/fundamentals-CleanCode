//en otros lenguajes como DART se resuelve con "MIXING"

//PROBLEMA
// interface Bird {
//   fly(): void
//   eat(): void
//   run(): void
//   swim(): void
// }

// class Tucan implements Bird {
//   public fly(){}
//   public eat(){}
//   public run(){}
//   public swim(){
//     throw new Error('esta ave no vuela');
//   }
// }


// class Humminbird implements Bird  {
//   public fly(){}
//   public eat(){}
//   public run(){}
//   public swim(){
//     throw new Error('esta ave no vuela');
//   }
// }

// class Ostrich implements Bird {
//   public fly(){
//     throw new Error('esta ave no vuela');
//   }
//   public eat(){}
//   public run(){}
//   public swim(){
//     throw new Error('esta ave no vuela');
//   }
// }

// class Penguin implements Bird {
//   public fly(){
//     throw new Error('esta ave no vuela');
//   }
//   public eat(){}
//   public run(){}
//   public swim(){}
// }


interface Bird {
  eat(): void
}


interface FlyingBird {
  fly(): void
}

interface RunningBird {
  run(): void
}

interface SwimmerBird {
  swim(): void
}

class Tucan implements Bird, FlyingBird {
  public fly(){}
  public eat(){}
}


class Humminbird implements Bird, FlyingBird {
  public fly(){}
  public eat(){}
}

class Ostrich implements Bird, RunningBird {
  public eat(){}
  public run(){}
}

class Penguin implements Bird, SwimmerBird {
  public eat(){}
  public swim(){}
}