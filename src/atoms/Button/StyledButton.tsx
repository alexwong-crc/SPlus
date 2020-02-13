import styled from "styled-components";

interface IStyledButton {
  type: "button" | "submit" | "reset";
  showText?: boolean;
}

const StyledButton = styled.button<IStyledButton>`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }): string => theme.action.main.code};
  color: ${({ theme }): string => theme.action.main.text};
  border: none;
  font-size: 0.8rem;
  position: relative;
  :active {
    background-color: ${({ theme }): string => theme.action.dark.code};
  }
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
  :disabled {
    cursor: default;
    opacity: 0.6;
    background-color: ${({ theme }): string => theme.action.main.code};
  }
  span.text {
    opacity: ${({ showText }): number => (showText ? 1 : 0)};
  }
  span.icon {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default StyledButton;
