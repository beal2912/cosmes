// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/tradeshield/tx.proto (package elys.tradeshield, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { OrderPrice, PerpetualPosition, SpotOrderType, TriggerPrice } from "./order_pb.js";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
import { Params } from "./params_pb.js";

/**
 * @generated from message elys.tradeshield.MsgCreateSpotOrder
 */
export class MsgCreateSpotOrder extends Message<MsgCreateSpotOrder> {
  /**
   * @generated from field: elys.tradeshield.SpotOrderType order_type = 1;
   */
  orderType = SpotOrderType.STOPLOSS;

  /**
   * @generated from field: elys.tradeshield.OrderPrice order_price = 2;
   */
  orderPrice?: OrderPrice;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin order_amount = 3;
   */
  orderAmount?: Coin;

  /**
   * @generated from field: string owner_address = 4;
   */
  ownerAddress = "";

  /**
   * @generated from field: string order_target_denom = 5;
   */
  orderTargetDenom = "";

  constructor(data?: PartialMessage<MsgCreateSpotOrder>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgCreateSpotOrder";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "order_type", kind: "enum", T: proto3.getEnumType(SpotOrderType) },
    { no: 2, name: "order_price", kind: "message", T: OrderPrice },
    { no: 3, name: "order_amount", kind: "message", T: Coin },
    { no: 4, name: "owner_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "order_target_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateSpotOrder {
    return new MsgCreateSpotOrder().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateSpotOrder {
    return new MsgCreateSpotOrder().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateSpotOrder {
    return new MsgCreateSpotOrder().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateSpotOrder | PlainMessage<MsgCreateSpotOrder> | undefined, b: MsgCreateSpotOrder | PlainMessage<MsgCreateSpotOrder> | undefined): boolean {
    return proto3.util.equals(MsgCreateSpotOrder, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.MsgCreateSpotOrderResponse
 */
export class MsgCreateSpotOrderResponse extends Message<MsgCreateSpotOrderResponse> {
  /**
   * @generated from field: uint64 order_id = 1;
   */
  orderId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgCreateSpotOrderResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgCreateSpotOrderResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "order_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateSpotOrderResponse {
    return new MsgCreateSpotOrderResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateSpotOrderResponse {
    return new MsgCreateSpotOrderResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateSpotOrderResponse {
    return new MsgCreateSpotOrderResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateSpotOrderResponse | PlainMessage<MsgCreateSpotOrderResponse> | undefined, b: MsgCreateSpotOrderResponse | PlainMessage<MsgCreateSpotOrderResponse> | undefined): boolean {
    return proto3.util.equals(MsgCreateSpotOrderResponse, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.MsgUpdateSpotOrder
 */
export class MsgUpdateSpotOrder extends Message<MsgUpdateSpotOrder> {
  /**
   * @generated from field: string owner_address = 1;
   */
  ownerAddress = "";

  /**
   * @generated from field: uint64 order_id = 2;
   */
  orderId = protoInt64.zero;

  /**
   * @generated from field: elys.tradeshield.OrderPrice order_price = 3;
   */
  orderPrice?: OrderPrice;

  constructor(data?: PartialMessage<MsgUpdateSpotOrder>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgUpdateSpotOrder";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "order_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "order_price", kind: "message", T: OrderPrice },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateSpotOrder {
    return new MsgUpdateSpotOrder().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateSpotOrder {
    return new MsgUpdateSpotOrder().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateSpotOrder {
    return new MsgUpdateSpotOrder().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateSpotOrder | PlainMessage<MsgUpdateSpotOrder> | undefined, b: MsgUpdateSpotOrder | PlainMessage<MsgUpdateSpotOrder> | undefined): boolean {
    return proto3.util.equals(MsgUpdateSpotOrder, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.MsgUpdateSpotOrderResponse
 */
export class MsgUpdateSpotOrderResponse extends Message<MsgUpdateSpotOrderResponse> {
  constructor(data?: PartialMessage<MsgUpdateSpotOrderResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgUpdateSpotOrderResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateSpotOrderResponse {
    return new MsgUpdateSpotOrderResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateSpotOrderResponse {
    return new MsgUpdateSpotOrderResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateSpotOrderResponse {
    return new MsgUpdateSpotOrderResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateSpotOrderResponse | PlainMessage<MsgUpdateSpotOrderResponse> | undefined, b: MsgUpdateSpotOrderResponse | PlainMessage<MsgUpdateSpotOrderResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateSpotOrderResponse, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.MsgCancelSpotOrder
 */
export class MsgCancelSpotOrder extends Message<MsgCancelSpotOrder> {
  /**
   * @generated from field: string owner_address = 1;
   */
  ownerAddress = "";

  /**
   * @generated from field: uint64 order_id = 2;
   */
  orderId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgCancelSpotOrder>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgCancelSpotOrder";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "order_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelSpotOrder {
    return new MsgCancelSpotOrder().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelSpotOrder {
    return new MsgCancelSpotOrder().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelSpotOrder {
    return new MsgCancelSpotOrder().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCancelSpotOrder | PlainMessage<MsgCancelSpotOrder> | undefined, b: MsgCancelSpotOrder | PlainMessage<MsgCancelSpotOrder> | undefined): boolean {
    return proto3.util.equals(MsgCancelSpotOrder, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.MsgCancelSpotOrderResponse
 */
export class MsgCancelSpotOrderResponse extends Message<MsgCancelSpotOrderResponse> {
  /**
   * @generated from field: uint64 order_id = 1;
   */
  orderId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgCancelSpotOrderResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgCancelSpotOrderResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "order_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelSpotOrderResponse {
    return new MsgCancelSpotOrderResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelSpotOrderResponse {
    return new MsgCancelSpotOrderResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelSpotOrderResponse {
    return new MsgCancelSpotOrderResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCancelSpotOrderResponse | PlainMessage<MsgCancelSpotOrderResponse> | undefined, b: MsgCancelSpotOrderResponse | PlainMessage<MsgCancelSpotOrderResponse> | undefined): boolean {
    return proto3.util.equals(MsgCancelSpotOrderResponse, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.MsgCancelSpotOrders
 */
export class MsgCancelSpotOrders extends Message<MsgCancelSpotOrders> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: repeated uint64 spot_order_ids = 2;
   */
  spotOrderIds: bigint[] = [];

  constructor(data?: PartialMessage<MsgCancelSpotOrders>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgCancelSpotOrders";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "spot_order_ids", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelSpotOrders {
    return new MsgCancelSpotOrders().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelSpotOrders {
    return new MsgCancelSpotOrders().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelSpotOrders {
    return new MsgCancelSpotOrders().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCancelSpotOrders | PlainMessage<MsgCancelSpotOrders> | undefined, b: MsgCancelSpotOrders | PlainMessage<MsgCancelSpotOrders> | undefined): boolean {
    return proto3.util.equals(MsgCancelSpotOrders, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.MsgCancelSpotOrdersResponse
 */
export class MsgCancelSpotOrdersResponse extends Message<MsgCancelSpotOrdersResponse> {
  constructor(data?: PartialMessage<MsgCancelSpotOrdersResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgCancelSpotOrdersResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelSpotOrdersResponse {
    return new MsgCancelSpotOrdersResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelSpotOrdersResponse {
    return new MsgCancelSpotOrdersResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelSpotOrdersResponse {
    return new MsgCancelSpotOrdersResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCancelSpotOrdersResponse | PlainMessage<MsgCancelSpotOrdersResponse> | undefined, b: MsgCancelSpotOrdersResponse | PlainMessage<MsgCancelSpotOrdersResponse> | undefined): boolean {
    return proto3.util.equals(MsgCancelSpotOrdersResponse, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.MsgCreatePerpetualOpenOrder
 */
export class MsgCreatePerpetualOpenOrder extends Message<MsgCreatePerpetualOpenOrder> {
  /**
   * @generated from field: string owner_address = 1;
   */
  ownerAddress = "";

  /**
   * @generated from field: elys.tradeshield.TriggerPrice trigger_price = 2;
   */
  triggerPrice?: TriggerPrice;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin collateral = 3;
   */
  collateral?: Coin;

  /**
   * @generated from field: string trading_asset = 4;
   */
  tradingAsset = "";

  /**
   * @generated from field: elys.tradeshield.PerpetualPosition position = 5;
   */
  position = PerpetualPosition.UNSPECIFIED;

  /**
   * @generated from field: string leverage = 6;
   */
  leverage = "";

  /**
   * @generated from field: string take_profit_price = 7;
   */
  takeProfitPrice = "";

  /**
   * @generated from field: string stop_loss_price = 8;
   */
  stopLossPrice = "";

  /**
   * @generated from field: uint64 pool_id = 9;
   */
  poolId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgCreatePerpetualOpenOrder>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgCreatePerpetualOpenOrder";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "trigger_price", kind: "message", T: TriggerPrice },
    { no: 3, name: "collateral", kind: "message", T: Coin },
    { no: 4, name: "trading_asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "position", kind: "enum", T: proto3.getEnumType(PerpetualPosition) },
    { no: 6, name: "leverage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "take_profit_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "stop_loss_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreatePerpetualOpenOrder {
    return new MsgCreatePerpetualOpenOrder().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreatePerpetualOpenOrder {
    return new MsgCreatePerpetualOpenOrder().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreatePerpetualOpenOrder {
    return new MsgCreatePerpetualOpenOrder().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreatePerpetualOpenOrder | PlainMessage<MsgCreatePerpetualOpenOrder> | undefined, b: MsgCreatePerpetualOpenOrder | PlainMessage<MsgCreatePerpetualOpenOrder> | undefined): boolean {
    return proto3.util.equals(MsgCreatePerpetualOpenOrder, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.MsgCreatePerpetualOpenOrderResponse
 */
export class MsgCreatePerpetualOpenOrderResponse extends Message<MsgCreatePerpetualOpenOrderResponse> {
  /**
   * @generated from field: uint64 order_id = 1;
   */
  orderId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgCreatePerpetualOpenOrderResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgCreatePerpetualOpenOrderResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "order_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreatePerpetualOpenOrderResponse {
    return new MsgCreatePerpetualOpenOrderResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreatePerpetualOpenOrderResponse {
    return new MsgCreatePerpetualOpenOrderResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreatePerpetualOpenOrderResponse {
    return new MsgCreatePerpetualOpenOrderResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreatePerpetualOpenOrderResponse | PlainMessage<MsgCreatePerpetualOpenOrderResponse> | undefined, b: MsgCreatePerpetualOpenOrderResponse | PlainMessage<MsgCreatePerpetualOpenOrderResponse> | undefined): boolean {
    return proto3.util.equals(MsgCreatePerpetualOpenOrderResponse, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.MsgCreatePerpetualCloseOrder
 */
export class MsgCreatePerpetualCloseOrder extends Message<MsgCreatePerpetualCloseOrder> {
  /**
   * @generated from field: string owner_address = 1;
   */
  ownerAddress = "";

  /**
   * @generated from field: elys.tradeshield.TriggerPrice trigger_price = 2;
   */
  triggerPrice?: TriggerPrice;

  /**
   * @generated from field: uint64 position_id = 3;
   */
  positionId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgCreatePerpetualCloseOrder>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgCreatePerpetualCloseOrder";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "trigger_price", kind: "message", T: TriggerPrice },
    { no: 3, name: "position_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreatePerpetualCloseOrder {
    return new MsgCreatePerpetualCloseOrder().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreatePerpetualCloseOrder {
    return new MsgCreatePerpetualCloseOrder().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreatePerpetualCloseOrder {
    return new MsgCreatePerpetualCloseOrder().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreatePerpetualCloseOrder | PlainMessage<MsgCreatePerpetualCloseOrder> | undefined, b: MsgCreatePerpetualCloseOrder | PlainMessage<MsgCreatePerpetualCloseOrder> | undefined): boolean {
    return proto3.util.equals(MsgCreatePerpetualCloseOrder, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.MsgCreatePerpetualCloseOrderResponse
 */
export class MsgCreatePerpetualCloseOrderResponse extends Message<MsgCreatePerpetualCloseOrderResponse> {
  /**
   * @generated from field: uint64 order_id = 1;
   */
  orderId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgCreatePerpetualCloseOrderResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgCreatePerpetualCloseOrderResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "order_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreatePerpetualCloseOrderResponse {
    return new MsgCreatePerpetualCloseOrderResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreatePerpetualCloseOrderResponse {
    return new MsgCreatePerpetualCloseOrderResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreatePerpetualCloseOrderResponse {
    return new MsgCreatePerpetualCloseOrderResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreatePerpetualCloseOrderResponse | PlainMessage<MsgCreatePerpetualCloseOrderResponse> | undefined, b: MsgCreatePerpetualCloseOrderResponse | PlainMessage<MsgCreatePerpetualCloseOrderResponse> | undefined): boolean {
    return proto3.util.equals(MsgCreatePerpetualCloseOrderResponse, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.MsgUpdatePerpetualOrder
 */
export class MsgUpdatePerpetualOrder extends Message<MsgUpdatePerpetualOrder> {
  /**
   * @generated from field: string owner_address = 1;
   */
  ownerAddress = "";

  /**
   * @generated from field: uint64 order_id = 2;
   */
  orderId = protoInt64.zero;

  /**
   * @generated from field: elys.tradeshield.TriggerPrice trigger_price = 3;
   */
  triggerPrice?: TriggerPrice;

  constructor(data?: PartialMessage<MsgUpdatePerpetualOrder>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgUpdatePerpetualOrder";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "order_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "trigger_price", kind: "message", T: TriggerPrice },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdatePerpetualOrder {
    return new MsgUpdatePerpetualOrder().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdatePerpetualOrder {
    return new MsgUpdatePerpetualOrder().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdatePerpetualOrder {
    return new MsgUpdatePerpetualOrder().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdatePerpetualOrder | PlainMessage<MsgUpdatePerpetualOrder> | undefined, b: MsgUpdatePerpetualOrder | PlainMessage<MsgUpdatePerpetualOrder> | undefined): boolean {
    return proto3.util.equals(MsgUpdatePerpetualOrder, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.MsgUpdatePerpetualOrderResponse
 */
export class MsgUpdatePerpetualOrderResponse extends Message<MsgUpdatePerpetualOrderResponse> {
  constructor(data?: PartialMessage<MsgUpdatePerpetualOrderResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgUpdatePerpetualOrderResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdatePerpetualOrderResponse {
    return new MsgUpdatePerpetualOrderResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdatePerpetualOrderResponse {
    return new MsgUpdatePerpetualOrderResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdatePerpetualOrderResponse {
    return new MsgUpdatePerpetualOrderResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdatePerpetualOrderResponse | PlainMessage<MsgUpdatePerpetualOrderResponse> | undefined, b: MsgUpdatePerpetualOrderResponse | PlainMessage<MsgUpdatePerpetualOrderResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdatePerpetualOrderResponse, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.MsgCancelPerpetualOrder
 */
export class MsgCancelPerpetualOrder extends Message<MsgCancelPerpetualOrder> {
  /**
   * @generated from field: string owner_address = 1;
   */
  ownerAddress = "";

  /**
   * @generated from field: uint64 order_id = 2;
   */
  orderId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgCancelPerpetualOrder>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgCancelPerpetualOrder";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "order_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelPerpetualOrder {
    return new MsgCancelPerpetualOrder().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelPerpetualOrder {
    return new MsgCancelPerpetualOrder().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelPerpetualOrder {
    return new MsgCancelPerpetualOrder().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCancelPerpetualOrder | PlainMessage<MsgCancelPerpetualOrder> | undefined, b: MsgCancelPerpetualOrder | PlainMessage<MsgCancelPerpetualOrder> | undefined): boolean {
    return proto3.util.equals(MsgCancelPerpetualOrder, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.MsgCancelPerpetualOrderResponse
 */
export class MsgCancelPerpetualOrderResponse extends Message<MsgCancelPerpetualOrderResponse> {
  /**
   * @generated from field: uint64 order_id = 1;
   */
  orderId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgCancelPerpetualOrderResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgCancelPerpetualOrderResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "order_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelPerpetualOrderResponse {
    return new MsgCancelPerpetualOrderResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelPerpetualOrderResponse {
    return new MsgCancelPerpetualOrderResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelPerpetualOrderResponse {
    return new MsgCancelPerpetualOrderResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCancelPerpetualOrderResponse | PlainMessage<MsgCancelPerpetualOrderResponse> | undefined, b: MsgCancelPerpetualOrderResponse | PlainMessage<MsgCancelPerpetualOrderResponse> | undefined): boolean {
    return proto3.util.equals(MsgCancelPerpetualOrderResponse, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.MsgCancelPerpetualOrders
 */
export class MsgCancelPerpetualOrders extends Message<MsgCancelPerpetualOrders> {
  /**
   * @generated from field: string owner_address = 1;
   */
  ownerAddress = "";

  /**
   * @generated from field: repeated uint64 order_ids = 2;
   */
  orderIds: bigint[] = [];

  constructor(data?: PartialMessage<MsgCancelPerpetualOrders>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgCancelPerpetualOrders";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "order_ids", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelPerpetualOrders {
    return new MsgCancelPerpetualOrders().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelPerpetualOrders {
    return new MsgCancelPerpetualOrders().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelPerpetualOrders {
    return new MsgCancelPerpetualOrders().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCancelPerpetualOrders | PlainMessage<MsgCancelPerpetualOrders> | undefined, b: MsgCancelPerpetualOrders | PlainMessage<MsgCancelPerpetualOrders> | undefined): boolean {
    return proto3.util.equals(MsgCancelPerpetualOrders, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.MsgCancelPerpetualOrdersResponse
 */
export class MsgCancelPerpetualOrdersResponse extends Message<MsgCancelPerpetualOrdersResponse> {
  constructor(data?: PartialMessage<MsgCancelPerpetualOrdersResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgCancelPerpetualOrdersResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelPerpetualOrdersResponse {
    return new MsgCancelPerpetualOrdersResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelPerpetualOrdersResponse {
    return new MsgCancelPerpetualOrdersResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelPerpetualOrdersResponse {
    return new MsgCancelPerpetualOrdersResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCancelPerpetualOrdersResponse | PlainMessage<MsgCancelPerpetualOrdersResponse> | undefined, b: MsgCancelPerpetualOrdersResponse | PlainMessage<MsgCancelPerpetualOrdersResponse> | undefined): boolean {
    return proto3.util.equals(MsgCancelPerpetualOrdersResponse, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   *
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: elys.tradeshield.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgUpdateParams";
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
 * @generated from message elys.tradeshield.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgUpdateParamsResponse";
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

/**
 * @generated from message elys.tradeshield.MsgExecuteOrders
 */
export class MsgExecuteOrders extends Message<MsgExecuteOrders> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: repeated uint64 spot_order_ids = 2;
   */
  spotOrderIds: bigint[] = [];

  /**
   * @generated from field: repeated uint64 perpetual_order_ids = 3;
   */
  perpetualOrderIds: bigint[] = [];

  constructor(data?: PartialMessage<MsgExecuteOrders>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgExecuteOrders";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "spot_order_ids", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 3, name: "perpetual_order_ids", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExecuteOrders {
    return new MsgExecuteOrders().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExecuteOrders {
    return new MsgExecuteOrders().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExecuteOrders {
    return new MsgExecuteOrders().fromJsonString(jsonString, options);
  }

  static equals(a: MsgExecuteOrders | PlainMessage<MsgExecuteOrders> | undefined, b: MsgExecuteOrders | PlainMessage<MsgExecuteOrders> | undefined): boolean {
    return proto3.util.equals(MsgExecuteOrders, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.MsgExecuteOrdersResponse
 */
export class MsgExecuteOrdersResponse extends Message<MsgExecuteOrdersResponse> {
  constructor(data?: PartialMessage<MsgExecuteOrdersResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.MsgExecuteOrdersResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExecuteOrdersResponse {
    return new MsgExecuteOrdersResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExecuteOrdersResponse {
    return new MsgExecuteOrdersResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExecuteOrdersResponse {
    return new MsgExecuteOrdersResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgExecuteOrdersResponse | PlainMessage<MsgExecuteOrdersResponse> | undefined, b: MsgExecuteOrdersResponse | PlainMessage<MsgExecuteOrdersResponse> | undefined): boolean {
    return proto3.util.equals(MsgExecuteOrdersResponse, a, b);
  }
}

