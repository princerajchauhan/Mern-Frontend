import { createContext } from "react";

const ProjectData = createContext([
    {
        id: 1,
        photo: './images/project/HTML_HTML.svg',
        heading: 'HTML Blog Page',
        desc: 'Start your web development by making a simple blog page using HTML.'
    },
    {
        id: 2,
        photo: './images/project/Clock.svg',
        heading: 'Reminder Clock App',
        desc: 'Want to build an app to keep your reminders? Build your own Digital Reminder Clock App using HTML, CSS and JS'
    },
    {
        id: 3,
        photo: './images/project/app_todo.svg',
        heading: 'ToDo App',
        desc: 'This will be a basic project to make your understanding of HTML and CSS clear but you can use it to keep your ToDos as well.'
    },
    {
        id: 4,
        photo: './images/project/app_blog.svg',
        heading: 'React Blog App',
        desc: 'Create your own Medium website. Through the project you will understand how React , Node and MongoDB work together to create magic.'
    },
    {
        id: 5,
        photo: './images/project/app_shopping.svg',
        heading: 'E-commerce Web App',
        desc: 'This will be one of the major projects of the program. It will be a full-fledged working website. Just add some products and you will be ready to sell online and take payments.'
    }
])

export default ProjectData