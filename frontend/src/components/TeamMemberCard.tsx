import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TeamMemberCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-green-700 p-6 rounded-lg overflow-hidden"
    >
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-yellow-400">{member.name}</h3>
      <p className="text-green-200 mb-4">{member.role}</p>
      <p className="text-green-100 text-sm">{member.bio}</p>
    </motion.div>
  );
};

export default TeamMemberCard;

