import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`; 

export const ContainerFeed = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: center;
  margin-top: 8em;
  background-image: linear-gradient(to right, rgb(216, 210, 247), rgb(124, 130, 182));
  border-radius: 0px 0px 200px 200px;  
  color: #252126;
`;

export const ContainerHome = styled.div`
  width: inherit;
  height: 50px;
  text-align: center;
  margin-top: 11rem;

  h1 {
    font-size: 37px;
    color: #fff;
    overflow: hidden; 
    border-right: .10em solid orange;
    white-space: nowrap;
    margin-left: 1em;
    letter-spacing: .10em;
    animation: 
      typing 3.5s steps(30, end),
      blink-caret .5s step-end infinite;
  }

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #D8C8CB }
  }

  span {
    font-size: 19px;
    color: #F2F3F5;
    letter-spacing: .10em;
  }
`;

export const ContainerImage = styled.div`

  img {
    width: 95%;
    height: 100%;
    float: right;
    border-radius: 0px 0px 200px 0px; 
  }
`;