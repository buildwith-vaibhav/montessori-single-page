import { useState } from "react";
import { useBooking } from "../lib/booking";
import { useI18n } from "../lib/i18n";

export default function BookingModal() {
  const { isOpen, close, preselectedProgram } = useBooking();
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-forest/40 p-4 sm:items-center" role="dialog" aria-modal="true">
      <div className="w-full max-w-md rounded-2xl bg-ivory p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-display text-xl text-forest">{sent ? t("bookThanks") : t("bookTitle")}</h2>
          <button type="button" onClick={() => { close(); setSent(false); }} className="text-ink/50 hover:text-ink" aria-label="Close">✕</button>
        </div>
        {sent ? (
          <p className="mt-4 text-sm text-ink/70">{t("bookThanksBody")}</p>
        ) : (
          <form className="mt-5 space-y-3" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required name="name" placeholder={t("bookName")} className="w-full rounded-xl border border-forest/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-forest" />
            <input required type="email" name="email" placeholder={t("bookEmail")} className="w-full rounded-xl border border-forest/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-forest" />
            <input type="tel" name="phone" placeholder={t("bookPhone")} className="w-full rounded-xl border border-forest/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-forest" />
            <select name="program" defaultValue={preselectedProgram || ""} className="w-full rounded-xl border border-forest/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-forest">
              <option value="">{t("bookProgram")}</option>
              <option value="toddler">{t("progToddlerTitle")}</option>
              <option value="primary">{t("progPrimaryTitle")}</option>
              <option value="elementary">{t("progElementaryTitle")}</option>
            </select>
            <button type="submit" className="w-full rounded-full bg-forest py-3 text-sm font-semibold text-ivory">{t("bookSubmit")}</button>
          </form>
        )}
      </div>
    </div>
  );
}
