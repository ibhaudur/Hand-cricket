import React, { useState } from "react";
import "./Emh.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

export const Emh = () => {
  const [ts, setts] = useState(0);
  var navigate = useNavigate();

  function Easy() {
    var rand = Math.floor(Math.random() * 45) + 15;
    setts(rand);
    console.log(rand);
    navigate("../cric", { state: { ts: rand } });
  }
  function Medium() {
    var rand = Math.floor(Math.random() * 65) + 20;
    setts(rand);
    console.log(rand);
    navigate("../cric", { state: { ts: rand } });
  }
  function Hard() {
    var rand = Math.floor(Math.random() * 85) + 35;
    setts(rand);
    console.log(rand);
    navigate("../cric", { state: { ts: rand } });
  }

  return (
    <React.Fragment>
      <Container fluid className="im">
      <Row className="justify-content-end">
          <Col>
            <h1 className="scr">Hand-Cricket</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={8} sm={5} lg={3} xl={3}>
            <div className="text-center b">
              <Button className="be" variant="success" size="lg" onClick={Easy}>
                Easy
              </Button>
              <br />
              <Button
                className="be"
                variant="primary"
                size="lg"
                onClick={Medium}
              >
                Medium
              </Button>
              <br />
              <Button className="be" variant="danger" size="lg" onClick={Hard}>
                Hard
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
