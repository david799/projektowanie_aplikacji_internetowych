import React from 'react';
import { withRouter } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";

export function IssueInvoiceContact() {
    return (
        <>
            <Row>
                <Form.Group className='m-1' controlId="formGridSavedClients">
                    <Form.Label>Zapisani klienci</Form.Label>
                    <Form.Control as="select" defaultValue="Wybierz...">
                        <option>Wybierz...</option>
                        <option>Wybierz...Wybierz...Wybierz...Wybierz...Wybierz...Wybierz...</option>
                    </Form.Control>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className='m-1' controlId="formClientName">
                    <Form.Label>Imie i nazwisko</Form.Label>
                    <Form.Control type="text" placeholder="Imie i nazwisko" />
                </Form.Group>

                <Form.Group className='m-1' controlId="formClientAddress1">
                    <Form.Label>Adres linia 1</Form.Label>
                    <Form.Control type="text" placeholder="Adres linia 1" />
                </Form.Group>

                <Form.Group className='m-1' controlId="formClientAddress2">
                    <Form.Label>Adres linia 2</Form.Label>
                    <Form.Control type="text" placeholder="Adres linia 2" />
                </Form.Group>

                <Form.Group className='m-1' controlId="formClientNIP">
                    <Form.Label>NIP</Form.Label>
                    <Form.Control type="text" placeholder="NIP" />
                </Form.Group>

                <Form.Group className='m-1' controlId="formCyclicChecbox">
                    <Form.Check type="checkbox" label="Faktura cykliczna" />
                    <Form.Check type="checkbox" label="Zapisz klienta" />
                </Form.Group>
            </Row>
        </>
    );
}

export default withRouter(IssueInvoiceContact);
