"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/DataCard/DataCard";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const jobsData: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "We&apos;re looking for a talented frontend developer to join our team and create amazing user experiences.",
  },
  {
    id: "2",
    title: "Backend Engineer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Join our backend team to build scalable and efficient systems that power our applications.",
  },
  {
    id: "3",
    title: "UX Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Help us create beautiful and intuitive user experiences that delight our customers.",
  },
  {
    id: "4",
    title: "Product Manager",
    department: "Product",
    location: "London, UK",
    type: "Full-time",
    description:
      "Drive the vision and strategy for our product line, working closely with all teams.",
  },
  {
    id: "5",
    title: "Data Scientist",
    department: "Data",
    location: "Remote",
    type: "Full-time",
    description:
      "Apply machine learning and statistical models to solve complex problems and drive insights.",
  },
];

async function getJobs(
  page: number = 1,
  pageSize: number = 4
): Promise<{ jobs: Job[]; total: number }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedJobs = jobsData.slice(start, end);

  return {
    jobs: paginatedJobs,
    total: jobsData.length,
  };
}

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [page, setPage] = useState(1);
  const [totalJobs, setTotalJobs] = useState(0);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const pageSize = 4;

  useEffect(() => {
    async function fetchJobs() {
      setLoading(true);
      const { jobs, total } = await getJobs(page, pageSize);
      setJobs(jobs);
      setTotalJobs(total);
      setLoading(false);
    }
    fetchJobs();
  }, [page]);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(totalJobs / pageSize);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl mb-8 max-w-2xl">
            We&apos;re on a mission to change the world. If you&apos;re
            passionate, innovative, and ready for a challenge, we want you on
            our team.
          </p>
          <Button size="lg" variant="secondary">
            Learn More About Us
          </Button>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Open Positions</h2>

          {/* Search Bar */}
          <div className="mb-8 relative">
            <Input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={20}
            />
          </div>

          {/* Job Listings */}
          <div className="grid gap-6 mb-8">
            {loading
              ? Array.from({ length: pageSize }).map((_, index) => (
                  <JobSkeleton key={index} />
                ))
              : filteredJobs.map((job) => <JobCard key={job.id} job={job} />)}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center">
            <Button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1 || loading}
              variant="outline"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {page} of {totalPages}
            </span>
            <Button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages || loading}
              variant="outline"
            >
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don&apos;t See the Right Fit?
          </h2>
          <p className="text-xl mb-8">
            We&apos;re always looking for talented individuals to join our team.
            Send us your resume, and we&apos;ll keep you in mind for future
            opportunities.
          </p>
          <Button size="lg">Submit Your Resume</Button>
        </div>
      </section>
    </div>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold">{job.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {job.department}
            </p>
          </div>
          <Badge variant="secondary">{job.type}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{job.description}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          {job.location}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Apply Now</Button>
      </CardFooter>
    </Card>
  );
}

function JobSkeleton() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <Skeleton className="h-8 w-64 mb-2" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-6 w-20" />
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        <Skeleton className="h-4 w-32" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  );
}
