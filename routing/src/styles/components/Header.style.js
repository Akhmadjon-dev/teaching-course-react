import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;
  min-height: 100vh;
  background-color: #fff;
  padding-left: 20px;
  .header__link {
    margin: 14px 0px;
    text-decoration: none;
    color: #333;
    align-items: center;
    justify-content: center;
    &:hover {
      color: lightblue;
    }
  }
`;
