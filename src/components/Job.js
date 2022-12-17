const Job = ({ className, city, contractType, country, title }) => {
  return (
    <div className={`job-square ${className}`}>
      {title ? <h2>{title}</h2> : <h2>Non renseigné</h2>}
      <div className="job-square-bottom">
        <p>{contractType} -</p>
        <p>{country} -</p>
        <p>{city}</p>
      </div>
    </div>
  );
};

export default Job;
