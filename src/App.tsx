import HeroSection from './components/HeroSection'
import SystemWarning from './components/SystemWarning'
import AboutSection from './components/AboutSection'
import ThreatMatrix from './components/ThreatMatrix'
import TechStack from './components/TechStack'
import Repositories from './components/Repositories'
import OperationStatus from './components/OperationStatus'
import ContactFooter from './components/ContactFooter'
import MatrixRain from './components/MatrixRain'
import ParticleField from './components/ParticleField'
import CommandTerminal from './components/CommandTerminal'
import AchievementBadges from './components/AchievementBadges'
import StatsCounter from './components/StatsCounter'

function App() {
  return (
    <div className="relative min-h-screen bg-background-primary overflow-x-hidden">
      <MatrixRain />
      <ParticleField />
      <div className="relative z-10">
        <HeroSection />
        <SystemWarning />
        <CommandTerminal />
        <AboutSection />
        <ThreatMatrix />
        <AchievementBadges />
        <TechStack />
        <StatsCounter />
        <Repositories />
        <OperationStatus />
        <ContactFooter />
      </div>
    </div>
  )
}

export default App