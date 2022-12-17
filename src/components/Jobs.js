import Job from "./Job";
import jobJson from "../jobs.json";

// console.log(jobJson);

const Jobs = () => {
  return (
    <main>
      <div className="container jobs-container">
        {jobJson.map((element) => {
          // console.log("element =>", element);
          return (
            <Job
              key={element.id}
              className={element.className}
              title={element.title}
              contractType={element.contractType}
              country={element.country}
              city={element.city}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Jobs;
