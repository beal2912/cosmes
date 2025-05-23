// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/tradeshield/types.proto (package elys.tradeshield, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { LegacyOrderPriceV1, LegacyTriggerPriceV1, PerpetualPosition, SpotOrderType } from "./order_pb.js";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";

/**
 * @generated from enum elys.tradeshield.Status
 */
export enum Status {
  /**
   * @generated from enum value: PENDING = 0;
   */
  PENDING = 0,

  /**
   * @generated from enum value: EXECUTED = 1;
   */
  EXECUTED = 1,

  /**
   * @generated from enum value: CANCELED = 2;
   */
  CANCELED = 2,

  /**
   * @generated from enum value: ALL = 3;
   */
  ALL = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(Status)
proto3.util.setEnumType(Status, "elys.tradeshield.Status", [
  { no: 0, name: "PENDING" },
  { no: 1, name: "EXECUTED" },
  { no: 2, name: "CANCELED" },
  { no: 3, name: "ALL" },
]);

/**
 * Perpetual Order
 *
 * @generated from enum elys.tradeshield.PerpetualOrderType
 */
export enum PerpetualOrderType {
  /**
   * @generated from enum value: LIMITOPEN = 0;
   */
  LIMITOPEN = 0,

  /**
   * @generated from enum value: LIMITCLOSE = 1;
   */
  LIMITCLOSE = 1,

  /**
   * @generated from enum value: STOPLOSSPERP = 2;
   */
  STOPLOSSPERP = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(PerpetualOrderType)
proto3.util.setEnumType(PerpetualOrderType, "elys.tradeshield.PerpetualOrderType", [
  { no: 0, name: "LIMITOPEN" },
  { no: 1, name: "LIMITCLOSE" },
  { no: 2, name: "STOPLOSSPERP" },
]);

/**
 * @generated from message elys.tradeshield.Date
 */
export class Date extends Message<Date> {
  /**
   * @generated from field: uint64 height = 1;
   */
  height = protoInt64.zero;

  /**
   * @generated from field: uint64 timestamp = 2;
   */
  timestamp = protoInt64.zero;

