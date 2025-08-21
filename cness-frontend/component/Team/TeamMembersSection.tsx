import React from "react";
import Image from "next/image";
import Link from "next/link";
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

const TeamMembersSection: React.FC<TeamMembersProps> = ({ data }) => {
  // ✅ Group team members by department
  const groupedByDepartment = data.TeamMembersSection.reduce(
    (acc: Record<string, TeamMember[]>, member) => {
      if (!acc[member.department]) {
        acc[member.department] = [];
      }
      acc[member.department].push(member);
      return acc;
    },
    {}
  );

  const departments = Object.entries(groupedByDepartment);

  return (
    <div className="space-y-12 py-6 md:py-20 px-4 md:px-10 bg-active">
      {departments.map(([department, members], idx) => (
        <div key={department} className="space-y-8">
          {/* Department Title */}
          <h2 className="text-base font-medium mb-6 uppercase">{department}</h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {members.map((member) => (
              <div
                key={member.id}
                className="p-4 rounded-3xl bg-white flex flex-col items-center text-center transition"
              >
                {/* Avatar */}
                <div className="mb-4 p-6">
                  <Image
                    src={member.avatar.url}
                    alt={member.avatar.name || member.name}
                    width={120}
                    height={120}
                    className="object-cover rounded-full border"
                  />
                </div>

                <div className="flex w-full justify-between border-t border-gray-300 py-4">
                  <div>
                    {/* Name */}
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    {/* Role */}
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>

                  {/* Profile link */}
                  {member.profileLink && (
                    <Link
                      href={member.profileLink}
                      className="mt-3 text-primary font-medium hover:underline"
                    >
                      <p className="relative z-10 bg-active transition-all duration-500 hover:rotate-45 hover:scale-110 hover:animate-spin p-2 rounded-full">
                        <ArrowUpRight size={20} />
                      </p>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Separator line (not after last department) */}
          {idx < departments.length - 1 && (
            <hr className="border-t border-gray-300 mt-12" />
          )}
        </div>
      ))}
    </div>
  );
};

export default TeamMembersSection;
