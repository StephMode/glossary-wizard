import TextInput from "../ui/TextInput.tsx";
import TextArea from "../ui/TextArea.tsx";
import Button from "../ui/Button.tsx";
import { useState } from "react";

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

  function validateFormData(formData: {
    entryHeading: string;
    entryTextBody: string;
  }): string[] {
    const errors: string[] = [];
    !formData.entryHeading && errors.push("entryHeading");
    !formData.entryTextBody && errors.push("entryTextBody");
    return errors;
  }

  function handleSubmit(event: React.FormEvent<CustomForm>) {
    event.preventDefault();
    const target = event.currentTarget.elements;
    const formData = {
      entryHeading: target.entryHeading.value,
      entryTextBody: target.entryTextBody.value,
    };
    const validationErrors = validateFormData(formData);
    if (validationErrors.length > 0) {
      setErrorState(validationErrors);
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

  return (
    <form className="form--layout" onSubmit={handleSubmit}>
      <h3>{formatFormTypeText(formType)}</h3>
      <TextInput
        label="title"
        name="entryHeading"
        errorTheme={errorState.includes("entryHeading") ? true : false}
      />
      <TextArea
        label="text body"
        name="entryTextBody"
        errorTheme={errorState.includes("entryTextBody") ? true : false}
      />
      <Button buttonRole="save" theme="secondary" />
    </form>
  );
}
