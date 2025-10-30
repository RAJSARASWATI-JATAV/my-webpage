import HeroSection from './components/HeroSection'
import SystemWarning from './components/SystemWarning'
import AboutSection from './components/AboutSection'
import ThreatMatrix from './components/ThreatMatrix'
import TechStack from './components/TechStack'
import Repositories from './components/Repositories'
import OperationStatus from './components/OperationStatus'
import ContactFooter from './components/ContactFooter'
import MatrixRain from './components/MatrixRain'

function App() {
  return (
    <div className="relative min-h-screen bg-background-primary">
      <MatrixRain />
      <div className="relative z-10">
        <HeroSection />
        <SystemWarning />
        <AboutSection />
        <ThreatMatrix />
        <TechStack />
        <Repositories />
        <OperationStatus />
        <ContactFooter />
      </div>
    </div>
  )
}

export default App