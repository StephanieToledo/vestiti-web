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
  width: 50%;
  height: 450px;
  justify-content: center;
  display: grid;
  align-items: center;

  h2{
    text-align: center;
    margin-top: 3em;
  }

  .city{
    margin-bottom: 5em
  }

  .form{
    display: flex;
    justify-content: center;
    width: 20em;
    height: auto;
  }

  .container-step-zero{
    width: 16em;
    height: 200px;
    margin-top: 4em;
    margin-left: auto;
    margin-right: auto;
  }

  .container-step-one{
    width: 16em;
    height: 200px;
    margin-top: 4em;
    margin-left: auto;
    margin-right: auto;
  }

  .container-step-two{
    width: 17em;
    justify-content: center;
    height: 280px;
    display: grid;
    margin-top: 1em;
    align-items: center;
  }

  .container-step-tree{
    width: 16em;
    height: 150px;
    display: grid;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 18em;
    height: 1.7em;
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

  .input-step-tree{
    margin: 0;
  }

  button{
    width: 270px;
    height: 40px;
    background-color: black;
    color: white;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    font-size: 15px;
    border-radius: 3px;
    outline:none;
    border-color: black;
  }

  button:hover{
    transition: 0.3s;
    opacity: 0.7;
  }

  .error{
    color: red;
    margin-bottom: 20px;
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





