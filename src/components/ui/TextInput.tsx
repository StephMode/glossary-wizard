type TextInputComponentProps = {
  label: string;
  name: string;
};

export default function TextInput({ label, name }: TextInputComponentProps) {
  return (
    <label>
      {label}
      <input type="text" id={name} name={name}></input>
    </label>
  );
}
