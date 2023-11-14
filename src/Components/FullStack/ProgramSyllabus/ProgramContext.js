import { createContext } from "react";

const ProgramContext = createContext([
    {
        id: 1,
        heading: "Web Development Basics - HTML, CSS, BootStrap",
        week: '1-2',
        desc: 'Get to learn how websites work. Start your web development journey with the basics of HTML and learn how to create impressive websites using HTML, CSS, and Bootstrap.',
        course: ["How websites work", "Web Development Overview - Advantages", "HTML Introduction", "Structure of Webpage", "HTML Tags",
            "Texts, Images, Videos", "Lists, Forms, Tables", "Links, Anchor tags", "HTML Divs", "CSS Introduction", "Inline vs Internal vs External styling",
            "CSS Display", "CSS Font Styling, background, margin, padding", "Styling Lists, Tables, Forms", "FontAwesome", "Transitionals, Transformations, Animations",
            "Styling button", "Tool tip, Box Sizing, Flex, Grid", "Bootstrap containers", "Bootstrap Tables,Images, Colors", "Bootstrap Alerts, Buttons",
            "Bootstrap Spinners, Cards, Pagination, Drop Down", "Bootstrap Corousel"]
    },
    {
        id: 2,
        heading: "Javascript",
        week: "3-4",
        desc: "Deep dive into the world of Javascript, one of the commonly used languages for web development. Explore the basics of JS, promises, closures, and complete Javascript.",
        course: ["Introduction to Javascript", "Variables, scoping, Data type", "Strings and Numbers", "Operators and loops", "Functions",
                "Arrays and Objects", "Data Structures - List, Stack, Queues, Maps", "Hashing", "Understanding and working with DOM",
                "Developer tools in Browsers", "Prototypes", "Closures", "Browser Local Storage", "Jquery, Ajax", "Promises",
                "ES5 vs ES6 vs ES7", "Eventloop in Javascript"]
    },
    {
        id: 3,
        heading: "ReactJS",
        week: "5-7",
        desc: "Most of the websites getting built nowadays are using React, so why should you stay behind. Learn all the components of React, understand how React is better, and don't just learn, build amazing web apps using react.",
        course: ["React Intro", "Node installation", "Create an app using create-react-app", "Understanding basics of react app", "Understanding JSX", 
                "Understanding virtual DOMS , Single page apps", "React Lifecycle", "States, class components vs functional components",
                "Event handling, props", "Building forms in React", "Routes", "Conditional Rendering", "Pure Components", "High order components",
                "Controlled vs Uncontrolled components", "Redux", "Babel, Webpack", "Axios, Creating a mock server", "SASS overview"]
    },
    {
        id: 4,
        heading: "NodeJs",
        week: "7-9",
        desc: "Always thinking about how to build servers? Its time to build one. Learn about express, security, authentication, restricting routes, hashing passwords, and JWT’s, and much more.",
        course: ["Creating a Simple Server", "Response types - HTML, JSON", "Routing", "Express Introduction", "Intergrate Frontend and Backend",
                "Express Params and Query String", "Express Middleware", "API Authentication", "JWT Token, Passport.js", "Socket Programming"]
    },
    {
        id: 5,
        heading: "Databases - MongoDB",
        week: "10",
        desc: "Want to know how companies manage all their Data and how on a click of a button all the data is there? Don't just learn, master the concepts of Databases. Be a pro in managing data using MongoDB.",
        course: ["SQL vs NOSQL", "MongoDB overview", "Installing MongoDB", "Connecting and Inserting Data", "Deleting and updating Data", 
                "Understanding CRUD operations"]
    },
    {
        id: 6,
        heading: "Code Review + Deployment",
        week: "11",
        desc: "Developers don't just write code, they write production level code. Learn how to write production-level code, deploy your projects, and flaunt it to the world.",
        course: ["Tools for Code review", "Understand Review Board", "Understanding Firebase", "Github", "Deploy using Netlify and Github",
                "Get code review by Software Developers", "Deploy all the projects"]
    }
])

export default ProgramContext