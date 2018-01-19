import React from 'react';
import { LNavContainer, Nav, List, LListItem, Link} from './SharedNavStyles';

const LeftNav = () => {
  return (
    <LNavContainer>
        <Nav>
          <List>
            <LListItem><Link href="https://github.com/">Mattresses</Link></LListItem>
            <LListItem><Link href="https://github.com/">Adjustable</Link></LListItem>
            <LListItem><Link href="https://github.com/">accessories</Link></LListItem>
          </List>
        </Nav>
      </LNavContainer>
  )
}

export default LeftNav;