type TextInputComponentProps = {
  label: string;
  name: string;
  errorTheme: boolean;
};

export default function TextInput({
  label,
  name,
  errorTheme,
}: TextInputComponentProps) {
  return (
    <label>
      {label}
      <input
        type="text"
        id={name}
        name={name}
        className={errorTheme ? "error-theme" : ""}
      ></input>
    </label>
  );
}
