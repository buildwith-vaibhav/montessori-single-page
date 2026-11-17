import { useBooking } from "../lib/booking";
import { useI18n } from "../lib/i18n";

export default function FinalCTA() {
  const { open } = useBooking();
  const { t } = useI18n();
  return (
    <section className="bg-forest py-20 text-center text-ivory sm:py-28">
      <div className="mx-auto max-w-2xl px-5">
        <h2 className="font-display text-3xl sm:text-4xl">{t("finalTitle")}</h2>
        <p className="mt-4 text-ivory/80">{t("finalLead")}</p>
        <button
          type="button"
          onClick={() => open()}
          className="mt-8 rounded-full bg-terra px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-terra/90"
        >
          {t("ctaBook")}
        </button>
      </div>
    </section>
  );
}
