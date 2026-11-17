import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n";

const items = ["voice1", "voice2", "voice3"];

export default function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-center font-display text-3xl text-forest sm:text-4xl">{t("voicesTitle")}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((k, i) => (
            <motion.blockquote key={k} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-forest/10 bg-white p-6">
              <p className="text-sm leading-relaxed text-ink/80">“{t(`${k}Quote`)}”</p>
              <footer className="mt-4 text-sm font-semibold text-forest">{t(`${k}Name`)}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
