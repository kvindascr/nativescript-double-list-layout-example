import {Component, OnInit} from '@angular/core';
import {ItemService} from '~/app/item/item.service';
import {Item} from '~/app/item/item';

@Component({
    selector: "ns-app",
    template: `
        <GridLayout rows="auto, auto, auto, auto, auto, auto" class="p-8">
            <Label row="0" text="Search for players" class="h2" ></Label>
            
            <GridLayout row="1" columns="*, auto">
                <TextField col="0" [(ngModel)]='search' hint="Type here"></TextField>
                <Button col="1" text="Search" (tap)="onSearch(search)" class="-rounded -primary" ></Button>
            </GridLayout>
            
            <Label row="2"
                   *ngIf="searched"
                   text="Searched players" class="h2"
            ></Label>
            <Label row="3" 
                   *ngIf="searched && (!searchedItems || searchedItems.length === 0)"
                   text="No players where found with the searched criteria"
                   textWrap="true" class="text-danger"
            ></Label>

            <ListView row="3" [items]="searchedItems"
                      *ngIf="searched && searchedItems && searchedItems.length > 0"
            >
                <ng-template let-item="item">
                    <item-detail [item]="item"></item-detail>
                </ng-template>
            </ListView>
            
            <Label row="4" text="Recommended players" class="h2" ></Label>
            <ListView row="5" [items]="recommendedItems">
                <ng-template let-item="item">
                    <item-detail [item]="item"></item-detail>
                </ng-template>
            </ListView>
        </GridLayout>
    `
})
export class DualListPageComponent implements OnInit {

    search: string;
    searched: boolean;
    searchedItems: Item[];
    recommendedItems: Item[];

    constructor(
        private itemService: ItemService
    ) { }

    ngOnInit(): void {
        this.recommendedItems = this.itemService.getRecommendedItems();
    }

    onSearch(search: string) {
        this.searched = true;
        if (!search){
            this.searchedItems = undefined;
            console.log('noSearch......');
            return;
        }
        this.searchedItems = this.itemService.searchItems(search);
        console.log('searchedItems.....:', this.searchedItems && this.searchedItems.length);
    }
}
