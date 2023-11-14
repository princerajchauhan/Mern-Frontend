import { createContext } from "react";

const ProgramData = createContext([
    {
        id: 1,
        heading: "Frontend Development Basics",
        week: '1st Week - 4th Week',
        desc: 'Frontend Development Basics - HTML, CSS AND Github',
        course: ["How websites work", "Web Development Overview - Advantages", "HTML Introduction", "Structure of Webpage", "HTML Tags",
            "Texts, Images, Videos", "Lists, Forms, Tables", "Links, Anchor tags", "HTML Divs", "CSS Introduction", "Inline vs Internal vs External styling",
            "CSS Display", "CSS Font Styling, background, margin, padding", "Styling Lists, Tables, Forms", "FontAwesome", "Transitionals, Transformations, Animations",
            "Styling button", "Tool tip, Box Sizing, Flex, Grid", "Projects"]
    },
    {
        id: 2,
        heading: "Javascript Fundamentals & Problem Solving",
        week: "5th Week - 8th Week",
        desc: "Javascript Fundamentals & Problem Solving",
        course: ["Introduction to Javascript", "Variables, scoping, Data type", "Strings and Numbers", "Operators and loops", "Functions",
            "Arrays and Objects", "Data Structures - Stack, Queues, Maps, Sets", "Searching and Sorting Algorithms", "Problem Solving"]
    },
    {
        id: 3,
        heading: "Building Websites using JS",
        week: "9th Week - 12th Week",
        desc: "Building Websites using JS",
        course: ["Building Websites using JS", "Modifying Website Elements with JS", "Developer tools in Browsers", "Prototypes", "Closures",
            "Browser Local Storage", "Jquery, Ajax", "Promises", "ES5 vs ES6 vs ES7", "Eventloop in Javascript"]
    },
    {
        id: 4,
        heading: "React",
        week: "13th Week - 16th Week",
        desc: "React",
        course: ["React Intro", "Node installation", "Create an app using create-react-app", "Understanding basics of react app", "Understanding JSX",
            "Understanding virtual DOMS , Single page apps", "React Lifecycle", "States, class components vs functional components",
            "Event handling, props", "Building forms in React", "Routes", "Conditional Rendering", "Pure Components", "High order components",
            "Controlled vs Uncontrolled components", "Redux", "Babel, Webpack", "Axios, Creating a mock server", "SASS overview"]
    },
    {
        id: 5,
        heading: "NodeJs",
        week: "17th Week - 19th Week",
        desc: "NodeJS",
        course: ["Creating a Simple Server", "Response types - HTML, JSON", "Routing", "Express Introduction", "Intergrate Frontend and Backend",
            "Express Params and Query String", "Express Middleware", "API Authentication", "JWT Token, Passport.js", "Socket Programming"]
    },
    {
        id: 6,
        heading: "Database",
        week: "20th Week - 22nd Week",
        desc: "Database",
        course: ["SQL vs NOSQL", "MongoDB/DynamoDB overview", "Installing MongoDB", "Connecting and Inserting Data", "Deleting and updating Data",
            "Understanding CRUD operations", "Understanding Firebase"]
    },
    {
        id: 7,
        heading: "Code Review & Deployment",
        week: "23rd - 24th Week",
        desc: "Code Review & Deployment",
        course: ["Deploy using Netlify and Github", "Get code review by Software Developers", "Deploy all the projects"]
    },
    {
        id: 8,
        heading: "Interview Preparation & Major Projects",
        week: "25th - 28th Week",
        desc: "Interview Preparation & Major Projects",
        course: ["HTML Blog Page", "ToDo App", "Reminder Clock App", "React Blog Web App", "Portfolio Building", "Ecommerce Web App(Major Project)",
            "Online Assessement Platform(Major Project)", "Resume Building"]
    },
    {
        id: 9,
        heading: "Interviews Opportunities",
        week: "28th Week Onwards",
        desc: "Interviews Opportunities with companies",
        course: []
    }
])

export default ProgramData