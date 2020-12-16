import React from "react";
import { Row, Col,  FormGroup, Label, Input, Form } from "reactstrap";



export default function Login() {

  const loginUser = async (e) => {
    console.log();
  };



  return (
    <div  className="d-flex justify-content-center" style={{paddingTop: 70}}>
     
    <Form onSubmit={loginUser}>
    <Row form>
          <Col md={10}>
            <FormGroup>
              <Label for="exampleCity">Registration Number</Label>
              <Input type="text" name="city" id="exampleCity" placeholder="aa" />
            </FormGroup>
          </Col>
          
          <Col md={10}>
            <FormGroup>
              <Label for="exampleZip" >PassPhrase</Label>
              <Input type="text" name="zip" id="exampleZip" placeholder="aa" />
            </FormGroup>
          </Col>
        </Row>
    </Form>
        
    </div>
  );
}

