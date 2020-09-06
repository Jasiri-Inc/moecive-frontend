import React, { useState } from "react";
import axios from "axios";
import {useMutation} from "react-query";

import {
  Card,
  CardBody,
  CardTitle,
  Form,
  Button,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

export default function Register() {
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");

const [mutate, {status, data, error}] = useMutation(
  ({useremail,password}) => axios.post('http://127.0.0.1:5000/register', {useremail, password})
)
  const createUser = async e => {
    await mutate({useremail, password})
  }
  return (
    <div className="d-flex justify-content-center " style={{ paddingTop: 70 }}>
      <Card>
        <CardBody>
          <CardTitle>Register</CardTitle>

          <Form onSubmit={createUser}>
            <Row form>
              <Col md={10}>
                <FormGroup >
                  <Label for="examplePassword">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Your email"
                    onChange={(event) => setUseremail(event.target.value)}
                  />
                    {console.log(useremail)}
                  
                </FormGroup>

                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="strong password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  {console.log(password)}
                </FormGroup>
                <FormGroup>
                  <Label for="verifyPassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="verifyPassword"
                    placeholder="Repeate the Strong password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  {console.log(password)}

                </FormGroup>
                <FormGroup check>
                  <Input type="checkbox" name="check" id="exampleCheck" />
                  <Label for="exampleCheck" check>
                    Login after registering
                  </Label>
                </FormGroup>
              </Col>
            </Row>
            <Button>Register</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}
