// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/bep3/v1beta1/bep3.proto (package kava.bep3.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * SwapStatus is the status of an AtomicSwap
 *
 * @generated from enum kava.bep3.v1beta1.SwapStatus
 */
export enum SwapStatus {
  /**
   * SWAP_STATUS_UNSPECIFIED represents an unspecified status
   *
   * @generated from enum value: SWAP_STATUS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * SWAP_STATUS_OPEN represents an open swap
   *
   * @generated from enum value: SWAP_STATUS_OPEN = 1;
   */
  OPEN = 1,

  /**
   * SWAP_STATUS_COMPLETED represents a completed swap
   *
   * @generated from enum value: SWAP_STATUS_COMPLETED = 2;
   */
  COMPLETED = 2,

  /**
   * SWAP_STATUS_EXPIRED represents an expired swap
   *
   * @generated from enum value: SWAP_STATUS_EXPIRED = 3;
   */
  EXPIRED = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(SwapStatus)
proto3.util.setEnumType(SwapStatus, "kava.bep3.v1beta1.SwapStatus", [
  { no: 0, name: "SWAP_STATUS_UNSPECIFIED" },
  { no: 1, name: "SWAP_STATUS_OPEN" },
  { no: 2, name: "SWAP_STATUS_COMPLETED" },
  { no: 3, name: "SWAP_STATUS_EXPIRED" },
]);

/**
 * SwapDirection is the direction of an AtomicSwap
 *
 * @generated from enum kava.bep3.v1beta1.SwapDirection
 */
export enum SwapDirection {
  /**
   * SWAP_DIRECTION_UNSPECIFIED represents unspecified or invalid swap direcation
   *
   * @generated from enum value: SWAP_DIRECTION_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * SWAP_DIRECTION_INCOMING represents is incoming swap (to the kava chain)
   *
   * @generated from enum value: SWAP_DIRECTION_INCOMING = 1;
   */
  INCOMING = 1,

  /**
   * SWAP_DIRECTION_OUTGOING represents an outgoing swap (from the kava chain)
   *
   * @generated from enum value: SWAP_DIRECTION_OUTGOING = 2;
   */
  OUTGOING = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(SwapDirection)
proto3.util.setEnumType(SwapDirection, "kava.bep3.v1beta1.SwapDirection", [
  { no: 0, name: "SWAP_DIRECTION_UNSPECIFIED" },
  { no: 1, name: "SWAP_DIRECTION_INCOMING" },
  { no: 2, name: "SWAP_DIRECTION_OUTGOING" },
]);

/**
 * Params defines the parameters for the bep3 module.
 *
 * @generated from message kava.bep3.v1beta1.Params
 */
export class Params extends Message<Params> {
  /**
   * asset_params define the parameters for each bep3 asset
   *
   * @generated from field: repeated kava.bep3.v1beta1.AssetParam asset_params = 1;
   */
  assetParams: AssetParam[] = [];

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "asset_params", kind: "message", T: AssetParam, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params {
    return new Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJsonString(jsonString, options);
  }

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean {
    return proto3.util.equals(Params, a, b);
  }
}

/**
 * AssetParam defines parameters for each bep3 asset.
 *
 * @generated from message kava.bep3.v1beta1.AssetParam
 */
export class AssetParam extends Message<AssetParam> {
  /**
   * denom represents the denominatin for this asset
   *
   * @generated from field: string denom = 1;
   */
  denom = "";

  /**
   * coin_id represents the registered coin type to use (https://github.com/satoshilabs/slips/blob/master/slip-0044.md)
   *
   * @generated from field: int64 coin_id = 2;
   */
  coinId = protoInt64.zero;

  /**
   * supply_limit defines the maximum supply allowed for the asset - a total or time based rate limit
   *
   * @generated from field: kava.bep3.v1beta1.SupplyLimit supply_limit = 3;
   */
  supplyLimit?: SupplyLimit;

  /**
   * active specifies if the asset is live or paused
   *
   * @generated from field: bool active = 4;
   */
  active = false;

  /**
   * deputy_address the kava address of the deputy
   *
   * @generated from field: bytes deputy_address = 5;
   */
  deputyAddress = new Uint8Array(0);

