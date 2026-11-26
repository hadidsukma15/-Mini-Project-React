import Hero from '../components/Hero'
import FeatureSection from '../components/FeatureSection'
import StudentDirectory from '../components/StudentDirectory'

const features = [
  {
    id: 'expert-instructors',
    icon: 'book',
    title: 'Expert Instructors',
    description:
      'Belajar langsung dari instruktur berpengalaman dengan materi yang terstruktur dan mudah diikuti.',
  },
  {
    id: 'quizzes',
    icon: 'document',
    title: 'Quizzes & Assignments',
    description:
      'Uji pemahaman lewat kuis interaktif dan tugas praktik yang bisa langsung dikerjakan.',
  },
  {
    id: 'certificates',
    icon: 'certificate',
    title: 'Certificates',
    description:
      'Dapatkan sertifikat setiap kali menyelesaikan course sebagai bukti kompetensimu.',
  },
]

function HomePage() {
  return (
    <>
      <Hero />
      <FeatureSection features={features} />
      <StudentDirectory />
    </>
  )
}

export default HomePage
