import React from "react";
import { Navbar } from "react-bootstrap";

class Component extends React.Component {
  render() {
    return (

      <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
            <a className="navbar-brand" href="/">
              <span>
                <img alt="GIC" src="/media/logo.svg" className="logo"/> 
                GIC Technical Test (React/Redux)
              </span>
            </a>
        </Navbar.Brand>
      </Navbar.Header>

      </Navbar>

    )
  }
}

export const Header = Component;
