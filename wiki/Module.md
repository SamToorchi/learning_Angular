# Module

* sind Container mit Componenten, Direktiven, Pipes, Services usw.
* wiederverwendbar mit  Hilfe von Import und Export



z.B. Modul A hat Component A und Component B; Modul B hat Component C

für die Kommunikation zwischen den Modulen bzw. Componenten muss man das eine Modul in dem anderen importieren. Also Componente müssen zu erst exportiert werden



## Angular-Module

* BrowserModule (Ereignisse, DOM)
* CommonModule (Direktiven z.B. `ng if`, Pipes sind für die Formatierung der Ausgaben zuständig)
* HttpModule (Client-Server-Kommunikation)
* FormsModule und ReactiveFormsModule (Formulate)
* RouterModule (Komponenten-Router) für Single-Page Application



### Angluar-Module angelgen

* Module erzeugen

  * Modul-Klasse (ts) anlegen

    * `export class ModulName`

  * Klasse mit Metainformationen versehen

    * `@NgModule({ /* meta bzw. Funktionsname */ })`

    ​        `export class ModuleName`

* `@NgModule`  - Decorator (Metainformationen)
  * imports - Liste der importierten Module
  * declarations: Liste der Komponenten, Directiven und Pipes innerhalb des Modules
  * providers: Liste der Services
  * exports: Liste der exportierende Elementete (außer Services)
  * bootstrap: Liste der Startkomponente, meistens nur ein einziges Komponent



## eigenes Modul manuell erzeugen

* unter `app` einen neuen Ordner erzeugen Namens `user`
* neue .ts-Datei erzeugen: `UserModule.ts`
* Skript: 
```
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

@NgModule ({
	imports: [
		CommonModule
	]
}) 
export class UserModule(){

}
```

## eigenes Modul über Console erzeugen
`ng g module products`

## Modul mit Komponenten importieren
`ng g c user/user`

die Components werden in der `declarations` des Moduls eingefügt/importiert

wenn man jetzt den Komponent in der `app.component` einfügen möchte, kann man das in der HTML-Seite wie folgt einfügen: `<app-user></app-user>`
Vorher muss man `UserComponent` in `user.module.ts` exportieren lassen, also folgendes unter dem `declarations` einfügen: `exports: [UserComponent]`. 
Dann muss man `UserComponent` in `app.module.ts` importieren: `imports: [..., UserModule]` und ganz oben wie folgt importieren: `import { UserModule } from './user/user.module';`









