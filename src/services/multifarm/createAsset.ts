import { Asset, HistoryItem } from "./apiTypes"
import { format } from "date-fns";

const dateFormat = 'MMM d';

const createTvlStakedHistoryItem = (apiHistoryItem: HistoryItem): HistoryItem => {
    return {date: format(new Date(apiHistoryItem.date), dateFormat), value: Math.round(apiHistoryItem.value/1000000000)};
};

const createAprHistoryItem = (apiHistoryItem: HistoryItem, index: number): HistoryItem => {
    return {date: format(new Date(apiHistoryItem.date), dateFormat), value: index*5};
};

const createTvlStakedHistory = (apiHistory: HistoryItem[]): HistoryItem[] => {
    return apiHistory.map(his => createTvlStakedHistoryItem(his)).slice(0,10).reverse();
};

const createAprHistory = (apiHistory: HistoryItem[]): HistoryItem[] => {
    return apiHistory.slice(0,10).reverse().map((his, i) => createAprHistoryItem(his, i));
};

const createAsset = (apiAsset: Asset): Asset => {
    return {...apiAsset, selected_farm: apiAsset.selected_farm?.map(farm => {
        return {...farm, tvlStakedHistory: createTvlStakedHistory(farm.tvlStakedHistory), aprHistory: createAprHistory(farm.tvlStakedHistory)};
    })};
};

export default createAsset;