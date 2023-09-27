import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "../src/components/Counter";
import Form from "../src/components/Form";
import UserProfile from "../src/components/UserProfile";
import ShowModal from "./components/ShowModal";

test("Counter increments and decrements correctly", () => {
  const { getByText } = render(<Counter />);
  expect(screen.getByText("Count: 0")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Decrement"));
  expect(screen.getByText("Count: 0")).toBeInTheDocument();
});

test("Form fields can be filled, and submit button works", () => {
  const mockOnLogin = jest.fn();

  const { getByLabelText, getByText } = render(<Form onLogin={mockOnLogin} />);

  const usernameInput = screen.getByLabelText("Username:");
  const passwordInput = screen.getByLabelText("Password:");

  fireEvent.change(usernameInput, { target: { value: "testuser" } });
  fireEvent.change(passwordInput, { target: { value: "testpassword" } });

  expect(usernameInput.value).toBe("testuser");
  expect(passwordInput.value).toBe("testpassword");

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  expect(mockOnLogin).toHaveBeenCalledWith({
    username: "testuser",
    password: "testpassword",
  });
});

test("User profile information is correctly displayed", async () => {
  const { getByText } = await render(
    <UserProfile
      name="Kaushal Kumar Yadav"
      email="kaushalyad321@gmail.com"
      phone="+918797196867"
    />
  );

  expect(screen.getByText("Name :Kaushal Kumar Yadav")).toBeInTheDocument();
  expect(
    screen.getByText("Email :kaushalyad321@gmail.com")
  ).toBeInTheDocument();
  // expect(screen.getByText("Phone :+918797196867")).toBeInTheDocument();
});

test("Modal opens and closes when triggered", () => {
  const { getByText, queryByText } = render(<ShowModal />);
  expect(
    screen.queryByText("This is the modal content.")
  ).not.toBeInTheDocument();

  fireEvent.click(screen.getByText("Open Modal"));
  expect(screen.getByText("Hi this is new React App made from scratch so don't take it seriously.")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Close"));
  expect(
    screen.queryByText("This is the modal content.")
  ).not.toBeInTheDocument();
});
