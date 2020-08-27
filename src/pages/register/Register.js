import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function Register() {
  return (
    <div className="d-flex justify-content-center ">
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleName">First Name</Label>
              <Input
                type="name"
                name="name"
                id="exampleName"
                placeholder="First Name"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleName">Last Name</Label>
              <Input
                type="name"
                name="password"
                id="examplePassword"
                placeholder="Last Name"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="strong password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Repeate the Strong password"
          />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck" />
          <Label for="exampleCheck" check>
            Check me out
          </Label>
        </FormGroup>
        <Button>Sign in</Button>
      </Form>
    </div>
  );
}
