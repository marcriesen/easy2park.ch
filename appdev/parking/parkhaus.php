<?php include 'navigation.php' ?>

<div class="parallax">
    <div class="container-content">
        <div class="content">
            <div class="content-content">
                <h1>
                    Admin-Bereich von easy2park.ch
                </h1>
                <br>
                <p>Bitte erfassen Sie Ihre Parkhausdaten. Vergewissern Sie sich, dass die Eingaben auch korrekt und vollständig sind, damit Ihre Kunden Sie später ohne Probleme finden können.<br>
                </p>
                <br>
                <div class="input-form">
                    <div class="form-titel"><label id="titel">Besitzerangaben:</label></div> <br>
                    <fieldset id="inputs">
                        <p><label>Firma:</label>
                            <input id="bs-form" type="text" placeholder="Firmenname" required>
                        </p>
                        <p><label>Name / Vorname: </label>
                            <input id="bs-form" type="text" placeholder="Name" required><div class="slash">/</div> <input id="bs-form" type="text" placeholder="Vorname" required>
                        </p>
                        <p><label>Strasse / Hausnummer: </label>
                            <input id="bs-form" type="text" placeholder="Strasse" required><div class="slash">/</div> <input id="bs-form" type="number" placeholder="Hausnummer" required>
                        </p>
                        <p><label>Postleitzahl / Stadt: </label>
                            <input id="bs-form" type="number" placeholder="PLZ" required><div class="slash">/</div> <input id="bs-form" type="text" placeholder="Stadt" required>
                        </p>
                        <p><label>Telefonnummer: </label>
                            <input id="bs-form" type="number" placeholder="Telefonnummer" required>
                        </p>
                    </fieldset>
                </div>
                <br>
                <div class="form-titel"><label>Parkhausangaben:</label></div><br>
                <fieldset id="inputs">
                    <p><label>Parkhaus-Name: </label>
                        <input id="ph-form" type="text" placeholder="Parkhaus-Name" required>
                    </p> <br>
                    <p><label>Strasse / Hausnummer: </label>
                        <input id="ph-form" type="text" placeholder="Strasse" required><div class="slash">/</div> <input id="ph-form" type="number" placeholder="Hausnummer" required>
                    </p>
                    <p><label>Postleitzahl / Stadt: </label>
                        <input id="ph-form" type="number" placeholder="PLZ" required><div class="slash">/</div> <input id="ph-form" type="text" placeholder="Stadt" required>
                    </p>
                    <p><label>Postleitzahl / Stadt: </label>
                        <input id="username" type="text" placeholder="Username" required>
                    </p>
                </fieldset>
            </div>
        </div>
        <p>
            <input type="submit" id="button-parallax" value="Register">
        </p>
    </div>
</div>
</div>
</div>

<div class="content-down">
    <div class="title-content">
        <h2>So funktioniert easy2park</h2>
    </div>

    <div class="circle-finden">
        <img src="media/icons/ic_search_white_48px.svg">
    </div>
    <!-- <div class="text-finden">
        <h3>Finden</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda, blanditiis corporis debitis, delectus dolorum eaque est expedita hic obcaecati officia quaerat sapiente sit totam ullam velit voluptate voluptatibus!</p>
    </div> -->
    <div class="circle-zahlen">
        <img src="media/icons/ic_payment_white_48px.svg">
    </div>
    <!-- <div class="text-zahlen">
        <h3>Finden</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda, blanditiis corporis debitis, delectus dolorum eaque est expedita hic obcaecati officia quaerat sapiente sit totam ullam velit voluptate voluptatibus!</p>
    </div> -->
    <div class="circle-parken">
        <img src="media/icons/ic_directions_car_white_48px.svg">
    </div>
    <!-- <div class="text-parken">
         <h3>Finden</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda, blanditiis corporis debitis, delectus dolorum eaque est expedita hic obcaecati officia quaerat sapiente sit totam ullam velit voluptate voluptatibus!</p>
     </div>-->
</div>

<div class="search">

    <main id="container">
        <h5>Willkommen auf easy2park.ch</h5>


        <select id="parkhausauswahl" name="parkhausauswahl" class="parkhausauswahl"></select>

        <button id="modeswitcher" class="edit">Bearbeiten</button>
        <input id="entry" type="text" name="neuerParkplatz" class="eingabe">



        <h2>Parkplatzliste</h2>
        <ul id="parkhausliste"></ul>


    </main>
</div>




<!-- <script src="easy2park.js"></script> -->
<script src="platz.js"></script>
<script src="parkhaus.js"></script>
<script src="js/functions.js"></script>
</body>
</html>