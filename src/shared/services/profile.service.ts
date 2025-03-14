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
  awards: {
    name: string;
    paperName: string;
  }[];
  contact: {
    email: string;
    linkedin?: string;
    github?: string;
  };
}

// Mock 数据，这里需要用户替换为自己的信息
const profileData: Profile = {
  name: "Tse-Hsuan Yang",
  title: "AI & Full-Stack Engineer",
  bio: "Adaptable Software Engineer with expertise in full-stack development, LLM applications, and scalable software solutions. Experienced in building AI-powered applications, optimizing performance, and collaborating across teams. Passionate about problem-solving, system design, and delivering impactful solutions.",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "NestJS",
    "Python",
    "C++",
    "C#",
    "AWS",
    "Docker",
    "Linux",
    "LangChain",
    "LLMs",
    "RAG",
    "Deep Learning (NLP, CV)",
  ],
  experience: [
    {
      company: "株式会社 BeyondBrain",
      position: "Chief AI Officer & Full-Stack Engineer",
      period: "Mar 2024 – Present",
      description:
        "Leading the development of Lumi, an AI-powered travel assistant. Built a modular multi-agent AI system for travel-related queries (hotels, flights, restaurants). Established agile workflows, improving product iteration and user engagement.",
    },
    {
      company: "MixerBox / LivApp",
      position: "Full-Stack Engineer",
      period: "Mar 2021 – Mar 2024",
      description:
        "Developed full-stack solutions for AI-driven products, including MixerBox AI, NFT projects, and MixerBox Pay. Built cloud infrastructure on AWS (EKS, DynamoDB) and integrated Stripe payment flows. Enhanced user engagement with LLM and Stable Diffusion capabilities.",
    },
    {
      company: "NTU CSIE NASA",
      position: "Network Team Leader",
      period: "Jul 2018 – May 2021",
      description:
        "Led a team managing network security and system administration for NTU CSIE. Designed and deployed high-availability server architecture using VMWare, pfSense, and OpenVPN.",
    },
    {
      company: "Getac",
      position: "AI Engineer Intern",
      period: "Jul 2020 – Aug 2020",
      description:
        "Built a YOLO-based Automatic License Plate Recognition (ALPR) system using surveillance camera feeds. Established training workflows for computer vision and deep learning models.",
    },
  ],
  education: [
    {
      institution: "National Taiwan University",
      degree: "B.Sc. in Computer Science and Information Engineering",
      period: "Sep 2017 – Jun 2021",
    },
  ],
  awards: [
    {
      name: "Findings of EMNLP 2020",
      paperName:
        "Zero-Shot Rationalization by Multi-Task Transfer Learning from Question Answering",
    },
    {
      name: "DSTC9 Workshop at AAAI-21",
      paperName:
        "Multi-Task Learning for Situated Multi-Domain End-to-End Dialogue Systems",
    },
    {
      name: "EMNLP 2021 (Oral Paper)",
      paperName:
        "Efficient Multi-Task Auxiliary Learning: Selecting Auxiliary Data by Feature Similarity",
    },
  ],
  contact: {
    email: "sam9883043@gmail.com",
    linkedin: "https://linkedin.com/in/tse-hsuan-yang",
    github: "https://github.com/tsehsuan1102",
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
