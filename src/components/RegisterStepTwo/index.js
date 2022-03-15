import { React } from 'react';
import { Form, Input, Button } from 'antd';
import { imageRegister } from '../../utils/icons';
import { 
  Container, 
  Register, 
  FormTwo,
  ContentImage
} from './style';
import { MaskedInput } from 'antd-mask-input';
import api from '../../services/api';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function RegisterForm() {

  const [form] = Form.useForm();

  const onSubmit = () => {
    form.
      validateFields()
      .then( async (values) => {
        const payload = {
          ...JSON.parse(localStorage.getItem('stepOne')),
          ...values
        }
        toast.promise(api.post('/register', payload), {
          pending: 'Salvando dados',
          success: 'Cadastrado concluído com sucesso',
          error: 'Erro ao salvar dados, tente novamente'
        },
        {
          onClose: () => window.location.href='/'
        }
        )
      })
  }

  return(
    <>
    <Container>
      <Register>
        <FormTwo>
          <Form className="container-form" name='step-two' form={form} onFinish={onSubmit}>
            <Form.Item 
              name="cep"
              className="label"
              label="CEP"
            >
              <MaskedInput
               className="input" 
               required 
               mask="11111-111"
               />
            </Form.Item>
            <Form.Item 
              name="address"
              className="label"
              label="Endereço"
            >
              <Input className="input" required />
            </Form.Item>
            <Form.Item 
              name="neighborhood"
              className="label"
              label="Bairro"
            >
              <Input className="input" required />
            </Form.Item>
            <Form.Item 
              name="number"
              className="label"
              label="Número"
            >
              <Input className="input" required />
            </Form.Item>
            <Form.Item 
              name="uf"
              className="label"
              label="Estado"
            >
              <Input className="input" required maxLength={2} />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className='button-submit'>
                CRIAR CONTA
              </Button>
            </Form.Item>
          </Form>
        </FormTwo>
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