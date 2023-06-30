import { Col, Container, Image, Modal, Row } from "react-bootstrap"
import { ObjectProps } from "./List"
import { useState } from "react";


export default function Panel({id, content, image}: ObjectProps) {
  
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  return(
    
    <Col xs={11} md={6} lg={4}>
      
        <Image onClick={toggleShow} src={image} alt="slides" fluid/>
     

      <Modal show={show} onHide={toggleShow} size="lg" centered>
      
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Image src={image} fluid/>
              </Col>
              
              <Col xs={12} md={6}>
                <h3 className="content-modal">{content}</h3>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>


    </Col>
    
  )
}