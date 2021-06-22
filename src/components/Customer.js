import React, {useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  CardTitle,
  InputGroupAddon,
  InputGroup
} from "reactstrap";



function Customer() {
  const [state, setState] = useState({
    isim:"",
    soyisim: "",
    numara:"",
    ülke: "",
    il: "",
    ilçe:"",
    semt: "",
    vergidairesi:"",
    verginumarası: "",


  });

  const handleChange = e => {
    e.preventDefault();
    setState({
      [e.target.name]: e.target.value,
    })
  }
  
  const handleSubmit=e=>{
    e.preventDefault();
    console.log(e.target.name)
   
    

  }
 
    
    
    return (

      <Form onSubmit={handleSubmit} style={{ margin: "20px" }}>
        <CardTitle
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "40px",
            marginTop: "-25px",
          }}
        >
          Müşteri Ekle
        </CardTitle>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label>İsim</Label>
              <Input className="name" name="isim" type="text" placeholder="İsim" required  value={state.isim} onChange={handleChange} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Soyisim</Label>
              <Input
                className="surname"
                type="text"
                placeholder="Soyİsim"
                required
                value={state.soyisim} onChange={handleChange}
                name="soyisim"
              />
            </FormGroup>
          </Col>
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
                value={state.numara} 
                onChange={handleChange}
                name="numara"
              />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label>Ülke</Label>
              <Input
                className="country"
                type="text"
                placeholder="Ülke"
                required
                value={state.ülke} onChange={handleChange}
                name="ülke"
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>İl</Label>
              <Input
                className="province"
                type="text"
                placeholder="İl"
                required
                value={state.il} onChange={handleChange}
                name="il"
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>İlçe</Label>
              <Input className="city" type="text" placeholder="İlçe" required  value={state.ilçe} onChange={handleChange} name="ilçe"/>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Semt</Label>
              <Input className="town" type="text" placeholder="Semt" required  value={state.semt} onChange={handleChange} name="semt"/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>VergiDairesi</Label>
              <Input type="text" placeholder="VergiDairesi" required  value={state.vergidairesi} onChange={handleChange} name="vergidairesi"/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>VergiNumarasi</Label>
              <Input type="number" placeholder="VergiNumarasi" required  value={state.verginumarası} onChange={handleChange}  name="verginumarası"/>
            </FormGroup>
          </Col>
        </Row>

        <Input type="submit" style={{ color:"white",background:"blue"} } size="lg">          
          Kaydet
          </Input>
          
        
      </Form>
    );
   
  
}


export default Customer;
