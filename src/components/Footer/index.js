import { 
  Container, 
  Form,
  Informations,
  ContentPayment,
  Developer,
  Network,
  ContentNetwork
 } 
from './style';
import { 
  FaCcVisa, 
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter
 } 
from "react-icons/fa";

function Footer() {
  return (
    <Container>
      <Form>
        <form>
          <h4>Para receber nossas Novidades:</h4>
          <input type="text" placeholder="Digite seu e-mail" />
          <button>Enviar</button>
        </form>
      </Form>
      <Informations>
        <div>
          <p>Formas de Pagamento</p>
          <ContentPayment>
            <FaCcVisa size="35"/>
            <FaCcMastercard size="35"/>
            <FaCcPaypal size="35"/>
            <FaCcAmex size="35"/>
          </ContentPayment>
        </div>

        <Developer>
          <h4 className="title-developer">Desenvolvido por</h4>
          <p className="developer">Stephanie Toledo © 2021 </p>
        </Developer>

        <Network>
          <div>
            <ContentNetwork>
              <FaInstagram size="30"/>
              <FaFacebookF size="30"/>
              <FaLinkedinIn size="30"/>
              <FaTwitter size="30"/>
            </ContentNetwork>
          </div>
        </Network>
      </Informations>
    </Container>
  )
}

export default Footer;