// 个人信息服务，模拟 NestJS 的服务架构

// 个人资料接口
export interface Profile {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  experience: {
    company: string;
    position: string;
    period: string;
    description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    period: string;
  }[];
  contact: {
    email: string;
    linkedin?: string;
    github?: string;
  };
}

// Mock 数据，这里需要用户替换为自己的信息
const profileData: Profile = {
  name: "Your Name",
  title: "Full Stack Developer",
  bio: "Passionate developer with experience in building web applications using modern technologies. Skilled in frontend and backend development.",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "NestJS",
    "MongoDB",
    "SQL",
    "AWS",
  ],
  experience: [
    {
      company: "Company A",
      position: "Senior Developer",
      period: "2022 - Present",
      description:
        "Leading development of web applications using React and Node.js.",
    },
    {
      company: "Company B",
      position: "Web Developer",
      period: "2020 - 2022",
      description:
        "Developed and maintained web applications using React and Express.",
    },
  ],
  education: [
    {
      institution: "University XYZ",
      degree: "Master of Computer Science",
      period: "2018 - 2020",
    },
    {
      institution: "University ABC",
      degree: "Bachelor of Computer Science",
      period: "2014 - 2018",
    },
  ],
  contact: {
    email: "your.email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
  },
};

// 项目服务类
export class ProfileService {
  private profile: Profile;

  constructor() {
    this.profile = profileData;
  }

  getProfile(): Profile {
    return this.profile;
  }

  getName(): string {
    return this.profile.name;
  }

  getTitle(): string {
    return this.profile.title;
  }

  getBio(): string {
    return this.profile.bio;
  }

  getSkills(): string[] {
    return this.profile.skills;
  }

  getExperience() {
    return this.profile.experience;
  }

  getEducation() {
    return this.profile.education;
  }

  getContact() {
    return this.profile.contact;
  }
}

// 导出服务的单例实例
export const profileService = new ProfileService();
