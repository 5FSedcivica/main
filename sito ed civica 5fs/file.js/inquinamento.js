function updateInquinamentoContent() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `<div class="container-fluid">
    <div class="row">
    <div class="container mt-5">
    <div class="row">
        <div class="col-12 d-md-none">
            <div class="accordion" id="accordionExampleMobile">
                <!-- Accordion Content for Mobile -->
                <div class="card">
                    <div class="card-header" id="headingOneMobile">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOneMobile" aria-expanded="true" aria-controls="collapseOneMobile">
                            Introduzione all'Inquinamento 
                            <span class="icon">-</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseOneMobile" class="collapse show" aria-labelledby="headingOneMobile" data-parent="#accordionExampleMobile">
                        <div class="card-body">
                            <li><a href="#Introduzione">Introduzione all'Inquinamento</a></li>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingFourMobile">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFourMobile" aria-expanded="false" aria-controls="collapseFourMobile">
                                Tipi di Inquinamento <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseFourMobile" class="collapse" aria-labelledby="headingFourMobile" data-parent="#accordionExampleMobile">
                        <div class="card-body">
                            <li><a href="#Tipi">Tipi di Inquinamento</a></li>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwoMobile">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwoMobile" aria-expanded="false" aria-controls="collapseTwoMobile">
                            Cause dell'Inquinamento <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwoMobile" class="collapse" aria-labelledby="headingTwoMobile" data-parent="#accordionExampleMobile">
                        <div class="card-body">
                            <li><a href="#Cause">Cause dell'Inquinamento </a></li>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingThreeMobile">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThreeMobile" aria-expanded="true" aria-controls="collapseThreeMobile">
                            Effetti dell'Inquinamento
                            <span class="icon">-</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThreeMobile" class="collapse show" aria-labelledby="headingThreeMobile" data-parent="#accordionExampleMobile">
                        <div class="card-body">
                            <li><a href="#Effetti">Effetti dell'Inquinamento</a></li>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingFiveMobile">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFiveMobile" aria-expanded="false" aria-controls="collapseFiveMobile">
                                Impatto delle Politiche e della Legisazione <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseFiveMobile" class="collapse" aria-labelledby="headingFiveMobile" data-parent="#accordionExampleMobile">
                        <div class="card-body">
                            <li><a href="#Impatto">Impatto delle Politiche e della Legisazione</a></li>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingSixMobile">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSixMobile" aria-expanded="false" aria-controls="collapseSixMobile">
                                Sfide e Soluzioni <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseSixMobile" class="collapse" aria-labelledby="headingSixMobile" data-parent="#accordionExampleMobile">
                        <div class="card-body">
                            <li><a href="#SfideeSoluzioni">Sfide e Soluzioni</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         <div class="col-md-8" data-aos="fade-up">
            <div class="content">
                <section id="Introduzione" data-aos="fade-up">
                <h1>Inquinamento </h1>
                <p data-aos="fade-up">La parola "inquinamento" deriva dal latino "inquinare", che significa "rendere impuro" o "contaminare". È difficile determinare esattamente quando è stata utilizzata per la prima volta, ma il concetto di inquinamento è stato riconosciuto e discusso per secoli in varie forme. Tuttavia, il termine "inquinamento" in senso moderno, riferendosi alla contaminazione dell'ambiente da parte dell'attività umana, ha iniziato ad essere ampiamente utilizzato a partire dalla seconda metà del XX secolo, in concomitanza con l'accelerazione dell'industrializzazione e l'incremento delle preoccupazioni ambientali.</p>
                </section>
                <section id="Tipi" data-aos="fade-up">
                <h1>Tipi di Inquinamento</h1>
                <p data-aos="fade-up">L'inquinamento si manifesta in diverse forme, ognuna con le proprie fonti, caratteristiche e impatti sull'ambiente e sulla salute umana. Esaminiamo alcuni dei principali tipi di inquinamento:</p>
                <p data-aos="fade-up">Inquinamento dell'Aria:</p>
                <p data-aos="fade-up">L'inquinamento dell'aria è causato principalmente dalle emissioni di gas e particelle da fonti come veicoli, industrie, centrali elettriche e riscaldamento domestico. I principali inquinanti atmosferici includono biossido di azoto (NO₂), biossido di zolfo (SO₂), monossido di carbonio (CO), ozono troposferico (O₃) e particolato sospeso. Questi inquinanti possono causare problemi respiratori, malattie cardiovascolari e danni agli ecosistemi.</p>
                <p data-aos="fade-up">Inquinamento dell'Acqua:</p>
                <p data-aos="fade-up">L'inquinamento dell'acqua è causato da scarichi di rifiuti industriali, agricoli e urbani nelle risorse idriche. Le sostanze inquinanti possono includere sostanze chimiche tossiche, fertilizzanti, pesticidi, oli, metalli pesanti e organismi patogeni. Questo tipo di inquinamento minaccia la biodiversità acquatica, compromette la sicurezza idrica e può causare gravi problemi di salute quando l'acqua contaminata viene utilizzata per il consumo umano.</p>
                <p data-aos="fade-up"Inquinamento del Suolo:</p>
                <p data-aos="fade-up">L'inquinamento del suolo è causato da scarichi di rifiuti tossici, pesticidi, fertilizzanti e altre sostanze chimiche, oltre alla contaminazione da parte di industrie e discariche. Questo tipo di inquinamento può danneggiare la fertilità del suolo, compromettere la crescita delle piante, contaminare le risorse idriche sotterranee e avere effetti negativi sulla salute umana attraverso il consumo di cibo contaminato.</p>
                <p data-aos="fade-up">Inquinamento Acustico:</p>
                <p data-aos="fade-up">L'inquinamento acustico è il risultato dell'eccessiva esposizione al rumore proveniente da fonti come il traffico stradale, il trasporto ferroviario, le industrie, le attività di costruzione e le attività umane. Questo tipo di inquinamento può disturbare il sonno, causare stress, danneggiare l'udito e interferire con la comunicazione e il benessere degli esseri viventi.</p>
                </section>
                <section id="Cause" data-aos="fade-up">
                <h1>Cause dell'Inquinamento</h1>
                <p data-aos="fade-up">1.Emissioni Industriali: Le industrie sono tra le principali fonti di inquinamento atmosferico e idrico, rilasciando gas, particolato e sostanze chimiche tossiche durante la produzione di beni e servizi.</p>
                <p data-aos="fade-up">2.Trasporto: Le emissioni da veicoli a motore, navi e aerei contribuiscono significativamente all'inquinamento dell'aria, rilasciando gas serra, ossidi di azoto e particolato nell'atmosfera.</p>
                <p data-aos="fade-up">3.Agricoltura Intensiva: L'uso eccessivo di fertilizzanti, pesticidi e antibiotici nell'agricoltura intensiva può contaminare le risorse idriche e il suolo, contribuendo all'inquinamento delle acque sotterranee e alla perdita di biodiversità.</p>
                <p data-aos="fade-up">4.Sfruttamento dei Combustibili Fossili: La combustione di combustibili fossili come carbone, petrolio e gas naturale per l'energia e il trasporto è una delle principali fonti di emissioni di gas serra e inquinanti atmosferici.</p>
                <p data-aos="fade-up">5.Produzione e Smaltimento dei Rifiuti: La produzione e il trattamento dei rifiuti generano emissioni di gas serra, oltre a contaminare il suolo e le acque attraverso lo smaltimento in discariche e l'incenerimento.</p>
                <p data-aos="fade-up">6.Cambiamenti Land Use: La deforestazione, l'urbanizzazione e altre modifiche nell'uso del suolo possono compromettere gli ecosistemi naturali, aumentando il rischio di inquinamento del suolo, dell'acqua e dell'aria.</p>
                </section>
                <section id="Effetti" data-aos="fade-up">
                <h1>Effetti dell'Inquinamento</h1>
                <p data-aos="fade-up">Impatti sull'ambiente:</p>
                <p data-aos="fade-up">L'inquinamento dell'aria, dell'acqua e del suolo può causare danni agli ecosistemi naturali, compromettendo la biodiversità e alterando gli equilibri ecologici. Ad esempio, l'acidificazione degli oceani causata dall'assorbimento di biossido di carbonio atmosferico può danneggiare i coralli e altre forme di vita marina, mentre la contaminazione del suolo può ridurre la fertilità del terreno e compromettere la crescita delle piante.</p>
                <p data-aos="fade-up">Cambiamenti Climatici:</p>
                <p data-aos="fade-up">L'inquinamento atmosferico, in particolare le emissioni di gas serra, contribuisce al riscaldamento globale e ai cambiamenti climatici. Questi cambiamenti possono portare a fenomeni estremi come ondate di calore, tempeste più intense, innalzamento del livello del mare e cambiamenti nei modelli di precipitazione, con conseguenti impatti negativi sull'agricoltura, la salute umana e gli ecosistemi naturali.</p>
                <p data-aos="fade-up">Effetti sulla Salute Umana:</p>
                <p data-aos="fade-up">L'inquinamento atmosferico è associato a una serie di problemi di salute, tra cui malattie respiratorie come l'asma e la bronchite, malattie cardiovascolari, cancro e problemi neurologici. Anche l'inquinamento dell'acqua e del suolo può causare gravi problemi di salute, tra cui avvelenamento, infezioni gastrointestinali, malattie della pelle e danni agli organi interni.</p>
                <p data-aos="fade-up">Impatti Economici:</p>
                <p data-aos="fade-up">L'inquinamento ha anche significativi impatti economici, inclusi costi sanitari aggiuntivi per il trattamento delle malattie legate all'inquinamento, perdite di produttività causate da assenze lavorative e disabilità, danni alle infrastrutture e agli ecosistemi, e riduzione del valore delle proprietà a causa della contaminazione ambientale.</p>
                <p data-aos="fade-up">Sfide Sociali e Ambientali:</p>
                <p data-aos="fade-up"L'inquinamento può exacerbare le disuguaglianze sociali, colpendo in modo sproporzionato le comunità più vulnerabili, come quelle a basso reddito o le popolazioni rurali. Inoltre, può minare la sicurezza alimentare, l'accesso all'acqua potabile e la stabilità economica delle regioni colpite.></p>
                </section>
                <section id="Impatto" data-aos="fade-up">
                <h1>Impatto delle Politiche e della Legisazione:</h1>
                <p data-aos="fade-up">Le politiche ambientali e le leggi svolgono un ruolo fondamentale nel mitigare l'inquinamento e promuovere la sostenibilità ambientale.</p>
                <p data-aos="fade-up">Protocollo di Kyoto (1997):</p>
                <p data-aos="fade-up">Il Protocollo di Kyoto è stato uno degli accordi internazionali più importanti per affrontare il cambiamento climatico. Ha stabilito obiettivi vincolanti per la riduzione delle emissioni di gas serra per i paesi industrializzati, stabilendo un quadro giuridicamente vincolante per l'azione contro il riscaldamento globale.</p>
                <p data-aos="fade-up">Leggi sull'inquinamento dell'aria:</p>
                <p data-aos="fade-up">Molti paesi hanno adottato leggi per regolare le emissioni di inquinanti atmosferici da veicoli, industrie e altre fonti. Ad esempio, il Clean Air Act negli Stati Uniti ha stabilito standard nazionali per la qualità dell'aria e ha imposto limiti alle emissioni di inquinanti come l'ossido di azoto e il biossido di zolfo.</p>
                <p data-aos="fade-up">Direttiva quadro sull'acqua dell'Unione Europea (2000):</p>
                <p data-aos="fade-up">La Direttiva quadro sull'acqua dell'UE è stata adottata per garantire una gestione sostenibile delle risorse idriche e proteggere le acque dall'inquinamento. Ha introdotto norme per il monitoraggio e la valutazione della qualità dell'acqua, nonché obiettivi per il raggiungimento di uno stato ecologico e chimico accettabile per tutti i corpi idrici.</p>
                <p data-aos="fade-up">Accordi internazionali sulla gestione dei rifiuti:</p>
                <p data-aos="fade-up">Gli accordi internazionali, come la Convenzione di Basilea sul controllo dei movimenti transfrontalieri di rifiuti pericolosi e il loro smaltimento (1989), mirano a regolare il trasporto e lo smaltimento sicuro dei rifiuti pericolosi a livello globale, riducendo così il rischio di inquinamento del suolo e delle acque.</p>
                <p data-aos="fade-up">Leggi sulla gestione dei rifiuti solidi:</p>
                <p data-aos="fade-up">Molte giurisdizioni hanno introdotto leggi per promuovere il riciclo, il compostaggio e altre pratiche di gestione dei rifiuti sostenibili. Queste leggi mirano a ridurre la quantità di rifiuti inviati in discarica e ad affrontare il problema dell'inquinamento da rifiuti solidi.</p>
                </section>
                <section id="SfideeSoluzioni" data-aos="fade-up">
                <h1>Sfide e Soluzioni</h1>
                <p data-aos="fade-up">Sfide:</p>
                <p data-aos="fade-up">Complessità del problema: L'inquinamento è un problema complesso che coinvolge molte fonti e tipi di inquinanti, rendendo difficile identificare e affrontare le cause sottostanti.</p>
                <p data-aos="fade-up">Resistenza al cambiamento: Il cambiamento verso pratiche più sostenibili può essere ostacolato da interessi economici consolidati e da una resistenza culturale al cambiamento.</p>
                <p data-aos="fade-up">Coordinazione internazionale: Poiché l'inquinamento non conosce confini, la cooperazione internazionale è essenziale per affrontare efficacemente il problema, ma può essere difficile da ottenere a causa di interessi nazionali contrastanti.</p>
                <p data-aos="fade-up">Soluzioni:</p>
                <p data-aos="fade-up">Tecnologie Pulite: Lo sviluppo e l'adozione di tecnologie pulite, come le energie rinnovabili e i veicoli elettrici, possono ridurre le emissioni di gas serra e altri inquinanti atmosferici.</p>
                <p data-aos="fade-up">Politiche Ambientali: L'implementazione di politiche ambientali efficaci, come incentivi fiscali per le energie pulite, tasse sulle emissioni e normative più rigide sull'inquinamento, può guidare il cambiamento verso pratiche più sostenibili.</p>
                <p data-aos="fade-up">Educazione e Sensibilizzazione: Un maggiore livello di educazione ambientale e sensibilizzazione pubblica può promuovere comportamenti più responsabili e sostenibili, incoraggiando la riduzione, il riutilizzo e il riciclo dei materiali.</p>
                <p data-aos="fade-up">Gestione dei Rifiuti: Migliorare la gestione dei rifiuti attraverso il riciclo, il compostaggio e l'eliminazione sicura dei rifiuti pericolosi può ridurre l'inquinamento del suolo, dell'acqua e dell'aria.</p>
                <p data-aos="fade-up">Cooperazione Internazionale: Promuovere la cooperazione internazionale attraverso trattati e accordi può facilitare lo scambio di conoscenze, risorse e tecnologie per affrontare le sfide ambientali a livello globale.</p>
                </section>
            </div>
        </div>

        <div class="col-md-4 d-none d-md-block" data-aos="fade-left">
            <div class="accordion" id="accordionExample">
                <div class="card" data-aos="fade-left">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           Introduzione all'Inquinamento <span class="icon">-</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul>
                            <li><a href="#Introduzione">Introduzione all'Inquinamento</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div class="card" data-aos="fade-left">
                    <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Tipi di Inquinamento <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul>
                            <li><a href="#Tipi">Tipi di Inquinamento</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div class="card" data-aos="fade-left">
                    <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Cause dell'Inquinamento <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                            <ul>
                                <li><a href="#Cause">Cause dell'Inquinamento</a></li>
                            </ul>
                    </div>
                    </div>
                </div>
                <div class="card" data-aos="fade-left">
                    <div class="card-header" id="headingFour">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Effetti dell'Inquinamento <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul>
                            <li><a href="#Effetti">Effetti dell'Inquinamento</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div class="card" data-aos="fade-left">
                    <div class="card-header" id="headingFive">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Impatto delle Politiche e della Legisazione <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul>
                            <li><a href="#Impatto">Impatto delle Politiche e della Legisazione</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div class="card" data-aos="fade-left">
                    <div class="card-header" id="headingSix">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Sfide e Soluzioni <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul>
                            <li><a href="#SfideeSoluzioni">Sfide e Soluzioni</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<button id="back-to-top" class="btn btn-primary">Torna su</button>
    </div>
</div>
    
  `;
    
}