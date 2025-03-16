import TextInput from "../ui/TextInput.tsx";
import TextArea from "../ui/TextArea.tsx";
import Button from "../ui/Button.tsx";

export default function Form() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("log for event", event);
    console.log("log for data", data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextInput label="title" />
      <TextArea label="text body" />
      <Button buttonRole="save" theme="secondary" />
    </form>
  );
}
