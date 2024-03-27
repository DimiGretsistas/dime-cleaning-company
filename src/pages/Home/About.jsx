import React from 'react';
import AboutImage from '../../Images/eco-products.png'

export default function About() {
    return (
        <div>
            <h1 className="about-heading">Über uns</h1>
            <div className="about-container">
                <div className="about-text">
                    <h2 className="about-header-two">Umweltfreundliche Reinigungslösungen</h2>
                    <p className="about-paragraph">Wir verwenden ausschließlich umweltfreundliche Reinigungsprodukte und -techniken, um eine gesündere Umgebung für Ihren Arbeitsplatz zu gewährleisten. Unser geschultes Personal ist darauf spezialisiert, umfassende Reinigungslösungen anzubieten, die genau auf Ihre Bedürfnisse zugeschnitten sind.</p>

                    <h2 className="about-header-two">Geschultes Reinigungspersonal</h2>
                    <p className="about-paragraph">Unser Reinigungspersonal ist hochqualifiziert und erfahren im Umgang mit verschiedenen Reinigungsaufgaben. Es ist unser Ziel, herausragende Ergebnisse zu erzielen und die Sauberkeit Ihrer Räumlichkeiten zu gewährleisten.</p>

                    <h2 className="about-header-two">Umfassende Reinigungslösungen</h2>
                    <p className="about-paragraph">Wir bieten eine breite Palette von Reinigungsdienstleistungen an, um allen Ihren Anforderungen gerecht zu werden. Von der Büroreinigung bis zur Gebäudewartung – unsere umfassenden Lösungen sorgen für eine makellose und hygienische Umgebung.</p>
                </div>
                <img src={AboutImage} alt="Cleaning Services" className="about-image" />

            </div>

        </div>
    );
}