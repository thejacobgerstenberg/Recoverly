import { Upload, Settings, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload your invoices",
      description: "Import your past-due invoices from your accounting system or upload them manually."
    },
    {
      icon: Settings,
      title: "Configure your reminder strategy",
      description: "Set up automated SMS and email campaigns with customizable timing and messaging."
    },
    {
      icon: TrendingUp,
      title: "Recover payments automatically",
      description: "Watch your recovery rate climb as Recoverly handles follow-ups and sends secure payment links."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#1D8CF8]/5 to-[#00D4FF]/5 rounded-full blur-3xl" />
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
            How It Works
          </h2>
          <p className="text-lg lg:text-xl text-[#1a1a1a]/60 max-w-[600px] mx-auto">
            Get started in minutes and start recovering payments effortlessly
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1D8CF8] to-[#00D4FF] mb-6 shadow-lg shadow-[#1D8CF8]/30 relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-[#1D8CF8]">{index + 1}</span>
                  </div>
                </motion.div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-[#1a1a1a]">
                  {step.title}
                </h3>
                <p className="text-base lg:text-lg text-[#1a1a1a]/60 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}