import styled from 'styled-components';

export const Container = styled.div`
  visibility: hidden;

  @media (min-width: 760px) {
    position: fixed;
    visibility: visible;

    flex: 1;
    width: 40%;
    padding: 80px 2vw 0 2vw;

    right: 0;
    iframe {
      width: 100%;
      border: 0;
      height: 100vh;
    }
  }
`;
