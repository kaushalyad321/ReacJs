import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = (WrappedComponent, apiUrl) => {
  return function DataFetchingComponent(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      axios
        .get(apiUrl)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, []);

    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <WrappedComponent data={data} {...props} />
        )}
      </div>
    );
  };
};

function DisplayData({ data }) {
  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {Object.keys(data).map((key) => {
          return (
            <div key={key}>
              <span>{key}:</span>
              <span>{data[key]}</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

const WrappedComponentWithData = DataFetching(
  DisplayData,
  "https://catfact.ninja/fact"
);

function HocComponentForDataFetching() {
  return (
    <div>
      <WrappedComponentWithData />
    </div>
  );
}

export default HocComponentForDataFetching;
