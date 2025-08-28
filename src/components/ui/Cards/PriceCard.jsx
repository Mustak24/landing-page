import { FiCheck, FiStar } from "react-icons/fi";

export default function PriceCard({name, popular, price, period, description, features, cta}) {
    return (
        <div 
            className={`relative rounded-2xl p-8 transition-all duration-200 max-w-[360px] ${
            popular 
                ? 'bg-[rgb(100,130,250)] text-white border-2 border-blue-200 shadow-xl hover:shadow-2xl scale-105' 
                : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:border-gray-300'
            }`}
        >
            {popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="bg-[rgb(100,130,250)] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                <FiStar className="h-4 w-4 fill-current animate-spin-slow animate-spin" style={{animationDuration: '3s'}} />
                Most Popular
                </div>
            </div>  
            )}
            
            <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <div className="mb-4">
                <span className="text-5xl font-bold animate-price-pulse">{price}</span>
                <span className="text-3xl opacity-70 font-semibold ml-1">{period}</span>
            </div>
            <p className="leading-relaxed">{description}</p>
            </div>

            <button 
                className={`w-full py-4 sm:px-6 rounded-lg font-semibold transition-all duration-200 ${
                    popular
                    ? 'bg-white text-[rgb(100,140,250)] hover:bg-[rgb(100,140,250)] hover:text-white transform hover:scale-105 shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:scale-105'
                }`}
                >
                {cta}
            </button>

            <ul className="space-y-4 mt-8">
            {features.map((feature, featureIndex) => (
                <li 
                key={featureIndex} 
                className="flex items-center gap-3 animate-fade-in-left"
                >
                <FiCheck className="h-5 w-5 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span>{feature}</span>
                </li>
            ))}
            </ul>
        </div>
    )
}