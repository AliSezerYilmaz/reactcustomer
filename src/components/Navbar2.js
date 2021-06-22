import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Form style={{ marginTop: "", background: "black", textAlign: "center" }}>
      <Row>
        <Col>
          <ul style={{ marginTop: "15px" }}>
            <Link style={{ margin: "20px", color: "white" }} to="./musteri">
              Müşteri Ekle
            </Link>
            <Link style={{ margin: "20px", color: "white" }} to="./list">
              Müşterileri Listele
            </Link>
            
              <Link style={{ marginLeft:"50%",padding:"5px",borderRadius:"5px",background: "white",color: "black" }} to="./">
                Çıkış Yap
              </Link>
           
          </ul>
        </Col>
      </Row>
    </Form>
  );
}
export default Navbar;
