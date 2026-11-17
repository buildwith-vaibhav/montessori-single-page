import { useBooking } from "../lib/booking";
import { useI18n } from "../lib/i18n";

export default function MobileCTA() {
  const { open } = useBooking();
  const { t } = useI18n();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-forest/10 bg-ivory/95 p-3 backdrop-blur sm:hidden">
      <button
        type="button"
        onClick={() => open()}
        className="w-full rounded-full bg-forest py-3 text-center text-sm font-semibold text-ivory shadow-lg"
      >
        {t("ctaBook")}
      </button>
    </div>
  );
}
