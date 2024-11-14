import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies' >
            <h3>Intérêts</h3>
            <ul>
                <li className='hobby'>
                    <i className="fas fa-running"></i>
                    <span>Course à pied</span>
                </li>
                <li className='hobby'>
                    <i className="fas fa-book"></i>
                    <span>Lecture</span>
                </li>
                <li className='hobby'>
                    <i className="fas fa-music"></i>
                    <span>Musique</span>
                </li>
                <li className='hobby'>
                    <i className="fas fa-film"></i>
                    <span>Films/Séries</span>
                </li>
                <li className='hobby'>
                    <i className="fas fa-gamepad"></i>
                    <span>Jeux vidéos</span>
                </li>
             </ul>
        </div>
    );
};

export default Hobbies;