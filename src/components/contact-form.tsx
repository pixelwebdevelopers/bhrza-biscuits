import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

export function ContactForm({ inverse = false }: { inverse?: boolean }) {
  const [errors, setErrors] = useState<Errors>({});

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: Errors = {};
    if (!name || name.length > 100) next.name = "Enter your name (up to 100 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) next.email = "Enter a valid email address.";
    if (phone && !/^[+\d()\-\s]{7,24}$/.test(phone)) next.phone = "Enter a valid phone number or leave it blank.";
    if (!message || message.length > 1000) next.message = "Enter a message (up to 1,000 characters).";
    setErrors(next);
    if (Object.keys(next).length) return;
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\n${message}`);
    window.location.href = `mailto:Nktfoods25@gmail.com?subject=${subject}&body=${body}`;
  }

  const fieldClass = inverse ? "contact-field contact-field-inverse" : "contact-field";
  return (
    <form onSubmit={submit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name}><Input name="name" maxLength={100} className={fieldClass} placeholder="Your name" /></Field>
        <Field label="Email" error={errors.email}><Input name="email" type="email" maxLength={255} className={fieldClass} placeholder="you@example.com" /></Field>
      </div>
      <Field label="Phone (optional)" error={errors.phone}><Input name="phone" type="tel" maxLength={24} className={fieldClass} placeholder="Phone number" /></Field>
      <Field label="Message" error={errors.message}><Textarea name="message" maxLength={1000} className={`${fieldClass} min-h-32`} placeholder="How can we help?" /></Field>
      <Button type="submit" size="lg" variant={inverse ? "cream" : "default"} className="mt-2 w-fit">Send enquiry <Send /></Button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error: string | undefined; children: React.ReactNode }) {
  return <label className="grid gap-2 text-sm font-semibold"><span>{label}</span>{children}{error && <span className="text-xs font-medium text-gold-light">{error}</span>}</label>;
}