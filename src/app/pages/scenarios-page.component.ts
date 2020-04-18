import {Component} from '@angular/core';

@Component({
    selector: "ns-app",
    template: `
        <StackLayout>
            <Label text="Scenarios" class="h2" textAlignment="center" ></Label>
            <Button [nsRouterLink]="'/dual-list'" class="-primary -rounded" text="Double List" ></Button>
            <Button [nsRouterLink]="'/render-list'" class="-primary -rounded" text="Render List" ></Button>
        </StackLayout>
    `
})
export class ScenariosPageComponent {

}
