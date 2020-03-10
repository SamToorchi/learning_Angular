# Eltern-Kind-Kommunikation

## @Input()



* Ein Input-Ereignis
* wartet auf Input des Decorator

```typescript
import {Input} from '@angular/core';

export class UserNameComponent{
    @Input('username')
    name = "Sam T."
    
}
```

```html
<app-user-name username="Frank Mustermann"></app-user-name>
```



### weitere Möglichkeit für Ergänzung der Bindung und Erzeugung der Eltern-Kind-Komponente

`user-list.component.ts`

```typescript
  user1 = "Max Mustermann";
  user2 = "Maxi Mustermann";
  user3 = "Sam T.";
```

`user-list.component.html`

```html
<app-user-name [name]="user1"></app-user-name> /* Variable von user-name wird von aus der user-list ersetzt */
<app-user-name [name]="user2"></app-user-name>
<app-user-name [name]="user3"></app-user-name>
```



### @Output - Benutzerdefinierte Ereignisse

```typescript
import {Output, EventEmitter} from '@angular/core';

  @Output()
  nameChanged: EventEmitter<string> = new EventEmitter();

  chgName() {
    if (this.name != 'Peter Müller') {
      this.name = 'Peter Müller';
      this.isAdminUser = false;
    } else {
      this.name = 'Sam T.';
      this.isAdminUser = true;
    }
    this.nameChanged.emit("Sam T."); /* <-- Änderung */
  }


```
`user-list.component.html`

```html
<app-user-name [name]="user3" (nameChanged)="OnNameChanged ($event)"></app-user-name>
```

* alles was in runden Klammern sind, gehören zu den Events/Ereignissen, die eine Methode ausführen sollen

```typescript
currentUser3: string;  
onNameChanged( newName: string){
    console.log('newNamae ', newName);
    this.currentUser3 = newName;
    
  }
  
```

