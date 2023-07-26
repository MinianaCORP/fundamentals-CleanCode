(() => {
  //_________________________________________
  //Sin aplicar responsabilidad única
  //Mejorando las clases
  //_________________________________________

  // Props -> Properties
  
  type Gender = 'M'|'F';

  interface PersonProps {
    name          : string;
    gender        : Gender;
    birthDate     : Date;
  }

  interface UserProps {
    email         : string;
    role          : string;
    name          : string;
    gender        : Gender;
    birthDate     : Date;
  }

  interface UserSettingProps {
    lastOpenFolder    : string;
    workingDirectory  : string;
    email             : string;
    role              : string;
    name              : string;
    gender            : Gender;
    birthDate         : Date;
  }
  
  
  class Person {
    public name         : string;
    public gender       : Gender;
    public birthDate    : Date;
    
    constructor({ name, gender, birthDate }: PersonProps){
      this.name       = name;
      this.gender     = gender;
      this.birthDate  = birthDate;
    }
  }

  class User extends Person {
    public lastAccess   : Date;
    
    public email        : string;
    public role         : string;

    constructor({ email, role, name, gender, birthDate }: UserProps) {
      super({ name, gender, birthDate })

      this.lastAccess = new Date();
      
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }
  
  class UserSetting extends User {
    public workingDirectory   : string;
    public lastOpenFolder     : string;
    
    constructor({ workingDirectory, lastOpenFolder, email, role, name, gender, birthDate }: UserSettingProps) {
      super({ email, role, name, gender, birthDate });

      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSetting({
    workingDirectory: '/Users/YOEL'
    , lastOpenFolder: '/Users'
    , email: 'ycarbajal@upt.edu.pe'
    , role: 'Admin'
    , name: 'Yoel'
    , gender: 'M'
    , birthDate: new Date('1992-05-01')
  });

  console.log({ userSettings });
})();
  