import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
    return (
      <div className='contact'>
        <Navigation/>
        <div className='contactContent'>
        <div className='header'> </div>
          <div className='contactBox'>
            <h1>Contactez-moi</h1>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                  <span>Limoges</span>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <CopyToClipboard text="0778576976">
                    <span
                      className="clickInput"
                      onClick={() => {
                        alert("Numéro de téléphone copié.");
                      }}
                    >
                      0778576976
                    </span>
                  </CopyToClipboard>
              </li>
              <li>
                <i className="far fa-envelope"></i>
                <CopyToClipboard text="kanamarini@gmai.com">
                    <span
                      className="clickInput mail"
                      onClick={() => {
                        alert("Adresse mail copiée.");
                      }}
                    >
                      kanamarini@gmail.com
                    </span>
                  </CopyToClipboard>
              </li>
            </ul>
        </div>
        <div className="socialNetwork">
          <ul>
              <a
                href="https://www.linkedin.com/in/axel-kana-6b0b011b4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Linkedin</h4>
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Marini237"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Github</h4>
                <i className="fab fa-github"></i>
              </a>
              <a
                href="hhttps://www.youtube.com/channel/UCSdyqrGXOwtdniN96vgJcXw/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Youtube</h4>
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://twitter.com/axelkana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Twitter</h4>
                <i className="fab fa-twitter"></i>
              </a>
            
          </ul>
        </div>
      </div>
        </div>
    );
};

export default Contact;