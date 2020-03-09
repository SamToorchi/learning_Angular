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
    * `<h1>{{getName()}}</h1>`
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

 

ein weiteres Beispiel:

HTML:

```html
<img [src]="imgPath" [attr.alt]="_altLabel" />
```

oder:

```html
<img [src]="imgPath" [attr.alt]="getAltLabel()" />
```



ts:

```typescript
  private _altLabel = "logo";

  getAltLabel (): string{
    return this._altLabel;
  }
```





## div in body erzeugen

```typescript
let div: HTMLDivElement = document.createElement( 'div') as HTMLDivElement;
div.innerHTML = '<h1> my div </h1>';
document.body.appendChild( div );
```

 oder innerHTML extern in der HTML-Datei einfügen:

.ts:

```typescript
htmlContent = `<p>lorem ipsum</p>`
```

.html:

```html
<div [innerhtml]="htmlContent"></div>
```



oder ImgPath extern in der HTML-Datei einfügen:

.ts:

```
imgPath = '/assets/img/logo.png'
```

.html:

```
<img [src]="imgPath" alt="logo" />
```





## HTML-Attribute einbinden

.ts:

```
altLabel = "logo"
```

.html:

```
<img [attr.src]="imgPath" [attr.alt]="altLabel" />
```



oder für die Barrierefreiheit:

```html
<div [innerhtml]="htmlContent" [attr.aria-label]="desc"></div>
```

```typescript
desc = "Inhalt für ScreenReader"
```



## Style-Eigenschaften

```html
<h3 [style.color]="fontColor"></h3>
```

```typescript
fontColor = "red"
```



ein weiteres Beispiel

```typescript
fontSize = 1
```

```html
<h3 [style.fontSize.em]="fontSize"></h3>
```



ein weiteres Beispiel für Style-Klassen

```css
.user-name{
    color: lightgrey;
}
```

```html
<h3 [class]="userNameStyleClass"></h3>
```

```typescript
userNameStyleClass = "user-name";
```



ein weiteres Beispiel für Klasse mit **Bedingung**:

```html
<h3 [class.user-name]="isAdminUser"></h3>
```

```typescript
private _name = "Sam T.";

get isAdminUser (): boolean{
	return this._name === 'Sam T.';
}
```



## Ereignisse mit Buttons binden

```html
<button (click)="_name = 'Peter Müller'">Ändere Benutzername </button>
```

oder mit Methode

```typescript
chgName(){
	if (this._name != "Peter Müller") {
		this._name = "Peter Müller"
	}
	else{
		this._name = "Sam T."
	}
	
}
```

```html
<button (click)="chgName()">Ändere Benutzername </button>
```



## Ereignisinformationen transportieren

```html
<button (click)="chgName($event)">Ändere Benutzername </button>
```

```typescript
chgName(event: MouseEvent){
    debugger;
	if (this._name != "Peter Müller") {
		this._name = "Peter Müller"
	}
	else{
		this._name = "Sam T."
	}
	
}
```

