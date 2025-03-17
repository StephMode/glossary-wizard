import TextInput from "../ui/TextInput.tsx";
import TextArea from "../ui/TextArea.tsx";
import Button from "../ui/Button.tsx";

interface CustomElements extends HTMLFormControlsCollection {
  articleHeading: HTMLInputElement;
  articleTextBody: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

export default function Form() {
  function handleSubmit(event: React.FormEvent<CustomForm>) {
    event.preventDefault();
    const target = event.currentTarget.elements;
    const formData = {
      field1: target.articleHeading.value,
      field2: target.articleTextBody.value,
    };
    console.log("data", formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextInput label="title" />
      <TextArea label="text body" />
      <Button buttonRole="save" theme="secondary" />
    </form>
  );
}
