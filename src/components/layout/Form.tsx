import TextInput from "../ui/TextInput.tsx";
import TextArea from "../ui/TextArea.tsx";

export default function Form() {
  return (
    <form>
      <TextInput label="title" />
      <TextArea label="text body" />
    </form>
  );
}
