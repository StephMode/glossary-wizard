type TextAreaComponentProps = {
  label: string;
};

export default function TextArea({ label }: TextAreaComponentProps) {
  return (
    <label>
      {label}
      <textarea></textarea>
    </label>
  );
}
