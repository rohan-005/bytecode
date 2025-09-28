'use client';

import { motion } from "framer-motion";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate tilt
    const rotateX = ((y - centerY) / centerY) * 10; // up-down tilt
    const rotateY = ((x - centerX) / centerX) * -10; // left-right tilt

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer 
                 border-2 border-gray-700 transition-all duration-300
                 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h4 className="text-xl font-bold mb-2 text-white">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
