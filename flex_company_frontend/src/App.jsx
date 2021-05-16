import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './login'
import { Container, Nav, Navbar } from 'react-bootstrap';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import IssueInvoice from './issue_invoice'

function App() {
  const MyRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
  return (
    <>
    <Router>

<Navbar sticky='top' collapseOnSelect  expand="sm" bg="dark" variant="dark">
  <Container>
    <Navbar.Brand>
      <img
        alt=""
        src="https://feedweb.pl/new_file/logo_feedweb.svg"
        width="66"
        height="40"
        className="d-inline-block align-top"
      />{' '}
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Item><Nav.Link href="/#/faktury/wystaw">Wystaw fakture</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/#/faktury/wystawione">Wystawione faktury</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/#/produkty">Produkty</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/#/klienci">Zapisani klienci</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/#/ustawienia">Ustawienia</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/#/zaloguj">Zaloguj</Nav.Link></Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Switch>
  <MyRoute path="/faktury/wystaw" component={IssueInvoice} />
  <MyRoute path="/zaloguj" component={Login} />
  <MyRoute path="/" component={Login} />
</Switch>

</Router>
    </>
  );
}

export default App;
