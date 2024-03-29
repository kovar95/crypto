
export type HistoryItem = {
    date: string,
    value: number,
}

type Farm = {
    _locks: string[],
    active: boolean,
    blockchain?:string,
    dateAdded?:string,
    dateUpdated?:string | null,
    farmId:string,
    farmName:string,
    farmType?:string | null,
    lastFullUpdate?: string | null,
    scam?:false,
    scamInfo?:string | null,
    tvlChange24h?:string | null,
    tvlChange24hValue?:number,
    tvlStaked?:number,
    tvlStakedHistory: HistoryItem[],
    aprHistory: HistoryItem[],
}

export type Asset = {
    active?: boolean,
    antiWhale?:number | null,
    aprDaily?:number | null,
    aprWeekly?: number | null,
    aprYearly?: number | null,
    apyYearly?: number | null,
    asset: string,
    assetAddress?: string | null,
    assetId: string,
    assetLockup?: boolean,
    assetPopupMessage?:string | null,
    assetPrice?: number | null,
    auditInfo?:string | null,
    blockchain?:string | null,
    category?:string | null,
    collateralLockPeriod?:string | null,
    d_active_reason?:string | null,
    dateAdded?:string | null,
    dateEnding?:string | null,
    dateStarted?:string | null,
    dateUpdated?:string | null,
    daysRemaining?:string | null,
    depositFee?:string | null,
    exchangeName?:string | null,
    exchangePicture?:string | null,
    exchangeUrl?:string | null,
    exchangeVersion?:string | null,
    farm?:string | null,
    farmId?:string,
    farmImage?:string | null, 
    farmName?:string | null,
    farmType?:string | null,
    feeAprYearly?:number | null,
    harvestLockup?:string | null,
    harvestLockupInfo?:string | null,
    impermanentLoss?:string | null,
    impermanentLoss3numberd?:string | null,
    info?:string | null,
    investmentLink?:string | null,
    manuallyCalculatedAPR:false,
    maxPoolCap?:string | null,
    multiplier?:string | null,
    nativeToken?:string | null,
    nativeTokenAddress?:string | null,
    nativeTokenInvestLink?:string | null,
    nativeTokenMarketCap?:number | null,
    nativeTokenPrice?:number | null,
    new_asset?:boolean,
    otherFees?:string | null,
    otherPoolEconomicsInfo?:string | null,
    pid?:number,
    poolAlreadyFilled?:boolean,
    priceCorrelation_3numberd?:string | null,
    rewardTokenA?:string | null,
    rewardTokenAAddress?:string | null,
    rewardTokenAAprYearly?:number | null,
    rewardTokenAAprYearlyMaxBoosted?:number,
    rewardTokenAPrice?:number,
    rewardTokenAWeeklyAmount?:number,
    rewardTokenAWeeklyDollarAmount?:number,
    rewardTokenB?:string | null,
    rewardTokenBAddress?:string | null,
    rewardTokenBAprYearly?:number,
    rewardTokenBAprYearlyMaxBoosted?:number,
    rewardTokenBPrice?:number,
    rewardTokenBWeeklyAmount?:number,
    rewardTokenBWeeklyDollarAmount?:number,
    scam?:boolean,
    scamInfo?:string | null,
    selected_farm: Farm[],
    stakingAddress?:string | null,
    stakingLink?:string | null,
    status?:string | null,
    tokenA?:string | null,
    tokenAAddress?:string | null,
    tokenABacking?:number,
    tokenAHolders?:number,
    tokenAHoldersHistory?: HistoryItem[],
    tokenAPicture?:string | null,
    tokenAPrice?:number,
    tokenAPriceHistory?: HistoryItem[];
    tokenB?:string | null,
    tokenBAddress?:string | null,
    tokenBBacking?:number,
    tokenBHolders?:number,
    tokenBPicture?:string | null,
    tokenBPrice?:number,
    tokenC?:string | null,
    tokenCAddress?:string | null,
    tokenCBacking?:number,
    tokenCHolders?:number,
    tokenCPicture?:string | null,
    tokenCPrice?:number,
    tokenD?:string | null,
    tokenDAddress?:string | null,
    tokenDBacking?:number,
    tokenDHolders?:number,
    tokenDPicture?:string | null,
    tokenDPrice?:number,
    tokenE?:string | null,
    tokenEAddress?:string | null,
    tokenEBacking?:number,
    tokenEHolders?:number,
    tokenEPicture?:string | null,
    tokenEPrice?:number,
    transferTax?:string | null,
    transferTaxInfo?:string | null,
    tvlChange24h?:string,
    tvlChange24hValue?:number | null,
    tvlStaked?:number | null,
    tvlExchange?:number | null,
    tvlFarm?:number | null,
    underlyingFarm?:string | null,
    url?:string | null,
    vaultAddress?:string | null,
    volume_24h?:string | null,
    weight?:string | null,
    withdrawalFee?:string | null,
    yearlyTokenRewardPool?:number,
    yieldType?:string | null,
    gaugeData: {
        gaugeAddress?: string,
        tvlStaked?: number,
        tvlStakedHistorical: HistoryItem[],
    }
    maxRewardAPRTotalHistory: HistoryItem[],
};

export interface ApiData {
    data: Asset[];
};
