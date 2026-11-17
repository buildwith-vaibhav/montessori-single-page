import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "../lib/i18n";

const keys = ["faq1", "faq2", "faq3", "faq4", "faq5", "faq6"];

export default function FAQ() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="text-center font-display text-3xl text-forest sm:text-4xl">{t("faqTitle")}</h2>
        <div className="mt-10 divide-y divide-forest/10 rounded-2xl border border-forest/10 bg-white">
          {keys.map((k, i) => (
            <div key={k}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-medium text-forest">{t(`${k}Q`)}</span>
                <span className="text-sage">{open === i ? "−" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm leading-relaxed text-ink/70">{t(`${k}A`)}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
