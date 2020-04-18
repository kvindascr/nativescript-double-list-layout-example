import {Item} from '~/app/item/item';

export enum RenderRowType {
    PageTitle = "PageTitle",
    SearchForm = "SearchForm",
    SearchHeader = "SearchHeader",
    PlayerItem = "PlayerItem",
    SearchEmpty = "SearchEmpty",
    RecommendedHeader = "RecommendedHeader",
    RecommendedEmpty = "RecommendedEmpty",
}

export interface RenderRow {
    type: RenderRowType;
    payload?: Item;
}
