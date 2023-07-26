(() => {
  //_________________________________________
  //Aplicando responsabilidad única
  //Priorizar la composición frente a la herencia (solo si es necesario extends)
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
  }

  interface SettingProps {
    lastOpenFolder    : string;
    workingDirectory  : string;
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
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  class User {
    public lastAccess   : Date;
    
    public email        : string;
    public role         : string;

    constructor({ email, role }: UserProps) {

      this.lastAccess = new Date();
      
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }
  
  class Settings {
    public workingDirectory   : string;
    public lastOpenFolder     : string;
    
    constructor({ workingDirectory, lastOpenFolder }: SettingProps) {

      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  class UserSettings {
    public person     : Person;
    public user       : User;
    public settings   : Settings;

    constructor({
      name, gender, birthDate
      , email, role
      , workingDirectory, lastOpenFolder
    }: UserSettingProps){
      this.person = new Person({ name, gender, birthDate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastOpenFolder })
    }
  }

  const userSettings = new UserSettings({
    name: 'Yoel'
    , gender: 'M'
    , birthDate: new Date('1992-05-01')
    , email: 'ycarbajal@upt.edu.pe'
    , role: 'Admin'
    , workingDirectory: '/Users/YOEL'
    , lastOpenFolder: '/Users'
  });

  console.log({ UserSettings });
  console.log(userSettings);

  userSettings.user.checkCredentials();
})();
  