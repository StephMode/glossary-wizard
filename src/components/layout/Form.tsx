import TextInput from "../ui/TextInput.tsx";
import TextArea from "../ui/TextArea.tsx";
import Button from "../ui/Button.tsx";
import { useEffect, useState } from "react";

type FormComponentProps = {
  formType: string;
  formToggle: () => void;
};

interface CustomElements extends HTMLFormControlsCollection {
  entryHeading: HTMLInputElement;
  entryTextBody: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

export default function Form({ formType, formToggle }: FormComponentProps) {
  const [errorState, setErrorState] = useState<string[]>([]);

  function handleSubmit(event: React.FormEvent<CustomForm>) {
    event.preventDefault();
    const target = event.currentTarget.elements;
    const formData = {
      entryHeading: target.entryHeading.value,
      entryTextBody: target.entryTextBody.value,
    };
    if (!formData.entryHeading || !formData.entryTextBody) {
      if (!formData.entryHeading && !formData.entryTextBody) {
        setErrorState([...errorState, "entryHeading", "entryTextBody"]);
      } else if (!formData.entryHeading) {
        console.error("no heading given");
        setErrorState([...errorState, "entryHeading"]);
      } else {
        setErrorState([...errorState, "entryTextBody"]);
      }
      return;
    }
    setErrorState([]);
    console.log("data", formData);
    formToggle();
  }
  function formatFormTypeText(formType: string) {
    const capitalizedWord =
      formType.charAt(0).toUpperCase() + formType.slice(1);
    return `${capitalizedWord} Entry`;
  }

  useEffect(() => {
    console.log(errorState);
  }, [errorState]);

  return (
    <form className="form--layout" onSubmit={handleSubmit}>
      <h3>{formatFormTypeText(formType)}</h3>
      <TextInput
        label="title"
        name="entryHeading"
        errorTheme={errorState.includes("entryHeading") ? true : false}
      />
      <TextArea label="text body" name="entryTextBody" />
      <Button buttonRole="save" theme="secondary" />
    </form>
  );
}
