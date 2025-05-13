export type Job = {
  id: number;
  name: string;
  description: string;
  tags: { id: number; name: string }[];
  salary: number;
  unit: "HOUR" | "DAY" | "PROJECT";
  experienceLevel: "JUNIOR" | "MID" | "SENIOR";
  jobType: "FULL_TIME" | "PART_TIME" | "CONTRACT";
  location: string;
  locationId: number;
  created_at: string;
  filledById: number;
  postedById: number;
  postedBy: { name: string; email: string };
  mediaType: "none" | "video" | "image";
  mediaLink: string;
  _count: {
    applications: number;
  };
};
