import pizzaLandImg from './images/pizza-land.jpg';
import weeklyPlannerImg from './images/weekly-planner.jpg';

export const projects = [
  {
    name: "pizza land",
    demo: "https://milan-dzeki.github.io/pizza-land-project/",
    github: "https://github.com/milan-dzeki/pizza-land-project",
    img: pizzaLandImg,
    description: "This is the website for fictional pizza making company. It contains basic info about the company, management and customers. Besides that, its main functionality consists of ordering pizza. User can choose one or more pizzas among offered ones, or he can use mini 'pizza maker app', to create it's own pizza and order it. To order, and see these orders, signing up is required, which is being managed via Firebase. Due to simplicity, any random email address and password can be used to sign up. Also, there is a possibility for logging in with used email and password.",
    tech: "Website is made with React, with React Router Dom for multiple-page feel. For managing local states and component life cycles, class-based components were used - so no hooks were used here. For managing global state, Redux was used, with additional redux-thunk library, for managing asynchronous behaviour."
  },
  {
    name: "weekly planner",
    demo: "https://milan-dzeki.github.io/weekly-planner-react/",
    github: "https://github.com/milan-dzeki/weekly-planner-react",
    img: weeklyPlannerImg,
    description: "This is task manager for the whole week. Task can be added in the home page and the are stored in 'to to list'. There, there are buttons which are used to mark tasks as done or failed, or to edit and remove them. After the task is marked as done or failed, it is moved into appropriate list (done/failed), which can be viewed on it's own page. Also there is 'stats page', which manages statistics - the percentages of the accomplished, failed and undone tasks.",
    tech: "App is made with React, with React Router Dom for multi-page feel. For managing local states and component life cycles, functional components with React Hooks were used - so no class-based components were used here. For managing global state, Redux was used."
  }
];