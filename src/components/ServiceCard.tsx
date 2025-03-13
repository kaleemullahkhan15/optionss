
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="reveal flex flex-col items-center text-center bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-100 subtle-shadow transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-5 p-4 bg-option-50 rounded-full text-option-600">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
