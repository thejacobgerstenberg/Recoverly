import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Animated gradient background effect */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#1D8CF8] via-[#00D4FF] to-[#1D8CF8] rounded-full blur-[120px] opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#00D4FF] via-[#1D8CF8] to-[#00D4FF] rounded-full blur-[100px] opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="max-w-[600px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-semibold tracking-tight mb-6 leading-[1.1]"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #1D8CF8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Effortlessly Recover Past Due Payments.
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl text-[#1a1a1a]/80 mb-4 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Recoverly automatically sends friendly SMS reminders with secure payment links so you get paid faster.
            </motion.p>
            
            <motion.p 
              className="text-base lg:text-lg text-[#1a1a1a]/60 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Automate invoice follow-ups, improve cash flow, and reduce manual collections with intelligent message campaigns.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-[#1D8CF8] to-[#00D4FF] text-white rounded-full font-medium shadow-lg shadow-[#1D8CF8]/30"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(29, 140, 248, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button 
                className="flex items-center gap-2 text-[#1D8CF8] font-medium group"
                whileHover={{ gap: "12px" }}
              >
                Request Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Visual - Product Mockup */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Dashboard mockup */}
              <div className="bg-gradient-to-br from-white via-white to-blue-50/30 p-8 border border-black/10 backdrop-blur-xl">
                <div className="space-y-6">
                  {/* Header stats */}
                  <motion.div 
                    className="grid grid-cols-3 gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-[#1D8CF8]/10 hover:shadow-xl hover:scale-105 transition-all">
                      <div className="text-xs text-[#1a1a1a]/60 mb-1 font-medium">Recovery Rate</div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#1D8CF8] to-[#00D4FF] bg-clip-text text-transparent">82%</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-[#1D8CF8]/10 col-span-2 hover:shadow-xl hover:scale-105 transition-all">
                      <div className="text-xs text-[#1a1a1a]/60 mb-1 font-medium">Recovered this month</div>
                      <div className="text-3xl font-bold text-[#1a1a1a]">$24,500</div>
                    </div>
                  </motion.div>

                  {/* Active campaigns */}
                  <motion.div 
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-[#1D8CF8]/10 hover:shadow-xl hover:scale-105 transition-all"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="text-xs text-[#1a1a1a]/60 mb-3 font-medium">Active campaigns</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-[#1D8CF8] to-[#00D4FF]"
                          initial={{ width: 0 }}
                          animate={{ width: "80%" }}
                          transition={{ duration: 1.5, delay: 0.8 }}
                        />
                      </div>
                      <span className="text-sm font-bold">4</span>
                    </div>
                  </motion.div>

                  {/* Chart visualization */}
                  <motion.div 
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-[#1D8CF8]/10 hover:shadow-xl hover:scale-105 transition-all"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <div className="flex gap-1 items-end h-24">
                      {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                        <motion.div 
                          key={i} 
                          className="flex-1 bg-gradient-to-t from-[#1D8CF8] to-[#00D4FF] rounded-t" 
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 0.8, delay: 0.9 + i * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* iPhone message overlay */}
              <motion.div 
                className="absolute -bottom-6 -right-6 w-[280px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-3 shadow-2xl shadow-black/40 border-8 border-black/80"
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="bg-gradient-to-br from-[#1D8CF8] to-[#00D4FF] rounded-[2rem] p-4 text-white shadow-lg">
                  <div className="text-xs opacity-90 mb-1 font-medium">Text Message</div>
                  <div className="text-sm leading-relaxed">
                    Hi Sarah — this is a reminder that your invoice is past due. Tap here to pay:{" "}
                    <span className="underline font-semibold">recoverly.io/pay</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}