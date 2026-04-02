export const profile = {
  name: "Jonnie Spratley",
  title: "Software Engineer",
  bio: "Experienced Software Developer adept in bringing forth expertise in design, installation, testing and maintenance of software systems. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.",
  image: "/img/profilepic.jpg",
  email: "jonnie.spratley@me.com",
};

export const skills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "ReactJS", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Git", level: 80 },
  { name: "CI/CD", level: 75 },
  { name: "Node.js", level: 85 },
];

export interface Project {
  title: string;
  body: string;
  image: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "JS Bros Lab",
    body: "A coding curriculum built for kids 9-13, taught by Dad. Learn Git, Markdown, Roblox Studio, and Lua one lesson at a time.",
    image: "/img/projects/js-bros-lab-screenshot.png",
    url: "https://github.com/js-bro-s/jsbros-lab",
  },
  {
    title: "React Design System",
    body: "This project brings Predix UI components to React.",
    image: "/img/projects/predix-ui-react-alt.png",
    url: "https://github.com/jonniespratley/predix-ui",
  },
  {
    title: "Passbook Manager",
    body: "A web application that allows you to create and manage Passes for Apple Wallet.",
    image: "/img/projects/passbook-manager-thumb.png",
    url: "https://github.com/jonniespratley/jps-passbook-manager",
  },
];

export interface Publication {
  title: string;
  subtitle: string;
  date: string;
  body: string;
  image: string;
  url?: string;
}

export const publications: Publication[] = [
  {
    title: "Learning Yeoman",
    subtitle: "Packt Publishing",
    date: "Aug 2014",
    body: "Build a web application using Yeoman and the scaffolding tool Yo to save time and therefore money! Learn how to use and customize Yeoman generators such as Angular and Backbone to streamline project development.",
    image: "/img/portfolio/learning-yeoman-book-thumb.jpg",
  },
  {
    title: "AngularJS Component",
    subtitle: "Safari Books",
    date: "Nov 2013",
    body: "For this post we are going to choose a very good HTML5 Canvas charting library. It goes by the name of ChartJS, and it has many charts that are very easy to use.",
    image: "/img/portfolio/ng-chartjs-banner.png",
  },
  {
    title: "Using HTML5 Web Speech",
    subtitle: "Safari Books",
    date: "Oct 2013",
    body: "The Web Speech API provides an alternative input method for web applications. Developers can give web applications the ability to transcribe voice to text from the computer's microphone.",
    image: "/img/portfolio/ng-webspeech-banner.png",
    url: "https://drive.google.com/file/d/1cix9DnvvkW8w_Ik6ARgo6DcMKfVnwF31/view?usp=sharing",
  },
  {
    title: "Testing AngularJS with Jasmine",
    subtitle: "Safari Books",
    date: "Aug 2013",
    body: "In this tip, we will be learning how to test AngularJS applications and code using Jasmine, which is a behavior-driven development framework for testing JavaScript code.",
    image: "/img/portfolio/jasmine-banner-wide.png",
    url: "https://drive.google.com/file/d/10iOrfALCsG70OReGm0ytvIEVsRPXMmqx/view?usp=sharing",
  },
  {
    title: "Meteor Web Apps",
    subtitle: "Safari Books",
    date: "Jul 2013",
    body: "In this post we will talk about using Meteor, which is an ultra-simple environment for building modern web applications.",
    image: "/img/portfolio/meteor-banner-wide.png",
    url: "https://drive.google.com/file/d/16wPKOWikf7-AJf-lpBmJCpY5vRFOpBcr/view?usp=sharing",
  },
  {
    title: "Yeoman Web Apps",
    subtitle: "Safari Books",
    date: "Jun 2013",
    body: "In this post we will discuss using Yeoman, which is a client-side stack that contains three tools and frameworks to help developers quickly build beautiful and scalable web applications.",
    image: "/img/portfolio/yo-hbp.png",
    url: "https://drive.google.com/file/d/1j19XnBMGaQU1THlW4kdHMRIHUmlnfeaq/view?usp=sharing",
  },
];

export interface WorkEntry {
  company: string;
  title: string;
  years: string;
  description: string;
  skills?: string;
}

export const workHistory: WorkEntry[] = [
  {
    company: "Cisco Systems",
    title: "Software Engineer",
    years: "Jun 2021 - Present",
    skills: "Git, JavaScript, HTML, CSS, Node.js",
    description:
      "Work on team of engineers driving innovation and development.",
  },
  {
    company: "GE Digital",
    title: "Senior Software Engineer",
    years: "Mar 2014 - 2021",
    skills: "Git, JavaScript, HTML, CSS, Node.js",
    description:
      "Led team of software engineers driving full stack development. Implemented UI designs using CSS3, HTML5 and JavaScript.",
  },
  {
    company: "Silicon Villas",
    title: "Instructor",
    years: "Jul 2017",
    skills: "JavaScript, Design Patterns",
    description:
      "Served as a mentor for developers located in Italy. Curated curriculum on JavaScript fundamentals and design patterns.",
  },
  {
    company: "Packt Publishing",
    title: "Author",
    years: "Nov 2013",
    description:
      "Wrote curriculum for process driven chapters. Demonstrated how to use open-source tools to streamline the development process.",
  },
  {
    company: "AcademyX",
    title: "Instructor",
    years: "Jul 2013",
    description:
      "Curated Flash UI/UX Development curriculum for mobile applications.",
  },
  {
    company: "AppMatrix Inc.",
    title: "Director of Product Design",
    years: "Aug 2011",
    description:
      "Designed and developed client-side architecture using AngularJS. Designed and implemented server-side infrastructure using PHP and Node.",
  },
];

export const education = [
  {
    school: "Sierra College",
    degree: "Computer Science",
    graduated: "Apr 2007",
  },
  {
    school: "Bella Vista HS",
    degree: "General Education",
    graduated: "Mar 2005",
  },
];
