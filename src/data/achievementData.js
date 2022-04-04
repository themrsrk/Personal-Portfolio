import pirple from "../assets/images/pirple.png"
import open from "../assets/images/open.png"
import edx from "../assets/images/edx.webp"
export const achievementData = {
    bio : "Putting quantified achievements on a resume is great, but I just don’t work with hard numbers. I have no data to support the quality of my work. If you have lots of relevant experience, the heading statement of your resume will be a summary.",
    achievements : [
        {
            id : 1,
            title : 'Intro to Server Administration',
            details : `Gain Skills that how to setup and operate your own virtual servers on Digital Ocean. Also include Provisioning, SSH, Putty, the FileSystem, Permissions, Nano, Vim, Package Management with Yum, LAMP Stack configuration, Integrating Git, Operating a Database, DNS, Virtual Hosts, Firewalls, Snapshots & Logging as well.`,
            date : 'April 3, 2022',
            field : 'DevOps',
            image : pirple
        },
        {
            id : 2,
            title : 'Programming Essentials in Python',
            details : 'Knows the universal concepts of computer programming, including variables, data structures, algorithms, control flow, functions, and exceptions',
            date : 'Mar 16, 2022',
            field : 'Programming',
            image : open
        },
        {
            id : 3,
            title : 'Automated Software Testing: Unit Testing, Coverage Criteria and Design for Testability',
            details : 'Gain valuable software testing techniques, tools, and best practices required to deliver high-quality software.',
            date : 'Dec 21, 2021',
            field : 'Automation',
            image : edx
        }

    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/