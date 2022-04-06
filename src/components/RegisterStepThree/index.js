import { React } from 'react';
import { Form, Input, Button } from 'antd';
import { imageRegister } from '../../utils/icons';
import { 
  Container, 
  Register, 
  FormThree,
  ContentImage
} from './style';
import { api } from '../../services/api';
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
					...JSON.parse(localStorage.getItem('stepTwo')),
          ...values
        }
				console.log(payload);
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
        <FormThree>
          <Form className="container-form" name='step-three' form={form} onFinish={onSubmit}>
            <Form.Item 
              name="password"
              className="label"
              label="Crie uma senha"
            >
              <Input className="input" name="password" required type="password" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className='button-submit'>
                CRIAR CONTA
              </Button>
            </Form.Item>
          </Form>
        </FormThree>
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