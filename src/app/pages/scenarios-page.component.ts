import {Component} from '@angular/core';

@Component({
    selector: "ns-app",
    template: `
        <StackLayout>
            <Label text="Scenarios" fontSize="30" textAlignment="center" ></Label>
            <Button [nsRouterLink]="'/dual-list'" class="-primary -rounded" text="Double List" ></Button>
            <Button [nsRouterLink]="'/dual-list'" class="-primary -rounded" text="Render List with one list populated" ></Button>
            <Button [nsRouterLink]="'/dual-list'" class="-primary -rounded" text="Render List with two list populated" ></Button>
        </StackLayout>
    `
})
export class ScenariosPageComponent {

}
