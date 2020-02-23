# Bindungen - Brücke zwischen Logik- und Darstellungsschicht

### einfaches Beipsiel

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



* Werte und Methode in der Vorlage binden

  * Mittels Ausdrucksinterpolation

    * `<h1>{{name}}</h1>`
  * hier kann man auch statische Werte auch mit eingeben, z.B.: `<h1>{{name T.}}</h1>`
    * `<h1>{{getName()</h1>`
  * als Eigenschaft binden
    * `<img [src]= "imgPath">`
  * Als Attribut binden
    * `<img [att.alt]= "imgAlt"` also das HTML-Attribut von img definieren



## getter und setter

```typescript
private _name = "Sam T."

get name(): string{
​	return `Herr ${this._name}`; // return "Herr " + this._name;
}

set name (value: string) {
​	this._name = value;
}

```







