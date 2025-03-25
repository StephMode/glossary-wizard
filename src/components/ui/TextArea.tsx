type TextAreaComponentProps = {
  label: string;
  name: string;
};

export default function TextArea({ label, name }: TextAreaComponentProps) {
  return (
    <label>
      {label}
      <textarea name={name} id={name}></textarea>
    </label>
  );
}
