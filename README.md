# analytics

1. clonez le repo en tapant cette commande dans un cmd :

- git clone https://github.com/Demetryo/analytics.git

2. rendez-vous dans le répertoire cloné et depuis le cmd tapez :

- docker compose up

Les 2 répertoires principaux sont back-end et front-end.
Rendez-vous dans chacun de ces répertoires et éxécutez la commande suivante :

- npm install

3. pour lancer le server API et tester le script, rendez-vous dans le répertoire backe-end/api et éxecutez :

- node index.js
  Pour tester le script, lancez la page test.html et cliquez sur n'importe quel élément
  Pour vérifier l'écriture en base de donnée, rendez vous sur http://localhost:8081/db/analytics/paths

4. Pour lancer le dashboard, rendez vous dans le répertoire front-end et éxecutez :

- npm run dev
  rendez-vous sur http://127.0.0.1:5173/#/login
