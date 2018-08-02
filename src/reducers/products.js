// products reducer
export default function products(state = {}, action) {
  switch (action.type) {
    case 'PRODUCTS_LIST_SAVE':
      return action.products;

    case 'PRODUCTS_ADD_SAVE':
      const product = action.product;
      product.id = product.id || Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      return [...state, product];

    case 'PRODUCTS_EDIT_SAVE':
      return state.map(product =>
        Number(product.id) === Number(action.product.id) ? {...action.product} : product
      );
      break;

    // initial state
    default:
      return state;
  }
}