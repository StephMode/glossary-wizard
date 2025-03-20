import { styled } from "styled-components";

type ButtonComponentProps = {
  buttonRole: string;
  theme: "main" | "secondary";
  onClick?: () => void;
};

export default function Button({
  buttonRole,
  theme,
  onClick,
}: ButtonComponentProps) {
  return (
    <StyledButton className={`${theme}-theme`} onClick={onClick}>
      {buttonRole}
    </StyledButton>
  );
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
