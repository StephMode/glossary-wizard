type TextAreaComponentProps = {
  label: string;
  name: string;
  errorTheme: boolean;
};

export default function TextArea({
  label,
  name,
  errorTheme,
}: TextAreaComponentProps) {
  return (
    <label>
      {label}
      <textarea
        name={name}
        id={name}
        className={errorTheme ? "error-theme" : ""}
      ></textarea>
    </label>
  );
}
