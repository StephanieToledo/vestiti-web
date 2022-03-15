import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import MaskedInput from 'antd-mask-input';
import { imageRegister } from '../../utils/icons';
import {
  Container,
  Register,
  FormOne,
  ContentImage
} from './style';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function RegisterForm() {

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleClickNext = () => {
    form
      .validateFields()
      .then((values) => {
        localStorage.setItem('stepOne', JSON.stringify(values));
        if(values.name_user.length < 5) {
          toast.error('Por favor, insira um nome com mais de 5 caracteres', 2)
        }else{
          window.location.href='/register-step-two';
        }
      })
      .catch((err) => console.log(err));
  };

  return(
    <>
    <Container>
      <Register>
        <FormOne>
          <Form className="container-form" name='step-one' form={form} onFinish={handleClickNext}>
            <Form.Item 
              name="name_user"
              className="label"
              label="NOME"
            >
              <Input className="input" required minLength='2' />
            </Form.Item>
            <Form.Item 
              name="cpf"
              className="label"
              label="CPF"
            >
              <MaskedInput
                name="cpf"
                mask="111.111.111-11"
                required
                className="input"
              >
              </MaskedInput>
            </Form.Item>
            <Form.Item 
              name="email"
              className="label"
              label="E-MAIL"
            >
              <Input className="input" required />
            </Form.Item>
            <Form.Item
              label="CELULAR"
              className="label"
              name="phone"
            >
              <MaskedInput
                name="phone"
                placeholder="(11) 11111-1111"
                mask="(11) 11111-1111"
                required
                className="input"
              >
              </MaskedInput>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className='button-submit'>
                CONTINUAR
              </Button>
            </Form.Item>
          </Form>
        </FormOne>
      </Register>
      <ContentImage>
        <img src={imageRegister} alt="Cadastro"/>
      </ContentImage>
    </Container>
  <ToastContainer>  </ToastContainer>
</>
  )
}

export default RegisterForm;