import styled from 'styled-components';

export const ContainerHeader = styled.div`
  width: 100%;
  height: 75px;
  background: radial-gradient(circle, #F5EBFF 10%, rgb(216, 210, 247) 100%);
  position: absolute;
  display: flex;
  justify-content: space-between;
`;

export const ContentLogo = styled.div`
  width: 100px;

  img {
    padding-top: 1em;
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
  border: 1px solid black;
  color: #AA8BE8;
  padding: 10px 12px;
  text-align: center;
  text-decoration: none;
  font-size: 13px;
  transition-duration: 0.4s;
  cursor: pointer;
}

  .login {  }
`;