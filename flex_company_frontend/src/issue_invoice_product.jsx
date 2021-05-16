import React from 'react';
import { withRouter } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";

export function IssueInvoiceProduct(id) {
    const RestaurantCode = useSelector((e) => e.UserReducer.resteurantCode);
    const Menu = useSelector((e) => e.MenuReducer.menuToEdit);
    return (
        <>
            <Row>
                <Col className='col-12 col-md-6 col-lg-2'>
                    <Form.Group controlId={"formProductName" + id}>
                        <Form.Label>Nazwa towaru/usługi</Form.Label>
                        <Form.Control type="text" placeholder="Nazwa towaru/usługi" />
                    </Form.Group>
                </Col>

                <Col className='col-12 col-md-6 col-lg-1'>
                    <Form.Group controlId="formClientAddress1">
                        <Form.Label>Jm.</Form.Label>
                        <Form.Control type="text" placeholder="Jm." defaultValue='szt' />
                    </Form.Group>
                </Col>
                <Col className='col-12 col-md-6 col-lg-1'>
                    <Form.Group controlId="formClientAddress2">
                        <Form.Label>Ilość</Form.Label>
                        <Form.Control type="text" placeholder="Ilość" />
                    </Form.Group>
                </Col>
                <Col className='col-12 col-md-6 col-lg-1'>
                    <Form.Group controlId="formClientNIP">
                        <Form.Label>Cena netto</Form.Label>
                        <Form.Control type="text" placeholder="Cena netto" />
                    </Form.Group>
                </Col>
                <Col className='col-12 col-md-6 col-lg-2'>
                    <Form.Group controlId="formClientName">
                        <Form.Label>Wartość netto</Form.Label>
                        <Form.Control type="text" placeholder="Wartość netto" />
                    </Form.Group>
                </Col>
                <Col className='col-12 col-md-6 col-lg-1'>
                    <Form.Group controlId="formClientAddress1">
                        <Form.Label>VAT</Form.Label>
                        <Form.Control type="text" placeholder="Stawka VAT" defaultValue='23'/>
                    </Form.Group>
                </Col>
                <Col className='col-12 col-md-6 col-lg-1'>
                    <Form.Group controlId="formClientAddress2">
                        <Form.Label>Kwota VAT</Form.Label>
                        <Form.Control type="text" placeholder="Kwota VAT" />
                    </Form.Group>
                </Col>
                <Col className='col-12 col-md-6 col-lg-2'>
                    <Form.Group controlId="formClientNIP">
                        <Form.Label>Wartość brutto</Form.Label>
                        <Form.Control type="text" placeholder="Wartość brutto" />
                    </Form.Group>
                </Col>
                <Button className='mt-3 mb-3' variant="danger">
                    X
                </Button>

            </Row>
        </>
    );
}

export default withRouter(IssueInvoiceProduct);
