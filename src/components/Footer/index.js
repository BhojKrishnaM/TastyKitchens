import {
  FaFacebookSquare,
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-cont">
    <div className="logo-cont">
      <img
        src="https://i.postimg.cc/MpTg0ZVH/Group-7420whitehat.png"
        alt="website-footer-logo"
        className="footerLogo"
      />
      <h1 className="footerTitle">Tasty Kitchen</h1>
    </div>
    <p className="footerText">
      The only thing we are serious about is food. Contact us on
    </p>
    <div className="icons-cont">
      <FaPinterestSquare className="icon-style" testid="pintrest-social-icon" />
      <FaInstagram className="icon-style" testid="instagram-social-icon" />
      <FaTwitter className="icon-style" testid="twitter-social-icon" />
      <FaFacebookSquare className="icon-style" testid="facebook-social-icon" />
    </div>
  </div>
)

export default Footer
