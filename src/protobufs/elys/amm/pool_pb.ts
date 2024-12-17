// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/amm/pool.proto (package elys.amm, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { LegacyPoolParams, PoolParams } from "./pool_params_pb.js";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
import { PoolAsset } from "./pool_asset_pb.js";

/**
 * @generated from message elys.amm.LegacyPool
 */
export class LegacyPool extends Message<LegacyPool> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string address = 2;
   */
  address = "";

  /**
   * @generated from field: elys.amm.LegacyPoolParams pool_params = 3;
   */
  poolParams?: LegacyPoolParams;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin total_shares = 4;
   */
  totalShares?: Coin;

  /**
   * @generated from field: repeated elys.amm.PoolAsset pool_assets = 5;
   */
  poolAssets: PoolAsset[] = [];

  /**
   * @generated from field: string total_weight = 6;
   */
  totalWeight = "";

  /**
   * @generated from field: string rebalance_treasury = 7;
   */
  rebalanceTreasury = "";

  constructor(data?: PartialMessage<LegacyPool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.LegacyPool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "pool_params", kind: "message", T: LegacyPoolParams },
    { no: 4, name: "total_shares", kind: "message", T: Coin },
    { no: 5, name: "pool_assets", kind: "message", T: PoolAsset, repeated: true },
    { no: 6, name: "total_weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "rebalance_treasury", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LegacyPool {
    return new LegacyPool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LegacyPool {
    return new LegacyPool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LegacyPool {
    return new LegacyPool().fromJsonString(jsonString, options);
  }

  static equals(a: LegacyPool | PlainMessage<LegacyPool> | undefined, b: LegacyPool | PlainMessage<LegacyPool> | undefined): boolean {
    return proto3.util.equals(LegacyPool, a, b);
  }
}

/**
 * @generated from message elys.amm.Pool
 */
export class Pool extends Message<Pool> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string address = 2;
   */
  address = "";

  /**
   * @generated from field: elys.amm.PoolParams pool_params = 3;
   */
  poolParams?: PoolParams;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin total_shares = 4;
   */
  totalShares?: Coin;

  /**
   * @generated from field: repeated elys.amm.PoolAsset pool_assets = 5;
   */
  poolAssets: PoolAsset[] = [];

  /**
   * @generated from field: string total_weight = 6;
   */
  totalWeight = "";

  /**
   * @generated from field: string rebalance_treasury = 7;
   */
  rebalanceTreasury = "";

  constructor(data?: PartialMessage<Pool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.Pool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "pool_params", kind: "message", T: PoolParams },
    { no: 4, name: "total_shares", kind: "message", T: Coin },
    { no: 5, name: "pool_assets", kind: "message", T: PoolAsset, repeated: true },
    { no: 6, name: "total_weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "rebalance_treasury", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Pool {
    return new Pool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Pool {
    return new Pool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Pool {
    return new Pool().fromJsonString(jsonString, options);
  }

  static equals(a: Pool | PlainMessage<Pool> | undefined, b: Pool | PlainMessage<Pool> | undefined): boolean {
    return proto3.util.equals(Pool, a, b);
  }
}

/**
 * @generated from message elys.amm.PoolExtraInfo
 */
export class PoolExtraInfo extends Message<PoolExtraInfo> {
  /**
   * @generated from field: string tvl = 1;
   */
  tvl = "";

  /**
   * @generated from field: string lp_token_price = 2;
   */
  lpTokenPrice = "";

  /**
   * @generated from field: string lp_saved_apr = 3;
   */
  lpSavedApr = "";

  constructor(data?: PartialMessage<PoolExtraInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.PoolExtraInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tvl", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "lp_token_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "lp_saved_apr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolExtraInfo {
    return new PoolExtraInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolExtraInfo {
    return new PoolExtraInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolExtraInfo {
    return new PoolExtraInfo().fromJsonString(jsonString, options);
  }

  static equals(a: PoolExtraInfo | PlainMessage<PoolExtraInfo> | undefined, b: PoolExtraInfo | PlainMessage<PoolExtraInfo> | undefined): boolean {
    return proto3.util.equals(PoolExtraInfo, a, b);
  }
}

/**
 * @generated from message elys.amm.OraclePoolSlippageTrack
 */
export class OraclePoolSlippageTrack extends Message<OraclePoolSlippageTrack> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: uint64 timestamp = 2;
   */
  timestamp = protoInt64.zero;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin tracked = 3;
   */
  tracked: Coin[] = [];

  constructor(data?: PartialMessage<OraclePoolSlippageTrack>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.OraclePoolSlippageTrack";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "timestamp", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "tracked", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OraclePoolSlippageTrack {
    return new OraclePoolSlippageTrack().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OraclePoolSlippageTrack {
    return new OraclePoolSlippageTrack().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OraclePoolSlippageTrack {
    return new OraclePoolSlippageTrack().fromJsonString(jsonString, options);
  }

  static equals(a: OraclePoolSlippageTrack | PlainMessage<OraclePoolSlippageTrack> | undefined, b: OraclePoolSlippageTrack | PlainMessage<OraclePoolSlippageTrack> | undefined): boolean {
    return proto3.util.equals(OraclePoolSlippageTrack, a, b);
  }
}

/**
 * @generated from message elys.amm.WeightBreakingSlippage
 */
export class WeightBreakingSlippage extends Message<WeightBreakingSlippage> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string date = 2;
   */
  date = "";

  /**
   * @generated from field: string amount = 3;
   */
  amount = "";

  constructor(data?: PartialMessage<WeightBreakingSlippage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.WeightBreakingSlippage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WeightBreakingSlippage {
    return new WeightBreakingSlippage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WeightBreakingSlippage {
    return new WeightBreakingSlippage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WeightBreakingSlippage {
    return new WeightBreakingSlippage().fromJsonString(jsonString, options);
  }

  static equals(a: WeightBreakingSlippage | PlainMessage<WeightBreakingSlippage> | undefined, b: WeightBreakingSlippage | PlainMessage<WeightBreakingSlippage> | undefined): boolean {
    return proto3.util.equals(WeightBreakingSlippage, a, b);
  }
}