  constructor(data?: PartialMessage<Date>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.Date";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "timestamp", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Date {
    return new Date().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Date {
    return new Date().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Date {
    return new Date().fromJsonString(jsonString, options);
  }

  static equals(a: Date | PlainMessage<Date> | undefined, b: Date | PlainMessage<Date> | undefined): boolean {
    return proto3.util.equals(Date, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.SpotOrder
 */
export class SpotOrder extends Message<SpotOrder> {
  /**
   * @generated from field: elys.tradeshield.SpotOrderType order_type = 1;
   */
  orderType = SpotOrderType.STOPLOSS;

  /**
   * @generated from field: uint64 order_id = 2;
   */
  orderId = protoInt64.zero;

  /**
   * @generated from field: elys.tradeshield.LegacyOrderPriceV1 legacy_order_price_v1 = 3;
   */
  legacyOrderPriceV1?: LegacyOrderPriceV1;

  /**
   * @generated from field: string order_price = 9;
   */
  orderPrice = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin order_amount = 4;
   */
  orderAmount?: Coin;

  /**
   * @generated from field: string owner_address = 5;
   */
  ownerAddress = "";

  /**
   * @generated from field: string order_target_denom = 6;
   */
  orderTargetDenom = "";

  /**
   * @generated from field: elys.tradeshield.Status status = 7;
   */
  status = Status.PENDING;

  /**
   * @generated from field: elys.tradeshield.Date date = 8;
   */
  date?: Date;

  constructor(data?: PartialMessage<SpotOrder>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.SpotOrder";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "order_type", kind: "enum", T: proto3.getEnumType(SpotOrderType) },
    { no: 2, name: "order_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "legacy_order_price_v1", kind: "message", T: LegacyOrderPriceV1 },
    { no: 9, name: "order_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "order_amount", kind: "message", T: Coin },
    { no: 5, name: "owner_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "order_target_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "status", kind: "enum", T: proto3.getEnumType(Status) },
    { no: 8, name: "date", kind: "message", T: Date },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotOrder {
    return new SpotOrder().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotOrder {
    return new SpotOrder().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotOrder {
    return new SpotOrder().fromJsonString(jsonString, options);
  }

  static equals(a: SpotOrder | PlainMessage<SpotOrder> | undefined, b: SpotOrder | PlainMessage<SpotOrder> | undefined): boolean {
    return proto3.util.equals(SpotOrder, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.PerpetualOrder
 */
export class PerpetualOrder extends Message<PerpetualOrder> {
  /**
   * @generated from field: uint64 order_id = 1;
   */
  orderId = protoInt64.zero;

  /**
   * @generated from field: string owner_address = 2;
   */
  ownerAddress = "";

  /**
   * @generated from field: elys.tradeshield.PerpetualOrderType perpetual_order_type = 3;
   */
  perpetualOrderType = PerpetualOrderType.LIMITOPEN;

  /**
   * @generated from field: elys.tradeshield.PerpetualPosition position = 4;
   */
  position = PerpetualPosition.UNSPECIFIED;

  /**
   * @generated from field: elys.tradeshield.LegacyTriggerPriceV1 legacy_trigger_price_v1 = 5;
   */
  legacyTriggerPriceV1?: LegacyTriggerPriceV1;

  /**
   * @generated from field: string trigger_price = 14;
   */
  triggerPrice = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin collateral = 6;
   */
  collateral?: Coin;

  /**
   * @generated from field: string trading_asset = 7;
   */
  tradingAsset = "";

  /**
   * @generated from field: string leverage = 8;
   */
  leverage = "";

  /**
   * @generated from field: string take_profit_price = 9;
   */
  takeProfitPrice = "";

  /**
   * @generated from field: uint64 position_id = 10;
   */
  positionId = protoInt64.zero;

  /**
   * @generated from field: elys.tradeshield.Status status = 11;
   */
  status = Status.PENDING;

  /**
   * @generated from field: string stop_loss_price = 12;
   */
  stopLossPrice = "";

  /**
   * @generated from field: uint64 poolId = 13;
   */
  poolId = protoInt64.zero;

  constructor(data?: PartialMessage<PerpetualOrder>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.PerpetualOrder";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "order_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "owner_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "perpetual_order_type", kind: "enum", T: proto3.getEnumType(PerpetualOrderType) },
    { no: 4, name: "position", kind: "enum", T: proto3.getEnumType(PerpetualPosition) },
    { no: 5, name: "legacy_trigger_price_v1", kind: "message", T: LegacyTriggerPriceV1 },
    { no: 14, name: "trigger_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "collateral", kind: "message", T: Coin },
    { no: 7, name: "trading_asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "leverage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "take_profit_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "position_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 11, name: "status", kind: "enum", T: proto3.getEnumType(Status) },
    { no: 12, name: "stop_loss_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "poolId", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PerpetualOrder {
    return new PerpetualOrder().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PerpetualOrder {
    return new PerpetualOrder().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PerpetualOrder {
    return new PerpetualOrder().fromJsonString(jsonString, options);
  }

  static equals(a: PerpetualOrder | PlainMessage<PerpetualOrder> | undefined, b: PerpetualOrder | PlainMessage<PerpetualOrder> | undefined): boolean {
    return proto3.util.equals(PerpetualOrder, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.PerpetualOrderExtraInfo
 */
export class PerpetualOrderExtraInfo extends Message<PerpetualOrderExtraInfo> {
  /**
   * @generated from field: elys.tradeshield.PerpetualOrder perpetual_order = 1;
   */
  perpetualOrder?: PerpetualOrder;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin position_size = 2;
   */
  positionSize?: Coin;

  /**
   * @generated from field: string liquidation_price = 3;
   */
  liquidationPrice = "";

  /**
   * @generated from field: string funding_rate = 4;
   */
  fundingRate = "";

  /**
   * @generated from field: string borrow_interest_rate = 5;
   */
  borrowInterestRate = "";

  constructor(data?: PartialMessage<PerpetualOrderExtraInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.PerpetualOrderExtraInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "perpetual_order", kind: "message", T: PerpetualOrder },
    { no: 2, name: "position_size", kind: "message", T: Coin },
    { no: 3, name: "liquidation_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "funding_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "borrow_interest_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PerpetualOrderExtraInfo {
    return new PerpetualOrderExtraInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PerpetualOrderExtraInfo {
    return new PerpetualOrderExtraInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PerpetualOrderExtraInfo {
    return new PerpetualOrderExtraInfo().fromJsonString(jsonString, options);
  }

  static equals(a: PerpetualOrderExtraInfo | PlainMessage<PerpetualOrderExtraInfo> | undefined, b: PerpetualOrderExtraInfo | PlainMessage<PerpetualOrderExtraInfo> | undefined): boolean {
    return proto3.util.equals(PerpetualOrderExtraInfo, a, b);
  }
}

