// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file neutron/dex/tx.proto (package neutron.dex, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
import { Params } from "./params_pb.js";

/**
 * @generated from enum neutron.dex.LimitOrderType
 */
export enum LimitOrderType {
  /**
   * @generated from enum value: GOOD_TIL_CANCELLED = 0;
   */
  GOOD_TIL_CANCELLED = 0,

  /**
   * @generated from enum value: FILL_OR_KILL = 1;
   */
  FILL_OR_KILL = 1,

  /**
   * @generated from enum value: IMMEDIATE_OR_CANCEL = 2;
   */
  IMMEDIATE_OR_CANCEL = 2,

  /**
   * @generated from enum value: JUST_IN_TIME = 3;
   */
  JUST_IN_TIME = 3,

  /**
   * @generated from enum value: GOOD_TIL_TIME = 4;
   */
  GOOD_TIL_TIME = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(LimitOrderType)
proto3.util.setEnumType(LimitOrderType, "neutron.dex.LimitOrderType", [
  { no: 0, name: "GOOD_TIL_CANCELLED" },
  { no: 1, name: "FILL_OR_KILL" },
  { no: 2, name: "IMMEDIATE_OR_CANCEL" },
  { no: 3, name: "JUST_IN_TIME" },
  { no: 4, name: "GOOD_TIL_TIME" },
]);

/**
 * @generated from message neutron.dex.DepositOptions
 */
export class DepositOptions extends Message<DepositOptions> {
  /**
   * @generated from field: bool disable_autoswap = 1;
   */
  disableAutoswap = false;

  /**
   * @generated from field: bool fail_tx_on_bel = 2;
   */
  failTxOnBel = false;

