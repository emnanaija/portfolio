import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "emna",
    lastName: "naija",
    initials: "", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
       
        {
            emoji: '🌎',
            text: 'Based in Tunisia'
        },
        {
            emoji: "👩‍🎓",
            text: "Computer Science  Student  at Esprit"
        },
        {
            emoji: "📧",
            text: "emnanaija@gmail.com"
        }
    ],
    socials: [
       
        {
            link: "https://github.com/emnanaija/",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/emna-naija-a14551244/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm emna, a serious and dynamic computer science student with experience in front-end and back-end development, i am passionate about financial engineering and seek opportunities to develop my skills in this field.  ",
    skills:
        {
            proficientWith: ['javascript', 'JAVAFX', 'git', 'github', 'html5', 'css3',, 'PHP', 'Symfony'],
            exposedTo: ['nodejs', 'python', 'React ']
        }
    ,
    hobbies: [
        {
            label: 'Photography',
            emoji: '📷'
        },
        {
            label: 'fitness',
            emoji: '🏋️‍♀️'
        },
       
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "E-bank Website",
            source: "https://github.com/emnanaija/-website-ebank2-symfony", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock4
        },
        {
            title: "Ticket-easy Website",
           
            source: "https://github.com/emnanaija/website-ticket-easy",
            image: mock2
        },
        {
            title: "E-bank Desktop Application",
            
            source: "https://github.com/emnanaija/Ebank2_JAVAFX",
            image: mock3
        },
        {
            title: "Gestion-Air Desktop Application",
          
            source: "https://github.com/emnanaija/gestion-air",
            image: mock1
        }
    ]
}