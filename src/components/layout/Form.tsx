import TextInput from "../ui/TextInput.tsx";
import TextArea from "../ui/TextArea.tsx";
import Button from "../ui/Button.tsx";
import styled from "styled-components";

interface CustomElements extends HTMLFormControlsCollection {
  articleHeading: HTMLInputElement;
  articleTextBody: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

export default function Form({ formType }: { formType: string }) {
  function handleSubmit(event: React.FormEvent<CustomForm>) {
    event.preventDefault();
    const target = event.currentTarget.elements;
    const formData = {
      articleHeading: target.articleHeading.value,
      articleTextBody: target.articleTextBody.value,
    };
    console.log("data", formData);
  }
  function formatFormTypeText(formType: string) {
    const capitalizedWord =
      formType.charAt(0).toUpperCase() + formType.slice(1);
    return `${capitalizedWord} Entry`;
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>{formatFormTypeText(formType)}</h3>
      <TextInput label="title" name="articleHeading" />
      <TextArea label="text body" name="articleTextBody" />
      <Button buttonRole="save" theme="secondary" />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  max-width: 300px;
  height: 150px;
  align-items: baseline;
  justify-content: space-between;
  margin: 10px;
  padding: 5px;
  border: 2px solid lightblue;
  border-radius: 5px;
`;
