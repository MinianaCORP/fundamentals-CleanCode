(() => {

  //_________________________________________
  //Sin aplicar responsabilidad única
  //_________________________________________
  
  type Gender = 'M'|'F';

  // class Person {
  //   public name: string;
  //   public gender: Gender;
  //   public birthDate: Date;

  //   constructor(name: string, gender: Gender, birthDate: Date){
  //     this.name = name;
  //     this.gender = gender;
  //     this.birthDate = birthDate;
  //   }
  // }

  //same
  class Person {
    constructor(
      public name         : string
      , public gender     : Gender
      , public birthDate  : Date
    ){}
  }

  class User extends Person {
    public lastAccess: Date;
    //En este ejemplo necesito obligatoriamente agregar al constructor y dentro datos de la clase Padre (Person)
    constructor(
      public email          : string
      , public role         : string
      // , public lastAccess   : Date
      , name                : string
      , gender              : Gender
      , birthDate           : Date
    ) {
      super( name, gender, birthDate )
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }
  
  class UserSetting extends User {
    //Aquí se complica mas el problema de agregar datos de clases Padre
    constructor(
      public workingDirectory   : string
      , public lastOpenFolder   : string
      , email                   : string
      , role                    : string
      , name                    : string
      , gender                  : Gender
      , birthDate               : Date
    ) {
      super( email, role, name, gender, birthDate  );
    }
  }

  // const newPerson = new Person('Yoel', 'M', new Date('1992-05-01'));
  // console.log({ newPerson });
  // const newUser = new User( ... );

  const userSettings = new UserSetting(
    '/Users/YOEL'
    , '/Users'
    , 'ycarbajal@upt.edu.pe'
    , 'Admin'
    , 'Yoel'
    , 'M'
    , new Date('1992-05-01')
  );

  console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials });

})();