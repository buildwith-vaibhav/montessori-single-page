import { useBooking } from "../lib/booking";
import { useI18n } from "../lib/i18n";

const steps = ["adm1", "adm2", "adm3", "adm4"];

export default function Admissions() {
  const { open } = useBooking();
  const { t } = useI18n();
  return (
    <section id="admissions" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-center font-display text-3xl text-forest sm:text-4xl">{t("admTitle")}</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-ink/70">{t("admLead")}</p>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((k, i) => (
            <li key={k} className="rounded-2xl bg-white p-5 shadow-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-sm font-bold text-ivory">{i + 1}</span>
              <h3 className="mt-3 font-display text-lg text-forest">{t(`${k}Title`)}</h3>
              <p className="mt-2 text-sm text-ink/70">{t(`${k}Body`)}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <button type="button" onClick={() => open()} className="rounded-full bg-forest px-8 py-3 text-sm font-semibold text-ivory">{t("ctaBook")}</button>
        </div>
      </div>
    </section>
  );
}
