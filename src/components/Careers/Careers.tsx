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
import { makeApiCall } from "@/lib/utils";
import urls from "@/constant/url";
import Job from "@/types/careers";

async function getJobs(
  page: number = 1,
  pageSize: number = 4
): Promise<{ jobs: Job[]; total: number }> {
  let jobsData: Job[] = [];
  try {
    const res = await makeApiCall({
      url: `${process.env.API_URL}${urls.careers}`,
      method: "GET",
    });
    if (!res) {
      return { jobs: [], total: 0 };
    }
    jobsData = await res.data;
  } catch (error: unknown) {
    console.error("Failed to fetch faq data:", error);
  }

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
    <>
      {jobs && jobs.length > 0 ? (
        <div className="min-h-screen bg-blue-100 font-verdana">
          {/* Hero Section */}
          <section className="bg-primary text-primary-foreground py-20">
            <div className="container mx-auto px-4 flex flex-col justify-center items-center">
              <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl mb-8 max-w-2xl">
                We&apos;re on a mission to change the world. If you&apos;re
                passionate, innovative, and ready for a challenge, we want you
                on our team.
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
                  : filteredJobs.map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
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
              <p className="text-xl mb-8 p-8">
                We&apos;re always looking for talented individuals to join our
                team. Send us your resume, and we&apos;ll keep you in mind for
                future opportunities.
              </p>
              <a href="mailto:inquiry@virucut.in">
                <Button size="lg" className="hover:text-blue-800">
                  Click here to send your resume to: inquiry@virucut.in
                </Button>
              </a>
            </div>
          </section>
        </div>
      ) : (
        <MailForJob />
      )}
    </>
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
        <a
          href="mailto:inquiry@virucut.in"
          className="w-full text-blue-800 bg-blue-200 border-2 border-blue-500 rounded-lg hover:bg-blue-400 hover:text-white"
        >
          <Button className="w-full">Apply now</Button>
        </a>
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

function MailForJob() {
  return (
    <section className="py-12 bg-gray-100 min-h-[60vh] flex items-center font-verdana">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-6">
          We&apos;re Hiring!
        </h1>
        <p className="text-lg text-center text-gray-700 mb-4 md:w-[50rem] lg:w-[50rem]">
          <strong>VIRUCUT India Private Limited</strong> is growing, and we are
          excited to announce multiple openings across various positions. If you
          are passionate, skilled, and ready to take on new challenges, we want
          to hear from you!
        </p>
        <p className="text-lg text-center text-gray-700">
          Please send your resume to:{" "}
          <a
            href="mailto:inquiry@virucut.in"
            className="text-blue-600 underline hover:text-blue-800"
          >
            inquiry@virucut.in
          </a>
        </p>
      </div>
    </section>
  );
}
