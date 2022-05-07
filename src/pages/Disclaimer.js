import React,{useState,useEffect} from 'react'
import pic from "../assets/npc/water.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Modal, Form } from "react-bootstrap";
const Disclaimer = () => {
    const [smShow, setSmShow] = useState(false);
  
    const navigate = useNavigate();
    const handleMod = (e) => {
        e.preventDefault();
        setSmShow(false);
navigate('/nin')
      };
      
    useEffect(() => {
       
        setSmShow(true);
       
      }, []);
  return (
    <Wrapper>

<Modal
        size="lg"
        show={smShow}
        // onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-sm">
            Disclaimer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="w-100">
            All applications on this platform must be accompanied by genuine
            documentation and verifiable personal data. Any data or document
            submitted that is found to be fake, untrue and fraudulent will lead
            to automatic disqualification of your application.
          </p>
          <Form className="" onSubmit={handleMod}>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                required
                type="checkbox"
                label="I have read, understood and accept the terms and conditions."
                className="shadow_none form_check"
              />
            </Form.Group>

            <button type="submit" className="my-btn">
              PROCEED
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  background-image: url(${pic});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* display: ; */
`;


export default Disclaimer