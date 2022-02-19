import React, { useReducer } from "react";
import "./Cric.css";
import { useNavigate } from "react-router";
import { Button, Row, Col, Container } from "react-bootstrap";
import { useLocation } from "react-router";

const initialstate = {
  a: 0,
  b: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "1":
      return { ...state, a: state.a + action.value };
    case "2":
      return { ...state, a: state.a + action.value };
    case "3":
      return { ...state, a: state.a + action.value };
    case "4":
      return { ...state, a: state.a + action.value };
    case "6":
      return { ...state, a: state.a + action.value };
    default:
      return state;
  }
};

const Cric = () => {
  const [score, setscore] = useReducer(reducer, initialstate);
  var navigate = useNavigate();
  var location = useLocation();
  const svr = location.state.ts;
  

  function Generate1(sr) {
    var rand = Math.floor(Math.random() * 6) + 1;
    if (rand == sr) {
      console.log(`${rand} Lose 1`);
      navigate("../result", { state: { sc: score.a, ra: svr } });
    } else {
      console.log("not equal");
      setscore({ type: "1", value: 1 });
    }
  }
  function Generate2(sr) {
    var rand = Math.floor(Math.random() * 6) + 1;
    if (rand == sr) {
      console.log(`${rand} lose 2`);
      navigate("../result", { state: { sc: score.a, ra: svr } });
    } else {
      console.log("not equal");
      setscore({ type: "2", value: 2 });
    }
  }
  function Generate3(sr) {
    var rand = Math.floor(Math.random() * 6) + 1;
    if (rand == sr) {
      console.log(`${rand} lose 3`);
      navigate("../result", { state: { sc: score.a , ra: svr} });
    } else {
      console.log("not equal");
      setscore({ type: "3", value: 3 });
    }
  }
  function Generate4(sr) {
    var rand = Math.floor(Math.random() * 6) + 1;
    if (rand == sr) {
      console.log(`${rand} lose 4`);
      navigate("../result", { state: { sc: score.a, ra: svr } });
    } else {
      console.log("not equal");
      setscore({ type: "4", value: 4 });
    }
  }
  function Generate6(sr) {
    var rand = Math.floor(Math.random() * 6) + 1;
    if (rand == sr) {
      console.log(`${rand} lose 6`);
      navigate("../result", { state: { sc: score.a, ra: svr } });
    } else {
      console.log("not equal");
      setscore({ type: "6", value: 6 });
    }
  }
  if(svr<=score){
    console.log("Won");
  }else{
    console.log("game Running");
  }

  return (
    <React.Fragment>
      <Container fluid className="img">
        <Row className="justify-content-end">
          <Col>
            <h1 className="scr">Hand-Cricket</h1>
          </Col>
          <Col xs={5} sm={4} lg={3} xl={2}>
            <h1 className="scr">Target-{svr}</h1>
          </Col>
        </Row>
        <Row className="justify-content-center ro">
          <Col className="co mb-5" xs={10} sm={6} lg={4} xl={3}>
            <div className="d">
            <h1 className="scr">Computer - </h1>
              <h1 className="scr">Score - {score.a}</h1>
            </div>
            <div className="bt mt-5">
              <Button
                className="mb-4 btn"
                variant="danger"
                size="lg"
              >
                0
              </Button>
              <Button
                className="mb-4 btn"
                variant="danger"
                size="lg"
                onClick={() => Generate1(1)}
              >
                1
              </Button>
              <Button
                className="mb-4 btn"
                variant="danger"
                size="lg"
                onClick={() => Generate2(2)}
              >
                2
              </Button>

              <Button
                className="mb-4 btn"
                variant="danger"
                size="lg"
                onClick={() => Generate3(3)}
              >
                3
              </Button>

              <Button
                className="mb-4 btn"
                variant="danger"
                size="lg"
                onClick={() => Generate4(4)}
              >
                4
              </Button>

              <Button
                className="mb-4 btn"
                variant="danger"
                size="lg"
                onClick={() => Generate6(6)}
              >
                6
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Cric;
