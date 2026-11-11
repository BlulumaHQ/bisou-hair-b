import { useState } from "react";
import { Send } from "lucide-react";

type Labels = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
};

const inputCls =
  "w-full border border-border bg-background px-4 py-3.5 font-body text-[15px] text-foreground focus:outline-none focus:border-foreground/30 transition-colors";
const labelCls = "font-body text-[12px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block";

export default function JoinTeamForm({ labels }: { labels: Labels }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(fd.get("name") || ""),
          email: String(fd.get("email") || ""),
          message: String(fd.get("message") || ""),
          website: String(fd.get("website") || ""),
          source: "Join Our Team",
          page: window.location.href,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json?.ok) {
        setStatus("sent");
        form.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="font-body text-base text-foreground text-center max-w-md mx-auto py-8">
        Thank you! Your message has been sent. We'll be in touch soon.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="text-left space-y-5 max-w-md mx-auto">
      <div>
        <label className={labelCls}>{labels.nameLabel}</label>
        <input name="name" type="text" required maxLength={100} className={inputCls} placeholder={labels.namePlaceholder} />
      </div>
      <div>
        <label className={labelCls}>{labels.emailLabel}</label>
        <input name="email" type="email" required maxLength={255} className={inputCls} placeholder={labels.emailPlaceholder} />
      </div>
      <div>
        <label className={labelCls}>{labels.messageLabel}</label>
        <textarea name="message" rows={4} required maxLength={2000} className={`${inputCls} resize-none`} placeholder={labels.messagePlaceholder} />
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {status === "error" && (
        <p className="font-body text-sm text-destructive">
          Sorry, your message could not be sent. Please call us or try again later.
        </p>
      )}
      <button type="submit" disabled={status === "sending"} className="btn-primary w-full gap-2 justify-center py-4 disabled:opacity-60">
        <Send className="w-3.5 h-3.5" /> {labels.submit}
      </button>
    </form>
  );
}
