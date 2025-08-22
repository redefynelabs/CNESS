'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  profileLink: string | null;
  avatar: {
    url: string;
    name: string;
  };
}

interface TeamMembersProps {
  data: {
    TeamMembersSection: TeamMember[];
  };
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 120, 
      damping: 20, 
      mass: 0.8 
    }
  },
};

const TeamMembersSection: React.FC<TeamMembersProps> = ({ data }) => {
  // ✅ Group team members by department
  const groupedByDepartment = data.TeamMembersSection.reduce(
    (acc: Record<string, TeamMember[]>, member) => {
      if (!acc[member.department]) acc[member.department] = [];
      acc[member.department].push(member);
      return acc;
    },
    {}
  );

  const departments = Object.entries(groupedByDepartment);

  return (
    <div className="space-y-12 py-6 md:py-20 px-4 md:px-10 bg-active">
      {departments.map(([department, members], idx) => (
        <motion.div
          key={department}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="space-y-8"
        >
          {/* Department Title */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  type: "spring", 
                  stiffness: 150, 
                  damping: 18, 
                  mass: 1 
                } 
              },
            }}
            className="text-base font-[450] mb-6 uppercase"
          >
            {department}
          </motion.h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {members.map((member) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03, 
                  rotate: 0.5, 
                  transition: { 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15 
                  } 
                }}
                className="p-4 rounded-3xl bg-white flex flex-col items-center text-start "
              >
                {/* Avatar */}
                <motion.div
                  whileHover={{ 
                    scale: 1.08, 
                    rotate: -2, 
                    transition: { 
                      type: "spring", 
                      stiffness: 250, 
                      damping: 12,
                      mass: 0.5 
                    } 
                  }}
                  className="mb-4 p-6"
                >
                  <Image
                    src={member.avatar.url}
                    alt={member.avatar.name || member.name}
                    width={120}
                    height={120}
                    className="object-cover rounded-full border"
                  />
                </motion.div>

                <div className="flex w-full justify-between border-t border-gray-300 py-4">
                  <div>
                    {/* Name */}
                    <h3 className="text-lg font-[450]">{member.name}</h3>
                    {/* Role */}
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>

                  {/* Profile link */}
                  {member.profileLink && (
                    <motion.div 
                      whileHover={{ 
                        rotate: 30, 
                        scale: 1.15, 
                        transition: { 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 10 
                        } 
                      }}
                    >
                      <Link
                        href={member.profileLink}
                        className="mt-3 text-primary font-[450]"
                      >
                        <p className="relative z-10 bg-active transition-all duration-500 p-2 rounded-full">
                          <ArrowUpRight size={20} />
                        </p>
                      </Link>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Separator line (not after last department) */}
          {idx < departments.length - 1 && (
            <motion.hr
              variants={{
                hidden: { scaleX: 0, opacity: 0 },
                visible: { 
                  scaleX: 1, 
                  opacity: 1, 
                  transition: { 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 25, 
                    duration: 0.8 
                  } 
                },
              }}
              className="border-t border-gray-300 mt-12 origin-left"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default TeamMembersSection;