export type Job = {
  id: number;
  name: string;
  description: string;
  tags: { id: number; name: string }[];
  salary: number;
  unit: string;
  experience_level: string;
  job_type: string;
  location: string;
  created_at: string;
  filledById: number;
  postedById: number;
  postedBy: { name: string; email: string };
};
