// 项目服务，处理项目列表数据

export interface Project {
  description: string;
  featured: boolean;
  githubUrl?: string;
  id: string;
  imageUrl?: string;
  liveUrl?: string;
  technologies: string[];
  title: string;
}

// Mock 项目数据，需要用户替换为自己的项目
const projectsData: Project[] = [
  {
    description:
      "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.",
    featured: true,
    githubUrl: "https://github.com/yourusername/ecommerce",
    id: "project1",
    imageUrl: "/projects/ecommerce.jpg",
    liveUrl: "https://ecommerce-demo.com",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    title: "E-commerce Platform",
  },
  {
    description:
      "A task management application with features like task creation, assignment, due dates, and status tracking.",
    featured: true,
    githubUrl: "https://github.com/yourusername/taskmanager",
    id: "project2",
    imageUrl: "/projects/taskmanager.jpg",
    liveUrl: "https://taskmanager-demo.com",
    technologies: ["Angular", "NestJS", "PostgreSQL", "Docker"],
    title: "Task Management App",
  },
  {
    description:
      "A weather forecast application that fetches data from weather APIs and displays forecasts for different locations.",
    featured: false,
    githubUrl: "https://github.com/yourusername/weather-app",
    id: "project3",
    imageUrl: "/projects/weather.jpg",
    technologies: ["React", "Redux", "OpenWeatherMap API"],
    title: "Weather Forecast App",
  },
  {
    description:
      "A blog platform with features like post creation, commenting, user profiles, and search functionality.",
    featured: false,
    githubUrl: "https://github.com/yourusername/blog-platform",
    id: "project4",
    imageUrl: "/projects/blog.jpg",
    liveUrl: "https://blog-demo.com",
    technologies: ["Next.js", "GraphQL", "Apollo", "MongoDB"],
    title: "Blog Platform",
  },
];

// 项目服务类
export class ProjectsService {
  private projects: Project[];

  constructor() {
    this.projects = projectsData;
  }

  getAllProjects(): Project[] {
    return this.projects;
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter((project) => project.featured);
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }

  searchProjects(query: string): Project[] {
    const lowercaseQuery = query.toLowerCase();
    return this.projects.filter(
      (project) =>
        project.title.toLowerCase().includes(lowercaseQuery) ||
        project.description.toLowerCase().includes(lowercaseQuery) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(lowercaseQuery)
        )
    );
  }
}

// 导出服务的单例实例
export const projectsService = new ProjectsService();
