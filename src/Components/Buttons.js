import styled from "styled-components"
import { getColorByProp } from "../Utils/StyleUtils"

export const OutlinedButtonVariant2 = styled.button`
  z-index: 1;
  background: transparent;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid ${getColorByProp("color", "white")};
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: ${getColorByProp("color", "white")};
  line-height: 3.2rem;
  padding: 1.4rem 6rem;
  transition: all 0.2s, 0.3s border;

  &:hover {
    background-color: ${getColorByProp("bgcolor", "var(--color-primary)")};
    border: 2px solid transparent;
  }

  &:active {
    box-shadow: 0px 0px 0.8rem 2px #0006, inset 0px 0px 4rem 2px #0004;
    border: 2px solid #0004;
  }
`

export const OutlinedButton = styled.button`
  background: transparent;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid var(--color-primary);
  color: white;
  padding: 0.6em 2em;
  transition: 0.2s all;
  display: flex;
  align-content: center;
  align-items: center;
  font-size: var(--size-10);
  line-height: var(--size-10);

  & span {
    font-weight: 600;
    letter-spacing: 0.1em;
    height: var(--size-10);
    transform: translateY(2px);
  }

  &:active {
    box-shadow: 0px 0px 0.8rem 2px #0006, inset 0px 0px 4rem 2px #0004;
    border: 2px solid #0004;
  }
`

export const RoundedPrimaryButton = styled.button`
  margin-top: 6.4rem;
  background: var(--color-primary);
  cursor: pointer;
  border-radius: 200px;
  border: none;
  font-size: 2rem;
  line-height: 3.2rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: white;
  padding: 1.6rem 4.8rem;
  transition: 0.2s all;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0.8rem 3.2rem -0.8rem var(--color-primary-semi);

  &:hover {
    span {
      transform: translate(8px, 5px);
    }
  }
  span {
    margin-left: 8px;
    transform: translate(0px, 5px);
    will-change: transform;
    transition: 0.2s transform;
  }

  &::before {
    content: "";
    z-index: -1;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease;
    background-color: #ff0d57;
  }

  &:hover::before {
    left: 0;
  }

  &:hover {
    background-color: red;
    box-shadow: 0px 0.8rem 1.6rem 0px var(--color-primary-semi);
  }

  &:active {
    box-shadow: 0px 0px 0.8rem 2px #0008, inset 0px 0px 1.6rem 0.6rem #0008;
  }
`
