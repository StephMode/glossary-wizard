type TextAreaComponentProps = {
  label: string;
  name: "articleTextBody";
};

export default function TextArea({ label, name }: TextAreaComponentProps) {
  return (
    <label>
      {label}
      <textarea name={name} id={name}></textarea>
    </label>
  );
}
