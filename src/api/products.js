// API Products static class
export default class ApiProducts {
  
  // get a list of products
  static getList() {
    return new Promise(resolve => {
      setTimeout(() => {
        // build some dummy products list
        let products = [];
        for (let x = 1; x <= 19; x++) {
          products.push({
            id: x,
            product_name: 'Product ' + x,
            supplier_name: 'Supplier ' + x,
          });
        };
        resolve(products);
      }, 500);
    });
  }

  // add/edit a product
  static addEdit() {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 500);
    });
  }

}
