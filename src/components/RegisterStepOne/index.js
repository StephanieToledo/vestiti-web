import React from 'react';
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
import { checkCpf, validateEmail, validateName, validatePhone } from '../../utils/validations';

function RegisterForm() {

  const [form] = Form.useForm();

  const handleClickNext = () => {
    form
    .validateFields()
    .then((values) => {
      localStorage.setItem('stepOne', JSON.stringify(values));
      if(checkCpf(values.cpf)){
        window.location.href='/register-step-two';
      }else{
        toast.error('Cpf inválido', 2)
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
              name="name"
              className="label"
              label="NOME"
              rules={[{ required: true, message: 'Insira seu nome' }]}
            >
              <Input className="input" minLength={3} onKeyUp={validateName} maxLength={50} />
            </Form.Item>
            <Form.Item 
              name="cpf"
              className="label"
              label="CPF"
              rules={[{ required: true, validator: checkCpf }]}
            >
               <MaskedInput
                name="cpf"
                mask="111.111.111-11"
                className="input"
              >
              </MaskedInput>
            </Form.Item>
            <Form.Item 
              name="email"
              className="label"
              label="E-MAIL"
              rules={[{ required: true, validator: validateEmail }]}
            >
              <Input className="input" />
            </Form.Item>
            <Form.Item
              label="CELULAR"
              className="label"
              name="phone"
              rules={[{ required: true, validator: validatePhone }]}
            >
              <MaskedInput
                name="phone"
                placeholder="(11) 11111-1111"
                mask="(11) 11111-1111"
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