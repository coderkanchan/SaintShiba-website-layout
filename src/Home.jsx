
import Hero from "./components/HeroSection.jsx";
import TextBox from './components/TextBox.jsx';
import Section1 from "./components/section1.jsx";
import Section2 from "./components/section2.jsx";
import Container from "./components/Container.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <TextBox />
      <Section1 />
      <Section2 />
      <Container />
    </>
  )
}