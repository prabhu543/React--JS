import HeroImg from "./HeroImg"
import BrandIcons from "./BrandIcons"
import HeroButtons from "./HeroButtons"
import HeroDescription from "./HeroDescription"

import styled from "styled-components"

const Hero = () => {
  return (
    <div className="hero-section">
      <section>
        <div className="text-section">
          <MainHead>YOUR FEET  DESERVE <br /> THE <span className="best">BEST</span></MainHead>
          <HeroDescription/>
          <HeroButtons/>
          <BrandIcons/>
        </div>
        <HeroImg/>
      </section>
    </div>
  )
}

export default Hero

const MainHead = styled.div`
    font-weight: 800;
    font-size: 6rem;
    line-height: 78px;
`;