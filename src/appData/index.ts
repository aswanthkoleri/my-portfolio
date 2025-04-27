// Data for portfolio
import {
  JavaScriptIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  RubyOnRailsIcon,
  TailwindCSS,
  TypescriptIcon,
} from '../utils/icons'

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'JS Proctoring Library',
    shortDescription:
      'A comprehensive JavaScript library for online exam proctoring that detects suspicious behavior, monitors browser activity, and prevents cheating through advanced AI algorithms. Features include face detection, multiple face alerts, tab switch detection, and full-screen monitoring.',
    cover:
      'assets/images/proctoring-project.png',
    livePreview: '',
    type: 'Professional Work 🙍‍♂️',
    siteAge: '6 months old',
  }
]

// Service Data
export const serviceData = [
  {
    icon: JavaScriptIcon,
    title: 'JavaScript Development',
    shortDescription: 'Creating dynamic and interactive web applications using JavaScript.',
  },
  {
    icon: ReactIcon,
    title: 'React.js Development',
    shortDescription: 'Building modern and responsive user interfaces with React.js.',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Development',
    shortDescription: 'Creating server-rendered React applications with Next.js.',
  },
  {
    icon: TailwindCSS,
    title: 'Tailwind CSS Styling',
    shortDescription: 'Designing beautiful and responsive interfaces with Tailwind CSS.',
  },
]

// Skill List
export const skillList = [
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'React.js',
    icon: ReactIcon,
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  {
    name: 'Node.js',
    icon: NodejsIcon,
  },
  {
    name: 'Ruby On Rails',
    icon: RubyOnRailsIcon,
  }, 
  {
    name: 'Tailwind CSS',
    icon: TailwindCSS,
  },
]

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  // { title: 'Testimonials', href: '#testimonials' },
  // {
  //   title: 'Blogs',
  //   href: '#blogs',
  // },
  // {
  //   title: 'Services',
  //   href: '#services',
  // },
  {
    title: 'Contact',
    href: '#contact',
  },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]


export const languages = ['En']
