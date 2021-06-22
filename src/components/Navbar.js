import React,{ useState }  from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, Form, Col, Row, Button } from "reactstrap";

function Navbar() {
  const [state, setState] = useState({
    fname: "",
    lname: "",
  })

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }
  const showAlert=()=> {
    alert("I'm an alert");
  }
  return (
    <Form style={{ marginTop: "",background:"black",textAlign:"center"}}>
      <Row >
        <Col>
          <ul style={{ marginTop: "15px"}}>
            <Link style={{ margin: "20px",color:"white" }} to="./">
              Ana Sayfa
            </Link>
            <Link style={{ margin: "20px",color:"white" }} to="./musteri">
              Müşteri Ekle
            </Link>
            <Link style={{ margin: "20px" ,color:"white"}} to="./list">
              Müşterileri Listele
            </Link>
          </ul>
        </Col>
      </Row>
    </Form>
  );
}

export default Navbar;
