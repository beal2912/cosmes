// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/amm/v1/genesis.proto (package pryzm.amm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Pool } from "./pool_pb.js";
import { PoolToken } from "./pool_token_pb.js";
import { Params } from "./params_pb.js";
import { WeightedPoolProperties } from "./weighted_token_pb.js";
import { PermanentVirtualBalancePoolToken, TemporalVirtualBalancePoolToken } from "./virtual_balance_pool_token_pb.js";
import { YammConfiguration } from "./yamm_configuration_pb.js";
import { WhitelistedRoute } from "./whitelisted_route_pb.js";
import { DisabledOrderPair, Order } from "./order_pb.js";
import { ScheduleOrder } from "./schedule_order_pb.js";
import { OraclePricePair } from "./oracle_price_pair_pb.js";
import { PendingTokenIntroduction } from "./pending_token_introduction_pb.js";

/**
 * @generated from message pryzm.amm.v1.GenesisPoolData
 */
export class GenesisPoolData extends Message<GenesisPoolData> {
  /**
   * @generated from field: pryzm.amm.v1.Pool pool = 1;
   */
  pool?: Pool;

  /**
   * @generated from field: string total_lp_token_supply = 2;
   */
  totalLpTokenSupply = "";

  /**
   * @generated from field: repeated pryzm.amm.v1.PoolToken pool_token_list = 3;
   */
  poolTokenList: PoolToken[] = [];

