(() => {

  //PROBLEMA
  // interface Product { 
  //   id:   number;
  //   name: string;
  // }
    
  // // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  // class ProductBloc {
  
  //   loadProduct( id: number ) {
  //     // Realiza un proceso para obtener el producto y retornarlo
  //     console.log('Producto: ',{ id, name: 'OLED Tv' });
  //   }

  //   saveProduct( product: Product ) {
  //     // Realiza una petición para salvar en base de datos 
  //     console.log('Guardando en base de datos', product );
  //   }

  //   notifyClients() {
  //     console.log('Enviando correo a los clientes');
  //   }

  //   onAddToCart( productId: number ) {
  //     // Agregar al carrito de compras
  //     console.log('Agregando al carrito ', productId );
  //   }
  
  // }

  // const productBloc = new ProductBloc();

  // productBloc.loadProduct(10);
  // productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  // productBloc.notifyClients();
  // productBloc.onAddToCart(10);






  
  
  interface Product { 
    id:   number;
    name: string;
  }

  
  class ProductService {
    getProduct( id:number ) {
      console.log('Producto: ',{ id, name: 'OLED Tv' });
    }

    saveProduct( product: Product ) {
      console.log('Guardando en base de datos', product );
    }
  }

  class Mailer {
    private masterEmail: string = 'ycarbajal@upt.edu.pe'

    sendEmail( emaiList: string[], template: 'to-clients' | 'to-admins' ) {
      console.log('Enviando correo a los clientes', template);
    }
  }


  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;
      
    constructor( productService: ProductService, mailer: Mailer ) {
      this.productService = productService;
      this.mailer = mailer
    }

    loadProduct( id: number ) {
      this.productService.getProduct( id );
    }

    saveProduct( product: Product ) {
      this.productService.saveProduct( product );
    }

    notifyClients() {
      this.mailer.sendEmail( ['yoel@upt.com'], 'to-clients' )
    }
  }
  

  class CartBloc {
    private items: Object[] = [];

    onAddToCart( productId: number ) {
      console.log('Agregando al carrito ', productId );
    }
  }

  const productService = new ProductService();
  const mailer = new Mailer();

  const productBloc = new ProductBloc(productService, mailer);
  const cartBlock = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cartBlock.onAddToCart(10);

})();