import React from 'react';

const Experience = () => {
    return (
        <div className='experience'>
            <h3>Expérience</h3>

            <div className='exp-1'>
                <h4>Développeur Backend – LogisPlus </h4>
                <h5>Juin - Août 2021</h5>
                <p>
                    Développement d’un module d’automatisation de rapports PDF hebdomadaires à partir des données clients.
                    Mise en place d’un scheduler pour l’export automatique des rapports.
                    Optimisation des requêtes SQL et collaboration avec les équipes opérationnelles pour les tests utilisateurs.
                    <br />
                    <strong>Outils : </strong>Java, Spring Boot, JasperReports, MySQL, Git
                </p>
            </div>

            <div className='exp-2'>
                <h4>Développeur Fullstack – TechSolutions </h4>
                <h5>Mai - Août 2022</h5>
                <p>
                    Refonte d’une application de gestion de tickets de support : développement frontend (interfaces de tri, création, affichage) et backend (API REST sécurisées).
                    Réalisation de tests unitaires et rédaction de documentation technique.
                    <br />
                    <strong>Outils : </strong>Angular, Spring Boot, MySQL, Postman, Git, GitHub
                </p>
            </div>
        </div>
    );
};

export default Experience;
