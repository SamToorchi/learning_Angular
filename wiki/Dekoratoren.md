

# Host

## HostListener

### CSS-HostListener

man kann pro Komponent einen Host-Listener einbauen.

Z.B. für user-name.component

```css
:host{
	background-color:grey;
    &:hover{
        cursor: pointer;
    }
}
```



### HostListener

* ist ein Decorator, also immer eine Methode

* wird immer nach dem `constructor` und `ngOnInit` definiert
* er erwartet immer ein Event, z.B. `click`

```typescript
import{HostListener} from '@angular/core';

export class UserNameComponent{
    
  @HostListener('click')
    methode() {
		/* do something */
    }
}
```

* nur die Folgemethode nach  `@HostListener(event)` wird ausgeführt



### Einstellungen des HostListener

```typescript
@HostListener ('click', ['$event', 'name'])
	methode (event: MouseEvent, name: string){
		console.log(event, name);
	}
```



weiteres Beipsiel:

`app.component.ts`

```typescript
@HostListener ('window: resize', ['$event'])
    resize (event: Event){
		console.log(event);
    }
```

* erlaubte Bindungen: `window`, `body`, `document`



### HostBinding

```html
<h3>
   {{name}} 
</h3>
```

```typescript
import {HostBinding} from '@angular/core';

export class UserNameComponent{
    
	@HostBinding('class.user-name')
    isAdminUser = false;
    
    @HostListener('click')
    chgName() {
      debugger;
      if (this._name != 'Peter Müller') {
        this._name = 'Peter Müller';
        this.isAdminUser = false;
      } else {
        this._name = 'Sam T.';
        this.isAdminUser = true;
      }

    }
    
}
```

```scss
:host{
    &.user-name{
        color: lightgrey;
    }
}
```