  constructor(data?: PartialMessage<GenesisPoolData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.amm.v1.GenesisPoolData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool", kind: "message", T: Pool },
    { no: 2, name: "total_lp_token_supply", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "pool_token_list", kind: "message", T: PoolToken, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisPoolData {
    return new GenesisPoolData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisPoolData {
    return new GenesisPoolData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisPoolData {
    return new GenesisPoolData().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisPoolData | PlainMessage<GenesisPoolData> | undefined, b: GenesisPoolData | PlainMessage<GenesisPoolData> | undefined): boolean {
    return proto3.util.equals(GenesisPoolData, a, b);
  }
}

/**
 * @generated from message pryzm.amm.v1.YammPoolAssetId
 */
export class YammPoolAssetId extends Message<YammPoolAssetId> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string asset_id = 2;
   */
  assetId = "";

  constructor(data?: PartialMessage<YammPoolAssetId>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.amm.v1.YammPoolAssetId";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "asset_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): YammPoolAssetId {
    return new YammPoolAssetId().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): YammPoolAssetId {
    return new YammPoolAssetId().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): YammPoolAssetId {
    return new YammPoolAssetId().fromJsonString(jsonString, options);
  }

  static equals(a: YammPoolAssetId | PlainMessage<YammPoolAssetId> | undefined, b: YammPoolAssetId | PlainMessage<YammPoolAssetId> | undefined): boolean {
    return proto3.util.equals(YammPoolAssetId, a, b);
  }
}

/**
 * GenesisState defines the amm module's genesis state.
 *
 * @generated from message pryzm.amm.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * @generated from field: pryzm.amm.v1.Params params = 1;
   */
  params?: Params;

  /**
   * @generated from field: repeated pryzm.amm.v1.GenesisPoolData pool_list = 2;
   */
  poolList: GenesisPoolData[] = [];

  /**
   * @generated from field: repeated pryzm.amm.v1.WeightedPoolProperties weighted_pool_properties_list = 3;
   */
  weightedPoolPropertiesList: WeightedPoolProperties[] = [];

  /**
   * @generated from field: repeated pryzm.amm.v1.YammPoolAssetId yamm_pool_asset_id_list = 4;
   */
  yammPoolAssetIdList: YammPoolAssetId[] = [];

  /**
   * @generated from field: repeated pryzm.amm.v1.TemporalVirtualBalancePoolToken introducing_pool_token_list = 5;
   */
  introducingPoolTokenList: TemporalVirtualBalancePoolToken[] = [];

  /**
   * @generated from field: repeated pryzm.amm.v1.TemporalVirtualBalancePoolToken expiring_pool_token_list = 6;
   */
  expiringPoolTokenList: TemporalVirtualBalancePoolToken[] = [];

  /**
   * @generated from field: repeated pryzm.amm.v1.YammConfiguration yamm_configuration_list = 7;
   */
  yammConfigurationList: YammConfiguration[] = [];

  /**
   * @generated from field: repeated pryzm.amm.v1.WhitelistedRoute whitelisted_route_list = 8;
   */
  whitelistedRouteList: WhitelistedRoute[] = [];

  /**
   * @generated from field: repeated pryzm.amm.v1.Order order_list = 9;
   */
  orderList: Order[] = [];

  /**
   * @generated from field: uint64 order_count = 10;
   */
  orderCount = protoInt64.zero;

  /**
   * @generated from field: repeated uint64 executable_order_list = 11;
   */
  executableOrderList: bigint[] = [];

  /**
   * @generated from field: repeated pryzm.amm.v1.ScheduleOrder schedule_order_list = 12;
   */
  scheduleOrderList: ScheduleOrder[] = [];

  /**
   * @generated from field: bool vault_paused = 13;
   */
  vaultPaused = false;

  /**
   * @generated from field: repeated pryzm.amm.v1.OraclePricePair oracle_price_pair_list = 14;
   */
  oraclePricePairList: OraclePricePair[] = [];

  /**
   * @generated from field: repeated pryzm.amm.v1.PendingTokenIntroduction pending_token_introduction_list = 15;
   */
  pendingTokenIntroductionList: PendingTokenIntroduction[] = [];

  /**
   * @generated from field: repeated pryzm.amm.v1.DisabledOrderPair disabled_order_pair_list = 16;
   */
  disabledOrderPairList: DisabledOrderPair[] = [];

  /**
   * @generated from field: bytes next_executable_order_key = 17;
   */
  nextExecutableOrderKey = new Uint8Array(0);

  /**
   * this line is used by starport scaffolding # genesis/proto/state
   *
   * @generated from field: repeated pryzm.amm.v1.PermanentVirtualBalancePoolToken permanent_virtual_balance_pool_token_list = 18;
   */
  permanentVirtualBalancePoolTokenList: PermanentVirtualBalancePoolToken[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.amm.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "pool_list", kind: "message", T: GenesisPoolData, repeated: true },
    { no: 3, name: "weighted_pool_properties_list", kind: "message", T: WeightedPoolProperties, repeated: true },
    { no: 4, name: "yamm_pool_asset_id_list", kind: "message", T: YammPoolAssetId, repeated: true },
    { no: 5, name: "introducing_pool_token_list", kind: "message", T: TemporalVirtualBalancePoolToken, repeated: true },
    { no: 6, name: "expiring_pool_token_list", kind: "message", T: TemporalVirtualBalancePoolToken, repeated: true },
    { no: 7, name: "yamm_configuration_list", kind: "message", T: YammConfiguration, repeated: true },
    { no: 8, name: "whitelisted_route_list", kind: "message", T: WhitelistedRoute, repeated: true },
    { no: 9, name: "order_list", kind: "message", T: Order, repeated: true },
    { no: 10, name: "order_count", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 11, name: "executable_order_list", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 12, name: "schedule_order_list", kind: "message", T: ScheduleOrder, repeated: true },
    { no: 13, name: "vault_paused", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "oracle_price_pair_list", kind: "message", T: OraclePricePair, repeated: true },
    { no: 15, name: "pending_token_introduction_list", kind: "message", T: PendingTokenIntroduction, repeated: true },
    { no: 16, name: "disabled_order_pair_list", kind: "message", T: DisabledOrderPair, repeated: true },
    { no: 17, name: "next_executable_order_key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 18, name: "permanent_virtual_balance_pool_token_list", kind: "message", T: PermanentVirtualBalancePoolToken, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}

