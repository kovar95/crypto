import { Asset, HistoryItem } from "./apiTypes"
import { format } from "date-fns";

const dateFormat = 'MMM dd';

const createTvlStakedHistoryItem = (apiHistoryItem: HistoryItem): HistoryItem => {
    return {date: format(new Date(apiHistoryItem.date), dateFormat), value: +(apiHistoryItem.value/10000000).toFixed(1)};
};

const createAprHistoryItem = (apiHistoryItem: HistoryItem, index: number): HistoryItem => {
    return {date: format(new Date(apiHistoryItem.date), dateFormat), value: index*5};
};

const createTvlStakedHistory = (apiHistory?: HistoryItem[]): HistoryItem[] => {
    return apiHistory?.map(his => createTvlStakedHistoryItem(his)).reverse() ?? [];
};

const createAprHistory = (apiHistory?: HistoryItem[]): HistoryItem[] => {
    return apiHistory?.reverse()?.map((his, i) => createAprHistoryItem(his, i)) ?? [];
};

const createAsset = (apiAsset: Asset): Asset => {
    return {...apiAsset, maxRewardAPRTotalHistory: createAprHistory(apiAsset.maxRewardAPRTotalHistory), gaugeData: {
        ...apiAsset.gaugeData,
        tvlStakedHistorical: createTvlStakedHistory(apiAsset?.gaugeData?.tvlStakedHistorical)
    }};
};

export default createAsset;