  /**
   * fixed_fee defines the fee for incoming swaps
   *
   * @generated from field: string fixed_fee = 6;
   */
  fixedFee = "";

  /**
   * min_swap_amount defines the minimum amount able to be swapped in a single message
   *
   * @generated from field: string min_swap_amount = 7;
   */
  minSwapAmount = "";

  /**
   * max_swap_amount defines the maximum amount able to be swapped in a single message
   *
   * @generated from field: string max_swap_amount = 8;
   */
  maxSwapAmount = "";

  /**
   * min_block_lock defined the minimum blocks to lock
   *
   * @generated from field: uint64 min_block_lock = 9;
   */
  minBlockLock = protoInt64.zero;

  /**
   * min_block_lock defined the maximum blocks to lock
   *
   * @generated from field: uint64 max_block_lock = 10;
   */
  maxBlockLock = protoInt64.zero;

  constructor(data?: PartialMessage<AssetParam>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.AssetParam";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "coin_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "supply_limit", kind: "message", T: SupplyLimit },
    { no: 4, name: "active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "deputy_address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "fixed_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "min_swap_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "max_swap_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "min_block_lock", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 10, name: "max_block_lock", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetParam {
    return new AssetParam().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetParam {
    return new AssetParam().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetParam {
    return new AssetParam().fromJsonString(jsonString, options);
  }

  static equals(a: AssetParam | PlainMessage<AssetParam> | undefined, b: AssetParam | PlainMessage<AssetParam> | undefined): boolean {
    return proto3.util.equals(AssetParam, a, b);
  }
}

/**
 * SupplyLimit define the absolute and time-based limits for an assets's supply.
 *
 * @generated from message kava.bep3.v1beta1.SupplyLimit
 */
export class SupplyLimit extends Message<SupplyLimit> {
  /**
   * limit defines the total supply allowed
   *
   * @generated from field: string limit = 1;
   */
  limit = "";

  /**
   * time_limited enables or disables time based supply limiting
   *
   * @generated from field: bool time_limited = 2;
   */
  timeLimited = false;

  /**
   * time_period specifies the duration that time_based_limit is evalulated
   *
   * @generated from field: google.protobuf.Duration time_period = 3;
   */
  timePeriod?: Duration;

  /**
   * time_based_limit defines the maximum supply that can be swapped within time_period
   *
   * @generated from field: string time_based_limit = 4;
   */
  timeBasedLimit = "";

  constructor(data?: PartialMessage<SupplyLimit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.SupplyLimit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "limit", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "time_limited", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "time_period", kind: "message", T: Duration },
    { no: 4, name: "time_based_limit", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupplyLimit {
    return new SupplyLimit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupplyLimit {
    return new SupplyLimit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupplyLimit {
    return new SupplyLimit().fromJsonString(jsonString, options);
  }

  static equals(a: SupplyLimit | PlainMessage<SupplyLimit> | undefined, b: SupplyLimit | PlainMessage<SupplyLimit> | undefined): boolean {
    return proto3.util.equals(SupplyLimit, a, b);
  }
}

/**
 * AtomicSwap defines an atomic swap between chains for the pricefeed module.
 *
 * @generated from message kava.bep3.v1beta1.AtomicSwap
 */
export class AtomicSwap extends Message<AtomicSwap> {
  /**
   * amount represents the amount being swapped
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
   */
  amount: Coin[] = [];

  /**
   * random_number_hash represents the hash of the random number
   *
   * @generated from field: bytes random_number_hash = 2;
   */
  randomNumberHash = new Uint8Array(0);

  /**
   * expire_height represents the height when the swap expires
   *
   * @generated from field: uint64 expire_height = 3;
   */
  expireHeight = protoInt64.zero;

  /**
   * timestamp represents the timestamp of the swap
   *
   * @generated from field: int64 timestamp = 4;
   */
  timestamp = protoInt64.zero;

  /**
   * sender is the kava chain sender of the swap
   *
   * @generated from field: bytes sender = 5;
   */
  sender = new Uint8Array(0);

  /**
   * recipient is the kava chain recipient of the swap
   *
   * @generated from field: bytes recipient = 6;
   */
  recipient = new Uint8Array(0);

  /**
   * sender_other_chain is the sender on the other chain
   *
   * @generated from field: string sender_other_chain = 7;
   */
  senderOtherChain = "";

  /**
   * recipient_other_chain is the recipient on the other chain
   *
   * @generated from field: string recipient_other_chain = 8;
   */
  recipientOtherChain = "";

  /**
   * closed_block is the block when the swap is closed
   *
   * @generated from field: int64 closed_block = 9;
   */
  closedBlock = protoInt64.zero;

  /**
   * status represents the current status of the swap
   *
   * @generated from field: kava.bep3.v1beta1.SwapStatus status = 10;
   */
  status = SwapStatus.UNSPECIFIED;

  /**
   * cross_chain identifies whether the atomic swap is cross chain
   *
   * @generated from field: bool cross_chain = 11;
   */
  crossChain = false;

  /**
   * direction identifies if the swap is incoming or outgoing
   *
   * @generated from field: kava.bep3.v1beta1.SwapDirection direction = 12;
   */
  direction = SwapDirection.UNSPECIFIED;

  constructor(data?: PartialMessage<AtomicSwap>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.AtomicSwap";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "random_number_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "expire_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "sender", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "recipient", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 7, name: "sender_other_chain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "recipient_other_chain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "closed_block", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "status", kind: "enum", T: proto3.getEnumType(SwapStatus) },
    { no: 11, name: "cross_chain", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "direction", kind: "enum", T: proto3.getEnumType(SwapDirection) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AtomicSwap {
    return new AtomicSwap().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AtomicSwap {
    return new AtomicSwap().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AtomicSwap {
    return new AtomicSwap().fromJsonString(jsonString, options);
  }

  static equals(a: AtomicSwap | PlainMessage<AtomicSwap> | undefined, b: AtomicSwap | PlainMessage<AtomicSwap> | undefined): boolean {
    return proto3.util.equals(AtomicSwap, a, b);
  }
}

/**
 * AssetSupply defines information about an asset's supply.
 *
 * @generated from message kava.bep3.v1beta1.AssetSupply
 */
export class AssetSupply extends Message<AssetSupply> {
  /**
   * incoming_supply represents the incoming supply of an asset
   *
   * @generated from field: cosmos.base.v1beta1.Coin incoming_supply = 1;
   */
  incomingSupply?: Coin;

  /**
   * outgoing_supply represents the outgoing supply of an asset
   *
   * @generated from field: cosmos.base.v1beta1.Coin outgoing_supply = 2;
   */
  outgoingSupply?: Coin;

  /**
   * current_supply represents the current on-chain supply of an asset
   *
   * @generated from field: cosmos.base.v1beta1.Coin current_supply = 3;
   */
  currentSupply?: Coin;

  /**
   * time_limited_current_supply represents the time limited current supply of an asset
   *
   * @generated from field: cosmos.base.v1beta1.Coin time_limited_current_supply = 4;
   */
  timeLimitedCurrentSupply?: Coin;

  /**
   * time_elapsed represents the time elapsed
   *
   * @generated from field: google.protobuf.Duration time_elapsed = 5;
   */
  timeElapsed?: Duration;

  constructor(data?: PartialMessage<AssetSupply>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.AssetSupply";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "incoming_supply", kind: "message", T: Coin },
    { no: 2, name: "outgoing_supply", kind: "message", T: Coin },
    { no: 3, name: "current_supply", kind: "message", T: Coin },
    { no: 4, name: "time_limited_current_supply", kind: "message", T: Coin },
    { no: 5, name: "time_elapsed", kind: "message", T: Duration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetSupply {
    return new AssetSupply().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetSupply {
    return new AssetSupply().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetSupply {
    return new AssetSupply().fromJsonString(jsonString, options);
  }

  static equals(a: AssetSupply | PlainMessage<AssetSupply> | undefined, b: AssetSupply | PlainMessage<AssetSupply> | undefined): boolean {
    return proto3.util.equals(AssetSupply, a, b);
  }
}

