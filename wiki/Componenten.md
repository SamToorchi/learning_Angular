# Komponenten

*jedes Modul muss einem Modul zugewiesen werden*

## Component erzeugen

`ng g c user/user`

Trockenaufbau mit `--dry-run`



## Add-One für WebBrowser

Augury



## Component löschen

* Eintrag in `app.module.ts` löschen (`import`)
* Eintrag in dem Bereich `@NgModule` aus `app.module.ts` löschen
* der Ordner manuell löschen



## Component in app.component einbinden

`app.component.html`:

```html
<app-user></app-user>
```



## Beispiel eines Komponenten

`user.component.ts`

```typescript
export class UserComponent {
	name = 'Björn A.'
	
	chgName(){
		this.name = 'Sam T.'
	}
}

```



`user.component.html`

```html
<h1>{{name}}</h1> <!-- Björn A.  wird nach dem klicken auf dem Button zum Sam. T--> 

<button (click)="chgName()"> 
	Ändern
</button>
```



`user.component.scss`

```css
h1{
	color: gray;
}
button{
	background-color: yellow;
}
```



## @Component - Decorator (Metainformationen)

* **selector:** HTML-Knotenname; CSS-Komponente
* **templateUrl:** separate HTML-Datei
* **template:** Vorlage der Komponente - Beispielsweise direkter HTML-Code `<h1> Title </h1>` oder mehrzeilig 
```html
`
<h1> Title </h1>
<ul>
	<li>user 1 </li>
	<li>user 2 </li>
	<li>user 3 </li>
</ul>
`
```
* **styles**: 

  ```typescript
[`
      h1{
  		text-decoration: underline;
      }
      ul{
      	list-style: none;
      }
  
  `]
  ```
  


* **styleUrls:** Liste der Style-Definitionen

* styleSheet für Host: 

  ```css
  app-user-list{ /* also den selector */
    h1{
      text-decoration: underline;
    }
  }
  
  :host { /* also für alle Komponente */
  	h2{
  		...
  	}
  }
  ```

  



## Encapsulation-Modi

solche Elemente in DOM:
```html
<ul  _ngcontent-hob-c18> </ul>
```

**Standard-Wert:** `encapsulation: ViewEncapsulation.Emulated`

Änderung wie folgt:

```typescript
import { ViewEncapsulation } from '@angular/core';

@component ({
	encapsulation: ViewEncapsulation.None
} )
```

&rarr; **Wirkung**: allgemeine CSS-Definitionen werden nicht mehr klassifiziert und wirken auf alle Elemente




```typescript
import { ViewEncapsulation } from '@angular/core';

@component ({
	encapsulation: ViewEncapsulation.Native
} )
```

&rarr; **Wirkung:** Shadow-DOM Objekt wird erzeugt; also lieber nicht benutzen. Wird von vielen Browsern nicht unterstützt.





## Komponente verschachteln

`app.component.html`

```html
<app-user></app-user>
```



`user.component.html`

```html
<app-user-list></app-user-list>
```

beachten, dass `user.modul` in `app.modul` importiert wurde



## Lebenszyklen der Komponente in der Reihenfolge

* **constructor**: das erste Element was erzeugt wird - Aufbau des Komponents
* **ngOnChanges:** wenn über ein @Input-Eigenschaft sich ändert

```typescript
import {OnChanges, SimpleChanges} from '@angular/core';

export class UserNameComponent implements OnChanges {
	  ngOnChanges(changes: SimpleChanges): void{
		console.log( changes );
  }
}

```



* **ngOnInit:** Inizialiserung
* **ngDoCheck:** wird ausgeführt, wenn die Komponente prüfen soll, ob sich bestimmte Werte abhängig von Eigenschaften geändert haben
* **anAfterContentInit:** wenn Kinder-Elemente vollständig aufgebaut sind, wird diese Methode aufgerufen
  * **ngAfterContentChecked:** Wenn *DoCheck* abgeschlossen wurde bzw. wenn die Kinder sich aktualisiert haben
  * **ngAfterViewInit:**Mit dem Lifecycle-Hook AfterViewInit lässt sich herausfinden, ob die untergeordneten Komponenten fertig initialisiert sind
  * **ngAfterViewChecked:** wenn die Kinder in der HTML-Seite sich ändern
* **ngOnDestroy:** falls ein Component von einem anderen Component gelöscht wird. Also wird aufgerufen, wenn Angular einen Komponent zerstört hat