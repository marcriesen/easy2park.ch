<?php include 'header.php' ?>
    <div class="reservation-title">
    <h1>Parkplatz-Reservation</h1>
    </div>
    <div class="auswahl-parkhaus">
        <!-- Dropdown zur Auswahl des entsprechenden Parkhauses wo ein Parkplatz gesucht wird -->
        <div class="berechnung-preis">
            <div class="ausgabe-parkhaus">
                <p>
                    <label id="ueberschrift">Ausgabe Parkhaus:</label>
                    <form>
                        <select id="select-parkhaus" name="parkhausName">
                            <option value="parkhaus">Parkhaus auswählen</option>
                            <option value="parkhaus">Urania</option>
                            <option value="parkhaus">Globus</option>
                            <option value="parkhaus">Schwammendingen</option>
                        </select>
                    </form>
                </p>
            </div>
            <div class="and">+</div>
            <div class="ausgabe-parksektor">
                <p>
                    <label id="ueberschrift">Ausgabe Sektor:</label>
                    <form method="get" action="">
                        <select id="select-sektor" name="sektor">
                            <option value="sektor">Sektor auswählen</option>
                            <option value="sektor">Normal</option>
                            <option value="sektor">Frau</option>
                            <option value="sektor">Handicap</option>
                            <option value="sektor">Überwacht</option>
                        </select>
                    </form>
                </p>
            </div>
            <div class="container-preis"
                <div class="preis">
                    <p>
                        <label id="ueberschrift">Preis:</label>
                        <input id="input-preis" type="">
                    </p>
                </div>
                <div class="order">
                    <input id="bestellen" type="submit" value="Bestellen">
                </div>
            </div>
        </div>

    </div>






<?php include 'footer.php' ?>
