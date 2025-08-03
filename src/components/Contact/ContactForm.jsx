import { useState } from "react";
import CustomInputText from "../ui/CustomInputText";
import CustomSubmitButton from "../ui/CustomSubmitButton";
import CustomTextArea from "../ui/CustomTextArea";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honey: "", // honeypot oculto
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!form.name || !form.email || !form.message) {
      setStatus({
        type: "error",
        msg: "Nombre, email y mensaje son obligatorios.",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ type: "success", msg: "Mensaje enviado correctamente." });
        setForm({ name: "", email: "", subject: "", message: "", honey: "" });
      } else {
        setStatus({
          type: "error",
          msg: data.message || "Error al enviar el mensaje.",
        });
      }
    } catch (err) {
      setStatus({ type: "error", msg: "Error de red. Inténtalo de nuevo." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className="space-y-6">
      <h3 className="text-2xl font-semibold">Envíame un mensaje</h3>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2"
        noValidate
      >
        {/* Honeypot (oculto a humanos) */}
        <input
          type="text"
          name="honey"
          value={form.honey}
          onChange={handleChange}
          style={{ display: "none" }}
          autoComplete="off"
          tabIndex={-1}
        />

        <CustomInputText
          id="name"
          label="Nombre *"
          name="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
        />

        <CustomInputText
          id="email"
          type="email"
          label="Correo electrónico *"
          name="email"
          placeholder="tu@ejemplo.com"
          value={form.email}
          onChange={handleChange}
        />

        <CustomInputText
          id="subject"
          label="Asunto"
          name="subject"
          placeholder="Asunto"
          value={form.subject}
          className="col-span-2"
          onChange={handleChange}
        />

        <CustomTextArea
          label="Cuéntame un poco *"
          id="message"
          name="message"
          placeholder="Escribe tu mensaje"
          value={form.message}
          className="col-span-2"
          onChange={handleChange}
        />

        <div className="col-span-2">
          <CustomSubmitButton
            text={loading ? "Enviando..." : "Enviar"}
            disabled={loading}
          />
        </div>

        {status && (
          <div
            className={`col-span-2 ${status.type === "success" ? "text-green-600" : "text-red-600"}`}
          >
            {status.msg}
          </div>
        )}
      </form>
    </article>
  );
}
