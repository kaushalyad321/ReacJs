import React from "react";
import InputField from "../Components/InputField";
import Form from "../Components/Form";
import SpecificInputValue from "../Components/SpecificInputValue";
import CheckPassword from "../Components/CheckPassword";
import DropDownMenu from "../Components/DropDownMenu";
import ToDoList from "../Components/ToDoList";
import TempConverter from "../Components/TempConverter";
import FormValidation from "../Components/FormValidation";
import FormSubmitOrNot from "../Components/FormSubmitOrNot";
import FormValidationRule from "../Components/FormValidationRule";
import DataTable from '../Components/DataTable'
import Sidebar from "../Components/Sidebar";
import FilterComponent from "../Components/FilterComponent";
import ShowModel from '../Components/ShowModel'
const AssignmentFour = () => {
    return (
      <div>
        <p className="quest">
          1.Create a React component with an input field. Implement it as a
          controlled component where the input value is controlled by the
          component's state. When the user types into the input field, the
          component's state should update accordingly.
        </p>
        <InputField />
        <p className="quest">
          2.Build a form that includes various input fields like text inputs,
          checkboxes, and radio buttons. Ensure that each input is a controlled
          component. When the user submits the form, log the form data to the
          console.
        </p>
        <Form />
        <p className="quest">
          3.Create a component with controlled input field and a button. When the
          user enters a specific value into the input (e.g., "show"), a new
          component should be rendered below the input, displaying a message.
          Otherwise, nothing should be displayed.
        </p>
        <SpecificInputValue />
        <p className="quest">
          4.Build a registration form with two password fields. Implement
          controlled components for both password inputs. Add a validation rule to
          ensure that the two passwords match before allowing the form submission.
        </p>
        <CheckPassword />
        <p className="quest">
          5.Construct a select dropdown menu with multiple options. Control the
          selected option using state. When an option is selected, display a
          message showing the selected value.
        </p>
        <DropDownMenu />
  
        <p className="quest">
          6.Build a simple todo list component with a text input for adding new
          tasks and a list to display them. Use controlled components to handle
          the input and update the list of tasks.
        </p>
        <ToDoList />
        <p className="quest">
          7.Design a search filter component that consists of an input field. As
          the user types into the input, use controlled components to filter a
          list of items displayed below. The list should dynamically update to
          show only items matching the search query.
        </p>
        <FilterComponent />
        <p className="quest">
          8.Create a temperature converter component with two input fields: one
          for Celsius and one for Fahrenheit. Implement controlled components for
          both inputs. When the user enters a value in one input, the other input
          should update with the converted temperature.
        </p>
        <TempConverter />
        <p className="quest">
          9.Implement a responsive sidebar navigation using Material-UI's Drawer
          component. Include links that allow users to navigate between different
          sections of your web app.
        </p>
        <Sidebar />
        <p className="quest">
          10.Create a form with Material-UI text fields and implement form
          validation. Ensure that error messages are displayed when the user
          enters invalid data.
        </p>
        <FormValidation />
        <p className="quest">
          11.Design a modal dialog component using Material-UI's Dialog component.
          Use it to display additional information or capture user input within
          your app.
        </p>
       <ShowModel />
        <p className="quest">
          12.Build a data table using Material-UI's Table component. Populate the
          table with sample data and add features like sorting and pagination.
        </p>
        <DataTable />
        <p className="quest">
          13.install Yup. Define a Yup validation schema for a more complex form.
          Include validation rules for fields like email, password, and phone
          number. Ensure that error messages are displayed for each validation
          rule. Implement real-time validation feedback using Material-UI's
          TextField component. Show validation errors as the user types, and clear
          the errors when the input is valid.(Use Formik as well)
        </p>
        <FormValidationRule />
        <p className="quest">
          14.Create a new form and Implement form submission handling. Ensure that
          the form cannot be submitted if there are validation errors. Display a
          summary of errors if the user attempts to submit an invalid form.
        </p>
        <FormSubmitOrNot />
      </div>
    );
  };
  
  export default AssignmentFour;
  