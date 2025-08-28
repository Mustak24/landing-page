import { FiArrowRight, FiCheckCircle, FiGift, FiMail, FiTrendingUp, FiZap } from "react-icons/fi";
import StarsBackground from "../background-views/StarsBackground";

export default function SubscribeSection() {

    const benefits = [
        { icon: <FiZap className="h-5 w-5 text-blue-600" />, text: "Weekly productivity tips" },
        { icon: <FiGift className="h-5 w-5 text-purple-700" />, text: "Exclusive feature previews" },
        { icon: <FiTrendingUp className="h-5 w-5 text-teal-600" />, text: "Success stories & case studies" }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 animate-fade-in-up">
                        <FiMail className="h-8 w-8 text-blue-600 animate-pulse-subtle" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up animation-delay-200">
                        Join 50,000+ Productive Professionals
                    </h2>
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
                        Get exclusive productivity insights, early access to new features, and proven strategies
                        that help top performers achieve more in less time.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in-up animation-delay-600">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition-all duration-300 hover:scale-105 group"
                            style={{ animationDelay: `${600 + (index * 100)}ms` }}
                        >
                            <div className="group-hover:scale-110 transition-all duration-300">
                                {benefit.icon}
                            </div>
                            <span className="text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                                {benefit.text}
                            </span>
                        </div>
                    ))}
                </div>


                <div className="bg-gray-50 rounded-2xl max-w-2xl mx-auto animate-fade-in-up animation-delay-800 relative overflow-hidden shadow-[0_0_0_1px_rgb(0,0,0,0.2)]">
                    <StarsBackground className="absolute top-0 left-0 h-full w-full" speed={0.01} />
                    <div className="space-y-6 backdrop-blur-[2px] w-full h-full p-8">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 relative group">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 bg-white shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 focus:bg-blue-50 transition-all duration-300 text-lg group-hover:shadow-lg"
                                    required
                                />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100/40 to-teal-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl group transform-gpu"
                            >
                                Get Free Tips
                                <FiArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>

                        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                            <span className="flex items-center gap-2">
                                <FiCheckCircle className="h-4 w-4 text-green-500" />
                                Free forever
                            </span>
                            <span className="flex items-center gap-2">
                                <FiCheckCircle className="h-4 w-4 text-green-500" />
                                No spam, ever
                            </span>
                            <span className="flex items-center gap-2">
                                <FiCheckCircle className="h-4 w-4 text-green-500" />
                                Unsubscribe anytime
                            </span>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12 animate-fade-in-up animation-delay-1000">
                    <p className="text-gray-400 text-sm">
                        Trusted by professionals at Google, Microsoft, Spotify, and 500+ other companies
                    </p>
                </div>
            </div>
        </section>
    );
}