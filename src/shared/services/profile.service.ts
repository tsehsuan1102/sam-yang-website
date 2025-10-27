// 个人信息服务，模拟 NestJS 的服务架构

// 个人资料接口
export interface Profile {
  awards: {
    name: string;
    paperName: string;
  }[];
  bio: string;
  contact: {
    email: string;
    github?: string;
    linkedin?: string;
  };
  education: {
    degree: string;
    institution: string;
    period: string;
  }[];
  experience: {
    company: string;
    description: string;
    period: string;
    position: string;
  }[];
  name: string;
  skills: string[];
  title: string;
}

// Mock 数据，这里需要用户替换为自己的信息
const profileData: Profile = {
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
  bio: "Adaptable Software Engineer with expertise in full-stack development, LLM applications, and scalable software solutions. Experienced in building AI-powered applications, optimizing performance, and collaborating across teams. Passionate about problem-solving, system design, and delivering impactful solutions.",
  contact: {
    email: "sam9883043@gmail.com",
    github: "https://github.com/tsehsuan1102",
    linkedin: "https://linkedin.com/in/tse-hsuan-yang",
  },
  education: [
    {
      degree: "B.Sc. in Computer Science and Information Engineering",
      institution: "National Taiwan University",
      period: "Sep 2017 – Jun 2021",
    },
  ],
  experience: [
    {
      company: "Marvis Japan",
      description:
        "Developing AI automation agent applications and enterprise solutions. Building AI-powered systems to optimize business processes for B2B clients, including computer vision applications.",
      period: "Jul 2025 – Present",
      position: "AI Engineer",
    },
    {
      company: "株式会社 BeyondBrain",
      description:
        "Leading the development of Lumi, an AI-powered travel assistant. Built a modular multi-agent AI system for travel-related queries (hotels, flights, restaurants). Established agile workflows, improving product iteration and user engagement.",
      period: "Mar 2024 – Mar 2025",
      position: "Chief AI Officer & Full-Stack Engineer",
    },
    {
      company: "MixerBox / LivApp",
      description:
        "Developed full-stack solutions for AI-driven products, including MixerBox AI, NFT projects, and MixerBox Pay. Built cloud infrastructure on AWS (EKS, DynamoDB) and integrated Stripe payment flows. Enhanced user engagement with LLM and Stable Diffusion capabilities.",
      period: "Mar 2021 – Mar 2024",
      position: "Full-Stack Engineer",
    },
    {
      company: "NTU CSIE NASA",
      description:
        "Led a team managing network security and system administration for NTU CSIE. Designed and deployed high-availability server architecture using VMWare, pfSense, and OpenVPN.",
      period: "Jul 2018 – May 2021",
      position: "Network Team Leader",
    },
    {
      company: "Getac",
      description:
        "Built a YOLO-based Automatic License Plate Recognition (ALPR) system using surveillance camera feeds. Established training workflows for computer vision and deep learning models.",
      period: "Jul 2020 – Aug 2020",
      position: "AI Engineer Intern",
    },
  ],
  name: "Tse-Hsuan Yang",
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
  title: "AI & Full-Stack Engineer",
};

// 项目服务类
export class ProfileService {
  private profile: Profile;

  constructor() {
    this.profile = profileData;
  }

  getBio(): string {
    return this.profile.bio;
  }

  getContact() {
    return this.profile.contact;
  }

  getEducation() {
    return this.profile.education;
  }

  getExperience() {
    return this.profile.experience;
  }

  getName(): string {
    return this.profile.name;
  }

  getProfile(): Profile {
    return this.profile;
  }

  getSkills(): string[] {
    return this.profile.skills;
  }

  getTitle(): string {
    return this.profile.title;
  }
}

// 导出服务的单例实例
export const profileService = new ProfileService();
