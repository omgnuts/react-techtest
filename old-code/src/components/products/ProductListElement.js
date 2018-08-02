import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Button, Glyphicon } from "react-bootstrap";

// Product List Element component
export default class ProductListElement extends React.Component {

  // render
  render() {
    const {product} = this.props;
    return (
      <tr>
        <td>#{product.id}</td>
        <td>{product.product_name}</td>
        <td>{product.supplier_name}</td>
        <td className="text-center">
          <Link to={'edit/' + product.id}>
            <Button bsSize="xsmall" bsStyle="primary">
              Edit <Glyphicon glyph="edit"/>
            </Button>
          </Link>
        </td>
      </tr>
    );
  }
}

// prop checks
ProductListElement.propTypes = {
  product: PropTypes.object.isRequired,
}
