import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Form, Button, Row } from 'react-bootstrap';

function SingIn({ history }) {
  const [message, setMessage] = useState("");
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
    
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />

        <Form >
          <Row className="m-2">
            <Form.Group className="m-2" >
              <Form.Label className="m-2">Nick</Form.Label>
              <Form.Control className="m-2" type="text" value={login}  />
              <Form.Label className="m-2">Haslo</Form.Label>
              <Form.Control className="m-2" type="password" value={pass}  />
              <Button className="m-2" variant="primary" type='submit'>Zaloguj</Button>
            </Form.Group>
          </Row>
        </Form>
    </>
  );
}
export default withRouter(SingIn);
