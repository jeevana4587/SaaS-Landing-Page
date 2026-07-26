import Connector from "./Connector.jsx"

const StatCard = ({ number, title, description, avatars }) => {
    return (
        <div className="flex flex-col w-full gap-1 ">
            <h1 className="text-6xl font-semibold text-white">{number}</h1>
            <h2 className="mt-3 text-lg font-medium text-white">{title}</h2>
            <p className="mt-1 text-sm text-gray-400">{description}</p>
            <div className="flex items-center mt-3">
             <div className="flex items-center mt-3 -space-x-3 flex-shrink-0">
                {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`Avatar ${index + 1}`}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ))}
             </div>
             <Connector />
             </div>
        </div>

    );
}

export default StatCard;