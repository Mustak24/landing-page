import { FiCheck, FiStar } from "react-icons/fi";
import PriceCard from "../ui/Cards/PriceCard";
import ShowWhenVisible from "../other/ShowWhenVisible";
import { TypingText } from "../ui/Texts/TypingText";

export default function PriceSection() {
    const plans = [
        {
            name: "Personal",
            price: "Free",
            period: "forever",
            description: "Perfect for individuals getting started with task management",
            features: [
                "Up to 50 tasks",
                "Basic collaboration",
                "Mobile & desktop apps",
                "Email support"
            ],
            cta: "Get Started",
            popular: false
        },
        {
            name: "Professional",
            price: "$12",
            period: "/month",
            description: "Ideal for professionals and small teams who need advanced features",
            features: [
                "Unlimited tasks & projects",
                "Advanced collaboration",
                "Time tracking & analytics",
                "Priority support",
                "Custom integrations",
                "Team reporting"
            ],
            cta: "Start Free Trial",
            popular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "pricing",
            description: "For large organizations with specific security and compliance needs",
            features: [
                "Everything in Professional",
                "Advanced security & SSO",
                "Custom workflows",
                "Dedicated success manager",
                "On-premise deployment"
            ],
            cta: "Contact Sales",
            popular: false
        }
    ];

    return (
        <section id="price" className="pt-30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <ShowWhenVisible>
                        <TypingText speed={10} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Choose the plan that's right for you. All plans include our core features
                            and 14-day free trial with no credit card required.
                        </TypingText>
                    </ShowWhenVisible>
                </div>

                <div className="flex justify-center items-center flex-wrap gap-8 w-full">
                    {
                        plans.map(plan => (
                            <PriceCard {...plan} key={plan.name} />
                        ))
                    }

                </div>


                <div className="text-center mt-12 animate-fade-in-up animation-delay-800">
                    <p className="text-gray-500 mb-4">All plans include:</p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                        <span>✓ 99.9% uptime SLA</span>
                        <span>✓ Data encryption</span>
                        <span>✓ Regular backups</span>
                        <span>✓ Cancel anytime</span>
                    </div>
                </div>
            </div>
        </section>
    );
}