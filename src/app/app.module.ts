import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {ScenariosPageComponent} from '~/app/pages/scenarios-page.component';
import {DualListPageComponent} from '~/app/pages/dual-list-page.component';
import {RenderListPageComponent} from '~/app/pages/render-list-page.component';

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import {ItemDetailComponent} from '~/app/item/item-detail.component';

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DualListPageComponent,
        ItemDetailComponent,
        RenderListPageComponent,
        ScenariosPageComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
