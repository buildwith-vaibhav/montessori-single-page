import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n";

const images = [
  "https://images.pexels.com/photos/8923959/pexels-photo-8923959.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8612929/pexels-photo-8612929.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8613087/pexels-photo-8613087.jpeg?auto=compress&cs=tinysrgb&w=600",
];

export default function Gallery() {
  const { t } = useI18n();
  return (
    <section id="gallery" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-center font-display text-3xl text-forest sm:text-4xl">{t("galleryTitle")}</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-ink/70">{t("galleryLead")}</p>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="aspect-[4/3] overflow-hidden rounded-xl"
            >
              <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
