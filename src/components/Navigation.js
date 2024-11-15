import React from 'react';
import profilPic from '../media/cv.jpg'; // Assurez-vous que le chemin est correct
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className="id">
                <div className="idContent">
                    {/* Utilisez l'image importée comme source */}
                    <img src={profilPic} alt="profil-pic" style={{ width: "100px", height: "auto" }} />
                    <h3>KANA Marini</h3>
                </div>
            </div> 

             <div className="navigation">  
             <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
             </ul>
             </div>
                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/axel-kana-952b89258/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/Marini237" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCSdyqrGXOwtdniN96vgJcXw"><i className="fab fa-youtube"></i></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/axelkana"><i className="fab fa-twitter"></i></a>
                        </li>
                    </ul>  
                    <div className="signature">
                        <p>KmaxDreams - 2024/2025</p>
                    </div> 
             </div>
        </div>
    );
};

export default Navigation;
