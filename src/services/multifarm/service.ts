import http from "../../http-common";
import { ApiData } from './apiTypes';
import createAsset from "./createAsset";

class MultifarmService {
    async getAll() {
      const response = await http.get<ApiData>("/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000");
      return response.data.data.map(asset => createAsset(asset));
    }
}
export default new MultifarmService();