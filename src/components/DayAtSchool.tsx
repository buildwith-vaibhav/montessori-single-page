import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n";

const slots = ["day1", "day2", "day3", "day4"];

export default function DayAtSchool() {
  const { t } = useI18n();
  return (
    <section id="day" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-center font-display text-3xl text-forest sm:text-4xl">{t("dayTitle")}</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-ink/70">{t("dayLead")}</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {slots.map((k, i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-forest/10 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-sage">{t(`${k}Time`)}</p>
              <h3 className="mt-2 font-display text-lg text-forest">{t(`${k}Title`)}</h3>
              <p className="mt-2 text-sm text-ink/70">{t(`${k}Body`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
