import Greeting from "./appComponent/Greeting";
import UserCard from "./appComponent/UserCard";
import Weather from "./appComponent/Weather";
import Counter from "./appComponent/Counter";
import CounterWithState from "./appComponent/CounterWithState";
import UserButton from "./appComponent/UserButton";
import TaskList from "./appComponent/TaskList";
import "./App.css";

function App() {
  return (
    <>
      <p className="quest">
        1.Create a functional component named Greeting that displays a simple
        "Hello, React!" message on the screen.Import and render the Greeting
        component in the App component.
      </p>
      <Greeting />
      <p className="quest">
        2.Create a functional component named UserCard that accepts the
        following props: name, email, and avatarURL. Use the props to display
        the user's name, email, and an image (avatar) in the UserCard component.
        Create multiple instances of the UserCard component with different user
        data.
      </p>
      <UserCard
        name="Kaushal Kumar Yadav"
        email="kaushalyad321@gmail.com"
        avatarURL="./Images/5.jpg"
      />
      <UserCard
        name="Mohan Kumar Yadav"
        email="mohanyad321@gmail.com"
        avatarURL="./Images/6.jpg"
      />
      <UserCard
        name="Rohan Kumar Yadav"
        email="rohanyad321@gmail.com"
        avatarURL="./Images/10.jpg"
      />
      <p className="quest">
        3.Create a functional component named Weather that accepts a prop called
        temperature (a number). Display a message like "It's sunny today!" if
        the temperature is above 25°C and "It's cold today!" if the temperature
        is below 10°C. Import and render the Weather component in the App
        component with different temperature values.
      </p>
      <Weather number={12} />
      <Weather number={27} />
      <Weather number={6} />
      <p className="quest">
        4.Create a functional component named Counter that displays a count and
        two buttons: "Increment" and "Decrement". Implement event handlers for
        the "Increment" and "Decrement" buttons to increase and decrease the
        count. Display the updated count on the screen.
      </p>
      <Counter />
      <p className="quest">
        5.Create a functional component named TaskList that accepts an array of
        task names as a prop. Use the map function to render each task name as a
        list item. Import and render the TaskList component in the App component
        with an array of tasks.
      </p>
      <TaskList
        task={[
          "Prepare my presentation for the annual meeting",
          "Order online 5 new caster wheels for my office chair",
          "Finish the summary of the white paper and send it to Peter",
          "Call Jim and ask about the quote",
          "Sign and mail the letters to our 5 VIP partners",
        ]}
      />
      <p className="quest">
        6.Create a functional component named Button that accepts props for text
        and color. Style the button using inline styles or CSS classes based on
        the color prop. Import and render the Button component in the App
        component with different text and color props.
      </p>
      <UserButton buttonName="Button-1" buttonColor="blue" />
      <UserButton buttonName="Button-2" buttonColor="red" />
      <UserButton buttonName="Button-3" buttonColor="Green" />
      <p className="quest">
        7.Create a functional component named CounterWithState that displays a
        count and buttons to increment and decrement it. Use the useState hook
        to manage the count state. Implement event handlers to update the count
        state accordingly.
      </p>
      <CounterWithState />
    </>
  );
}
export default App;