  constructor(data?: PartialMessage<DepositOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.DepositOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "disable_autoswap", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "fail_tx_on_bel", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DepositOptions {
    return new DepositOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DepositOptions {
    return new DepositOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DepositOptions {
    return new DepositOptions().fromJsonString(jsonString, options);
  }

  static equals(a: DepositOptions | PlainMessage<DepositOptions> | undefined, b: DepositOptions | PlainMessage<DepositOptions> | undefined): boolean {
    return proto3.util.equals(DepositOptions, a, b);
  }
}

/**
 * @generated from message neutron.dex.MsgDeposit
 */
export class MsgDeposit extends Message<MsgDeposit> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string receiver = 2;
   */
  receiver = "";

  /**
   * @generated from field: string token_a = 3;
   */
  tokenA = "";

  /**
   * @generated from field: string token_b = 4;
   */
  tokenB = "";

  /**
   * @generated from field: repeated string amounts_a = 5;
   */
  amountsA: string[] = [];

  /**
   * @generated from field: repeated string amounts_b = 6;
   */
  amountsB: string[] = [];

  /**
   * @generated from field: repeated int64 tick_indexes_a_to_b = 7;
   */
  tickIndexesAToB: bigint[] = [];

  /**
   * @generated from field: repeated uint64 fees = 8;
   */
  fees: bigint[] = [];

  /**
   * @generated from field: repeated neutron.dex.DepositOptions options = 9;
   */
  options: DepositOptions[] = [];

  constructor(data?: PartialMessage<MsgDeposit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.MsgDeposit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token_a", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "token_b", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "amounts_a", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "amounts_b", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "tick_indexes_a_to_b", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 8, name: "fees", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 9, name: "options", kind: "message", T: DepositOptions, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDeposit {
    return new MsgDeposit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDeposit {
    return new MsgDeposit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDeposit {
    return new MsgDeposit().fromJsonString(jsonString, options);
  }

  static equals(a: MsgDeposit | PlainMessage<MsgDeposit> | undefined, b: MsgDeposit | PlainMessage<MsgDeposit> | undefined): boolean {
    return proto3.util.equals(MsgDeposit, a, b);
  }
}

/**
 * @generated from message neutron.dex.FailedDeposit
 */
export class FailedDeposit extends Message<FailedDeposit> {
  /**
   * @generated from field: uint64 deposit_idx = 1;
   */
  depositIdx = protoInt64.zero;

  /**
   * @generated from field: string error = 2;
   */
  error = "";

  constructor(data?: PartialMessage<FailedDeposit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.FailedDeposit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "deposit_idx", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FailedDeposit {
    return new FailedDeposit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FailedDeposit {
    return new FailedDeposit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FailedDeposit {
    return new FailedDeposit().fromJsonString(jsonString, options);
  }

  static equals(a: FailedDeposit | PlainMessage<FailedDeposit> | undefined, b: FailedDeposit | PlainMessage<FailedDeposit> | undefined): boolean {
    return proto3.util.equals(FailedDeposit, a, b);
  }
}

/**
 * @generated from message neutron.dex.MsgDepositResponse
 */
export class MsgDepositResponse extends Message<MsgDepositResponse> {
  /**
   * @generated from field: repeated string reserve0_deposited = 1;
   */
  reserve0Deposited: string[] = [];

  /**
   * @generated from field: repeated string reserve1_deposited = 2;
   */
  reserve1Deposited: string[] = [];

  /**
   * @generated from field: repeated neutron.dex.FailedDeposit failed_deposits = 3;
   */
  failedDeposits: FailedDeposit[] = [];

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin shares_issued = 4;
   */
  sharesIssued: Coin[] = [];

  constructor(data?: PartialMessage<MsgDepositResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.MsgDepositResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "reserve0_deposited", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "reserve1_deposited", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "failed_deposits", kind: "message", T: FailedDeposit, repeated: true },
    { no: 4, name: "shares_issued", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDepositResponse {
    return new MsgDepositResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDepositResponse {
    return new MsgDepositResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDepositResponse {
    return new MsgDepositResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgDepositResponse | PlainMessage<MsgDepositResponse> | undefined, b: MsgDepositResponse | PlainMessage<MsgDepositResponse> | undefined): boolean {
    return proto3.util.equals(MsgDepositResponse, a, b);
  }
}

/**
 * @generated from message neutron.dex.MsgWithdrawal
 */
export class MsgWithdrawal extends Message<MsgWithdrawal> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string receiver = 2;
   */
  receiver = "";

  /**
   * @generated from field: string token_a = 3;
   */
  tokenA = "";

  /**
   * @generated from field: string token_b = 4;
   */
  tokenB = "";

  /**
   * @generated from field: repeated string shares_to_remove = 5;
   */
  sharesToRemove: string[] = [];

  /**
   * @generated from field: repeated int64 tick_indexes_a_to_b = 6;
   */
  tickIndexesAToB: bigint[] = [];

  /**
   * @generated from field: repeated uint64 fees = 7;
   */
  fees: bigint[] = [];

  constructor(data?: PartialMessage<MsgWithdrawal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.MsgWithdrawal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token_a", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "token_b", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "shares_to_remove", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "tick_indexes_a_to_b", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 7, name: "fees", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawal {
    return new MsgWithdrawal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawal {
    return new MsgWithdrawal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawal {
    return new MsgWithdrawal().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawal | PlainMessage<MsgWithdrawal> | undefined, b: MsgWithdrawal | PlainMessage<MsgWithdrawal> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawal, a, b);
  }
}

/**
 * @generated from message neutron.dex.MsgWithdrawalResponse
 */
export class MsgWithdrawalResponse extends Message<MsgWithdrawalResponse> {
  /**
   * @generated from field: string reserve0_withdrawn = 1;
   */
  reserve0Withdrawn = "";

  /**
   * @generated from field: string reserve1_withdrawn = 2;
   */
  reserve1Withdrawn = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin shares_burned = 3;
   */
  sharesBurned: Coin[] = [];

  constructor(data?: PartialMessage<MsgWithdrawalResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.MsgWithdrawalResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "reserve0_withdrawn", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "reserve1_withdrawn", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "shares_burned", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawalResponse {
    return new MsgWithdrawalResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawalResponse {
    return new MsgWithdrawalResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawalResponse {
    return new MsgWithdrawalResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawalResponse | PlainMessage<MsgWithdrawalResponse> | undefined, b: MsgWithdrawalResponse | PlainMessage<MsgWithdrawalResponse> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawalResponse, a, b);
  }
}

/**
 * @generated from message neutron.dex.MsgPlaceLimitOrder
 */
export class MsgPlaceLimitOrder extends Message<MsgPlaceLimitOrder> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string receiver = 2;
   */
  receiver = "";

  /**
   * @generated from field: string token_in = 3;
   */
  tokenIn = "";

  /**
   * @generated from field: string token_out = 4;
   */
  tokenOut = "";

  /**
   * DEPRECATED: tick_index_in_to_out will be removed in future release; limit_sell_price should be used instead.
   *
   * @generated from field: int64 tick_index_in_to_out = 5 [deprecated = true];
   * @deprecated
   */
  tickIndexInToOut = protoInt64.zero;

  /**
   * @generated from field: string amount_in = 7;
   */
  amountIn = "";

  /**
   * @generated from field: neutron.dex.LimitOrderType order_type = 8;
   */
  orderType = LimitOrderType.GOOD_TIL_CANCELLED;

  /**
   * expirationTime is only valid iff orderType == GOOD_TIL_TIME.
   *
   * @generated from field: google.protobuf.Timestamp expiration_time = 9;
   */
  expirationTime?: Timestamp;

  /**
   * @generated from field: string max_amount_out = 10;
   */
  maxAmountOut = "";

  /**
   * @generated from field: string limit_sell_price = 11;
   */
  limitSellPrice = "";

  /**
   * min_average_sell_price is an optional parameter that sets a required minimum average price for the entire trade.
   * if the min_average_sell_price is not met the trade will fail.
   * If min_average_sell_price is omitted limit_sell_price will be used instead
   *
   * @generated from field: string min_average_sell_price = 12;
   */
  minAverageSellPrice = "";

  constructor(data?: PartialMessage<MsgPlaceLimitOrder>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.MsgPlaceLimitOrder";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "token_out", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "tick_index_in_to_out", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "amount_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "order_type", kind: "enum", T: proto3.getEnumType(LimitOrderType) },
    { no: 9, name: "expiration_time", kind: "message", T: Timestamp },
    { no: 10, name: "max_amount_out", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "limit_sell_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "min_average_sell_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgPlaceLimitOrder {
    return new MsgPlaceLimitOrder().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgPlaceLimitOrder {
    return new MsgPlaceLimitOrder().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgPlaceLimitOrder {
    return new MsgPlaceLimitOrder().fromJsonString(jsonString, options);
  }

  static equals(a: MsgPlaceLimitOrder | PlainMessage<MsgPlaceLimitOrder> | undefined, b: MsgPlaceLimitOrder | PlainMessage<MsgPlaceLimitOrder> | undefined): boolean {
    return proto3.util.equals(MsgPlaceLimitOrder, a, b);
  }
}

/**
 * @generated from message neutron.dex.MsgPlaceLimitOrderResponse
 */
export class MsgPlaceLimitOrderResponse extends Message<MsgPlaceLimitOrderResponse> {
  /**
   * @generated from field: string trancheKey = 1;
   */
  trancheKey = "";

  /**
   * Total amount of coin used for the limit order
   *
   * @generated from field: cosmos.base.v1beta1.Coin coin_in = 2;
   */
  coinIn?: Coin;

  /**
   * Total amount of coin received from the taker portion of the limit order
   * This is the amount of coin immediately available in the users account after
   * executing the limit order. It does not include any future proceeds from the
   * maker portion which will have withdrawn in the future
   *
   * @generated from field: cosmos.base.v1beta1.Coin taker_coin_out = 3;
   */
  takerCoinOut?: Coin;

  /**
   * Total amount of the token in that was immediately swapped for takerOutCoin
   *
   * @generated from field: cosmos.base.v1beta1.Coin taker_coin_in = 4;
   */
  takerCoinIn?: Coin;

  constructor(data?: PartialMessage<MsgPlaceLimitOrderResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.MsgPlaceLimitOrderResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "trancheKey", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "coin_in", kind: "message", T: Coin },
    { no: 3, name: "taker_coin_out", kind: "message", T: Coin },
    { no: 4, name: "taker_coin_in", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgPlaceLimitOrderResponse {
    return new MsgPlaceLimitOrderResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgPlaceLimitOrderResponse {
    return new MsgPlaceLimitOrderResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgPlaceLimitOrderResponse {
    return new MsgPlaceLimitOrderResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgPlaceLimitOrderResponse | PlainMessage<MsgPlaceLimitOrderResponse> | undefined, b: MsgPlaceLimitOrderResponse | PlainMessage<MsgPlaceLimitOrderResponse> | undefined): boolean {
    return proto3.util.equals(MsgPlaceLimitOrderResponse, a, b);
  }
}

/**
 * @generated from message neutron.dex.MsgWithdrawFilledLimitOrder
 */
export class MsgWithdrawFilledLimitOrder extends Message<MsgWithdrawFilledLimitOrder> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string tranche_key = 2;
   */
  trancheKey = "";

  constructor(data?: PartialMessage<MsgWithdrawFilledLimitOrder>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.MsgWithdrawFilledLimitOrder";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "tranche_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawFilledLimitOrder {
    return new MsgWithdrawFilledLimitOrder().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawFilledLimitOrder {
    return new MsgWithdrawFilledLimitOrder().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawFilledLimitOrder {
    return new MsgWithdrawFilledLimitOrder().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawFilledLimitOrder | PlainMessage<MsgWithdrawFilledLimitOrder> | undefined, b: MsgWithdrawFilledLimitOrder | PlainMessage<MsgWithdrawFilledLimitOrder> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawFilledLimitOrder, a, b);
  }
}

/**
 * @generated from message neutron.dex.MsgWithdrawFilledLimitOrderResponse
 */
export class MsgWithdrawFilledLimitOrderResponse extends Message<MsgWithdrawFilledLimitOrderResponse> {
  /**
   * Total amount of taker reserves that were withdrawn
   *
   * @generated from field: cosmos.base.v1beta1.Coin taker_coin_out = 1;
   */
  takerCoinOut?: Coin;

  /**
   * Total amount of maker reserves that were withdrawn --only applies to inactive LimitOrders
   *
   * @generated from field: cosmos.base.v1beta1.Coin maker_coin_out = 2;
   */
  makerCoinOut?: Coin;

  constructor(data?: PartialMessage<MsgWithdrawFilledLimitOrderResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.MsgWithdrawFilledLimitOrderResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "taker_coin_out", kind: "message", T: Coin },
    { no: 2, name: "maker_coin_out", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawFilledLimitOrderResponse {
    return new MsgWithdrawFilledLimitOrderResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawFilledLimitOrderResponse {
    return new MsgWithdrawFilledLimitOrderResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawFilledLimitOrderResponse {
    return new MsgWithdrawFilledLimitOrderResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawFilledLimitOrderResponse | PlainMessage<MsgWithdrawFilledLimitOrderResponse> | undefined, b: MsgWithdrawFilledLimitOrderResponse | PlainMessage<MsgWithdrawFilledLimitOrderResponse> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawFilledLimitOrderResponse, a, b);
  }
}

/**
 * @generated from message neutron.dex.MsgCancelLimitOrder
 */
export class MsgCancelLimitOrder extends Message<MsgCancelLimitOrder> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string tranche_key = 2;
   */
  trancheKey = "";

  constructor(data?: PartialMessage<MsgCancelLimitOrder>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.MsgCancelLimitOrder";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "tranche_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelLimitOrder {
    return new MsgCancelLimitOrder().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelLimitOrder {
    return new MsgCancelLimitOrder().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelLimitOrder {
    return new MsgCancelLimitOrder().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCancelLimitOrder | PlainMessage<MsgCancelLimitOrder> | undefined, b: MsgCancelLimitOrder | PlainMessage<MsgCancelLimitOrder> | undefined): boolean {
    return proto3.util.equals(MsgCancelLimitOrder, a, b);
  }
}

/**
 * @generated from message neutron.dex.MsgCancelLimitOrderResponse
 */
export class MsgCancelLimitOrderResponse extends Message<MsgCancelLimitOrderResponse> {
  /**
   * Total amount of taker reserves that were withdrawn
   *
   * @generated from field: cosmos.base.v1beta1.Coin taker_coin_out = 1;
   */
  takerCoinOut?: Coin;

  /**
   * Total amount of maker reserves that were canceled
   *
   * @generated from field: cosmos.base.v1beta1.Coin maker_coin_out = 2;
   */
  makerCoinOut?: Coin;

  constructor(data?: PartialMessage<MsgCancelLimitOrderResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.MsgCancelLimitOrderResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "taker_coin_out", kind: "message", T: Coin },
    { no: 2, name: "maker_coin_out", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelLimitOrderResponse {
    return new MsgCancelLimitOrderResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelLimitOrderResponse {
    return new MsgCancelLimitOrderResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelLimitOrderResponse {
    return new MsgCancelLimitOrderResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCancelLimitOrderResponse | PlainMessage<MsgCancelLimitOrderResponse> | undefined, b: MsgCancelLimitOrderResponse | PlainMessage<MsgCancelLimitOrderResponse> | undefined): boolean {
    return proto3.util.equals(MsgCancelLimitOrderResponse, a, b);
  }
}

/**
 * @generated from message neutron.dex.MultiHopRoute
 */
export class MultiHopRoute extends Message<MultiHopRoute> {
  /**
   * @generated from field: repeated string hops = 1;
   */
  hops: string[] = [];

  constructor(data?: PartialMessage<MultiHopRoute>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.MultiHopRoute";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "hops", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MultiHopRoute {
    return new MultiHopRoute().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MultiHopRoute {
    return new MultiHopRoute().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MultiHopRoute {
    return new MultiHopRoute().fromJsonString(jsonString, options);
  }

  static equals(a: MultiHopRoute | PlainMessage<MultiHopRoute> | undefined, b: MultiHopRoute | PlainMessage<MultiHopRoute> | undefined): boolean {
    return proto3.util.equals(MultiHopRoute, a, b);
  }
}

/**
 * @generated from message neutron.dex.MsgMultiHopSwap
 */
export class MsgMultiHopSwap extends Message<MsgMultiHopSwap> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string receiver = 2;
   */
  receiver = "";

  /**
   * @generated from field: repeated neutron.dex.MultiHopRoute routes = 3;
   */
  routes: MultiHopRoute[] = [];

  /**
   * @generated from field: string amount_in = 4;
   */
  amountIn = "";

  /**
   * @generated from field: string exit_limit_price = 5;
   */
  exitLimitPrice = "";

  /**
   * If pickBestRoute == true then all routes are run and the route with the
   * best price is chosen otherwise, the first succesful route is used.
   *
   * @generated from field: bool pick_best_route = 6;
   */
  pickBestRoute = false;

  constructor(data?: PartialMessage<MsgMultiHopSwap>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.MsgMultiHopSwap";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "routes", kind: "message", T: MultiHopRoute, repeated: true },
    { no: 4, name: "amount_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "exit_limit_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "pick_best_route", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgMultiHopSwap {
    return new MsgMultiHopSwap().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgMultiHopSwap {
    return new MsgMultiHopSwap().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgMultiHopSwap {
    return new MsgMultiHopSwap().fromJsonString(jsonString, options);
  }

  static equals(a: MsgMultiHopSwap | PlainMessage<MsgMultiHopSwap> | undefined, b: MsgMultiHopSwap | PlainMessage<MsgMultiHopSwap> | undefined): boolean {
    return proto3.util.equals(MsgMultiHopSwap, a, b);
  }
}

/**
 * @generated from message neutron.dex.MsgMultiHopSwapResponse
 */
export class MsgMultiHopSwapResponse extends Message<MsgMultiHopSwapResponse> {
  /**
   * @generated from field: cosmos.base.v1beta1.Coin coin_out = 1;
   */
  coinOut?: Coin;

  /**
   * @generated from field: neutron.dex.MultiHopRoute route = 2;
   */
  route?: MultiHopRoute;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin dust = 3;
   */
  dust: Coin[] = [];

  constructor(data?: PartialMessage<MsgMultiHopSwapResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.MsgMultiHopSwapResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "coin_out", kind: "message", T: Coin },
    { no: 2, name: "route", kind: "message", T: MultiHopRoute },
    { no: 3, name: "dust", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgMultiHopSwapResponse {
    return new MsgMultiHopSwapResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgMultiHopSwapResponse {
    return new MsgMultiHopSwapResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgMultiHopSwapResponse {
    return new MsgMultiHopSwapResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgMultiHopSwapResponse | PlainMessage<MsgMultiHopSwapResponse> | undefined, b: MsgMultiHopSwapResponse | PlainMessage<MsgMultiHopSwapResponse> | undefined): boolean {
    return proto3.util.equals(MsgMultiHopSwapResponse, a, b);
  }
}

/**
 * @generated from message neutron.dex.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * Authority is the address of the governance account.
   *
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: neutron.dex.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.MsgUpdateParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean {
    return proto3.util.equals(MsgUpdateParams, a, b);
  }
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.47
 *
 * @generated from message neutron.dex.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.MsgUpdateParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateParamsResponse, a, b);
  }
}

