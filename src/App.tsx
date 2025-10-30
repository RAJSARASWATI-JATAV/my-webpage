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
import AuroraBackground from './components/AuroraBackground'
import ThemeSwitcher from './components/ThemeSwitcher'
import ActivityHeatmap from './components/ActivityHeatmap'
import ProgressRings from './components/ProgressRings'
import NetworkGraph from './components/NetworkGraph'
import MouseTrail from './components/MouseTrail'
import ParallaxSection from './components/ParallaxSection'

function App() {
  return (
    <div className="relative min-h-screen bg-background-primary overflow-x-hidden">
      {/* Background Effects */}
      <AuroraBackground />
      <MatrixRain />
      <ParticleField />
      <DNAHelix />
      <MouseTrail />
      
      {/* Theme Switcher */}
      <ThemeSwitcher />
      
      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <SystemWarning />
        
        <ParallaxSection speed={-0.3}>
          <HackingSimulator />
        </ParallaxSection>
        
        <CommandTerminal />
        
        <ParallaxSection speed={0.2}>
          <AboutSection />
        </ParallaxSection>
        
        <ThreatMatrix />
        
        <ParallaxSection speed={-0.2}>
          <CyberMap />
        </ParallaxSection>
        
        <AchievementBadges />
        <ProgressRings />
        
        <ParallaxSection speed={0.3}>
          <SkillsRadar />
        </ParallaxSection>
        
        <NetworkGraph />
        <TechStack />
        <ActivityHeatmap />
        <StatsCounter />
        
        <ParallaxSection speed={-0.1}>
          <EnhancedRepositories />
        </ParallaxSection>
        
        <OperationStatus />
        <ContactFooter />
      </div>
    </div>
  )
}

export default App