import { FiClock, FiTrendingUp, FiZap } from "react-icons/fi";
import ShowWhenVisible from "../other/ShowWhenVisible";
import { TypingText } from "../ui/Texts/TypingText";

export default function BenefitsSection() {
    return (
        <section id="benefits" className="pt-30 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 speed={50} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Transform Your Productivity
                    </h1>

                    <ShowWhenVisible>
                        <TypingText speed={10} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Join thousands of professionals who have revolutionized their work-life balance
                            and achieved more than they thought possible.
                        </TypingText>
                    </ShowWhenVisible>
                </div>


                <div className="grid lg:grid-cols-3 gap-12">
                    <ShowWhenVisible>
                        <div className="text-center group fade-center-animation opacity-0">
                            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl opacity-0 fade-center-animation">
                                <FiTrendingUp className="h-10 w-10 text-white animate-bounce" style={{ animationDuration: '4s' }} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">3x More Productive</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Our users report completing 3x more meaningful work after switching to TaskFlow's
                                intelligent prioritization system.
                            </p>
                            <div className="bg-blue-50 rounded-lg p-6 group-hover:bg-blue-100 transition-colors duration-300">
                                <div className="text-3xl font-bold text-blue-600 mb-2 animate-counter" data-target="87">87%</div>
                                <div className="text-sm text-gray-600">improvement in task completion rates</div>
                            </div>
                        </div>
                    </ShowWhenVisible>

                    <ShowWhenVisible>

                        <div className="text-center group fade-center-animation opacity-0">
                            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                                <FiClock className="h-10 w-10 text-white animate-bounce" style={{ animationDuration: '4s' }} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Save 2+ Hours Daily</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Eliminate time spent on task switching, searching for information, and
                                manual coordination with automated workflows.
                            </p>
                            <div className="bg-teal-50 rounded-lg p-6 group-hover:bg-teal-100 transition-colors duration-300">
                                <div className="text-3xl font-bold text-teal-600 mb-2 animate-counter" data-target="2.5">2.5hrs</div>
                                <div className="text-sm text-gray-600">average time saved per day</div>
                            </div>
                        </div>
                    </ShowWhenVisible>

                    <ShowWhenVisible>

                        <div className="text-center group fade-center-animation opacity-0">
                            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                                <FiZap className="h-10 w-10 text-white animate-bounce" style={{ animationDuration: '4s' }} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Reduce Stress</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Clear visibility into your workload and automatic progress tracking
                                eliminates the anxiety of forgotten tasks and missed deadlines.
                            </p>
                            <div className="bg-orange-50 rounded-lg p-6 group-hover:bg-orange-100 transition-colors duration-300">
                                <div className="text-3xl font-bold text-orange-600 mb-2 animate-counter" data-target="94">94%</div>
                                <div className="text-sm text-gray-600">users report reduced work stress</div>
                            </div>
                        </div>
                    </ShowWhenVisible>
                </div>
            </div>
        </section>
    );
}