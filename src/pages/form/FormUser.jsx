import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
//import {Switch, Route} from 'react-router-dom';
import { Button, FormGroup, Col, Row, Label } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import DragDrop from "../../components/dragDrop/DragDrop";
import api from "../../services/ApiAxios";
import { useFormik } from "formik";
import "./styles.css";

const FormUser = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [form, setValues] = useState({
    name: "",
    email: "",
    cpf: "",
  });

  const initialValues = form;

  const handleChange = (file) => {
    setFile(file);
  };

  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const onSubmit = (values, actions) => {
    handleSubmitAdd(values);
  };
  const enableReinitialize = true;
  const formik = useFormik({ initialValues, onSubmit, enableReinitialize });

  const showToast = (type, message) => {
    switch (type) {
      case 0:
        toast.warning(message);
        break;
      case 1:
        toast.success(message);
        break;
      case 2:
        toast.error(message);
        break;
      default:
        break;
    }
  };

  const handleSubmitAdd = (values) => {
    const randomNumber = getRndInteger(1, 99999);
    console.log(name + " " + email + " " + cpf);
    api
      .post(
        "/clientidentity",
        {
          name: values.name,
          email: values.email,
          cpf: values.cpf,
          id: randomNumber,
        },
        { withCredentials: true }
      )
      .then((response) => response.data)
      .then((i) => {
        if (i != undefined) {
          alert("Dados adicionados com sucesso.");
        }
      })
      .catch((err) =>
        alert("Erro: '" + err + "' ao adicionar dados do processo.")
      );
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="formUserContainer">
          <Form onSubmit={formik.handleSubmit}>
            <h4>Identifica&ccedil;&atilde;o</h4>
            <Row>
              <Col md={6} className="col-half">
                <FormGroup>
                  <FloatingLabel controlId="name" label="Nome Completo">
                    <Form.Control
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Ex: Gustavo Queiróz de Souza "
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      required
                    />
                  </FloatingLabel>
                </FormGroup>
              </Col>
              <Col md={6} className="col-half">
                <FormGroup>
                  <FloatingLabel controlId="cpf" label="CPF">
                    <Form.Control
                      type="text"
                      name="cpf"
                      id="cpf"
                      placeholder="Ex: 999.999.999-99"
                      onChange={formik.handleChange}
                      value={formik.values.cpf}
                      required
                    />
                  </FloatingLabel>
                </FormGroup>
              </Col>
            </Row>
            <h4>Contato</h4>
            <Row>
              <Col md={12} className="col-half">
                <FormGroup>
                  <FloatingLabel controlId="email" label="Email">
                    <Form.Control
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Ex: gustavo_teste@outlook.com"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      required
                    />
                  </FloatingLabel>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="col-half">
                <FormGroup>
                  <FloatingLabel controlId="telPrimary" label="Telefone">
                    <Form.Control
                      type="text"
                      name="telPrimary"
                      id="telPrimary"
                      placeholder="Ex: (41) 9.9999-9999"
                      required
                    />
                  </FloatingLabel>
                </FormGroup>
              </Col>
              <Col md={6} className="col-half">
                <FormGroup>
                  <FloatingLabel
                    controlId="telSecundary"
                    label="Telefone Secund&aacute;rio"
                  >
                    <Form.Control
                      type="text"
                      name="telSecundary"
                      id="telSecundary"
                      placeholder="Ex: (41) 9.9999-9999"
                    />
                  </FloatingLabel>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="col-half">
                <FormGroup>
                  <FloatingLabel controlId="socialNetwork" label="Rede Social">
                    <Form.Control
                      type="text"
                      name="socialNetwork"
                      id="socialNetwork"
                      placeholder="Ex: Facebook.com/jubileu-999 -- Linkedin.com/zezinho"
                    />
                  </FloatingLabel>
                </FormGroup>
              </Col>
            </Row>
            <br />
            <h4>Informa&ccedil;&otilde;es da obra</h4>
            <Row>
              <Col md={12} className="col-half">
                <FormGroup>
                  <FloatingLabel controlId="addressCEP" label="CEP">
                    <Form.Control
                      type="text"
                      name="addressCEP"
                      id="addressCEP"
                      placeholder="Ex: 88321-000"
                    />
                  </FloatingLabel>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={4} className="col-half">
                <FormGroup>
                  <FloatingLabel controlId="addressStreet" label="Rua">
                    <Form.Control
                      type="text"
                      name="addressStreet"
                      id="addressStreet"
                      placeholder="Ex: Rua Jo&atilde;o de Barros"
                    />
                  </FloatingLabel>
                </FormGroup>
              </Col>
              <Col md={4} className="col-half">
                <FormGroup>
                  <FloatingLabel controlId="addressCity" label="Cidade">
                    <Form.Control
                      type="text"
                      name="addressCity"
                      id="addressCity"
                      placeholder="Ex: Curitiba"
                    />
                  </FloatingLabel>
                </FormGroup>
              </Col>
              <Col md={4} className="col-half">
                <FormGroup>
                  <FloatingLabel controlId="addressState" label="Estado">
                    <Form.Control
                      type="text"
                      name="addressState"
                      id="addressState"
                      placeholder="Ex: Paran&aacute;"
                    />
                  </FloatingLabel>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={4} className="col-half">
                <FormGroup>
                  <FloatingLabel
                    controlId="addressComplement"
                    label="Complemento"
                  >
                    <Form.Control
                      type="text"
                      name="addressComplement"
                      id="addressComplement"
                      placeholder="Ex: Casa 2 - Apto 2"
                    />
                  </FloatingLabel>
                </FormGroup>
              </Col>
              <Col md={4} className="col-half">
                <FormGroup>
                  <FloatingLabel
                    controlId="addressNumber"
                    label="N&uacute;mero"
                  >
                    <Form.Control
                      type="number"
                      name="addressNumber"
                      id="addressNumber"
                      placeholder="Ex: 12"
                    />
                  </FloatingLabel>
                </FormGroup>
              </Col>
              <Col md={4} className="col-half">
                <Form.Check
                  inline
                  label="&Eacute; o mesmo endere&ccedil;o em que a obra ser&aacute;
                realizada ?"
                  name="checkAddress"
                  type="checkbox"
                  id="checkAddress"
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="col-half">
                <FloatingLabel
                  controlId="descriptionContruct"
                  label="Descri&ccedil;&atilde;o sobre a obra"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Descri&ccedil;&atilde;o sobre a obra"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="col-half">
                <FormGroup>
                  <Label label="" for="projetoFile">
                    Projeto da Contrução
                  </Label>
                  <DragDrop
                    className="drop_zone"
                    handleChange={handleChange}
                    fileTypes={["JPG", "PNG", "GIF", " PDF"]}
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <div className="btnSubmit">
              <button type="submit" color="primary">
                Enviar
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FormUser;
