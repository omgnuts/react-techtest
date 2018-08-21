import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Field, SubmissionError, reduxForm } from 'redux-form';
import { PageHeader, Form } from 'react-bootstrap';
import FormField from '../common/FormField';
import FormSubmit from '../common/FormSubmit';

// Product add/edit page component
export class ProductEdit extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // bind <this> to the event method
    this.formSubmit = this.formSubmit.bind(this);
  }

  // render
  render() {
    const {product, handleSubmit, error, invalid, submitting} = this.props;
    return (
      <div className="col-lg-8 col-lg-offset-2">
        <PageHeader>{(product.id ? 'Edit' : 'Add') + ' Product'}</PageHeader>
        <Form onSubmit={handleSubmit(this.formSubmit)}>
          <Field component={FormField} name="product_name" label="Product name" doValidate={true}/>
          <Field component={FormField} name="supplier_name" label="Supplier name"/>
          <FormSubmit error={error} invalid={invalid} submitting={submitting} buttonSaveLoading="Saving..."
              buttonSave="Save Product"/> 
        </Form>
      </div>
    );
  }

  // submit the form
  formSubmit(values) {
    const {dispatch} = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'PRODUCTS_ADD_EDIT',
        product: {
          id: values.id || 0,
          product_name: values.product_name,
          supplier_name: values.supplier_name,
        },
        callbackError: (error) => {
          reject(new SubmissionError({_error: error}));
        },
        callbackSuccess: () => {
          dispatch(push('/'));
          resolve();
        }
      });
    });
  }
}

// decorate the form component
const ProductEditForm = reduxForm({
  form: 'product_edit',
  validate: function (values) {
    const errors = {};
    if (!values.product_name) {
      errors.product_name = 'Product name is required';
    }
    return errors;
  },
})(ProductEdit);

// export the connected class
function mapStateToProps(state, own_props) {
  const product = state.products.find(x => Number(x.id) === Number(own_props.params.id)) || {};
  return {
    product: product,
    initialValues: product,
  };
}
export default connect(mapStateToProps)(ProductEditForm);
