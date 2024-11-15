import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp: 3},
            {id: 2, value: "CSS/HTML", xp: 3},
            {id: 3, value: "Php", xp: 2},
            {id: 4, value: "Python", xp: 1},
            {id: 5, value: "Java", xp: 3},
            {id: 6, value: "C#", xp: 2},
            {id: 7, value: "C++", xp: 2},
            {id: 8, value: "dart", xp: 1},
            {id: 9, value: "SQL", xp: 3},
            {id: 10, value: "TypeScript", xp: 3}
        ],
        frameworks: [
            {id: 1, value: "React", xp: 2},
            {id: 2, value: "Bootstrap", xp: 3},
            {id: 3, value: "Sass", xp: 2},
            {id: 4, value: "Material UI", xp: 1},
            {id: 5, value: "Angular", xp: 2},
            {id: 7, value: "Symfony", xp: 2},
            {id: 8, value: "Node js", xp: 2},
            {id: 9, value: "Express", xp: 2}
        ]
    }
    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    title="frameworks & bibliothèques"
                    className="frameworksDisplay"
                    languages={frameworks}
                />

            </div>
        );
    }
}

export default Languages;