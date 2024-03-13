import React from "react";

export default function Services() {
    return (
        <div>
            <div className="services-container-main">
                <h1 className="services-heading">Unsere Dienstleistungen</h1>
                <p className="services-description-text"> Wir bieten eine Vielzahl von Dienstleistungen an, um Ihre Räumlichkeiten in bestem Zustand zu halten.

                    <br /> Unser Serviceangebot umfasst unter anderem die Baureinigung, Glasreinigung, Büroreinigung und Lagerhallenreinigung. Doch das ist noch nicht alles. Unsere Experten stehen bereit, um Ihre spezifischen Anforderungen zu erfüllen und maßgeschneiderte Lösungen anzubieten, die genau auf Ihre Bedürfnisse zugeschnitten sind.
                    <br />
                    <br />Um mehr über jeden unserer Dienstleistungen zu erfahren, müssen Sie einfach mit der Maus über die entsprechenden Karten schweben. Dort finden Sie detaillierte Informationen zu den angebotenen Leistungen, damit Sie die beste Entscheidung für Ihre Reinigungsbedürfnisse treffen können.
                </p>
            </div>
            <div className="services-container">
                <div className="service-card">
                    <div className="service-card-inner">
                        <div className="service-card-front" id="first-card-front">
                            <h2>Büroreinigung</h2>
                            <h5>Gründliche Reinigung für ein sauberes und organisiertes Büro.</h5>
                            <p> Kleine Büros | Große Bürogebäude | Coworking Spaces | Arztpraxen & Kanzleien | Verwaltungsbüros

                            </p>
                        </div>
                        <div className="service-card-back" id="first-card-back">
                            <h2 className="details-header-back">Details zur Büroreinigung</h2>
                            <p className="text-first-card-details">
                                Unsere Büroreinigungsdienste bieten eine umfassende Lösung für saubere und produktive Arbeitsumgebungen. Wir kümmern uns um die gründliche Reinigung von Büros, Konferenzräumen und Gemeinschaftsbereichen, um eine hygienische und angenehme Atmosphäre für Ihr Unternehmen zu schaffen.</p>
                        </div>
                    </div>
                </div>
                <div className="service-card">
                    <div className="service-card-inner">
                        <div className="service-card-front" id="second-card-front">
                            <h2>Baureinigung</h2>
                            <h5>Effektive Baureinigung für sichere und saubere Baustellen.</h5>
                            <p> Wohngebäude | Gewerbeobjekte | Industrieanlagen | Bürokomplexe | Baustellen im Freien
                            </p>
                        </div>
                        <div className="service-card-back" id="second-card-back">
                            <h2 className="details-header-back">Details zur Baureinigung</h2>
                            <p className="text-second-card-details">Unsere Baureinigungsdienste bieten eine umfassende Lösung für frische, saubere Baustellen. Wir kümmern uns um die Beseitigung von Bauschutt, Staub und Schmutz, um eine sichere und organisierte Umgebung für Ihr Bauprojekt zu gewährleisten.</p>
                        </div>
                    </div>
                </div>
                <div className="service-card">
                    <div className="service-card-inner">
                        <div className="service-card-front" id="third-card-front">
                            <h2>Lagerhallenreinigung</h2>
                            <h5>Effiziente Reinigung für saubere und organisierte Lagerhallen.</h5>
                            <p>Lagerhallen für Lebensmittel | Logistikzentren | Kühllager | Lagerhallen für Baustoffe | Lagerhallen für Produktionsmaterialien

                            </p>
                        </div>
                        <div className="service-card-back" id="third-card-back">
                            <h2 className="details-header-back">Details zur Lagerhallenreinigung </h2>
                            <p className="text-third-card-details">Unsere Lagerhallenreinigungsdienste bieten eine ganzheitliche Lösung für saubere und gut organisierte Lagerbereiche. Wir kümmern uns um die Reinigung von Oberflächen, Regalen und Lagerflächen, um eine hygienische und ordentliche Umgebung für Ihre Waren und Materialien zu gewährleisten.</p>
                        </div>
                    </div>
                </div>
                <div className="service-card">
                    <div className="service-card-inner">
                        <div className="service-card-front" id="fourth-card-front">
                            <h2>Glasreinigung </h2>
                            <h5>Professionelle Glasreinigung für klare Sicht und glänzende Oberflächen.</h5>
                            <p>Fenster | Glasfassaden | Spiegel | Glastüren | Glasdächer
                            </p>
                        </div>
                        <div className="service-card-back" id="fourth-card-back">
                            <h2 className="details-header-back">Details zur Glasreinigung</h2>
                            <p className="text-fourth-card-details">Unsere professionelle Glasreinigung verwandelt Ihre Räume in strahlende Oasen. Mit akribischer Sorgfalt und Fachkenntnissen reinigen wir Fenster, Glasfassaden und Spiegel, um eine makellose Optik zu gewährleisten und gleichzeitig ein professionelles und einladendes Erscheinungsbild zu bewahren.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
