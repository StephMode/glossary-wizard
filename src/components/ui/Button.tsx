import { styled } from "styled-components";

type ButtonComponentProps = {
  buttonRole: string;
  theme: "main" | "secondary";
};

export default function Button({ buttonRole, theme }: ButtonComponentProps) {
  return <StyledButton className={`${theme}-theme`}>{buttonRole}</StyledButton>;
}

const StyledButton = styled.button`
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px;

  &.main-theme {
    background-color: black;
    color: white;
  }
  &.secondary-theme {
    background-color: lightblue;
    color: black;
  }
`;
