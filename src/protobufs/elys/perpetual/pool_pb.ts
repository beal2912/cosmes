// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/perpetual/pool.proto (package elys.perpetual, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";

/**
 * @generated from message elys.perpetual.PoolAsset
 */
export class PoolAsset extends Message<PoolAsset> {
  /**
   * @generated from field: string liabilities = 1;
   */
  liabilities = "";

  /**
   * @generated from field: string custody = 2;
   */
  custody = "";

  /**
   * @generated from field: string take_profit_liabilities = 3;
   */
  takeProfitLiabilities = "";

  /**
   * @generated from field: string take_profit_custody = 4;
   */
  takeProfitCustody = "";

  /**
   * @generated from field: string asset_denom = 5;
   */
  assetDenom = "";

  /**
   * @generated from field: string collateral = 6;
   */
  collateral = "";

  constructor(data?: PartialMessage<PoolAsset>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.PoolAsset";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "liabilities", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "custody", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "take_profit_liabilities", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "take_profit_custody", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "asset_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "collateral", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolAsset {
    return new PoolAsset().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolAsset {
    return new PoolAsset().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolAsset {
    return new PoolAsset().fromJsonString(jsonString, options);
  }

  static equals(a: PoolAsset | PlainMessage<PoolAsset> | undefined, b: PoolAsset | PlainMessage<PoolAsset> | undefined): boolean {
    return proto3.util.equals(PoolAsset, a, b);
  }
}

/**
 * @generated from message elys.perpetual.Pool
 */
export class Pool extends Message<Pool> {
  /**
   * @generated from field: uint64 amm_pool_id = 1;
   */
  ammPoolId = protoInt64.zero;

  /**
   * @generated from field: string base_asset_liabilities_ratio = 2;
   */
  baseAssetLiabilitiesRatio = "";

  /**
   * @generated from field: string quote_asset_liabilities_ratio = 3;
   */
  quoteAssetLiabilitiesRatio = "";

  /**
   * @generated from field: string borrow_interest_rate = 4;
   */
  borrowInterestRate = "";

  /**
   * @generated from field: repeated elys.perpetual.PoolAsset pool_assets_long = 5;
   */
  poolAssetsLong: PoolAsset[] = [];

  /**
   * @generated from field: repeated elys.perpetual.PoolAsset pool_assets_short = 6;
   */
  poolAssetsShort: PoolAsset[] = [];

  /**
   * @generated from field: int64 last_height_borrow_interest_rate_computed = 7;
   */
  lastHeightBorrowInterestRateComputed = protoInt64.zero;

  /**
   * funding rate, if positive longs pay shorts, if negative shorts pay longs
   *
   * @generated from field: string funding_rate = 8;
   */
  fundingRate = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin fees_collected = 9;
   */
  feesCollected: Coin[] = [];

  /**
   * @generated from field: string leverage_max = 10;
   */
  leverageMax = "";

  constructor(data?: PartialMessage<Pool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.Pool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amm_pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "base_asset_liabilities_ratio", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "quote_asset_liabilities_ratio", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "borrow_interest_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "pool_assets_long", kind: "message", T: PoolAsset, repeated: true },
    { no: 6, name: "pool_assets_short", kind: "message", T: PoolAsset, repeated: true },
    { no: 7, name: "last_height_borrow_interest_rate_computed", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "funding_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "fees_collected", kind: "message", T: Coin, repeated: true },
    { no: 10, name: "leverage_max", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * @generated from message elys.perpetual.PerpetualCounter
 */
export class PerpetualCounter extends Message<PerpetualCounter> {
  /**
   * @generated from field: uint64 amm_pool_id = 1;
   */
  ammPoolId = protoInt64.zero;

  /**
   * @generated from field: uint64 counter = 2;
   */
  counter = protoInt64.zero;

  /**
   * @generated from field: uint64 total_open = 3;
   */
  totalOpen = protoInt64.zero;

  constructor(data?: PartialMessage<PerpetualCounter>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.PerpetualCounter";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amm_pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "counter", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "total_open", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PerpetualCounter {
    return new PerpetualCounter().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PerpetualCounter {
    return new PerpetualCounter().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PerpetualCounter {
    return new PerpetualCounter().fromJsonString(jsonString, options);
  }

  static equals(a: PerpetualCounter | PlainMessage<PerpetualCounter> | undefined, b: PerpetualCounter | PlainMessage<PerpetualCounter> | undefined): boolean {
    return proto3.util.equals(PerpetualCounter, a, b);
  }
}

