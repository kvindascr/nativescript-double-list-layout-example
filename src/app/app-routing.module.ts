import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";
import {ScenariosPageComponent} from '~/app/pages/scenarios-page.component';
import {DualListPageComponent} from '~/app/pages/dual-list-page.component';
import {RenderListPageComponent} from '~/app/pages/render-list-page.component';

const routes: Routes = [
    { path: "", redirectTo: "/scenarios", pathMatch: "full" },
    { path: "scenarios", component: ScenariosPageComponent },
    { path: "dual-list", component: DualListPageComponent },
    { path: "render-list", component: RenderListPageComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
