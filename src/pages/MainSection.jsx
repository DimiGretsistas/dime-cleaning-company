import React from 'react';
import { Link } from 'react-router-dom';

export default function MainSection() {
    const texts = [
        {
            title: 'Willkommen bei Dime Cleaning!',
            content: 'Entdecken Sie ein neues Maß an Sauberkeit mit unserem engagierten Team. Maßgeschneiderte Lösungen, Liebe zum Detail und umweltfreundliche Praktiken definieren unseren Service. Vertrauen Sie uns für einen frischen Start in Sachen Sauberkeit!'
        },
    ];

    return (
        <div className="main-section">
            {texts.map((text, index) => (
                <div key={index} className="main-content">
                    <h1 className='welcome-text'>{text.title}</h1>
                    <p className="intro-text">{text.content}</p>
                    <Link to="/services" className='main-section-buttons'>Erfahren Sie mehr</Link>
                    <Link to="/contact" className='main-section-buttons'>Kontaktieren Sie uns</Link>
                </div>
            ))}
            <div className="blurred-box"></div>
        </div>
    );
}
