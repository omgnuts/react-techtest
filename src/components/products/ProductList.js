import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Table, Pagination } from 'react-bootstrap';
import ProductListElement from './ProductListElement';

// Product list component
export class ProductList extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // bind <this> to the event method
    this.changePage = this.changePage.bind(this);
  }

  // render
  render() {
    // pagination
    const {products, page} = this.props;
    const per_page = 20;
    const pages = Math.ceil(products.length / per_page);
    const start_offset = (page - 1) * per_page;

    let start_count = 0;
    const product_list = products.filter((product, index) => {
        return (index >= start_offset && start_count++ < per_page);
    }).map((product, index) => <ProductListElement key={index} product={product}/>)

    // show the list of products
    return (
      <div>
        <Table bordered hover responsive striped>
          <thead>
          <tr>
            <th>ID</th>
            <th>Product name</th>
            <th>Supplier name</th>
            <th>Edit</th>
          </tr>
          </thead>
          <tbody>
          {product_list}
          </tbody>
        </Table>

        <Pagination className="products-pagination pull-right" bsSize="medium" maxButtons={10} first last next
          prev boundaryLinks items={pages} activePage={page} onSelect={this.changePage}/>

      </div>
    );
  }

  // change the product lists' current page
  changePage(page) {
    this.props.dispatch(push('/?page=' + page));
  }

}

// export the connected class
function mapStateToProps(state) {
  return {
    products: state.products,

    // https://github.com/reactjs/react-router-redux#how-do-i-access-router-state-in-a-container-component
    // react-router-redux wants you to get the url data by passing the props through a million components instead of
    // reading it directly from the state, which is basically why you store the url data in the state (to have access to it)
    page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
  };
}
export default connect(mapStateToProps)(ProductList);
