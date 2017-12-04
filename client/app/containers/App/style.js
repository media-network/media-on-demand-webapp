import color from 'color'

export const headerStyle = {
  wrapper: {
    height: '70px',
    background: color('#ffffff'),
    borderBottom: `1px solid ${color('#ebebeb')}`
  },
  container: {
    padding: '0 4vw',
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  },
  drawer: {
    marginLeft: 'auto'
  }
}

export const footerStyle = {
  wrapper: {
    paddingTop: '40px'
  },
  links: {
    background: color('#ffffff'),
    padding: '20px 4vw 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  linkSection: {
    padding: '20px 0 10px',
    minWidth: '200px'
  },
  linkSectionItems: {
    lineHeight: '25px'
  },
  linkSessionHeading: {
    fontSize: '11px',
    fontWeight: 700,
    textTransform: 'uppercase',
    display: 'block',
    borderBottom: `1px solid ${color('#717274')}`,
    marginBottom: '.75rem'
  },
  link: {
    fontSize: '.82rem',
    color: color('#717274')
  },
  note: {
    height: '54px',
    borderTop: `1px solid ${color('#ffffff').fade(0.4)}`,
    display: 'flex',
    alignItems: 'center',
    padding: '0 4vw'
  },
  right: {
    marginLeft: 'auto'
  },
  contactUs: {
    color: color('#717274'),
    fontSize: '.82rem',
    textDecoration: 'none',
    display: 'inline-block'
  },
  contactItem: {
    marginLeft: '.7rem',
    display: 'inline-block'
  }
}

export const containerStyle = {
  padding: '10px 4vw'
}
