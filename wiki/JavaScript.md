# JavaScript

* entweder extern laden
* oder in index.html einfügen



# jQuery

* `npm i jquery --save`

* in `angular.json` in `scripts` folgendes einfügen: `./node_modules/jquery/dist/jquery.js`

* zum testen folgendes in der Console des Web-Browsers eingeben: `$('body')`

* in dem Terminal muss folgendes eingegeben werden: `npm i @types/jquery --save-dev`

* jquery muss jetzt wie folgt in `tsconfig.app.json` in dem Bereich `types` importiert werden: `jquery`

* Beispiel zum testen in einem Component:  

  ```   
  constructor() {
      console.log($('body'));
    }
  ```

