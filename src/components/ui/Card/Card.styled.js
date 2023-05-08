import styled from "styled-components";

export default styled.div`
  cursor: pointer;
  border-radius: 5%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
color: var(--color-text);

  img {
    width: 100%;
    height: 70%;
    object-position: center center;
    object-fit: cover;
    overflow: hidden;
  }
  }
`;
