// Composant pour les cartes de tarification
const PricingCard = ({ 
    flagIcon, 
    cardTitle, 
    percentage, 
    fee, 
    description, 
    bgColor = "bg-green-400", 
    textColor = "text-white" 
  }) => (
    <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
      <div className={`flex items-center justify-center p-3 rounded-md mb-6 ${bgColor} ${textColor}`}>
        {flagIcon}
        <span className="ml-2 font-medium">{cardTitle}</span>
      </div>
      
      <div className="text-center">
        <div className="flex items-center justify-center">
          <span className="text-6xl font-bold text-blue-500">{percentage}</span>
          <span className="text-4xl font-bold text-blue-500">%</span>
        </div>
        <div className="text-gray-700 mt-1">+{fee} Dhs</div>
        <div className="text-sm text-gray-600 mt-2">{description}</div>
      </div>
    </div>
  );

  export default PricingCard;