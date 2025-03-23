const InfoBanner = ({ children }) => (
    <div className="flex items-start mt-6">
      <div className="flex-shrink-0">
        <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">
          <span className="text-sm font-bold">i</span>
        </div>
      </div>
      <div className="ml-3 text-sm text-gray-600">
        {children}
      </div>
    </div>
  );

  export default InfoBanner;