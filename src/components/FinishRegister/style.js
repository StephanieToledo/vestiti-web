import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F2F2F2;
`;

export const ContainerFinishRegister = styled.div`
  width: 60%;
  height: 500px;
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 4px 0px 5px 5px #C8C8C8;
  background-color: white;

  .content{
    display: grid;
    justify-content: center;
    color: #4D2059;
  }

  img{
    width: 250px;
    height: 250px;
    margin-left: auto;
    margin-right: auto;
  }

  span{
    font-size: 18px;
    margin-top: 1.3em;
    text-align: center;
  }
`;