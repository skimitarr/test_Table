import styled from '@mui/material/styles/styled';

export const StyledHeader = styled('header')(() => ({
  height: '80px',
  background: 'azure',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const StyledLink = styled('a')<{isActive: boolean}>(({isActive}) => ({
  marginRight: '50px',
  fontSize: '24px',
  textDecoration: 'none',
  color: isActive? 'blue':'black',
  transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out',

  '&:last-child': {
    marginRight: '0',
  },

  '&:hover': {
    color: 'blue',
    transform: 'scale(1.1, 1)'
  }
}))


