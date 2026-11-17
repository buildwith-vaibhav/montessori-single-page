import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n";

const keys = ["why1", "why2", "why3"];

export default function WhyUs() {
  const { t } = useI18n();
  return (
    <section id="why" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-center font-display text-3xl text-forest sm:text-4xl">{t("whyTitle")}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {keys.map((k, i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-xl text-forest">{t(`${k}Title`)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{t(`${k}Body`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
