import cogoToast from "cogo-toast";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './BusinessPlan.scss'

export default function BusinessPlan() {

  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  const [planSubmit, setPlanSubmit] = useState(false);

  const [question1, setQuestion1] = useState([
    {
      name: "Is your business model B2C or B2B or both?",
      value: "",
      must: false,
      disable_condition: null,
      answers: [
        "B2C",
        "B2B",
        "Both"
      ]
    },
    {
      name: "Do you target all age brackets?",
      value: "",
      must: false,
      disable_condition: { question: 0, value: 0 },
      answers: [
        "Yes",
        "No",
      ]
    },
    {
      name: "Do you target all industries?",
      value: "",
      must: false,
      disable_condition: { question: 0, value: 1 },
      answers: [
        "Yes",
        "No",
      ]
    }
  ]);

  const [question2, setQuestion2] = useState([
    {
      name: "Did you have an investment?",
      value: "",
      must: true,
      disable_condition: null,
      answers: [
        "Yes",
        "No",
      ]
    },
    {
      name: "How much was the investment?",
      value: "",
      must: false,
      disable_condition: { question: 0, value: 1 },
    }
  ]);

  const checkRequiredAnswers = (objArr: Array<any>) => {
    let answersCheck = true;
    objArr.map(obj => {
      if (obj.must && !obj.value)
        answersCheck = false;
    })
    return answersCheck;
  }

  const renderQuestion1 = () => {
    return question1.map((question, i) => {
      let disableValue = null;
      let disableQuestionValue = null;
      if (question.disable_condition) {
        disableValue = question1[question.disable_condition.question].answers[question.disable_condition.value];
        disableQuestionValue = question1[question.disable_condition.question].value;
      }

      return <div className={
        disableValue != null
          ? disableQuestionValue != disableValue
            ? "question"
            : "question disabled"
          : "question"
      }
        key={i} >
        <p>{question.name}</p>
        <div className="answers">
          {
            question.answers.map((answer, j) => (
              <Form.Check
                key={j}
                type="radio"
                label={answer}
                name={question.name}
                defaultChecked={question.value == answer ? true : false}
                onClick={() => {
                  let question1Update = question1.map(obj =>
                    obj.name === question.name ? { ...obj, value: answer } : obj
                  );
                  setQuestion1(question1Update);
                }}
              />
            ))
          }
        </div>
      </div>
    })
  }

  const renderQuestion2 = () => {
    return question2.map((question, i) => {
      let disableValue = null;
      let disableQuestionValue = null;
      if (question.disable_condition) {
        disableValue = question2[question.disable_condition.question].answers[question.disable_condition.value];
        disableQuestionValue = question2[question.disable_condition.question].value;
      }

      return <div className={
        disableValue != null
          ? disableQuestionValue != disableValue
            ? "question"
            : "question disabled"
          : "question"
      }
        key={i} >
        <p>{question.name}</p>
        <div className="answers">
          {
            question.answers

              ? question.answers.map((answer, j) => (
                <Form.Check
                  key={j}
                  type="radio"
                  label={answer}
                  name={question.name}
                  defaultChecked={question.value == answer ? true : false}
                  onClick={() => {
                    let question2Update = question2.map(obj =>
                      obj.name === question.name ? { ...obj, value: answer } : obj
                    );
                    setQuestion2(question2Update);
                  }}
                />
              ))
              : <Form.Control
                type="number"
                defaultValue={question.value}
                onChange={(e) => {
                  let question2Update = question2.map(obj =>
                    obj.name === question.name ? { ...obj, value: e.target.value } : obj
                  );
                  setQuestion2(question2Update);
                }}
              />
          }
        </div>
      </div>
    })
  }

  //fake api call
  const planApiCall = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  })

  const submitPlan = async () => {
    setPlanSubmit(true);
    await planApiCall.then(response => {
      cogoToast.success('Plan submitted successfully');
      setPlanSubmit(false);
    })
  }

  return (
    <div id="business-plan" className="_page">
      <Container>

        <h1>Business Plan Generator</h1>

        {/* steps */}
        <Row className="justify-content-center">
          <Col xl="12">

            <ul className="steps">

              <li className={step1 ? 'active' : ''}>
                {
                  step1
                    ? <i className="fad fa-check"></i>
                    : <span>1</span>
                }
              </li>

              <div className={step1 ? "splitter active" : "splitter"}></div>

              <li className={step2 ? 'active' : ''}>
                {
                  step2
                    ? <i className="fad fa-check"></i>
                    : <span>2</span>
                }
              </li>

              <div className={step2 ? "splitter active" : "splitter"}></div>

              <li className={step2 ? 'active' : ''}>
                {
                  step2
                    ? <i className="fad fa-check"></i>
                    : <span>3</span>
                }
              </li>
            </ul>

          </Col>
        </Row>

        {/* Forms */}
        <Row className="justify-content-center">
          <Col md="6" lg="6" >
            <div className={!planSubmit ? "forms" : "forms loading"}>

              {
                !step1 && !step2

                  // Form 1
                  ? <div className="form form1">

                    {renderQuestion1()}

                    <div className="form-controls">
                      <Button
                        variant={checkRequiredAnswers(question1) ? "danger" : "danger disabled"}
                        onClick={() => setStep1(true)}
                      >
                        Next</Button>
                    </div>
                  </div>

                  : null
              }
              {
                step1 && !step2

                  // Form 1
                  ?
                  <div className="form form2">

                    {renderQuestion2()}

                    <div className="form-controls">
                      <Button
                        variant="outline-danger"
                        onClick={() => {
                          setStep1(false);
                        }}
                      >
                        Back</Button>
                      <Button
                        variant={checkRequiredAnswers(question2) ? "danger" : "danger disabled"}
                        onClick={() => setStep2(true)}
                      >
                        Finish</Button>
                    </div>

                  </div>

                  : null
              }

              {
                step2 && step1
                  ? <div className="form form3" >
                    {
                      question1.map((question, i) => (
                        <div className="question-data" key={i}>
                          <p>{question.name}</p>
                          <p>{question.value}</p>
                        </div>
                      ))
                    }

                    {
                      question2.map((question, i) => (
                        <div className="question-data" key={i}>
                          <p>{question.name}</p>
                          <p>{question.value}</p>
                        </div>
                      ))
                    }
                    <div className="form-controls">
                      <Button
                        variant="outline-danger"
                        onClick={() => { setStep2(false); }}
                      >Back</Button>
                      <Button variant="danger"
                        onClick={() => submitPlan()}
                      >Submit</Button>
                    </div>
                  </div>
                  : null
              }



            </div>
          </Col>
        </Row>

      </Container>
    </div>
  )

}