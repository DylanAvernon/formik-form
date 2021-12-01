import React from 'react';
import { Row, Col, Button, Form, Container } from 'react-bootstrap';
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: values => {
      console.log(formik.errors);
      if (!formik.errors.emailField && !formik.errors.pswField) {
        alert('Login Successful!');
      }
    },
    validate: values => {
      let errors = {};
      if(!values.emailField) {
        errors.emailField = 'Field required';
      }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailField = 'Username should be an email'
      }
      if(!values.pswField) errors.pswField = 'Field required';
      return errors;
    }
  });

  return (
      <Container>
        <Form onSubmit={formik.handleSubmit} className='border border-primary m-3 rounded'>
          <Row className='align-items-center m-3'>
            <Col>
              <Form.Label htmlFor='emailField'>Email</Form.Label>
              <Form.Control id='emailField' name='emailField' type='email'
                aria-describedby='emailHelpBlock'
                onChange={formik.handleChange}
                value={formik.values.emailField}
              />
              {formik.errors.emailField ? <Form.Text id='emailHelpBlock' style={{color: 'red'}}>{formik.errors.emailField}</Form.Text> : null}
            </Col>
          </Row>
          <Row className='align-items-center m-3'>
            <Col>
              <Form.Label htmlFor='pswField'>Password</Form.Label>
              <Form.Control id='pswField' name='pswField' type='password'
                onChange={formik.handleChange}
                value={formik.values.pswField}
              />
              {formik.errors.pswField ? <Form.Text id='passswordHelpBlock' style={{color: 'red'}}>{formik.errors.pswField}</Form.Text> : null}
            </Col>
          </Row>
          <Row className='align-items-center m-3'>
            <Col>
              <Button type='submit'>Submit</Button>
            </Col>
          </Row>
        </Form>
      </Container>
  );
}

export default App;
