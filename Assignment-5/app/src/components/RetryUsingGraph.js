import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "./Query";
const RetryUsingGraph = () => {
  const { loading, error, data ,refetch} = useQuery(GET_LOCATIONS);
  if (loading) return <p>Loading...</p>;
  const reassign = () => {
    refetch() ;
  }
  if (error) return <button onClick={reassign} >Refresh</button>

  return (
    <>
      {data.locations.map(({ id, name, description, photo }) => (
        <div key={id}>
          <h3>{name}</h3>
          <img
            width="400"
            height="250"
            alt="location-reference"
            src={`${photo}`}
          />
          <br />
          <b>About this location:</b>
          <p>{description}</p>
          <br />
        </div>
      ))}
    </>
  );
};

export default RetryUsingGraph;
