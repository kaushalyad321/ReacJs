import "./App.css";
import Counter from "./components/Counter";
import Form from "./components/Form";
import UserProfile from "./components/UserProfile";
import LazyComponentMain from './components/LazyComponent/LazyComponentMain';
import LazyComponentErrorBoundary from '../src/components/LazyComponentErrorBoundary'
import ShowModal from "../src/components/ShowModal";
function App() {
  return (
    <>
      <p className="quest">
        1.Create a React application that has multiple pages represented as
        components. Implement lazy loading for these components using React's
        lazy and Suspense features. When a user navigates to a particular page,
        the component should be loaded lazily, improving the application's
        initial loading time.
      </p>
      <LazyComponentMain />
      <p className="quest">
        2.Extend Question 1 to include error handling. If a lazy-loaded
        component fails to load, display a user-friendly error message to the
        user instead of crashing the application. Implement this using the
        ErrorBoundary component.
      </p>
      <LazyComponentErrorBoundary />
      <p className="quest">
        3.Create a React component named Counter that displays a number and two
        buttons, one for incrementing the number and another for decrementing
        it. Write tests using React Testing Library to ensure that the component
        behaves as expected.
      </p>
      <Counter />
      <p className="quest">
        4.You are given a simple form component (LoginForm) that contains input
        fields for username and password, as well as a submit button. Create
        test cases to verify that the form fields can be filled, and the submit
        button works correctly.
      </p>
      <Form />
      <p className="quest">
        5.Implement a React component (UserProfile) that displays user profile
        information such as name, email, and phone number. Write tests to ensure
        that the user profile information is correctly displayed when the
        component receives user data as props.
      </p>
      <UserProfile name='Kaushal Kumar Yadav' email='kaushalyad321@gmail.com' phone='+918797196867'/>
      <p className="quest">
        6.Create a React component (Modal) that displays a modal dialog with
        content. Users can open and close the modal. Write tests to check if the
        modal opens and closes when triggered.
      </p>
      <ShowModal />
    </>
  );
}

export default App;
