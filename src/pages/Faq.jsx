import React, { useState } from 'react';
import faqImage from '../Images/faq-image.png'; // Import the image from your file directory

const Faq = () => {
    // Array of questions and answers
    const faqs = [
        {
            question: 'Verwendet Ihre Reinigungsfirma ausschließlich Bio-Produkte?',
            answer: 'Ja, wir verwenden ausschließlich Bio-Produkte, die umweltfreundlich und ungiftig sind.'
        },
        {
            question: 'Woher beziehen Sie Ihre Bio-Produkte?',
            answer: 'Wir beziehen unsere Bio-Produkte von lokalen Lieferanten, die sich auf nachhaltige und ökologische Produkte spezialisiert haben.'
        },
        {
            question: 'Welche Reinigungsdienstleistungen bieten Sie an?',
            answer: 'Wir bieten eine Vielzahl von Reinigungsdienstleistungen an, darunter Büroreinigung, Lagerhallenreinigung, Baureinigung, Glasreinigung und mehr.'
        },
        {
            question: 'Sind Ihre Reinigungstechniker geschult im Umgang mit Bio-Produkten?',
            answer: 'Ja, unsere Reinigungstechniker sind speziell geschult im Umgang mit Bio-Produkten und kennen die richtigen Anwendungs- und Sicherheitsverfahren.'
        },
        {
            question: 'Bieten Sie auch Sonderreinigungen an?',
            answer: 'Ja, wir bieten auch Sonderreinigungen an, wie z.B. die Reinigung von Böden, Möbeln, Polstern und vielem mehr.'
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const handleQuestionClick = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className='faq-container'>
            <h1 className='faq-header'>FAQs</h1>
            <div className='general-container'>
                <div className='faq-image-container'>
                    <img src={faqImage} alt='FAQ Bild' className='faq-image' />
                </div>
                <div className='faq-content'>
                    <div className='faq-questions'>
                        {faqs.map((faq, index) => (
                            <div key={index} className={`faq-item ${index === openIndex ? 'active' : ''}`}>
                                <h2 className='faq-question' onClick={() => handleQuestionClick(index)}>
                                    {faq.question}
                                </h2>
                                <p className='faq-answer'>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
