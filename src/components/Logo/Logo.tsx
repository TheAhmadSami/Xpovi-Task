import logo from './../../assets/media/logo-dark.png';

import './Logo.scss'

export default function Logo() {

  return (
    <div id="logo">
      <img src={logo} alt="Xpovi Logo" className="navbar-logo" />
      <img src={logo} alt="Xpovi Logo" className="navbar-logo" />
    </div>
  )

}