// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/tradeshield/order.proto (package elys.tradeshield, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Spot order
 *
 * @generated from enum elys.tradeshield.SpotOrderType
 */
export enum SpotOrderType {
  /**
   * @generated from enum value: STOPLOSS = 0;
   */
  STOPLOSS = 0,

  /**
   * @generated from enum value: LIMITSELL = 1;
   */
  LIMITSELL = 1,

  /**
   * @generated from enum value: LIMITBUY = 2;
   */
  LIMITBUY = 2,

  /**
   * @generated from enum value: MARKETBUY = 3;
   */
  MARKETBUY = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(SpotOrderType)
proto3.util.setEnumType(SpotOrderType, "elys.tradeshield.SpotOrderType", [
  { no: 0, name: "STOPLOSS" },
  { no: 1, name: "LIMITSELL" },
  { no: 2, name: "LIMITBUY" },
  { no: 3, name: "MARKETBUY" },
]);

/**
 * @generated from enum elys.tradeshield.PerpetualPosition
 */
export enum PerpetualPosition {
  /**
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: LONG = 1;
   */
  LONG = 1,

  /**
   * @generated from enum value: SHORT = 2;
   */
  SHORT = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(PerpetualPosition)
proto3.util.setEnumType(PerpetualPosition, "elys.tradeshield.PerpetualPosition", [
  { no: 0, name: "UNSPECIFIED" },
  { no: 1, name: "LONG" },
  { no: 2, name: "SHORT" },
]);

/**
 * @generated from message elys.tradeshield.OrderPrice
 */
export class OrderPrice extends Message<OrderPrice> {
  /**
   * @generated from field: string base_denom = 1;
   */
  baseDenom = "";

  /**
   * @generated from field: string quote_denom = 2;
   */
  quoteDenom = "";

  /**
   * @generated from field: string rate = 3;
   */
  rate = "";

  constructor(data?: PartialMessage<OrderPrice>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.OrderPrice";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "quote_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrderPrice {
    return new OrderPrice().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrderPrice {
    return new OrderPrice().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrderPrice {
    return new OrderPrice().fromJsonString(jsonString, options);
  }

  static equals(a: OrderPrice | PlainMessage<OrderPrice> | undefined, b: OrderPrice | PlainMessage<OrderPrice> | undefined): boolean {
    return proto3.util.equals(OrderPrice, a, b);
  }
}

/**
 * @generated from message elys.tradeshield.TriggerPrice
 */
export class TriggerPrice extends Message<TriggerPrice> {
  /**
   * @generated from field: string trading_asset_denom = 1;
   */
  tradingAssetDenom = "";

  /**
   * @generated from field: string rate = 3;
   */
  rate = "";

  constructor(data?: PartialMessage<TriggerPrice>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.TriggerPrice";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "trading_asset_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TriggerPrice {
    return new TriggerPrice().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TriggerPrice {
    return new TriggerPrice().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TriggerPrice {
    return new TriggerPrice().fromJsonString(jsonString, options);
  }

  static equals(a: TriggerPrice | PlainMessage<TriggerPrice> | undefined, b: TriggerPrice | PlainMessage<TriggerPrice> | undefined): boolean {
    return proto3.util.equals(TriggerPrice, a, b);
  }
}

