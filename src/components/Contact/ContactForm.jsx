import CustomInputText from "../ui/CustomInputText";
import CustomTextArea from "../ui/CustomTextArea";

export default function ContactForm() {
  return (
    <form action="" class="grid grid-cols-2 gap-x-4 gap-y-6">
      <CustomInputText
        id="name"
        label="Nombre"
        name="name"
        placeholder="Tu nombre"
        value=""
      />
      <CustomInputText
        id="name"
        label="Nombre"
        name="name"
        placeholder="Tu nombre"
        value=""
      />
      <CustomInputText
        id="name"
        label="Nombre"
        name="name"
        placeholder="Tu nombre"
        value=""
        className="col-span-2"
      />
      <CustomTextArea label="Mensaje" id="message" className="col-span-2" />
    </form>
  );
}
