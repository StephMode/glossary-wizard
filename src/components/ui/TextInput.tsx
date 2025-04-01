import { useState } from "react";

type TextInputComponentProps = {
  label: string;
  name: string;
};

export default function TextInput({ label, name }: TextInputComponentProps) {
  const [inputErrorWarning, setInputErrorWarning] = useState(false);

  return (
    <label>
      {label}
      <input
        type="text"
        id={name}
        name={name}
        className={inputErrorWarning ? "error-theme" : ""}
        onChange={() => setInputErrorWarning(false)}
      ></input>
    </label>
  );
}
