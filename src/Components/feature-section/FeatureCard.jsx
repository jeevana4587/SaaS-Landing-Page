import { MoveUpRight } from 'lucide-react';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="flex flex-col h-64 justify-between p-6 bg-gray-900 rounded-lg gap-6 border border-zinc-800 ">
      <div className="flex justify-between items-start ">
      <p className="max-w-sm text-white text-base leading-7 ">{description}</p>

      
        <div className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full"><MoveUpRight  size={24} className="text-white"/></div>
      

      </div>

      <h3 className="text-white text-3xl">{title}</h3>
    </div>
  );
};

export default FeatureCard;