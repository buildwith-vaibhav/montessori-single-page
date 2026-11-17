import { motion } from "framer-motion";
import { useBooking } from "../lib/booking";
import { useI18n } from "../lib/i18n";

const programs = [
  { id: "toddler", key: "progToddler", ages: "18 mo – 3" },
  { id: "primary", key: "progPrimary", ages: "3 – 6" },
  { id: "elementary", key: "progElementary", ages: "6 – 12" },
];

export default function Programs() {
  const { open } = useBooking();
  const { t } = useI18n();
  return (
    <section id="programs" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-center font-display text-3xl text-forest sm:text-4xl">{t("progTitle")}</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-ink/70">{t("progLead")}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-sage">{p.ages}</p>
              <h3 className="mt-2 font-display text-xl text-forest">{t(`${p.key}Title`)}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{t(`${p.key}Body`)}</p>
              <button type="button" onClick={() => open(p.id)} className="mt-5 text-left text-sm font-semibold text-terra hover:underline">{t("ctaBook")} →</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
