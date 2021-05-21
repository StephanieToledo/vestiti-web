import styled from 'styled-components';

export const ContainerHeader = styled.div`
  width: 100%;
  height: 65px;
  background: radial-gradient(circle, #F5EBFF 10%, rgb(216, 210, 247) 100%);
  position: absolute;
  display: flex;
  justify-content: space-between;
`;

export const ContentLogo = styled.div`
  width: 100px;

  img {
    padding-top: 0.6em;
    width: inherit;
    margin-left: 30px; 
  }
`;

export const Menu = styled.div`
  width: 65em;
  align-items: center;
  display: flex;
  justify-content: space-around;

  div {
    color: #4D2059;
  }

  div:hover {
    color: #AA8BE8;
    cursor: pointer;
    transition: 0.6s;
  }

  button {  
    background: #B6B4DF;
    color: #4D2059;
    cursor: pointer;
    padding: 0.5rem;
    transition: all 0.5s;
    border-radius: 10px;
    min-width: 110px;
    border: none;
    outline:none;

    &::after {
      position: absolute;
      top: 54%;
      right: 0;
      bottom: 0;
      opacity: 0;
      transform: translate(-50%, -50%);
    }

    &:hover {
      background: #E5DDFB;
      transition: 0.6s;
      border-radius: 10px;
      box-shadow: 1px 1px 1px 1px rgba(163,156,254,0.93);

      &::after {
          opacity: 1;
          transition: 0.6s;
          color: #ffffff;
      }
    }
}

  .login { 
    background: #EAE2FD;
   }

   .register {
    background: #E4DCFB;
   }

   img {
     width: 1.5em;
     cursor: pointer;
   }
`;