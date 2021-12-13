import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Row,
} from "reactstrap";

const FormUser = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleSlctChange = () => {
    setIsOpened(!isOpened);
  }

  return (
    <Form>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="name">Nome Completo</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Ex: Gustavo Queiróz de Souza "
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Ex: gustavo_teste@outlook.com"
              required
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <FormGroup>
          <Label for="slctIndicacao">Foi Indicado a vaga ?</Label>
          <Input type="select" name="select" id="slctIndicacao" onChange={handleSlctChange()} required>
            <option>Sim</option>
            <option>N&atilde;o</option>
          </Input>
          <small className="text-warning">
            Caso selecionado <b>sim</b>,inserir nome e cargo de quem ti indicou.
          </small>
        </FormGroup>
      </Row>
        { 
          !isOpened ?  
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="nameIndicator">Nome do Indicador</Label>
                    <Input
                      type="text"
                      name="nameIndicator"
                      id="nameIndicator"
                      placeholder="Ex: Fulado da Silva"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="cargoIndicator">Cargo</Label>
                    <Input
                      type="text"
                      name="cargoIndicator"
                      id="cargoIndicator"
                      placeholder="Ex: Vendedor"
                    />
                  </FormGroup>
                </Col>
              </Row>
          : null
        }
      <FormGroup>
        <Label for="curriculumFile">File</Label>
        <Input type="file" name="curriculumFile" id="curriculumFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Option one is this and that—be
            sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Option two can be something
            else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled /> Option three is
            disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> Check me out
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};


export default FormUser;