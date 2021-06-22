import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button, Form, FormGroup, Label, Input,InputGroup,InputGroupAddon,CardTitle  } from "reactstrap";

export default class Signin extends Component {
  render() {
    return (
      <Form style={{ margin: "20px" }}>
        <CardTitle
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "40px",
            marginTop: "-25px",
          }}
        >
          Üye Ol
        </CardTitle>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label>İsim</Label>
              <Input type="text" placeholder="İsim" required />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Soyisim</Label>
              <Input type="text" placeholder="Soyİsim" required />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label>Numara</Label>
              <InputGroup>
              <InputGroupAddon addonType="prepend">05</InputGroupAddon>
              <Input
                className="no"
                minLength="9"
                maxLength="9"
                pattern="[0-9]{9}"
                type="tel"
                placeholder="12-345-67-89"
                required
              />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>E-mail</Label>
              <Input type="email" placeholder="something@idk.cool" />
            </FormGroup>
          </Col>
          
        
          <Col md={4}>
            <Label>Password</Label>
            <Input type="password" placeholder="Şifre" />
          </Col>  
        </Row>
        
        <br></br>
        <Button color="danger" style={{ marginLeft:"50%",marginRight:"50%",}} size="lg">Üye Ol</Button>
      </Form>
    );
  }
}
