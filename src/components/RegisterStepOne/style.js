import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  margin-top: 50px;
  justify-content: center;
`;

export const Register = styled.div`
  width: 60%;
  height: inherit;
  display: flex;
  justify-content: center;
  border-radius: 20px 0 0 20px;
  background-color: #F6F9F8;
  margin-left: 120px;
`;

export const FormOne = styled.div`
  width: 50%;
  height: inherit;
  justify-content: center;
  display: flex;
  align-items: center;

  .container-form {
    width: 400px;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .label {
    margin-bottom: 40px;
    font-weight: bold;
  }

  .input {
    width: 250px;
    height: 30px;
    border: none;
    border-bottom: 1px solid;
    border-radius: 0px;
    margin: 0;
    border-color: #3C3C3B;
    background-color: #F6F9F8;
  }

  .ant-input:focus {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .button-submit {
    width: 200px;
    height: 30px;
    border: none;
    background-color: black;
    color: white;
    cursor: pointer;
    margin-top: 10px;
  }
`;

export const ContentImage = styled.image`
  width: 50%;
  height: inherit;

  img{
    height: inherit;
    border-radius: 0 20px 20px 0;
  }
`;





