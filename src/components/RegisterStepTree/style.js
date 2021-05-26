import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 610px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F2F2F2;
`;

export const ContainerRegister = styled.div`
  width: 65em;
  height: 550px;
  display: flex;
  justify-content: space-around;
`;

export const ContentRegister = styled.div`
  width: 50%;
  height: 450px;
  justify-content: center;
  display: flex;
  align-items: center;

  .form{
    width: 300px;
    height: auto;
  }

  h2{
    height: 30px;
    margin-top: 20px;
    text-align: center;
  }

  .container-step-tree{
    width: 16em;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
  }

  input {
    width: 18em;
    height: 2em;
    border: 1px solid; 
    border-color: #D7D7D9;
    outline:none;
    padding: 1px 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.7em;
    border-radius: 3px;
    margin-bottom: 1em;
  }

  button{
    width: 270px;
    height: 40px;
    background-color: black;
    color: white;
    cursor: pointer;
    font-size: 15px;
    border-radius: 3px;
    outline:none;
    margin-top: 15px;
    border-color: black;
  }

  button:hover{
    transition: 0.3s;
    opacity: 0.7;
  }
`;