
const Icon = ({ children, className }) => (
    <div className={`inline-flex items-center justify-center p-3 rounded-full bg-blue-100 text-blue-500 ${className}`}>
      {children}
    </div>
  );

  export default Icon;