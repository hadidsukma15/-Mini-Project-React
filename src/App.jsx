import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import FeatureSection from './components/FeatureSection.jsx'
import CourseSection from './components/CourseSection.jsx'
import Footer from './components/Footer.jsx'

const features = [
  {
    id: 'online-material',
    icon: 'book',
    title: 'Online Material',
    description:
      'Access a vast library of high-quality learning materials, including videos, articles, and interactive content.',
  },
  {
    id: 'quizzes',
    icon: 'document',
    title: 'Quizzes & Assignments',
    description:
      'Test your knowledge and reinforce your learning with engaging quizzes and practical assignments.',
  },
  {
    id: 'certificates',
    icon: 'certificate',
    title: 'Certificates',
    description:
      'Earn certificates upon completion of courses, showcasing your achievements and enhancing your credentials.',
  },
]

const courses = [
  {
    id: 'web-development-fundamentals',
    thumbnail: 'web',
    title: 'Web Development Fundamentals',
    description:
      'Learn the basics of HTML, CSS, and JavaScript to build your first website.',
    price: 'Rp 149.000',
  },
  {
    id: 'advanced-javascript',
    thumbnail: 'javascript',
    title: 'Advanced JavaScript Techniques',
    description:
      'Dive deep into JavaScript concepts like asynchronous programming, closures, and ES6 features.',
    price: 'Rp 199.000',
  },
  {
    id: 'responsive-design',
    thumbnail: 'design',
    title: 'Responsive Design Mastery',
    description:
      'Master the art of creating websites that adapt to different screen sizes and devices.',
    price: 'Rp 179.000',
  },
  {
    id: 'react-fundamentals',
    thumbnail: 'javascript',
    title: 'React Fundamentals',
    description:
      'Build interactive user interfaces with reusable components, props, and modern React patterns.',
    price: 'Rp 219.000',
  },
  {
    id: 'ui-ux-essentials',
    thumbnail: 'design',
    title: 'UI/UX Design Essentials',
    description:
      'Design clean, accessible, and user-friendly products from wireframe to polished prototype.',
    price: 'Rp 159.000',
  },
  {
    id: 'fullstack-javascript',
    thumbnail: 'web',
    title: 'Fullstack JavaScript Bootcamp',
    description:
      'Connect frontend and backend skills to ship complete web applications end to end.',
    price: 'Rp 299.000',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-white text-[#3f434a]">
      <Header />
      <main className="pb-2">
        <Hero />
        <FeatureSection features={features} />
        <CourseSection courses={courses} />
      </main>
      <Footer />
    </div>
  )
}

export default App
