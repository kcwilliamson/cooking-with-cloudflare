import { useEffect, useState } from 'react';

interface Logo {
  id: string;
  name: string;
  icon: string;
  color: string;
  top: string;
  left: string;
  size: string;
  animation: string;
}

const cloudflareProducts: Logo[] = [
  { id: '1', name: 'Workers', icon: '⚡', color: 'text-cloudflare-orange', top: '10%', left: '5%', size: 'text-6xl', animation: 'animate-float' },
  { id: '2', name: 'Pages', icon: '📄', color: 'text-blue-400', top: '20%', left: '85%', size: 'text-5xl', animation: 'animate-float-delayed' },
  { id: '3', name: 'D1', icon: '🗄️', color: 'text-green-400', top: '50%', left: '10%', size: 'text-7xl', animation: 'animate-float-slow' },
  { id: '4', name: 'R2', icon: '💾', color: 'text-purple-400', top: '60%', left: '80%', size: 'text-6xl', animation: 'animate-float' },
  { id: '5', name: 'Stream', icon: '🎥', color: 'text-red-400', top: '35%', left: '50%', size: 'text-5xl', animation: 'animate-float-delayed' },
  { id: '6', name: 'Images', icon: '🖼️', color: 'text-pink-400', top: '75%', left: '20%', size: 'text-6xl', animation: 'animate-float-slow' },
  { id: '7', name: 'KV', icon: '🔑', color: 'text-yellow-400', top: '80%', left: '70%', size: 'text-5xl', animation: 'animate-float' },
  { id: '8', name: 'AI', icon: '🤖', color: 'text-indigo-400', top: '15%', left: '40%', size: 'text-7xl', animation: 'animate-float-slow' },
  { id: '9', name: 'Durable Objects', icon: '🔄', color: 'text-teal-400', top: '45%', left: '75%', size: 'text-6xl', animation: 'animate-float-delayed' },
  { id: '10', name: 'Zero Trust', icon: '🔒', color: 'text-cyan-400', top: '25%', left: '25%', size: 'text-5xl', animation: 'animate-float' },
  { id: '11', name: 'WAF', icon: '🛡️', color: 'text-orange-400', top: '70%', left: '50%', size: 'text-6xl', animation: 'animate-float-slow' },
  { id: '12', name: 'Queues', icon: '📬', color: 'text-lime-400', top: '40%', left: '30%', size: 'text-5xl', animation: 'animate-float-delayed' },
];

export default function FloatingLogos() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {cloudflareProducts.map((logo, index) => (
        <div
          key={logo.id}
          className={`absolute ${logo.animation} ${isVisible ? 'opacity-20' : 'opacity-0'} transition-opacity duration-1000`}
          style={{
            top: logo.top,
            left: logo.left,
            transitionDelay: `${index * 100}ms`,
          }}
        >
          <div className={`${logo.size} ${logo.color} filter blur-[0.5px]`}>
            {logo.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
