import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="copyright">
                <p>© 2022 | <span> XBorg </span>All rights reserved. </p>
            </div>
            <ul className="footer-nav">
                <li><a href="/">Terms</a></li>
                <li><a href="/">Privacy policy</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer