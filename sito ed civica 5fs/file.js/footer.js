function includeFooter() {
    document.write(`
    <footer class="bg-white text-dark p-4 shadow-lg">
        <div class="container">
            <div class="row">
                <!-- Section 1: Three Phrases -->
                <div class="col-lg-3">
                    <h5>Indice</h5>
                    <p>Inquinamento</p>
                    <p>Riscaldamento Globale</p>
                    <p>LCA</p>
                    <p>Depauperamento</p>
                </div>

                <!-- Section 2: Credits -->
                <div class="col-lg-3">
                    <h5>Crediti</h5>
                    <p>Sito ideato e sviluppato da Airoai Marco.
                    Contenuti realizzati per gruppi dagli alunni della classe 5FS
                    divisione dei gruppi e ideazioni del lavoro <a href="">qui</a></p>
                    <p>&copy; 2023 5FS</p>
                </div>

                <!-- Section 3: Social Media Icons -->
                <div class="col-lg-3">
                    <h5>Liceo</h5>
                    <p href="#" class="text-dark">Liceo Galileo Galilei<br>
                    Piedimonte Matese</p><br>
                </div>

                <!-- New Column with Image -->
                <div class="col-lg-3">
                    <img src="images/logo.png" alt="Logo" class="img-fluid" style="max-width: 50%;">
                </div>
            </div>
        </div>
    </footer>
    `);
}
