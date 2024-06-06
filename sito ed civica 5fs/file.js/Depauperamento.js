function updateDepauperamentoContent() {
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
                                Overview <span class="icon">-</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseOneMobile" class="collapse show" aria-labelledby="headingOneMobile" data-parent="#accordionExampleMobile">
                        <div class="card-body">
                        <ul>
                            <li><a href="#overview">Overview</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwoMobile">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwoMobile" aria-expanded="false" aria-controls="collapseTwoMobile">
                                Cause <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwoMobile" class="collapse" aria-labelledby="headingTwoMobile" data-parent="#accordionExampleMobile">
                        <div class="card-body">
                        <ul>
                            <li><a href="#cause">Cause</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingThreeMobile">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThreeMobile" aria-expanded="false" aria-controls="collapseThreeMobile">
                                Conseguenze <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThreeMobile" class="collapse" aria-labelledby="headingThreeMobile" data-parent="#accordionExampleMobile">
                        <div class="card-body">
                        <ul>
                            <li><a href="#conseguenze">Conseguenze</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingFourMobile">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFourMobile" aria-expanded="false" aria-controls="collapseFourMobile">
                                Soluzioni <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseFourMobile" class="collapse" aria-labelledby="headingFourMobile" data-parent="#accordionExampleMobile">
                        <div class="card-body">
                        <ul>
                            <li><a href="#soluzioni">Soluzioni</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-8" data-aos="fade-up">
            <div class="content">
                <section id="overview" data-aos="fade-up">
                    <h1>Overview</h1>
                    <p data-aos="fade-up">Innanzitutto, cosa vuol dire depauperamento? Il depauperamento delle risorse si riferisce al processo attraverso il quale le risorse naturali di un ambiente vengono utilizzate o consumate a una velocità superiore alla loro capacità di rigenerazione. Questo fenomeno può verificarsi in diversi contesti, come quello ambientale, economico o sociale:</p>
                    <div class="row">
                    <div class="col">
                    <p data-aos="fade-up">• In ambito ambientale, il depauperamento può derivare dal sovrasfruttamento delle risorse naturali, come foreste, pesca, suoli fertili, acqua dolce, e così via. Se la velocità di prelievo supera la capacità di rinnovamento naturale, si verifica una diminuzione delle risorse disponibili nel lungo periodo. Nello stesso ambito il depauperamento delle risorse può anche essere causato da fenomeni come l'inquinamento dell'aria, dell'acqua e del suolo. Questi fattori possono danneggiare gli ecosistemi, riducendo la loro capacità di sostenere la vita e di fornire servizi e risorse vitali;</p>
                    </div>
                    <div class="col">
                    <img src="https://via.placeholder.com/600x400" class="img-fluid" alt="Placeholder Image" data-aos="fade-up" data-aos-delay="200">
                    </div>
                    </div>
                    <div class="row">
                    <div class="col">
                    <img src="https://via.placeholder.com/600x400" class="img-fluid" alt="Placeholder Image" data-aos="fade-up" data-aos-delay="200">
                    </div>
                    <div class="col">
                    <p data-aos="fade-up">• Nel contesto economico, il depauperamento si riferisce anche all'esaurimento delle risorse non rinnovabili, come i combustibili fossili. Quando queste risorse vengono estratte e utilizzate senza un adeguato ricambio, si crea una diminuzione delle riserve disponibili;</p>
                    </div>
                    
                    </div>
                    
                    <p data-aos="fade-up">La buona notizia è che possiamo cambiare rotta. La sostenibilità deve diventare la bussola che guida le nostre azioni quotidiane e le decisioni a livello globale. Significa adottare pratiche agricole che rispettano la salute del suolo, promuovere la gestione forestale sostenibile e investire nelle energie rinnovabili per ridurre la nostra dipendenza dai combustibili fossili. La ricerca di alternative sostenibili e l'innovazione tecnologica devono essere incoraggiate e sostenute. Dobbiamo superare la mentalità di "usa e getta" e abbracciare la filosofia del riciclo, riduzione e riutilizzo. Tuttavia, la sostenibilità non può essere un privilegio di pochi. Dobbiamo garantire che la transizione verso un futuro sostenibile avvenga in modo equo ed inclusivo, senza lasciare nessuno indietro. Soprattutto le comunità più vulnerabili devono essere considerate in modo particolare, fornendo loro le risorse e le opportunità necessarie per adattarsi a questo cambiamento.</p>
                </section>

                <section id="cause" data-aos="fade-up">
                    <h1>Cause</h1>
                    <p>Le risorse naturali sono la nostra fonte per cibo, medicine, tessuti, materiali da costruzione e per tutto ciò che produciamo e per ottenere energia da esse, ad esempio per avere elettricità. Quindi, usiamo le risorse che la Terra ci offre per tutto. Lo sfruttamento delle risorse naturali di per sé, insieme al fatto che siamo sempre di più e da molti anni estraiamo dal pianeta ciò che è necessario per il nostro bene, ci ha portato a raggiungere una situazione che può essere considerata insostenibile: l'eccessivo sfruttamento della natura.</p>
                    <p>1. Crescita demografica:
                    La crescita demografica incessante, soprattutto nel corso del XX secolo, ha generato una pressione senza precedenti sulle risorse naturali. L'aumento della popolazione mondiale ha comportato una domanda sempre crescente di cibo, acqua potabile, energia e materiali. Questo ha spinto le società a sfruttare le risorse in modo più intensivo, con conseguenti impatti negativi sull'ambiente. La necessità di fornire abitazioni, alimenti e servizi a una popolazione in crescita ha portato a una rapida urbanizzazione, con la conversione di aree naturali in aree urbane, aumentando la pressione su ecosistemi già vulnerabili.</p>
                    <div class="col">
                    <img src="https://via.placeholder.com/600x400" class="img-fluid" alt="Placeholder Image" data-aos="fade-up" data-aos-delay="200">
                    </div>
                    <p>2. Industrializzazione:
                    L'arrivo della rivoluzione industriale nel XIX secolo ha segnato una svolta fondamentale nella storia umana. Se da un lato ha portato a miglioramenti significativi nella qualità della vita e nello sviluppo tecnologico, dall'altro ha comportato un aumento esponenziale dell'estrazione di risorse naturali. Il carbone è stato impiegato come principale fonte energetica per alimentare le macchine industriali, seguito successivamente dal petrolio e dal gas naturale. Questa dipendenza dai combustibili fossili ha portato non solo a gravi problemi ambientali, come l'inquinamento dell'aria e delle acque, ma anche a una rapida diminuzione delle risorse energetiche non rinnovabili.</p>
                    <div class="col">
                    <img src="https://via.placeholder.com/600x400" class="img-fluid" alt="Placeholder Image" data-aos="fade-up" data-aos-delay="200">
                    </div>
                    <p>3. Cambiamenti nei modelli di consumo:
                    L'evoluzione dei modelli di consumo, particolarmente evidente nelle società industrializzate, ha contribuito in modo significativo al depauperamento delle risorse. L'adozione di uno stile di vita più consumistico, caratterizzato dalla produzione e dal consumo su larga scala di beni materiali, ha aumentato la richiesta di risorse naturali. La produzione di massa e l'uso intensivo di materiali come plastica, carta e metalli hanno avuto impatti devastanti sull'ambiente, con la generazione di rifiuti tossici e la rapida diminuzione di risorse non rinnovabili. Inoltre, la globalizzazione ha amplificato la portata di questo modello di consumo, con il trasferimento di risorse e produzione in aree del mondo dove le normative ambientali possono essere più permissive.</p>
                    <div class="col">
                    <img src="https://via.placeholder.com/600x400" class="img-fluid" alt="Placeholder Image" data-aos="fade-up" data-aos-delay="200">
                    </div>
                    <p>4. Deforestazione:
                    La deforestazione, spesso alimentata da esigenze agricole, industriali e di sviluppo urbano, è responsabile della rapida perdita di copertura forestale in molte parti del mondo. La rimozione su larga scala degli alberi non solo riduce la capacità di assorbire il carbonio atmosferico attraverso la fotosintesi, ma contribuisce anche alla perdita di biodiversità, con la scomparsa di habitat vitali per numerose specie. L'erosione del suolo e l'aumento del rischio di eventi climatici estremi sono ulteriori conseguenze della deforestazione.</p>
                    <div class="col">
                    <img src="https://via.placeholder.com/600x400" class="img-fluid" alt="Placeholder Image" data-aos="fade-up" data-aos-delay="200">
                    </div>
                </section>

                <section id="conseguenze" data-aos="fade-up">
                    <h1>Conseguenze</h1>
                    <p data-aos="fade-up">1. Sicurezza alimentare e idrica: <br> <br>
                    </p>
                    <div class="row">
                    <div class="col">
                    <p data-aos="fade-up">Il depauperamento delle risorse naturali può minacciare la sicurezza alimentare e idrica. La perdita di terre fertili, la diminuzione della disponibilità di acqua potabile e la compromissione degli ecosistemi che supportano l'agricoltura possono portare a carestie, malnutrizione e conflitti legati alle risorse.
                    </p>
                    </div>
                    <div class="col">
                    <img src="https://via.placeholder.com/600x400" class="img-fluid" alt="Placeholder Image" data-aos="fade-up" data-aos-delay="200">
                    </div>
                    </div>
                    <p data-aos="fade-up">2. Impatti sulla salute: <br> <br>
                    </p>
                    <p data-aos="fade-up">La contaminazione dell'aria, dell'acqua e del suolo derivante da pratiche insostenibili può avere gravi conseguenze sulla salute umana. Le persone possono essere esposte a agenti inquinanti, che aumentano il rischio di malattie respiratorie, disturbi gastrointestinali e altri problemi di salute.</p>
                    <p data-aos="fade-up">3. Perdita di biodiversità e risorse naturali: <br> <br> </p>
                    <div class="row">
                    <div class="col">
                    <p data-aos="fade-up">Il depauperamento delle risorse naturali contribuisce alla perdita di biodiversità, che a sua volta ha conseguenze negative per l'umanità. La diversità biologica è cruciale per la sicurezza alimentare, la produzione di farmaci, la resistenza alle malattie e la resilienza degli ecosistemi.
                    </p>
                    </div>
                    <div class="col">
                    <img src="https://via.placeholder.com/600x400" class="img-fluid" alt="Placeholder Image" data-aos="fade-up" data-aos-delay="200">
                    </div>
                    </div>
                    <p data-aos="fade-up">4. Impatti economici    <br> <br>     </p>         
                    <p data-aos="fade-up">L'economia globale è strettamente legata alla disponibilità di risorse naturali. La diminuzione di risorse come il petrolio, il carbone e i metalli può avere impatti sull'industria, sull'occupazione e sulla stabilità economica. Inoltre, gli eventi estremi causati dai cambiamenti climatici associati al depauperamento delle risorse possono danneggiare infrastrutture e comunità, generando costi economici significativi.
                    </p>
                    <img src="https://via.placeholder.com/600x400" class="img-fluid" alt="Placeholder Image" data-aos="fade-up" data-aos-delay="200">
                    <p data-aos="fade-up">5. Migrazioni forzate: <br> <br>
                    </p>
                    <div class="row">
                    <div class="col">
                    <p data-aos="fade-up">La scarsità di risorse può contribuire alla migrazione forzata. Le persone, spinte dalla necessità di cercare condizioni di vita migliori, possono abbandonare le loro terre d'origine, creando sfide sociali ed economiche nelle regioni di destinazione e aumentando il rischio di conflitti.
                    </p>
                    </div>
                    <div class="col">
                    <img src="https://via.placeholder.com/600x400" class="img-fluid" alt="Placeholder Image" data-aos="fade-up" data-aos-delay="200">
                    </div>
                    </div>
                    <p data-aos="fade-up">6. Instabilità sociale e conflitti:  <br> <br></p>
                    <div class="row">
                    <div class="col">
                    <p data-aos="fade-up">La competizione per le risorse limitate può portare a tensioni sociali e conflitti. La lotta per l'accesso a terre fertili, acqua e altri beni può contribuire a tensioni interne o internazionali, con impatti sulla stabilità politica e sociale.</p>
                    </div>
                    <div class="col">
                    <img src="https://via.placeholder.com/600x400" class="img-fluid" alt="Placeholder Image" data-aos="fade-up" data-aos-delay="200">
                    </div>
                    </div>
                </section>

                <section id="soluzioni" data-aos="fade-up">
                    <h1>Soluzione al problema
                    </h1>
                    <p data-aos="fade-up">Il depauperamento delle risorse naturali è una sfida critica che richiede risposte immediate e sostenibili per garantire la prosperità delle generazioni future e la salute del nostro pianeta. Questo fenomeno è stato alimentato da una serie di fattori, tra cui la crescita demografica inarrestabile, l'industrializzazione senza freni e i cambiamenti nei modelli di consumo.</p>
                    <p data-aos="fade-up"> Per affrontare questa sfida, è necessario adottare un approccio di sostenibilità e conservazione delle risorse: </p>
                    <p data-aos="fade-up">L'agricoltura dovrebbe abbracciare pratiche sostenibili, adottando tecniche che conservino la fertilità del suolo e riducano l'uso di sostanze chimiche nocive. </p>
                    <p data-aos="fade-up">La gestione consapevole delle risorse idriche è altrettanto cruciale, richiedendo politiche che promuovano la conservazione e l'efficienza idrica in tutti i settori, dall'agricoltura all'industria e all'uso domestico. </p>
                    <p data-aos="fade-up">Una transizione verso fonti di energia rinnovabile è fondamentale per ridurre la nostra dipendenza dai combustibili fossili e alleviare il loro impatto sull’ambiente.</p>
                    <p data-aos="fade-up">La conservazione della biodiversità e degli habitat naturali dovrebbe diventare una priorità, con l'istituzione di riserve naturali e politiche di tutela della diversità biologica. </p>
                    <p data-aos="fade-up">L'efficienza nell'uso delle risorse, sia nell'industria che nel consumo quotidiano, può contribuire a ridurre gli sprechi e ottimizzare l'utilizzo delle risorse. Educare e sensibilizzare il pubblico sull'importanza della sostenibilità è un passo cruciale, incoraggiando comportamenti responsabili. </p>
                    <p data-aos="fade-up">È essenziale introdurre politiche e regolamentazioni ambientali rigorose che incentivino pratiche sostenibili e penalizzino l'inquinamento e lo sfruttamento insostenibile delle risorse. </p>
                    <p data-aos="fade-up">La promozione di tecnologie innovative, la cooperazione internazionale e gli investimenti in ricerca e sviluppo sostenibile sono ulteriori pilastri chiave per affrontare il depauperamento delle risorse.</p>
                    <p data-aos="fade-up">Infine, incoraggiare la sostenibilità aziendale può contribuire in modo significativo, con le imprese che integrano pratiche responsabili in ogni aspetto delle loro operazioni.</p>
                    <p data-aos="fade-up">Quindi il depauperamento delle risorse naturali è un fenomeno complesso e interconnesso che minaccia la stabilità e il benessere del nostro pianeta. Questo processo, alimentato dalla crescita demografica, dall'industrializzazione senza freni e dai cambiamenti nei modelli di consumo, ha conseguenze gravi e diffuse che spaziano dalla sicurezza alimentare alla stabilità economica e sociale, passando per la salute umana e la biodiversità. Affrontare efficacemente questa sfida richiede un'immediata transizione verso pratiche sostenibili e la conservazione delle risorse, supportate da politiche rigorose, innovazioni tecnologiche e cooperazione internazionale. È essenziale agire con determinazione per garantire un futuro sostenibile per le generazioni presenti e future, preservando le risorse naturali che sono vitali per la vita sulla Terra.</p>
                    <div class="col">
                    <img src="https://via.placeholder.com/600x400" class="img-fluid" alt="Placeholder Image" data-aos="fade-up" data-aos-delay="200">
                    </div>
                </section>
            </div>
        </div>

        <div class="col-md-4 d-none d-md-block" data-aos="fade-left">
            <div class="accordion" id="accordionExample">
                <div class="card" data-aos="fade-left">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Overview <span class="icon">-</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul>
                            <li><a href="#overview">Overview</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div class="card" data-aos="fade-left">
                    <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Cause <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul>
                            <li><a href="#cause">Cause</a></li>
                        </ul>   
                        </div>
                    </div>
                </div>
                <div class="card" data-aos="fade-left">
                    <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Conseguenze <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul>
                            <li><a href="#conseguenze">Conseguenze</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div class="card" data-aos="fade-left">
                    <div class="card-header" id="headingFour">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Soluzioni <span class="icon">+</span>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul>
                            <li><a href="#soluzioni">Soluzioni</a></li>
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