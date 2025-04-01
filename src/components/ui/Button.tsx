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
    <button className={`button ${theme}-theme`} onClick={onClick}>
      {buttonRole}
    </button>
  );
}
