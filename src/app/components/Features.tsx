import { Zap, MessageSquare, Clock, BarChart3 } from "lucide-react";
import { motion } from "motion/react";

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Automated Follow-ups",
      description: "Set it and forget it. Recoverly sends perfectly timed reminders without any manual effort.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: MessageSquare,
      title: "SMS + Email Outreach",
      description: "Reach customers where they are with multi-channel communication that gets responses.",
      gradient: "from-[#1D8CF8] to-[#00D4FF]"
    },
    {
      icon: Clock,
      title: "Smart Scheduling",
      description: "AI-powered timing ensures your messages arrive at the optimal moment for maximum impact.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Recovery Analytics",
      description: "Track performance, measure success, and optimize your collection strategy with detailed insights.",
      gradient: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#1D8CF8]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-[#00D4FF]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight mb-4 text-[#1a1a1a]">
            Powerful Features
          </h2>
          <p className="text-lg lg:text-xl text-[#1a1a1a]/60 max-w-[600px] mx-auto">
            Everything you need to recover payments efficiently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index} 
                className="group relative p-8 rounded-3xl bg-white border border-black/5 hover:border-[#1D8CF8]/20 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1D8CF8]/5 to-[#00D4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <motion.div 
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-[#1a1a1a]">
                    {feature.title}
                  </h3>
                  <p className="text-base lg:text-lg text-[#1a1a1a]/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}