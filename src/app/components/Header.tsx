import { motion } from "motion/react";

export function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-2xl border-b border-black/5 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1D8CF8] to-[#00D4FF] flex items-center justify-center shadow-lg shadow-[#1D8CF8]/20">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-lg font-semibold text-[#1a1a1a]">Recoverly</span>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["How It Works", "Features", "Pricing", "Resources"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-[#1a1a1a]/70 hover:text-[#1D8CF8] transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1D8CF8] to-[#00D4FF] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <motion.button
            className="px-5 py-2 bg-gradient-to-r from-[#1D8CF8] to-[#00D4FF] text-white rounded-full text-sm font-medium shadow-lg shadow-[#1D8CF8]/20"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(29, 140, 248, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}