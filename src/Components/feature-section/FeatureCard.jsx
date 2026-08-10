import { MoveUpRight } from 'lucide-react';

const FeatureCard = ({ title, description, glow= false }) => {
  return (
    <div className="relative flex flex-col min-h-55 p-6 bg-[#272829]/70 justify-between rounded-2xl gap-6 border border-zinc-800 overflow-hidden ">
      {glow && (
        <div className="pointer-events-none absolute -bottom-30 -right-20 w-64 h-64 bg-orange-700/40 rounded-full blur-[80px]" />
      )}

      <div className="relative flex justify-between items-start gap-4">
      <p className="max-w-sm text-white text-base leading-7 ">{description}</p>

      
        <div className="shrink-0 bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full"><MoveUpRight  size={20} className="text-white"/></div>
      

      </div>

      <h3 className="relative text-white text-2xl sm:text-3xl">{title}</h3>
    </div>
  );
};

export default FeatureCard;