import TextInput from "../ui/TextInput.tsx";
import TextArea from "../ui/TextArea.tsx";
import Button from "../ui/Button.tsx";

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
  function handleSubmit(event: React.FormEvent<CustomForm>) {
    event.preventDefault();
    const target = event.currentTarget.elements;
    const formData = {
      entryHeading: target.entryHeading.value,
      entryTextBody: target.entryTextBody.value,
    };
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
      <TextInput label="title" name="entryHeading" />
      <TextArea label="text body" name="entryTextBody" />
      <Button buttonRole="save" theme="secondary" />
    </form>
  );
}
