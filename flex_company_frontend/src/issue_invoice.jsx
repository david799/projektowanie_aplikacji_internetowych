import React from 'react';
import { withRouter } from 'react-router-dom'
import { Form, Button, Row } from 'react-bootstrap';
import IssueInvoiceContact from './issue_invoice_contact'
import IssueInvoiceProduct from './issue_invoice_product'
import IssueInvoiceDetails from './issue_invoice_details'

export function IssueInvoice() {
  
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
      <Form className="ml-5 mt-4" >
        <h1>Dane odbiorcy</h1>
        <IssueInvoiceContact />
        <h1 className='mt-3'>Pozycje</h1>
        <IssueInvoiceProduct />
        <IssueInvoiceProduct id={reducer.id}/>
        <Row>
          <Form.Control className='col-4 col-md-3' as="select" defaultValue="Zapisane produkty">
            <option>Zapisane produkty...</option>
            <option>...</option>
          </Form.Control>
          <Button variant="success">Dodaj pozycje</Button>
        </Row>
        <h1 className='mt-3'>Szczegóły</h1>
        <IssueInvoiceDetails />
        <Row>
          <Button>Wystaw fakture</Button>
        </Row>
      </Form>
    </>
  );
}

export default withRouter(IssueInvoice);
