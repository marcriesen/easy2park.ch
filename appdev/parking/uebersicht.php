<?php include 'header.php' ?>


                <h1>Datenübersicht</h1>
                <form method="post" action="php/api/parkhaus/list.php">
                    <select name="parkhausName">
                        <option value="parkhaus">Parkhaus auswähle</option>
                    </select>
                    <input type="submit" value="Lade Parkhausdaten"/>
                </form>

                <div class="liste-parkhaus">
                    <div class="parkhausuebersicht">Parkhausübersicht</div>
                </div>
                <div class="liste-besitzer">
                    <div class="besitzerübersicht">Besitzerübersicht</div>
                </div>
                <div class="maps-parkhaus">Google Maps darstellen</div>



<?php include 'footer.php' ?>