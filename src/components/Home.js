import { Input, Col, Row, Button,Form,CardTitle } from "reactstrap";
import { Link} from 'react-router-dom'
import Navbar from "./Navbar";


function Home() {
    
        return (
            
          <Form  style={{margin:"10%" }} >
            <CardTitle
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "40px",
          }}
        >
          Giriş Yap
        </CardTitle>
              <Row >
              <Col >
              <Input required type="email" placeholder="something@idk.cool"  />
            </Col>
              </Row>
            <Row>
            <Col >
            <Input required type="password" placeholder="password" />
            </Col>
            </Row>
            <Row>
            <Col >
              <Button color="success" style={{marginTop:"20px",marginLeft:"50%"}}>Giriş Yap</Button>
              
            </Col>
            </Row>
            <Row>
            <Link style={{marginTop:"10px",marginLeft:"51%"}} to="./uyeol">Üye Ol</Link>
            </Row>
           
          </Form>
        
        )
    }

export default Home;
