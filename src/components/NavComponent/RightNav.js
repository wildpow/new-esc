import React from 'react';
import { RNavContainer, Nav, RList, RListItem, Link} from './SharedNavStyles';

const RightNav = () => {
  return (
    <RNavContainer>
        <Nav>
          <RList>
            <RListItem><Link href="https://github.com/">Financing</Link></RListItem>
            <RListItem><Link href="https://github.com/">Blog</Link></RListItem>
            <RListItem><Link href="https://github.com/">About</Link></RListItem>
          </RList>
        </Nav>
      </RNavContainer>
  )
}

export default RightNav;
