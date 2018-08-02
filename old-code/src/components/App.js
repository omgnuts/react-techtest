import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";
import Menu from "./Menu";
import { Header } from "./Header";
import "../stylesheets/main.css";

// App component
export class App extends React.Component {

  // pre-render logic
  componentWillMount() {
    // the first time we load the app, we need that products list
    this.props.dispatch({type: 'PRODUCTS_FETCH_LIST'});
  }

  // render
  render() {

    // show the loading state while we wait for the app to load
    const {products, children} = this.props;
    if (!products.length) {
      return (
        <ProgressBar active now={100}/>
      );
    }

    // render
    return (
      <div>
        <Header/>
        <div className="container">
          <Menu/>            
          {children}
        </div>        
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    products: state.products || [],
  };
}
export default connect(mapStateToProps)(App);
