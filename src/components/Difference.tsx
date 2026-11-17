import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n";

const points = [
  { icon: "🌱", key: "diff1" },
  { icon: "🖐️", key: "diff2" },
  { icon: "👥", key: "diff3" },
  { icon: "🎯", key: "diff4" },
];

export default function Difference() {
  const { t } = useI18n();
  return (
    <section id="difference" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-sage">{t("diffEyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">{t("diffTitle")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink/70">{t("diffLead")}</p>
        </motion.div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm"
            >
              <div className="text-3xl">{p.icon}</div>
              <h3 className="mt-4 font-display text-lg text-forest">{t(`${p.key}Title`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{t(`${p.key}Body`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
