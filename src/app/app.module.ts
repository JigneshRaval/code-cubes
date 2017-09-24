import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        // Imports Metadata tells the angular list of other modules used by this module.
        BrowserModule
    ],
    declarations: [
        // Declaration Metadata lists the components, directives , services etc that are part of this module.
        AppComponent,
    ],
    providers: [

    ],
    entryComponents: [],
    bootstrap: [
        // Bootstrap Metadata identifies the root component of the module.
        // When Angular loads the appModule it looks for bootstrap Metadata and loads all the components listed here.
        // We want our module to AppComponent , hence we have listed it here
        AppComponent
    ]
})
export class AppModule { }
