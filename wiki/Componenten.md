# Komponenten

## Component erzeugen

`ng g c user/user`



## Component löschen

* Eintrag in `app.module.ts` löschen
* Eintrag in dem Bereich `@NgModule` aus `app.module.ts` löschen
* der Ordner manuell löschen



## Component in app.component einbinden

`app.component.html`:

```
<app-user></app-user>
```



## Beispiel eines Komponenten

`user.component.ts`

```
export class UserComponent {
	name = 'Björn A.'
	
	chgName(){
		this.name = 'Sam T.'
	}
}

```



`user.component.html`

```
<h1>{{name}}</h1>

<button (click)="chgName()">
	Ändern
</button>
```



`user.component.scss`

```
h1{
	color: gray;
}
button{
	background-color: yellow;
}
```

