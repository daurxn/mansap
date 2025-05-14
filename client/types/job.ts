import type { JobApplication } from "./application";

export type Job = {
  id: number;
  name: string;
  description: string;
  tags: { id: number; name: string }[];
  salary: number;
  unit: "HOUR" | "DAY" | "PROJECT";
  experienceLevel: "JUNIOR" | "MID" | "SENIOR";
  jobType: "FULL_TIME" | "PART_TIME" | "CONTRACT";
  location: { id: number; name: string };
  locationId: number;
  createdAt: string;
  filledById: number;
  postedById: number;
  applied: boolean;
  is_applicable: boolean;
  applications: JobApplication[];
  postedBy: { name: string; email: string };
  _count: {
    applications: number;
  };
};
