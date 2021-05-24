import styled from 'styled-components';

export const Container = styled.div`
  width: 65em;
  height: 550px;
  display: flex;
  justify-content: space-around;
`;

export const Register = styled.div`
  width: 60%;
  height: inherit;
  display: flex;
  justify-content: center;
  border-radius: 20px 0 0 20px;
  background-color: white;
`;

export const ContentRegister = styled.div`
  width: 30em;
  height: 450px;
  margin-top: 3em;
  justify-content: center;
  display: grid;

  h2{
    text-align: center;
    margin-top: 2em;
  }

  .form{
    display: flex;
    justify-content: center;
    width: 20em;
    margin-top: 2em;
    height: 350px;
  }

  .container-inputs{
    width: 16em;
    height: 250px;
    display: grid;
    align-items: center;
  }

  input {
    width: 18em;
    height: 2.3em;
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
    margin-top: 1em;
    font-size: 15px;
    border-radius: 3px;
    outline:none;
    border-color: black;
  }

  button:hover{
    transition: 0.3s;
    opacity: 0.7;
  }
`;

export const ContentImage = styled.div`
  width: 40%;
  height: inherit;

  img{
    width: 100%;
    height: inherit;
    border-radius: 0 20px 20px 0;
  }
`;





