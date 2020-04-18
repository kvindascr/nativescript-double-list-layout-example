import {Component, OnInit} from '@angular/core';
import {ItemService} from '~/app/item/item.service';
import {Item} from '~/app/item/item';
import {RenderRow, RenderRowType} from '~/app/item/render-row';

@Component({
    selector: "ns-app",
    template: `
        <GridLayout rows="*" class="p-8">

            <ListView row="0" [items]="renderRows" [itemTemplateSelector]="templateSelector">
                <ng-template [nsTemplateKey]="RenderRowType.PageTitle" let-item="item">
                    <GridLayout>
                        <Label text="Search for players" class="h2" ></Label>
                    </GridLayout>
                </ng-template>

                <ng-template [nsTemplateKey]="RenderRowType.SearchForm" let-item="item">
                    <GridLayout columns="*, auto">
                        <TextField col="0" [(ngModel)]='search' hint="Type here"></TextField>
                        <Button col="1" text="Search" (tap)="onSearch(search)" class="-rounded -primary" ></Button>
                    </GridLayout>
                </ng-template>

                <ng-template [nsTemplateKey]="RenderRowType.SearchHeader" let-item="item">
                    <GridLayout>
                        <Label text="Searched players" class="h2"
                        ></Label>
                    </GridLayout>
                </ng-template>

                <ng-template [nsTemplateKey]="RenderRowType.SearchEmpty" let-item="item">
                    <GridLayout>
                        <Label text="No players where found with the searched criteria"
                               textWrap="true" class="text-danger"
                        ></Label>
                    </GridLayout>
                </ng-template>

                <ng-template [nsTemplateKey]="RenderRowType.RecommendedHeader" let-item="item">
                    <GridLayout>
                        <Label text="Recommended players" class="h2" ></Label>
                    </GridLayout>
                </ng-template>

                <ng-template [nsTemplateKey]="RenderRowType.RecommendedEmpty" let-item="item">
                    <Label text="No recommended players foundaaa"
                           textWrap="true" class="text-danger"
                    ></Label>
                </ng-template>
                
                <ng-template [nsTemplateKey]="RenderRowType.PlayerItem" let-row="item">
                    <item-detail [item]="row.payload"></item-detail>
                </ng-template>
            </ListView>
        </GridLayout>
    `
})
export class RenderListPageComponent implements OnInit {

    RenderRowType = RenderRowType;
    renderRows: RenderRow[];
    recommendedItems: Item[];
    search: string;
    searched: boolean;
    searchedItems: Item[];

    constructor(
        private itemService: ItemService
    ) { }

    ngOnInit(): void {
        this.recommendedItems = this.itemService.getRecommendedItems();
        this.updateRenderRows();
    }

    computeRenderRows(){
        const rows: RenderRow[] = [];
        rows.push({type: RenderRowType.PageTitle});
        rows.push({type: RenderRowType.SearchForm});
        if (this.searched){
            rows.push({type: RenderRowType.SearchHeader});
        }
        if (this.searchedItems && this.searchedItems.length > 0) {
            const searchItemRows: RenderRow[] = this.searchedItems.map(item => ({type: RenderRowType.PlayerItem, payload: item}));
            rows.push(...searchItemRows);
        } else if (this.searched) {
            rows.push({type: RenderRowType.SearchEmpty});
        }
        rows.push({type: RenderRowType.RecommendedHeader});
        if (this.recommendedItems && this.recommendedItems.length > 0) {
            const searchItemRows: RenderRow[] = this.recommendedItems.map(item => ({type: RenderRowType.PlayerItem, payload: item}));
            rows.push(...searchItemRows);
        } else {
            rows.push({type: RenderRowType.RecommendedEmpty});
        }
        return rows;
    }

    updateRenderRows(){
        this.renderRows = this.computeRenderRows();
    }

    onSearch(search: string) {
        this.searched = true;
        if (!search){
            this.searchedItems = undefined;
            return;
        }
        this.searchedItems = this.itemService.searchItems(search);
        this.updateRenderRows();
    }

    templateSelector(item: RenderRow){
        return item.type;
    }
}
