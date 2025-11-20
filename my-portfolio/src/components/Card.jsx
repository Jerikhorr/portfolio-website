import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-2 duration-300">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default Card;