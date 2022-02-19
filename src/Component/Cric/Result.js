import React, { useEffect, useState } from "react";
import "./Result.css";
import { useLocation } from "react-router";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Result() {
  const [res, setres] = useState("");
  var location = useLocation();
  const ys = location.state.sc;
  const ts = location.state.ra;
  function result() {
    if (ts <= ys) {
      setres("Won");
    } else {
      setres("Lose");
    }
  }
  useEffect(() => {
    result();
  }, []);

  return (
    <React.Fragment>
      <Container fluid className="res">
        <Row className="justify-content-end">
          <Col>
            <h1 className="scr">Hand-Cricket</h1>
          </Col>
          <Col xs={5} sm={4} lg={3} xl={2}>
            <h1 className="scr">
              <Link className="li" to="../">
                Back
              </Link>
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center" xs={9} sm={7} lg={5} xl={4}>
            <h1 id="result">{res}</h1>
            <div className="text-center dr">
              <h1 id="score">Your Score</h1>
              <h1 id="ys"> {ys}</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default React.memo(Result);
