import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="py-16 bg-gradient-to-b from-white to-gray-50/50 border-t border-black/5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and tagline */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1D8CF8] to-[#00D4FF] flex items-center justify-center shadow-lg shadow-[#1D8CF8]/20">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-lg font-semibold text-[#1a1a1a]">Recoverly</span>
            </div>
            <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">
              Effortlessly recover past-due payments with automated SMS reminders.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-[#1a1a1a] mb-4">Product</h4>
            <ul className="space-y-3">
              {["Features", "Pricing", "Integrations", "API"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#1a1a1a]/60 hover:text-[#1D8CF8] transition-colors inline-block hover:translate-x-1 duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-[#1a1a1a] mb-4">Resources</h4>
            <ul className="space-y-3">
              {["Documentation", "Blog", "Help Center", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#1a1a1a]/60 hover:text-[#1D8CF8] transition-colors inline-block hover:translate-x-1 duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold text-[#1a1a1a] mb-4">Company</h4>
            <ul className="space-y-3">
              {["About", "Careers", "Privacy", "Terms"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#1a1a1a]/60 hover:text-[#1D8CF8] transition-colors inline-block hover:translate-x-1 duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="pt-8 border-t border-black/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-[#1a1a1a]/60 text-center">
            © 2026 Recoverly. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}