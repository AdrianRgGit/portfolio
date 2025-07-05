import CustomInputText from "../ui/CustomInputText";
import CustomSubmitButton from "../ui/CustomSubmitButton";
import CustomTextArea from "../ui/CustomTextArea";

export default function ContactForm() {
  return (
    <article className="space-y-6">
      <h3 class="text-2xl font-semibold">Envíame un mensaje</h3>
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

        <CustomSubmitButton text="Enviar" />
      </form>
    </article>
  );
}
