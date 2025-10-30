import HeroSection from './components/HeroSection'
import SystemWarning from './components/SystemWarning'
import AboutSection from './components/AboutSection'
import ThreatMatrix from './components/ThreatMatrix'
import TechStack from './components/TechStack'
import OperationStatus from './components/OperationStatus'
import ContactFooter from './components/ContactFooter'
import MatrixRain from './components/MatrixRain'
import ParticleField from './components/ParticleField'
import CommandTerminal from './components/CommandTerminal'
import AchievementBadges from './components/AchievementBadges'
import StatsCounter from './components/StatsCounter'
import HackingSimulator from './components/HackingSimulator'
import SkillsRadar from './components/SkillsRadar'
import CyberMap from './components/CyberMap'
import DNAHelix from './components/DNAHelix'
import EnhancedRepositories from './components/EnhancedRepositories'

function App() {
  return (
    <div className="relative min-h-screen bg-background-primary overflow-x-hidden">
      <MatrixRain />
      <ParticleField />
      <DNAHelix />
      <div className="relative z-10">
        <HeroSection />
        <SystemWarning />
        <HackingSimulator />
        <CommandTerminal />
        <AboutSection />
        <ThreatMatrix />
        <CyberMap />
        <AchievementBadges />
        <SkillsRadar />
        <TechStack />
        <StatsCounter />
        <EnhancedRepositories />
        <OperationStatus />
        <ContactFooter />
      </div>
    </div>
  )
}

export default App