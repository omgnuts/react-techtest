import React from "react";
import { Nav, NavItem, Glyphicon } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";

// Menu component
export default class Menu extends React.Component {
  // render
  render() {
    return (
      <div>
        <Nav bsStyle="tabs">
          <IndexLinkContainer to="/">
            <NavItem>
              List
            </NavItem>
          </IndexLinkContainer>          
          <LinkContainer to="/edit">
            <NavItem>
              Add Product <Glyphicon glyph="plus-sign"/>
            </NavItem>
          </LinkContainer>          
        </Nav>
        <h6>&nbsp;</h6> 
      </div>
    );
  }
}
