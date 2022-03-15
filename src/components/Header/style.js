import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`; 

export const ContainerText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 300px;
  height: 200px;
  right: 100px;
  top: 180px;

  h2 {
    font-size: 30px;
    color: white;
    letter-spacing: 4px;
  }

  .button-busy {
    width: 150px;
    border: none;
    height: 35px;
    text-decoration: none;
    margin-top: 20px;
    font-size: 13px;
    letter-spacing: 1px;
    background-color: #A38326;
    color: white;
    font-family: 'Montserrat', sans-serif;
    :hover {
      cursor: pointer;
    }
  }
`

export const ContainerImage = styled.image`
  width: 100%;
  img {
    width: 100%;
    height: 500px;
    border-radius: 0px 0px 150px 150px;
  }
`;