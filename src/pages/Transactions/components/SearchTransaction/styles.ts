import styled from "styled-components";


export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input{
    flex: 1;
    border-radius: 6px;
    border: 0;
  
    background-color: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme["gray-500"]}
    }
  }

  button{
    display: flex;
    gap: 0.75rem;
    align-items: center;
    padding: 1rem 2rem;

    background-color: transparent;
    border-radius: 6px;
    border: 1px solid ${props => props.theme["green-500"]};
    font-weight: bold;
    color: ${props => props.theme["green-500"]};

    &:disabled{
      opacity: 0.6;

      cursor: not-allowed;
    }

    &:not(:disabled):hover{
      background-color: ${props => props.theme["green-500"]};
      border-color: ${props => props.theme["green-500"]};
      color: ${props => props.theme.white};
      transition: background-color 0.2s;
    }

    cursor: pointer;
  }
`;