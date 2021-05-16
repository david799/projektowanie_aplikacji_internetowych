import React from 'react';
import { withRouter } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";

export function IssueInvoiceDetails() {
    return (
        <>
            <Row>
                <Col className='col-12 col-md-6 col-lg-2'>
                    <Form.Group controlId="formIssuePlace">
                        <Form.Label>Miejsce wystawienia</Form.Label>
                        <Form.Control type="text" placeholder="Miejsce wystawienia" />
                    </Form.Group>
                </Col>

                <Col className='col-12 col-md-6 col-lg-2'>
                    <Form.Group controlId="formIssueDate">
                        <Form.Label>Data wystawienia</Form.Label>
                        <Form.Control type="date" placeholder="Jm." defaultValue='szt' />
                    </Form.Group>
                </Col>
                <Col className='col-12 col-md-6 col-lg-2'>
                    <Form.Group controlId="formClientAddress2">
                        <Form.Label>Data realizacji</Form.Label>
                        <Form.Control type="date" placeholder="Ilość" />
                    </Form.Group>
                </Col>
                <Col className='col-12 col-md-6 col-lg-1'>
                    <Form.Group controlId="formClientNIP">
                        <Form.Label>Płatność</Form.Label>
                        <Form.Control type="text" placeholder="Cena netto" />
                    </Form.Group>
                </Col>
                <Col className='col-12 col-md-6 col-lg-2'>
                    <Form.Group controlId="formClientName">
                        <Form.Label>Termin płatności</Form.Label>
                        <Form.Control type="date" placeholder="Wartość netto" />
                    </Form.Group>
                </Col>
                <Col className='col-12 col-md-6 col-lg-2'>
                    <Form.Group controlId="formClientAddress1">
                        <Form.Label>Nr faktury</Form.Label>
                        <Form.Control type="text" placeholder="Stawka VAT" defaultValue='23'/>
                    </Form.Group>
                </Col>
                <Col className='col-12 col-md-6 col-lg-1'>
                    <Form.Group controlId="formClientAddress1">
                        <Form.Label>Wystawił</Form.Label>
                        <Form.Control type="text" placeholder="Stawka VAT" defaultValue='23'/>
                    </Form.Group>
                </Col>

            </Row>
        </>
    );
}

export default withRouter(IssueInvoiceDetails);
