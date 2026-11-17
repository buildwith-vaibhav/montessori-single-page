import { useI18n } from "../lib/i18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-forest/10 bg-forest text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3 sm:px-8">
        <div>
          <p className="font-display text-xl">{t("brand")}</p>
          <p className="mt-3 text-sm text-ivory/70">{t("footerTagline")}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-sage">{t("footerVisit")}</p>
          <p className="mt-2 text-sm text-ivory/80">{t("address")}</p>
          <p className="mt-1 text-sm text-ivory/80">{t("hours")}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-sage">{t("footerContact")}</p>
          <p className="mt-2 text-sm"><a className="text-ivory/90 hover:text-ivory" href="mailto:hello@montessori.example">{t("email")}</a></p>
          <p className="mt-1 text-sm text-ivory/80">{t("phone")}</p>
        </div>
      </div>
      <div className="border-t border-ivory/10 py-4 text-center text-xs text-ivory/50">
        © {new Date().getFullYear()} {t("brand")}. {t("footerRights")}
      </div>
    </footer>
  );
}
