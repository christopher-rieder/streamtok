import React from "react"
import styled from "styled-components"
import { RoundedPrimaryButton } from "../Components/Buttons"
import Grid from "@material-ui/core/Grid"

const HeroSection = styled.section`
  text-align: left;
  height: 100vh;
  border-bottom: 4px double orangered;
  position: relative;

  .header-container {
    padding: 10em 6% 0% 6%;
    @media screen and (min-width: 600px) {
      padding: 15em 6% 0% 6%;
    }
  }

  .btn-hero {
    width: 30ch;
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translateX(-50%);
    @media screen and (min-width: 600px) {
      position: relative;
      bottom: unset;
      left: unset;
      transform: none;
      margin: 2em 8% 0px 8%;
    }
  }
`

const HeroTitle = styled.h1`
  font-size: var(--size-12);
  font-weight: 400;
  margin-bottom: 1em;
  letter-spacing: 0.1em;
`

const HeroText = styled.p`
  font-size: var(--size-4);
  line-height: 1.5em;
  font-family: "Open Sans", sans-serif;
  @media screen and (min-width: 1280px) {
    padding-right: 32%;
  }
`

export function Hero(props) {
  return (
    <HeroSection id="hero-section">
      <Grid item xs={10} sm={8} lg={7} className="header-container">
        <HeroTitle>Disfrutá del mejor streaming</HeroTitle>
        <HeroText>
          Streamtok es una empresa de entretenimiento que opera a nivel
          nacional, cuyo servicio principal es la transmisión de Live Streaming
          de contenidos audiovisuales.
        </HeroText>
      </Grid>
      <RoundedPrimaryButton className="btn-hero">
        VER CONTENIDO
        <span className="material-icons">arrow_forward</span>
      </RoundedPrimaryButton>
    </HeroSection>
  )
}
