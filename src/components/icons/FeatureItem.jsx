import Icon from "./Icon";

const FeatureItem = ({ icon, title }) => (
    <div className="flex flex-col items-center text-center px-4">
      <Icon>{icon}</Icon>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
    </div>
  );

  export default FeatureItem;