export interface Project {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  details: {
    objective: string;
    role: string;
    tools: string;
    duration: string;
  };
  link: string;
}
