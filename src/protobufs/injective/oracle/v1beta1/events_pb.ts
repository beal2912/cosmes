// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/oracle/v1beta1/events.proto (package injective.oracle.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { PythPriceState, StorkPriceState } from "./oracle_pb.js";

/**
 * @generated from message injective.oracle.v1beta1.SetChainlinkPriceEvent
 */
export class SetChainlinkPriceEvent extends Message<SetChainlinkPriceEvent> {
  /**
   * @generated from field: string feed_id = 1;
   */
  feedId = "";

  /**
   * @generated from field: string answer = 2;
   */
  answer = "";

  /**
   * @generated from field: uint64 timestamp = 3;
   */
  timestamp = protoInt64.zero;

  constructor(data?: PartialMessage<SetChainlinkPriceEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.SetChainlinkPriceEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "feed_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "answer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "timestamp", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetChainlinkPriceEvent {
    return new SetChainlinkPriceEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetChainlinkPriceEvent {
    return new SetChainlinkPriceEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetChainlinkPriceEvent {
    return new SetChainlinkPriceEvent().fromJsonString(jsonString, options);
  }

  static equals(a: SetChainlinkPriceEvent | PlainMessage<SetChainlinkPriceEvent> | undefined, b: SetChainlinkPriceEvent | PlainMessage<SetChainlinkPriceEvent> | undefined): boolean {
    return proto3.util.equals(SetChainlinkPriceEvent, a, b);
  }
}

/**
 * Event type upon set ref
 *
 * @generated from message injective.oracle.v1beta1.SetBandPriceEvent
 */
export class SetBandPriceEvent extends Message<SetBandPriceEvent> {
  /**
   * @generated from field: string relayer = 1;
   */
  relayer = "";

  /**
   * @generated from field: string symbol = 2;
   */
  symbol = "";

  /**
   * @generated from field: string price = 3;
   */
  price = "";

  /**
   * @generated from field: uint64 resolve_time = 4;
   */
  resolveTime = protoInt64.zero;

  /**
   * @generated from field: uint64 request_id = 5;
   */
  requestId = protoInt64.zero;

  constructor(data?: PartialMessage<SetBandPriceEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.SetBandPriceEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "relayer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "resolve_time", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "request_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetBandPriceEvent {
    return new SetBandPriceEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetBandPriceEvent {
    return new SetBandPriceEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetBandPriceEvent {
    return new SetBandPriceEvent().fromJsonString(jsonString, options);
  }

  static equals(a: SetBandPriceEvent | PlainMessage<SetBandPriceEvent> | undefined, b: SetBandPriceEvent | PlainMessage<SetBandPriceEvent> | undefined): boolean {
    return proto3.util.equals(SetBandPriceEvent, a, b);
  }
}

/**
 * @generated from message injective.oracle.v1beta1.SetBandIBCPriceEvent
 */
export class SetBandIBCPriceEvent extends Message<SetBandIBCPriceEvent> {
  /**
   * @generated from field: string relayer = 1;
   */
  relayer = "";

  /**
   * @generated from field: repeated string symbols = 2;
   */
  symbols: string[] = [];

  /**
   * @generated from field: repeated string prices = 3;
   */
  prices: string[] = [];

  /**
   * @generated from field: uint64 resolve_time = 4;
   */
  resolveTime = protoInt64.zero;

  /**
   * @generated from field: uint64 request_id = 5;
   */
  requestId = protoInt64.zero;

  /**
   * @generated from field: int64 client_id = 6;
   */
  clientId = protoInt64.zero;

  constructor(data?: PartialMessage<SetBandIBCPriceEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.SetBandIBCPriceEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "relayer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "symbols", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "prices", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "resolve_time", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "request_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "client_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetBandIBCPriceEvent {
    return new SetBandIBCPriceEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetBandIBCPriceEvent {
    return new SetBandIBCPriceEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetBandIBCPriceEvent {
    return new SetBandIBCPriceEvent().fromJsonString(jsonString, options);
  }

  static equals(a: SetBandIBCPriceEvent | PlainMessage<SetBandIBCPriceEvent> | undefined, b: SetBandIBCPriceEvent | PlainMessage<SetBandIBCPriceEvent> | undefined): boolean {
    return proto3.util.equals(SetBandIBCPriceEvent, a, b);
  }
}

/**
 * @generated from message injective.oracle.v1beta1.EventBandIBCAckSuccess
 */
export class EventBandIBCAckSuccess extends Message<EventBandIBCAckSuccess> {
  /**
   * @generated from field: string ack_result = 1;
   */
  ackResult = "";

  /**
   * @generated from field: int64 client_id = 2;
   */
  clientId = protoInt64.zero;

  constructor(data?: PartialMessage<EventBandIBCAckSuccess>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.EventBandIBCAckSuccess";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ack_result", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBandIBCAckSuccess {
    return new EventBandIBCAckSuccess().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBandIBCAckSuccess {
    return new EventBandIBCAckSuccess().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBandIBCAckSuccess {
    return new EventBandIBCAckSuccess().fromJsonString(jsonString, options);
  }

  static equals(a: EventBandIBCAckSuccess | PlainMessage<EventBandIBCAckSuccess> | undefined, b: EventBandIBCAckSuccess | PlainMessage<EventBandIBCAckSuccess> | undefined): boolean {
    return proto3.util.equals(EventBandIBCAckSuccess, a, b);
  }
}

/**
 * @generated from message injective.oracle.v1beta1.EventBandIBCAckError
 */
export class EventBandIBCAckError extends Message<EventBandIBCAckError> {
  /**
   * @generated from field: string ack_error = 1;
   */
  ackError = "";

  /**
   * @generated from field: int64 client_id = 2;
   */
  clientId = protoInt64.zero;

  constructor(data?: PartialMessage<EventBandIBCAckError>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.EventBandIBCAckError";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ack_error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBandIBCAckError {
    return new EventBandIBCAckError().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBandIBCAckError {
    return new EventBandIBCAckError().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBandIBCAckError {
    return new EventBandIBCAckError().fromJsonString(jsonString, options);
  }

  static equals(a: EventBandIBCAckError | PlainMessage<EventBandIBCAckError> | undefined, b: EventBandIBCAckError | PlainMessage<EventBandIBCAckError> | undefined): boolean {
    return proto3.util.equals(EventBandIBCAckError, a, b);
  }
}

/**
 * @generated from message injective.oracle.v1beta1.EventBandIBCResponseTimeout
 */
export class EventBandIBCResponseTimeout extends Message<EventBandIBCResponseTimeout> {
  /**
   * @generated from field: int64 client_id = 1;
   */
  clientId = protoInt64.zero;

  constructor(data?: PartialMessage<EventBandIBCResponseTimeout>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.EventBandIBCResponseTimeout";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBandIBCResponseTimeout {
    return new EventBandIBCResponseTimeout().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBandIBCResponseTimeout {
    return new EventBandIBCResponseTimeout().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBandIBCResponseTimeout {
    return new EventBandIBCResponseTimeout().fromJsonString(jsonString, options);
  }

  static equals(a: EventBandIBCResponseTimeout | PlainMessage<EventBandIBCResponseTimeout> | undefined, b: EventBandIBCResponseTimeout | PlainMessage<EventBandIBCResponseTimeout> | undefined): boolean {
    return proto3.util.equals(EventBandIBCResponseTimeout, a, b);
  }
}

/**
 * @generated from message injective.oracle.v1beta1.SetPriceFeedPriceEvent
 */
export class SetPriceFeedPriceEvent extends Message<SetPriceFeedPriceEvent> {
  /**
   * @generated from field: string relayer = 1;
   */
  relayer = "";

  /**
   * @generated from field: string base = 2;
   */
  base = "";

  /**
   * @generated from field: string quote = 3;
   */
  quote = "";

  /**
   * price defines the price of the oracle base and quote
   *
   * @generated from field: string price = 4;
   */
  price = "";

  constructor(data?: PartialMessage<SetPriceFeedPriceEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.SetPriceFeedPriceEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "relayer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "base", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "quote", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetPriceFeedPriceEvent {
    return new SetPriceFeedPriceEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetPriceFeedPriceEvent {
    return new SetPriceFeedPriceEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetPriceFeedPriceEvent {
    return new SetPriceFeedPriceEvent().fromJsonString(jsonString, options);
  }

  static equals(a: SetPriceFeedPriceEvent | PlainMessage<SetPriceFeedPriceEvent> | undefined, b: SetPriceFeedPriceEvent | PlainMessage<SetPriceFeedPriceEvent> | undefined): boolean {
    return proto3.util.equals(SetPriceFeedPriceEvent, a, b);
  }
}

/**
 * @generated from message injective.oracle.v1beta1.SetProviderPriceEvent
 */
export class SetProviderPriceEvent extends Message<SetProviderPriceEvent> {
  /**
   * @generated from field: string provider = 1;
   */
  provider = "";

  /**
   * @generated from field: string relayer = 2;
   */
  relayer = "";

  /**
   * @generated from field: string symbol = 3;
   */
  symbol = "";

  /**
   * @generated from field: string price = 4;
   */
  price = "";

  constructor(data?: PartialMessage<SetProviderPriceEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.SetProviderPriceEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "provider", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "relayer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetProviderPriceEvent {
    return new SetProviderPriceEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetProviderPriceEvent {
    return new SetProviderPriceEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetProviderPriceEvent {
    return new SetProviderPriceEvent().fromJsonString(jsonString, options);
  }

  static equals(a: SetProviderPriceEvent | PlainMessage<SetProviderPriceEvent> | undefined, b: SetProviderPriceEvent | PlainMessage<SetProviderPriceEvent> | undefined): boolean {
    return proto3.util.equals(SetProviderPriceEvent, a, b);
  }
}

/**
 * @generated from message injective.oracle.v1beta1.SetCoinbasePriceEvent
 */
export class SetCoinbasePriceEvent extends Message<SetCoinbasePriceEvent> {
  /**
   * @generated from field: string symbol = 1;
   */
  symbol = "";

  /**
   * @generated from field: string price = 2;
   */
  price = "";

  /**
   * @generated from field: uint64 timestamp = 3;
   */
  timestamp = protoInt64.zero;

  constructor(data?: PartialMessage<SetCoinbasePriceEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.SetCoinbasePriceEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "timestamp", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetCoinbasePriceEvent {
    return new SetCoinbasePriceEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetCoinbasePriceEvent {
    return new SetCoinbasePriceEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetCoinbasePriceEvent {
    return new SetCoinbasePriceEvent().fromJsonString(jsonString, options);
  }

  static equals(a: SetCoinbasePriceEvent | PlainMessage<SetCoinbasePriceEvent> | undefined, b: SetCoinbasePriceEvent | PlainMessage<SetCoinbasePriceEvent> | undefined): boolean {
    return proto3.util.equals(SetCoinbasePriceEvent, a, b);
  }
}

/**
 * @generated from message injective.oracle.v1beta1.EventSetStorkPrices
 */
export class EventSetStorkPrices extends Message<EventSetStorkPrices> {
  /**
   * @generated from field: repeated injective.oracle.v1beta1.StorkPriceState prices = 1;
   */
  prices: StorkPriceState[] = [];

  constructor(data?: PartialMessage<EventSetStorkPrices>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.EventSetStorkPrices";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "prices", kind: "message", T: StorkPriceState, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetStorkPrices {
    return new EventSetStorkPrices().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetStorkPrices {
    return new EventSetStorkPrices().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetStorkPrices {
    return new EventSetStorkPrices().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetStorkPrices | PlainMessage<EventSetStorkPrices> | undefined, b: EventSetStorkPrices | PlainMessage<EventSetStorkPrices> | undefined): boolean {
    return proto3.util.equals(EventSetStorkPrices, a, b);
  }
}

/**
 * @generated from message injective.oracle.v1beta1.EventSetPythPrices
 */
export class EventSetPythPrices extends Message<EventSetPythPrices> {
  /**
   * @generated from field: repeated injective.oracle.v1beta1.PythPriceState prices = 1;
   */
  prices: PythPriceState[] = [];

  constructor(data?: PartialMessage<EventSetPythPrices>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.EventSetPythPrices";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "prices", kind: "message", T: PythPriceState, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetPythPrices {
    return new EventSetPythPrices().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetPythPrices {
    return new EventSetPythPrices().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetPythPrices {
    return new EventSetPythPrices().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetPythPrices | PlainMessage<EventSetPythPrices> | undefined, b: EventSetPythPrices | PlainMessage<EventSetPythPrices> | undefined): boolean {
    return proto3.util.equals(EventSetPythPrices, a, b);
  }
}

