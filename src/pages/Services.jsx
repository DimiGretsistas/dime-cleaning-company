import React from "react";

export default function Services() {
    // Array von Dienstleistungen
    const services = [
        {
            title: "Büroreinigung",
            description: "Gründliche Reinigung für ein sauberes und organisiertes Büro.",
            details: "Unsere Büroreinigungsdienste bieten eine umfassende Lösung für saubere und produktive Arbeitsumgebungen. Wir kümmern uns um die gründliche Reinigung von Büros, Konferenzräumen und Gemeinschaftsbereichen, um eine hygienische und angenehme Atmosphäre für Ihr Unternehmen zu schaffen."
        },
        {
            title: "Baureinigung",
            description: "Effektive Baureinigung für sichere und saubere Baustellen.",
            details: "Unsere Baureinigungsdienste bieten eine umfassende Lösung für frische, saubere Baustellen. Wir kümmern uns um die Beseitigung von Bauschutt, Staub und Schmutz, um eine sichere und organisierte Umgebung für Ihr Bauprojekt zu gewährleisten."
        },
        {
            title: "Lagerhallenreinigung",
            description: "Effiziente Reinigung für saubere und organisierte Lagerhallen.",
            details: "Unsere Lagerhallenreinigungsdienste bieten eine ganzheitliche Lösung für saubere und gut organisierte Lagerbereiche. Wir kümmern uns um die Reinigung von Oberflächen, Regalen und Lagerflächen, um eine hygienische und ordentliche Umgebung für Ihre Waren und Materialien zu gewährleisten."
        },
        {
            title: "Glasreinigung",
            description: "Professionelle Glasreinigung für klare Sicht und glänzende Oberflächen.",
            details: "Unsere professionelle Glasreinigung verwandelt Ihre Räume in strahlende Oasen. Mit akribischer Sorgfalt und Fachkenntnissen reinigen wir Fenster, Glasfassaden und Spiegel, um eine makellose Optik zu gewährleisten und gleichzeitig ein professionelles und einladendes Erscheinungsbild zu bewahren."
        }
    ];

    return (
        <div>
            <div className="services-container-main">
                <h1 className="services-heading">Unsere Dienstleistungen</h1>
                <p className="services-description-text">
                    Wir bieten eine Vielzahl von Dienstleistungen an, um Ihre Räumlichkeiten in bestem Zustand zu halten.
                    <br />
                    Unser Serviceangebot umfasst unter anderem die Baureinigung, Glasreinigung, Büroreinigung und Lagerhallenreinigung.
                    <br />
                    Doch das ist noch nicht alles. Unsere Experten stehen bereit, um Ihre spezifischen Anforderungen zu erfüllen und maßgeschneiderte Lösungen anzubieten, die genau auf Ihre Bedürfnisse zugeschnitten sind.
                    <br />
                    <br />
                    Um mehr über jeden unserer Dienstleistungen zu erfahren, müssen Sie einfach mit der Maus über die entsprechenden Karten schweben. Dort finden Sie detaillierte Informationen zu den angebotenen Leistungen, damit Sie die beste Entscheidung für Ihre Reinigungsbedürfnisse treffen können.
                </p>
            </div>
            <div className="services-container">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-card-inner">
                            <div className="service-card-front">
                                <h2>{service.title}</h2>
                                <h5>{service.description}</h5>
                                <p>{service.description}</p>
                            </div>
                            <div className="service-card-back">
                                <h2 className="details-header-back">Details zur {service.title}</h2>
                                <p className="text-details">{service.details}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
