<?php include 'header.php' ?>
                <div class="reservation-title">
                <h1>Parkplatz-Reservation</h1>
                </div>
                <div class="auswahl-parkhaus">
                        <!-- Dropdown zur Auswahl des entsprechenden Parkhauses wo ein Parkplatz gesucht wird -->
                        <form method="post" action="php/api/parkhaus/list.php">
                                <select name="parkhausName">
                                    <option value="parkhaus">Parkhaus auswähle</option>
                                    <option value="parkhaus">Parkhaus Urania</option>
                                    <option value="parkhaus">Parkhaus Globus</option>
                                    <option value="parkhaus">Parkhaus Globus</option>
                                </select>
                                <!-- Laden des ausgewählten Parkhauses -->
                                <input type="submit" value="Lade Parkhausdaten"/>
                        </form>
                </div>






<?php include 'footer.php' ?>
