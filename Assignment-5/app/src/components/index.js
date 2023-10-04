
import FetchedData from "../components/FetchedData";
import Reapeating from '../components/ReapeatingDataFetching'
import DatafetchingSpinner from "../components/DatafetchingSpinner";
import DataFetchingAxios from "../components/DataFetchingAxios";
import ModifiedDataFetchingAxios from "../components/ModifiedDataFetchingAxious";
import AxiosFormPost from "../components/AxiosFormPost";
import PaginationFetchedData from "../components/PaginationFetchedData";
import DataFetchingUsingGraph from "../components/DataFetchingUsingGraph";
import GraphPagination from "../components/GraphPagination";
import RetryUsingGraph from '../components/RetryUsingGraph' ;
import ReusableButton from "../components/ReusableButton";
import HocComponentForDataFetching from "../components/HocComponentForDataFetching";
import WithLogger from "../components/WithLogger";
import HocRouter from '../components/HocRouter' ;
import CustomizedModal from '../components/CustomizedModal'
function AssignmentFive() {
  return (
    <div className="App">
      <p className="quest">
        1.Create a React component that fetches data from a public API (e.g.,
        JSONPlaceholder) and displays it on the page. Use the fetch function to
        make the request.
      </p>
      <FetchedData />
      
      <p className="quest">
        2.Implement error handling for the fetch request. Display an error
        message if the request fails and provide a way for the user to retry the
        request.
      </p>
      <Reapeating />
      <p className="quest">
        3.Add a loading indicator (e.g., a spinner) to the component. Display it
        while the data is being fetched and hide it once the data is loaded.
      </p>
      <DatafetchingSpinner />
      <p className="quest">
        4.Fetch a large dataset from an API and implement pagination. Display a
        limited number of items per page and provide navigation controls to load
        more pages of data.
      </p>
      <PaginationFetchedData />
      <p className="quest">
        5.Create a React component that fetches data from a public API (e.g.,
        JSONPlaceholder) using Axios and displays it on the page.
      </p>
      <DataFetchingAxios />
      <p className="quest">
        6.Modify the previous assignment to implement error handling using
        Axios. Display an error message if the request fails and provide a way
        for the user to retry the request.
      </p> 
      <ModifiedDataFetchingAxios />
      <p className="quest">
        7.Create a form in your React component that allows the user to input
        data (e.g., a post title and content). Use Axios to send a POST request
        to an API endpoint, posting the user's data.
      </p>
     <AxiosFormPost />
      <p className="quest">
        8.set up a GraphQL client library like Apollo Client. Create a simple
        component that uses the client to fetch and display data from a GraphQL
        API.
      </p>
      <DataFetchingUsingGraph />
      <p className="quest">
        9.Create a React component that makes GraphQL queries to retrieve a list
        of items (e.g., a list of books, movies, or products) from a GraphQL
        API. Implement pagination for large datasets and display the data in a
        user-friendly way.
      </p>
      <GraphPagination />
      <p className="quest">
        10.Extend the previous assignment to allow users to perform mutations,
        such as adding, updating, or deleting items. Implement a form and
        mutation queries to interact with the GraphQL API.
      </p>
      <p className="quest">
        11.Demonstrate how to handle errors in GraphQL queries and mutations.
        Create a React component that displays error messages when GraphQL
        requests fail and provides a way for users to retry the request.
      </p>
      <RetryUsingGraph />
      <p className="quest">
        12.Create a reusable Button component in React that accepts props for
        different styles (e.g., primary, secondary, danger) and click handlers.
        Demonstrate how to use this component in a sample application.
      </p>
      <ReusableButton name='primary'/>
      <ReusableButton name='secondary' />
      <ReusableButton name='danger' />
      <p className="quest">
        13.Design and implement a Modal component in React. Allow customization
        of the modal content and provide options to open, close, and toggle the
        modal. Use this component to display various types of content.
      </p>
      <CustomizedModal />
      <p className="quest">
        14.Create an HOC named withAuth that restricts access to a specific
        component to authenticated users only. Implement this HOC on a sample
        component and demonstrate how it protects routes.
      </p>
      <HocRouter />
      <p className="quest">
        15.Build an HOC called withLogger that logs the events of a component
        (e.g., mounting, unmounting, updating). Apply this HOC to a component
        and display the logs in the browser console.
      </p>
      <WithLogger />
      <p className="quest">
        16.Develop an HOC named withDataFetching that fetches data from an API
        and passes it as props to a component. Use this HOC to retrieve and
        display data in a component.
      </p>
      <HocComponentForDataFetching />
    </div>
  );
}

export default AssignmentFive;
