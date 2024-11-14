import React from 'react';
import Navigation from '../components/Navigation';
import Languages from '../components/knowledges/Languages';
import Experience from '../components/knowledges/Experience';
import OrtherSkills from '../components/knowledges/OrtherSkills';
import Hobbies from '../components/knowledges/Hobbies';

const Knowledges = () => {
    return (
        <div className='knowledges'>
        <Navigation/>
        <div className='knowledgesContent'>
           <Languages/>
           <Experience/>
           <OrtherSkills/>
            <Hobbies/>
        </div>
        </div>
    );
};

export default Knowledges;