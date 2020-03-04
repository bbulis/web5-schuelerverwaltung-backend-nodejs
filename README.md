# web5-schuelerverwaltung-backend-nodejs

## Mitglieder des Teams
* Benjamin Bulis
* Simon Schachenhofer
* Emre Yeslidag

## Aufgabenstellung
Erweitere die Schuelerverwaltungs-App aus dem letzten Semester um die Moeglichkeit, Schueler nach verschiedenen Kriterien zu bewerten. Verwende dafuer ein komponentenbasiertes vuejs-Framework wie zum Beispiel quasar. Serverseitig kannst du dein nodejs - Interface aus der letzten Abgabe um die Bewertungen erweitern - der Einsatz einer Datenbank ist nicht verpflichtend.

## Verwendelte Technologien
Verschiedene Technologien werden verwendet um auf eine Datenbank zu zu greifen und Daten in JSON Format an den Client zu senden.
* NodeJS
* ExpressJS (REST Framework)
* Sequelize (Datenbankzugriff)
* Docker (Hosten der Datenbank)
* Babel (ES6 -> ES5)

## How to start
### First build
Zum erstellen einer Ausführbaren Version muss Anfangs einmal `npm run build` ausgeführt werden.
### Start System
Ausführen von `npm start` startet den Server.
#### Achtung
Die Datenbank muss extra  in einem Docker-Container  gestartet werden. 
Ebenso muss ein `.env` File erstellt werden, welches alle Umgebungsvariablen beinhaltet.

##### Beispiel `.env` File 

````bash
PORT=3000

DB_DATABASE=student
DB_USER=studentUser
DB_PASSWORD=studentPassword
DB_HOST=localhost
DB_DIALECT=mysql
DB_PORT=3306
````

