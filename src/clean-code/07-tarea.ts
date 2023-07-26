//PROBLEMA
// (()=>{
//   type HtmlType = 'input'|'select'|'textarea'|'radio';

//   class HtmlElement {
//     constructor(
//       public id: string,
//       public type: HtmlType,
//     ) {}
//   }

//   class InputAttributes extends HtmlElement {
//     constructor(
//       public value: string,
//       public placeholder: string,
//         id: string,
//     ) {
//       super(id, 'input');
//     }
//   }

//   class InputEvents extends InputAttributes {
//     constructor( value: string, placeholder: string, id: string ) {
//       super( value, placeholder, id );
//     }

//     setFocus() {};
//     getValue() {};
//     isActive() {};
//     removeValue() {};
//   }


//   const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');

//   console.log({ nameField });
// })();

(()=>{

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input'|'select'|'textarea'|'radio';
  
  class HtmlElement {
    public type: HtmlType;  
    constructor(
        public id: string,
        // public type: HtmlType,
    ) {
      this.type = 'input';
    }
  }

  class InputAttributes /*extends HtmlElement*/ {
      constructor(
          public value: string,
          public placeholder: string,
          // id: string,
      ) { /*super(id, 'input');*/ }
  }

  class InputEvents /*extends InputAttributes*/ {
      // constructor( value: string, placeholder: string, id: string ) {
      //     super( value, placeholder, id );
      // }

      constructor() {}

      setFocus() {};
      getValue() {};
      isActive() {};
      removeValue() {};
  }


  //? Idea para la nueva clase InputElement

  class InputElement {

    public htmlElement      : HtmlElement;
    public inputAttributes  : InputAttributes;
    public inputEvents      : InputEvents;
    
    constructor(
      id: string
      , value: string
      , placeholder: string
    ) {
      this.htmlElement = new HtmlElement(id);
      this.inputAttributes = new InputAttributes(value, placeholder);
      this.inputEvents = new InputEvents();
    }
  }

  const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

  console.log( { nameField } );

})();