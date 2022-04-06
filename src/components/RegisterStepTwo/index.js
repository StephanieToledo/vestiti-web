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
import { apiCep } from '../../services/api';
function RegisterForm() {

  const [form] = Form.useForm();

  async function searchCep(event) {
    const value = event.target.value;

    const cep = value.replace(/\D/g, '');

    if (cep !== "") {
      const validateCep = /^[0-9]{8}$/;
      if(validateCep.test(cep)) {
        const response = await apiCep.searchCep(cep)
        form.setFieldsValue({
          city: response.data.localidade,
          address: response.data.logradouro,
          neighborhood: response.data.bairro,
          uf: response.data.uf
        })
      }
    }
  }

  const handleClickNext = () => {
    form
      .validateFields()
      .then((values) => {
        localStorage.setItem('stepTwo', JSON.stringify(values));
        window.location.href='/register-step-three';
      })
      .catch((err) => console.log(err));
  };


  return(
    <>
    <Container>
      <Register>
        <FormTwo>
          <Form className="container-form" name='step-two' form={form} onFinish={handleClickNext}>
            <Form.Item 
              name="cep"
              className="label"
              label="CEP"
            >
              <MaskedInput
               className="input" 
               required 
               mask="11111-111"
               onBlur={searchCep}
               />
            </Form.Item>
            <Form.Item 
              name="address"
              className="label"
              label="Endereço"
            >
              <Input className="input" name="address" required />
            </Form.Item>
            <Form.Item 
              name="neighborhood"
              className="label"
              label="Bairro"
            >
              <Input className="input" name="neighborhood" required />
            </Form.Item>
            <Form.Item 
              name="number"
              className="label"
              label="Número"
            >
              <Input className="input" name="number" required />
            </Form.Item>
            <Form.Item 
              name="uf"
              className="label"
              label="Estado"
            >
              <Input className="input" name="uf" required maxLength={2} />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className='button-submit'>
                CONTINUAR
              </Button>
            </Form.Item>
          </Form>
        </FormTwo>
      </Register>
      <ContentImage>
        <img src={imageRegister} alt="Cadastro"/>
      </ContentImage>
    </Container>
  </>
  )
}

export default RegisterForm;