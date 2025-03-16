type TextInputComponentProps = {
  label: string;
};

export default function TextInput({ label }: TextInputComponentProps) {
  return (
    <label>
      {label}
      <input type="text"></input>
    </label>
  );
}
