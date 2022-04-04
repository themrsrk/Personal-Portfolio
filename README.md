# Personal Portfolio 
<p align="center">
<img src="https://raw.githubusercontent.com/PhantomScript/asset-container/b26b0ebaaa13bec7fac796ee0b8296676df6ee0b/developer-portfolio/website.svg" alt="" width="450px"/>
</p>

## Want to create a professional portfolio but cannot figure out how to? Use Personal Portfolio and create your own personalised portfolio today! With multiple themes to choose from, our easily customisable, user friendly website is designed to cater to developers and freelancers alike.

<br />


<br /><br />


# Sections :bookmark:
- HOME
- ABOUT
- RESUME
    - EDUCATION
    - SKILLS
    - EXPERIENCE
    - PROJECTS 
    - Achievements <br />
- SERVICES 
- CONTACTS 

<br /><br />


## View live demo [here](https://themrsrk.github.io/Personal-Portfolio/).

<br />

# Themes :art:


<div style="display: flex; justify-content: space-between;">
    <img src="/Users/shahrukhsiddiqui/eclipse/Personal-Portfolio/src/assets/images/output.png" width="48%" alt="">
    <img src="/Users/shahrukhsiddiqui/eclipse/Personal-Portfolio/src/assets/images/output.png" width="48%" alt="">
</div>
<br />
<br /> <br />

# Installation :arrow_down:
### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

## Also check [this](https://reactjs.org/docs/create-a-new-react-app.html) out if you are new to react.

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

<br />

# Getting Started :dart:
### Fork and Clone the repo

#### To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone hhttps://github.com/<YOUR GITHUB USERNAME>/developer-portfolio.git
cd developer-portfolio
```
### Install packages from the root directory
```
npm install
```
#### or
```
yarn install
```
### Start the development server
```
npm start
```
#### or
```
yarn start
```
<br />

# Folder Structure :open_file_folder:

```bash
├── LICENSE   
├── README.md        
├── package-lock.json
├── package.json     
├── public
│   ├── _redirects   
│   ├── favicon.ico  
│   ├── favicon.png
│   ├── favicon512.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── assets
│   │   ├── fonts
│   │   │   └── Bestermind
│   │   │       └── BestermindRegular.ttf
│   │   ├── pdf
│   │   │   └── resume.pdf
│   │   └── svg
│   │       ├── about
│   │       ├── contacts
│   │       ├── education
│   │       ├── experience
│   │       ├── projects
│   │       ├── skills
│   │       ├── social
│   │       └── testimonials
│   ├── components
│   │   ├── About
│   │   │   ├── About.css
│   │   │   └── About.js
│   │   ├── Achievements
│   │   │   ├── Achievements.css
│   │   │   └── Achievements.js
│   │   │   └── AchievementCard.js
│   │   ├── BackToTop
│   │   │   ├── BackToTop.css
│   │   │   └── BackToTop.js
│   │   ├── Blog
│   │   │   ├── Blog.css
│   │   │   ├── Blog.js
│   │   │   └── SingleBlog
│   │   │       ├── SingleBlog.css
│   │   │       └── SingleBlog.js
│   │   ├── Contacts
│   │   │   ├── Contacts.css
│   │   │   └── Contacts.js
│   │   ├── Education
│   │   │   ├── Education.css
│   │   │   ├── Education.js
│   │   │   └── EducationCard.js
│   │   ├── Experience
│   │   │   ├── Experience.css
│   │   │   ├── Experience.js
│   │   │   └── ExperienceCard.js
│   │   ├── Footer
│   │   │   ├── Footer.css
│   │   │   └── Footer.js
│   │   ├── Landing
│   │   │   ├── Landing.css
│   │   │   └── Landing.js
│   │   ├── Navbar
│   │   │   ├── Navbar.css
│   │   │   └── Navbar.js
│   │   ├── Projects
│   │   │   ├── Projects.css
│   │   │   ├── Projects.js
│   │   │   └── SingleProject
│   │   │       ├── SingleProject.css
│   │   │       └── SingleProject.js
│   │   ├── Services
│   │   │   ├── Services.css
│   │   │   ├── Services.js
│   │   │   └── SingleService
│   │   │       ├── SingleService.css
│   │   │       └── SingleService.js
│   │   ├── Skills
│   │   │   ├── Skills.css
│   │   │   └── Skills.js
│   │   ├── Testimonials
│   │   │   ├── Testimonials.css
│   │   │   └── Testimonials.js
│   │   └── index.js
│   ├── contexts
│   │   └── ThemeContext.js
│   ├── data
│   │   ├── aboutData.js
│   │   ├── achievementData.js
│   │   ├── blogData.js
│   │   ├── contactsData.js
│   │   ├── educationData.js
│   │   ├── experienceData.js
│   │   ├── headerData.js
│   │   ├── projectsData.js
│   │   ├── servicesData.js
│   │   ├── skillsData.js
│   │   ├── socialsData.js
│   │   ├── testimonialsData.js
│   │   └── themeData.js
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── Blog
│   │   │   ├── BlogPage.css
│   │   │   └── BlogPage.js
│   │   ├── Main
│   │   │   └── Main.js
│   │   ├── Project
│   │   │   ├── ProjectPage.css
│   │   │   └── ProjectPage.js
│   │   └── index.js
│   ├── reportWebVitals.js
│   ├── theme
│   │   ├── images.js
│   │   └── theme.js
│   └── utils
│       ├── ScrollToTop.js
│       └── skillsImage.js
└── yarn.lock
```
<br />

# Usage :joystick:
### Customize your details for each component in `src/data` [folder](https://github.com/hhhrrrttt222111/developer-portfolio/tree/master/src/data).

Eg:
```javascript
export const headerData = {
    name: '-- YOUR NAME --',
    title: '-- YOUR TITLE --',
    desciption:'-- DESCRIPTION --',
    image: '-- IMAGE --',
    resumePdf: ''
}

// You can also import image and PDF from assets as shown below

import resume from '../assets/pdf/resume.pdf'
import profileImg from '../assets/png/profileImg'

export const headerData = {
    name: '-- YOUR NAME --',
    title: '-- YOUR TITLE --',
    desciption:'-- DESCRIPTION --',
    image: profileImg,
    resumePdf: resume
}
```

