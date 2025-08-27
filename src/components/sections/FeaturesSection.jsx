import { FiBarChart2, FiBell, FiCalendar, FiClock, FiShield, FiSmartphone, FiTarget, FiUsers } from "react-icons/fi";

export default function FeaturesSection() {
      const features = [
    {
      icon: <FiTarget className="h-8 w-8" />,
      title: "Smart Prioritization",
      description: "AI-powered task ranking helps you focus on what matters most, automatically organizing your workflow for maximum productivity."
    },
    {
      icon: <FiUsers className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Share projects, assign tasks, and track progress together. Real-time updates keep everyone aligned and accountable."
    },
    {
      icon: <FiCalendar className="h-8 w-8" />,
      title: "Intelligent Scheduling",
      description: "Seamlessly integrate with your calendar, set smart deadlines, and get automatic scheduling suggestions that work."
    },
    {
      icon: <FiBell className="h-8 w-8" />,
      title: "Custom Notifications",
      description: "Stay on top of deadlines with personalized reminders via email, push notifications, or SMS alerts."
    },
    {
      icon: <FiBarChart2 className="h-8 w-8" />,
      title: "Progress Analytics",
      description: "Detailed insights into your productivity patterns, completion rates, and performance trends over time."
    },
    {
      icon: <FiSmartphone className="h-8 w-8" />,
      title: "Cross-Platform Sync",
      description: "Access your tasks anywhere with native apps for iOS, Android, and desktop. Everything syncs instantly."
    },
    {
      icon: <FiClock className="h-8 w-8" />,
      title: "Time Tracking",
      description: "Built-in time tracking for tasks and projects. Understand where your time goes and optimize your workflow."
    },
    {
      icon: <FiShield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-level encryption, SSO support, and compliance with GDPR, SOC 2, and other security standards."
    }
  ];

  return (
    <main id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Stay Organized
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            TaskFlow combines powerful features with intuitive design to help you manage tasks, 
            collaborate with teams, and achieve your goals faster than ever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-stagger-children">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-blue-600 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}