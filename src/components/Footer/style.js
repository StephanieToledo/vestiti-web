import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 250px;
  background-color: #C0BDE6;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  background-color: #F6F9F8;

  form {
    width: 40em;
    height: 45px;
    display: flex;
    justify-content: center;
    margin-top: 1.5em;
  }

  h4 {
    width: 300px;
    height: 30px;
    margin-left: 3em;
    margin-top: 1em;
    color: #59595B;
  }

  input {
    width: 17em;
    height: 2.3em;
    margin-top: 0.7em;
    border-radius: 5px;
    border: 1px solid;
    border-color: #BFBFBF;
    outline:none;
    padding: 1px 10px;
    margin-right: 2em;
  }

  button {
    width: 5em;
    height: 33px;
    margin-right: 2em;
    margin-top: 0.8em;
    background-color: white;
    border: 1.4px solid;
    border-color: #9C9ECC;
    border-radius: 5px; 
    outline:none;
    color: #4D2059;
  }

  button:hover {
    transition: 0.4s;
    cursor: pointer;
    background-color: #9C9ECC;
    border: none;
    color: white;
  }
`;

export const Informations = styled.div`
  width: 90%;
  height: 55%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.7em;
`;

export const ContentPayment = styled.div`
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
`;

export const Developer = styled.div`
  width: 300px;
  height: 60px;
  margin-left: 2em;

  .developer{
    margin-top: 0.5em;
    text-align: center;
  }

  .title-developer{
    margin-top: 0.6em;
    text-align: center;
  }
`;

export const Network = styled.div`
  width: 200px;
  height: 80px;
  margin-left: 1em;
`;

export const ContentNetwork = styled.div`
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding-top: 1.4em;
  margin-left: 2.2em;
  cursor: pointer;
`;