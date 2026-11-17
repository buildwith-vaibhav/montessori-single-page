import { useState } from "react";
import { useBooking } from "../lib/booking";
import { useI18n } from "../lib/i18n";

const links = [
  { href: "#difference", key: "navDifference" },
  { href: "#programs", key: "navPrograms" },
  { href: "#day", key: "navDay" },
  { href: "#why", key: "navWhy" },
  { href: "#gallery", key: "navGallery" },
  { href: "#admissions", key: "navAdmissions" },
  { href: "#faq", key: "navFaq" },
];

export default function Header() {
  const { open } = useBooking();
  const { t, lang, setLang } = useI18n();
  const [menu, setMenu] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#" className="font-display text-lg font-semibold text-forest">{t("brand")}</a>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-ink/70 transition hover:text-forest">{t(l.key)}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => setLang(lang === "en" ? "zh" : "en")} className="rounded-full border border-forest/20 px-2.5 py-1 text-xs font-medium text-forest">{lang === "en" ? "中文" : "EN"}</button>
          <button type="button" onClick={() => open()} className="hidden rounded-full bg-forest px-4 py-2 text-sm font-semibold text-ivory sm:inline-flex">{t("ctaBook")}</button>
          <button type="button" className="lg:hidden" onClick={() => setMenu(!menu)} aria-label="Menu">☰</button>
        </div>
      </div>
      {menu && (
        <div className="border-t border-forest/10 bg-ivory px-5 py-4 lg:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenu(false)} className="block py-2 text-sm text-forest">{t(l.key)}</a>
          ))}
          <button type="button" onClick={() => { open(); setMenu(false); }} className="mt-3 w-full rounded-full bg-forest py-2.5 text-sm font-semibold text-ivory">{t("ctaBook")}</button>
        </div>
      )}
    </header>
  );
}
