import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme["gray-900"]};
  padding: 3.5rem 0 10.5rem;

`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display:flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  border-radius: 6px;
  background-color: ${props => props.theme["green-500"]};
  color: ${props => props.theme["white"]};
  
  padding: 1rem 1.6rem;
  
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover{
    background-color: ${props => props.theme["green-700"]};
  }


`;
