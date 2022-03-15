import styled from 'styled-components';

export const ContainerHeader = styled.div`
  width: 100%;
  height: 65px;
  background: radial-gradient(circle, #F5EBFF 50%, #888A8D 100%);
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

export const ContainerMenu = styled.div`
  width: 65em;
  align-items: center;
  display: flex;
  justify-content: space-around;

  h4 {
    color: #342940;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300px;
  }

  h4:hover {
    color: #9A79BF;
    cursor: pointer;
    transition: 0.3s;
  }

   img {
    width: 1.5em;
    cursor: pointer;
   }
`;