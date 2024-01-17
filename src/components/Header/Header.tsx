import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledLink } from './style';
import { useLocation } from 'react-router-dom';

const pages = ['accounts', 'profiles', 'campaigns'];

export default function Header() {
  const location = useLocation();

  return (
    <>
      <StyledHeader>
        {pages.map(page => (
          <StyledLink
            key={page}
            href={`/${page}`}
            isActive={location.pathname.startsWith(`/${page}`)}
          >
            {page}
          </StyledLink>
        ))}
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
}
