import JobItem from "./JobItem/JobItem";

const baseUrl = process.env.BASE_URL;

const AllJobs = async () => {
  const res = await fetch(`${baseUrl}/jobs`);
  const data = await res.json();
  const Jobs = data.data[0].data;

  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 xl:px-60 flex flex-col gap-6 mx-auto w-full md:w-9/10 xl:w-4/5">
      {Jobs?.map((Job) => (
        <JobItem
          key={Job.id}
          id={Job.id}
          icon={Job.image}
          jobType={Job.job_type}
          jobTitle={Job.title}
          location={Job.location}
          salary={Job.salary_range ? Job.salary_range : ""}
          salaryType={Job.job_type}
          link="/"
        />
      ))}
    </div>
  );
};

export default AllJobs;
