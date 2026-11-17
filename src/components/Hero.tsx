import { motion } from "framer-motion";
import { useBooking } from "../lib/booking";
import { useI18n } from "../lib/i18n";

export default function Hero() {
  const { open } = useBooking();
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold uppercase tracking-widest text-sage">{t("heroEyebrow")}</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-forest sm:text-5xl">{t("heroTitle")}</h1>
          <p className="mt-5 max-w-lg text-lg text-ink/70">{t("heroLead")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={() => open()} className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-ivory shadow-md">{t("ctaBook")}</button>
            <a href="#programs" className="rounded-full border border-forest/25 px-6 py-3 text-sm font-semibold text-forest">{t("ctaPrograms")}</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
          <img src="https://images.pexels.com/photos/8923959/pexels-photo-8923959.jpeg?auto=compress&cs=tinysrgb&w=900" alt="" className="h-full w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
