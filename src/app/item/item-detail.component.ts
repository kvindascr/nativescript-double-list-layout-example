import {Component, Input} from "@angular/core";

import {Item} from "./item";

@Component({
    selector: "item-detail",
    template: `
        <GridLayout columns="*, auto">
            <Label col="0" [text]="item.name"></Label>
            <Label col="1" [text]="item.role"></Label>
        </GridLayout>
    `
})
export class ItemDetailComponent {
    @Input() item: Item;
}
