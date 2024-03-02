import styled from 'styled-components/macro'

import { WEIGHTS } from '../../constants'

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <MainText>{children}</MainText>
      <HoverText aria-hidden={true}>{children}</HoverText>
    </Wrapper>
  )
}

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  overflow: hidden;
  position: relative;
  display: block;

  &:first-of-type {
    color: var(--color-secondary);
  }
`

const Text = styled.span`
  display: block;

  @media (prefers-reduced-motion: no-preference) {
    transform: translateY(var(--translate-from));
    transition: transform 500ms;

    ${Wrapper}:hover & {
      transform: translateY(var(--translate-to));
      transition: transform 300ms;
    }
  }
`

const MainText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
`

const HoverText = styled(Text)`
  position: absolute;
  inset: 0;
  font-weight: ${WEIGHTS.bold};

  --translate-from: 100%;
  --translate-to: 0%;
`

export default NavLink
