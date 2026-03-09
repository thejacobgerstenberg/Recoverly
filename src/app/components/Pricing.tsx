import { Check } from "lucide-react";
import { motion } from "motion/react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 50 invoices/month",
        "SMS + Email reminders",
        "Basic analytics",
        "Email support"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "149",
      description: "For growing businesses with higher volume",
      features: [
        "Up to 500 invoices/month",
        "SMS + Email reminders",
        "Advanced analytics",
        "Priority support",
        "Custom message templates",
        "API access"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited invoices",
        "SMS + Email reminders",
        "Enterprise analytics",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-[#1D8CF8]/10 to-[#00D4FF]/10 rounded-full blur-3xl" />
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg lg:text-xl text-[#1a1a1a]/60 max-w-[600px] mx-auto">
            Choose the plan that fits your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`relative p-8 rounded-3xl border transition-all duration-500 ${
                plan.highlighted 
                  ? 'bg-gradient-to-br from-[#1D8CF8] to-[#00D4FF] border-transparent text-white shadow-2xl shadow-[#1D8CF8]/30' 
                  : 'bg-white/80 backdrop-blur-sm border-black/10 hover:border-[#1D8CF8]/30 hover:shadow-xl'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: plan.highlighted ? 0 : -8, scale: plan.highlighted ? 1 : 1.02 }}
            >
              {plan.highlighted && (
                <motion.div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-[#1D8CF8] rounded-full text-sm font-semibold shadow-xl"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Most Popular
                </motion.div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-2xl font-semibold mb-2 ${plan.highlighted ? 'text-white' : 'text-[#1a1a1a]'}`}>
                  {plan.name}
                </h3>
                <div className="mb-2">
                  {plan.price === "Custom" ? (
                    <div className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-[#1a1a1a]'}`}>
                      Custom
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-[#1a1a1a]'}`}>
                        ${plan.price}
                      </span>
                      <span className={`text-lg ${plan.highlighted ? 'text-white/80' : 'text-[#1a1a1a]/60'}`}>
                        /month
                      </span>
                    </div>
                  )}
                </div>
                <p className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-[#1a1a1a]/60'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + featureIndex * 0.05 }}
                  >
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-white' : 'text-[#1D8CF8]'}`} />
                    <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-[#1a1a1a]/70'}`}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.button 
                className={`w-full py-3 rounded-full font-medium transition-all ${
                  plan.highlighted
                    ? 'bg-white text-[#1D8CF8] hover:bg-gray-50 shadow-xl'
                    : 'bg-gradient-to-r from-[#1D8CF8] to-[#00D4FF] text-white hover:shadow-xl hover:shadow-[#1D8CF8]/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}