function updateLCAContent (){
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
    <div class="container-fluid">
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
                            Introduzione 
                            <span class="icon">-</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseOneMobile" class="collapse show" aria-labelledby="headingOneMobile" data-parent="#accordionExampleMobile">
                        <div class="card-body">
                            <li><a href="#Introduzione">cos'è?</a></li>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwoMobile">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwoMobile" aria-expanded="false" aria-controls="collapseTwoMobile">
                            Le tappe <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwoMobile" class="collapse" aria-labelledby="headingTwoMobile" data-parent="#accordionExampleMobile">
                        <div class="card-body">
                            <li><a href="#Letappe">com’è strutturata?</a></li>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingThreeMobile">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThreeMobile" aria-expanded="true" aria-controls="collapseThreeMobile">
                            Estrazioni di minerali 
                            <span class="icon">-</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThreeMobile" class="collapse show" aria-labelledby="headingThreeMobile" data-parent="#accordionExampleMobile">
                        <div class="card-body">
                            <li><a href="#Estrazionidiminerali">valido anche per l’energia</a></li>
                            <li><a href="#Lavorazioneproduzionediunprodotto">Lavorazione, produzione di un prodotto</a></li>
                            <li><a href="#Logistica">Logistica</a></li>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingFourMobile">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFourMobile" aria-expanded="false" aria-controls="collapseFourMobile">
                                Normative <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseFourMobile" class="collapse" aria-labelledby="headingFourMobile" data-parent="#accordionExampleMobile">
                        <div class="card-body">
                            <li><a href="#Normative">Normative</a></li>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingFiveMobile">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFiveMobile" aria-expanded="false" aria-controls="collapseFiveMobile">
                                Fasi <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseFiveMobile" class="collapse" aria-labelledby="headingFiveMobile" data-parent="#accordionExampleMobile">
                        <div class="card-body">
                            <li><a href="#Fasi">Fasi</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-8" data-aos="fade-up">
            <div class="content">
                <section id="Introduzione" data-aos="fade-up">
                <h1>Introduzione (cos'è?)
                </h1>
                <p data-aos="fade-up">LCA: Analisi del ciclo di vita (dal inglese Life Cycle Assessment), può essere usata per molti impegni, per esempio in fase di sviluppo di progetti per analizzare gli aspetti ambientali e sociali, attraverso questi dare una linea guida da seguire per migliorare un prodotto. l’LCA usato se usato nel livello nazionale per identificare gli sprechi e sviluppare delle strategie per il paese. Un ultimo campo dove applicabile l’analisi del ciclo di vita è il marketing: i risultati del LCA possono comunicare i progressi ambientali del prodotto al consumatore, es. attraverso il “LCA based tool”(la traduzione letterale sarebbe strumento basato sull’LCA ) in pratica un foglio di calcolo per i non esperti per poter effettuare l’analisi; dal lato del azienda si riassume in una dichiarazione dell'impatto ambientale di un prodotto ,o EPD (environmental product declaration).
                </p>
                </section>
                <section id="Letappe" data-aos="fade-up">
                <h1>Le tappe (com’è strutturata?)</h1>
                <div class="col">
                    <p data-aos="fade-up">• In ambito ambientale, il depauperamento può derivare dal sovrasfruttamento delle risorse naturali, come foreste, pesca, suoli fertili, acqua dolce, e così via. Se la velocità di prelievo supera la capacità di rinnovamento naturale, si verifica una diminuzione delle risorse disponibili nel lungo periodo. Nello stesso ambito il depauperamento delle risorse può anche essere causato da fenomeni come l'inquinamento dell'aria, dell'acqua e del suolo. Questi fattori possono danneggiare gli ecosistemi, riducendo la loro capacità di sostenere la vita e di fornire servizi e risorse vitali;</p>
                </div>
                <p data-aos="fade-up">LCA valuta tutto il ciclo di vita del prodotto, standardizzato dalla normativa ISO 14040-44, utile per poter valutare senza perder di vista l'impatto, è strutturato in un percorso semplificabile in 5 tappe:</p>
                <p data-aos="fade-up">1.Estrazione delle risorse prime: durante il ricavo delle risorse si scelgono alternative con depauperamento inferiore, e usando energie rinnovabili</p>
                <p data-aos="fade-up">2.Lavorazione: valutare l'inquinamento dell'aria, dell'acqua scegliendo dei stratagemmi per ridurli</p>
                <p data-aos="fade-up">3.Logistica (packaging e trasporto): scegliere dei inscatolamenti riciclabili; metodi di stoccaggio efficienti; e trasporto con utilizzo di carburanti rinnovabili </p>
                <p data-aos="fade-up">4.Uso: l’impatto durante tutto un l’utilizzo, esempio una macchina che per funzionare ha bisogno di energia, la quale è un fattore da valutare a sua volta secondo LCA</p>    
                <p data-aos="fade-up">5.Fine vita : una volta che un oggetto viene usato bisogna non sprecare i materiali di cui composto tramite una progettazione predisposta al riciclo, così facendo permette</p> 
                <p data-aos="fade-up">l’analisi si può effettuare in due modalità:</p> 
                <p data-aos="fade-up">1)From cradle to grave = dalla culla alla tomba. Dove vengono considerati tutte le tappe </p> 
                <p data-aos="fade-up">2)From cradle to gate = dalla culla all’uscita dall’azienda. Qui l’analisi si ferma dai “cancelli” dell’azienda o meglio non include l’uso e fine vita, utile per avere un'analisi reale a ciò che  è meno dispendiosa come analisi soprattutto perché esclude il fine vita e il riciclo nel impatto</p> 
                </section>
                <section id="Estrazionidiminerali" data-aos="fade-up">
                <h1>Estrazioni di minerali (valido anche per l’energia)</h1>
                <div class="col">
                    <p data-aos="fade-up">• In ambito ambientale, il depauperamento può derivare dal sovrasfruttamento delle risorse naturali, come foreste, pesca, suoli fertili, acqua dolce, e così via. Se la velocità di prelievo supera la capacità di rinnovamento naturale, si verifica una diminuzione delle risorse disponibili nel lungo periodo. Nello stesso ambito il depauperamento delle risorse può anche essere causato da fenomeni come l'inquinamento dell'aria, dell'acqua e del suolo. Questi fattori possono danneggiare gli ecosistemi, riducendo la loro capacità di sostenere la vita e di fornire servizi e risorse vitali;</p>
                </div>
                <p data-aos="fade-up">Nella fase di estrazione dei minerali, il life cycle assessment (LCA) considera diversi aspetti ambientali, tra cui:</p>
                <p data-aos="fade-up">1. Consumo di energia: valuta l'energia richiesta per l'estrazione, inclusi i carburanti utilizzati nei macchinari pesanti e i processi di lavorazione.</p>
                <p data-aos="fade-up">2. Emissioni atmosferiche: analizza le emissioni di gas serra, come anidride carbonica (CO2), ossidi di azoto (NOx) e biossido di zolfo (SO2), derivanti dalla combustione di carburanti e altre fonti durante l'estrazione.</p>
                <p data-aos="fade-up">3. Consumo di acqua: valuta la quantità di acqua utilizzata durante l'estrazione dei minerali, inclusi i requisiti per il trattamento e il drenaggio delle acque di scarto.</p>
                <p data-aos="fade-up">4. Impatto sulla biodiversità: esamina l'impatto sull'ecosistema circostante, inclusi habitat naturali e specie vegetali e animali.</p>
                <p data-aos="fade-up">5. Produzione di rifiuti: valuta la quantità e la tipologia dei rifiuti prodotti durante l'estrazione e il trattamento dei minerali, inclusi rifiuti solidi, liquidi e gassosi.</p>
                <p data-aos="fade-up">6. Consumo di risorse naturali: analizza l'utilizzo di risorse non rinnovabili, come il consumo di terreno, il degrado del suolo e la riduzione della disponibilità di risorse minerarie.</p>
                <p data-aos="fade-up">L'analisi di questi fattori consente di valutare l'impatto ambientale complessivo della fase di estrazione dei minerali e identificare opportunità per migliorare l'efficienza e ridurre l'impatto ambientale attraverso l'ottimizzazione dei processi e l'adozione di pratiche più sostenibili.</p>
                <p data-aos="fade-up">Spesso i paesi più sviluppati, con impatto ambientale anche nullo(es. carbon neutral) in alcuni settori, sfruttano materie prime estratte in paesi in via di sviluppo, dove essendo in vigore leggi sull'inquinamento meno restrittive, non si fa altro che spostare l’area che verrà inquinata.(l'elettrificazione in europa per energie rinnovabili sfrutta hardware prodotti all'estero, dove sono in vigore altre leggi)</p>
                <h1 id="Lavorazioneproduzionediunprodotto">Lavorazione, produzione di un prodottoh1>
                <p data-aos="fade-up">in questa fase viene analizzato l’impatto diretto dell'azienda, dove impegnandosi con costante aggiornamento dei propri stabilimenti con macchinari più efficienti, o strutturando la catena di montaggio in modo intelligente, valutando soprattutto gli scarti e la possibilità di dargli un ciclo chiuso (riciclo).</p>
                <h1 id="Logistica">Logistica</h1>
                <p data-aos="fade-up">si includono il calcolo di energia e emissioni del trasporto del prodotto, soprattutto il dispendi per lo stoccaggio (es. celle frigo).</p>
                <p data-aos="fade-up">I modelli principali di logistica sostenibile misurano in quattro compiti:
                </p>
                <p data-aos="fade-up">Misurare l’impronta di carbonio</p>
                <p data-aos="fade-up">Ridurre l’inquinamento atmosferico, acustico, idrico e del suolo</p>
                <p data-aos="fade-up">Non buttare ciò che può essere riusato, utilizzando contenitori e riciclando gli imballaggi</p>
                <p data-aos="fade-up">Progettare una catena green in cui prodotti e packaging sono concepiti pensando alla sostenibilità ambientale</p>
                <p data-aos="fade-up">Lo stoccaggio di merci deperibili in maniera intelligente, per evitare sprechi quindi un impatto sull'ambiente senza un effettivo guadagno per il consumatore, un esempio può essere LCA di un servizio come la mensa universitaria dove il costo dei prodotti sprecati vanno indirettamente a essere pagati agli allievi, anche se non consumati.</p>
                <p data-aos="fade-up">Un magazzino si dice efficiente quando gestisce in maniera efficiente la sistemazione degli articoli secondo uno schema logico ottimizzato (in questo campo   efficiente presenta una logistica interna ottimizzata sia a livello di gestione dello stock, sia per quanto riguarda la gestione dei resi.</p>
                <p data-aos="fade-up">Qui nel caso stiamo facendo una valutazione fino ai cancelli (From cradle to gate) la valutazione si ferma utile per il costo ridotto della ricerca, e se per esempio una catena di produzione dopo aver cambiato un macchinario, per ricalcolare l’intero LCA o verificare che sia stato un buon implemento il cambio della linea di produzione, sarebbe superfluo calcolarlo nell'intero (l’LCA) se il prodotto non è cambiato.</p>
                <h1>momento d’uso</h1>
                <p data-aos="fade-up">Considerazione durante l’utilizzo del prodotto del suo impatto energetico e ambientale, o del depauperamento delle risorse, un esempio può essere l’automobile che nel corso del suo utilizzo, per poter funzionare consumerà idrocarburi, nella produzione di energia meccanica.</p>
                <p data-aos="fade-up">Eseguendo la LCA di questa fase è molto importante perché una volta prodotto un oggetto, se progettato in modo più efficiente porterà questa qualità a vita, cioè un risparmio per tutta la durata del suo periodo di vita, che in una società non troppo consumistica si riassume in un risparmio costante (di energia) o un contenimento dell’impatto sull'ambiente.</p>
                h1>Riciclo:</h1>
                <p data-aos="fade-up">Una volta che è stato usato il nostro prodotto viene generato un rifiuto, il rifiuto di solito ha un impatto negativo sul calcolo del LCA, perché bisogna inserire un'ulteriore tappa: una catena di smaltimento(un ulteriore processo da aggiungere ai precedenti) per poter calcolare LCA completa, o in alternativa si può effettuare un riciclo o usare il rifiuto come nuovo prodotto, annullando il suo valore d'impatto ambientale.
                O il riuso che in alcuni paesi orientali il riuso fa parte della loro cultura.
                </p>
                <p data-aos="fade-up">Il riciclo nell'Analisi del Ciclo di Vita (LCA) valuta gli impatti ambientali dei processi di riciclaggio dei materiali di un prodotto. Inizia con la raccolta e il trasporto dei materiali, considerando gli impatti logistici. Analizza poi i processi di separazione e trattamento, valutando il consumo energetico e le risorse necessarie. Considera la produzione di materiali riciclati, inclusa la qualità rispetto ai materiali vergini. Esamina l'integrazione dei materiali riciclati nei processi produttivi e i benefici ambientali, come la riduzione del consumo di risorse naturali. Infine, valuta il ciclo di vita successivo dei materiali riciclati e la gestione dei rifiuti residui. Il riciclo riduce l'impatto ambientale complessivo, diminuendo l'uso di materie prime e i rifiuti.</p>
                </section>
                <section id="Normative" data-aos="fade-up">
                <h1>Normative UNI EN ISO 14040-44</h1>
                <p data-aos="fade-up">Le principali attività a cui sono rivolte la ISO 14040 e la ISO 14044 sono normalmente collegate a:</p>
                <p data-aos="fade-up">Aziende che operano nell’estrazione e nel trattamento delle materie prime</p>
                <p data-aos="fade-up">Aziende che fabbricano beni</p>
                <p data-aos="fade-up">Aziende che distribuiscono ben</p>
                <p data-aos="fade-up">Aziende specializzate nel riuso e riciclo dei beni dismessi
                </p>
                <p data-aos="fade-up">Aziende che si occupano dello smaltimento finale di un bene</p>
                <p data-aos="fade-up">Nello specifico la norma ISO 14040 del 2006 si occupa di gestione ambientale e quindi dell’impatto che il bene o servizio avrà rispetto ad una logica ambientale.</p>
                <p data-aos="fade-up">Mentre la norma ISO 14044 è maggiormente dedicata al comprendere il ciclo della vita di un prodotto o di un servizio specifico.</p>
                <p data-aos="fade-up">Le norme si integrano perfettamente con la ISO 9001 e la SA 8000.</p>
                </section>
                <section id="Fasi" data-aos="fade-up">
                <p data-aos="fade-up">Le 4 fasi dell’ LCA:</p>
                <p data-aos="fade-up">Definizione degli obiettivi</p>
                <p data-aos="fade-up">Identificare le categorie d’impatto, l’insieme dei processi interconnessi dai flussi di prodotti secondo lo standard ISO 14040, oltre che l’unità funzionale: il prodotto su cui basare l’analisi e il confronto con le possibili alternative.</p>
                <p data-aos="fade-up">Analisi di inventario (Life cycle inventory – LCI)</p>
                <p data-aos="fade-up">Avvio della raccolta dei dati da utilizzare nella fase di valutazione, suddivisa a sua volta in tre passaggi: la realizzazione di un diagramma di flusso, la raccolta dei dati e l’elaborazione e la presentazione dei risultati.</p>
                <p data-aos="fade-up">Valutazione degli impatti ambientali</p>
                <p data-aos="fade-up">Si articola in classificazione e caratterizzazione (obbligatorie) e normalizzazione e pesatura (facoltative). Durante la classificazione i dati raccolti vengono suddivisi in specifiche categorie, la caratterizzazione prevede quindi la determinazione delle singole emissioni.</p>
                <p data-aos="fade-up">Interpretazione e miglioramento</p>
                <p data-aos="fade-up">I risultati delle precedenti fasi vengono sintetizzati, analizzati e discussi con l’obiettivo di identificare le possibili aree di miglioramento, garantendo una finale mitigazione degli impatti ambientali.</p>
                </section>
            </div>
        </div>

        <div class="col-md-4 d-none d-md-block" data-aos="fade-left">
            <div class="accordion" id="accordionExample">
                <div class="card" data-aos="fade-left">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Introduzione <span class="icon">-</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul>
                            <li><a href="#Introduzione">cos'è?</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div class="card" data-aos="fade-left">
                    <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Le tappe <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul>
                            <li><a href="#Letappe">com’è strutturata?</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div class="card" data-aos="fade-left">
                    <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Estrazioni di minerali <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                            <ul>
                                <li><a href="#Estrazionidiminerali">valido anche per l’energia</a></li>
                                <li><a href="#Lavorazioneproduzionediunprodotto">Lavorazione, produzione di un prodotto</a></li>
                                <li><a href="#Logistica">Logistica</a></li>
                            </ul>
                    </div>
                    </div>
                </div>
                <div class="card" data-aos="fade-left">
                    <div class="card-header" id="headingFour">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Normative <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul>
                            <li><a href="#Normative">Normative</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div class="card" data-aos="fade-left">
                    <div class="card-header" id="headingFive">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Fasi <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul>
                            <li><a href="#Fasi">Fasi</a></li>
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