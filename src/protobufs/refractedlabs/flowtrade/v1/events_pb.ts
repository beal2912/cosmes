// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file refractedlabs/flowtrade/v1/events.proto (package refractedlabs.flowtrade.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Flow } from "./flow_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { Position } from "./position_pb.js";

/**
 * @generated from message refractedlabs.flowtrade.v1.EventSetParams
 */
export class EventSetParams extends Message<EventSetParams> {
  /**
   * @generated from field: refractedlabs.flowtrade.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<EventSetParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "refractedlabs.flowtrade.v1.EventSetParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetParams {
    return new EventSetParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetParams {
    return new EventSetParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetParams {
    return new EventSetParams().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetParams | PlainMessage<EventSetParams> | undefined, b: EventSetParams | PlainMessage<EventSetParams> | undefined): boolean {
    return proto3.util.equals(EventSetParams, a, b);
  }
}

/**
 * @generated from message refractedlabs.flowtrade.v1.EventFlowCreated
 */
export class EventFlowCreated extends Message<EventFlowCreated> {
  /**
   * @generated from field: refractedlabs.flowtrade.v1.Flow flow = 1;
   */
  flow?: Flow;

  constructor(data?: PartialMessage<EventFlowCreated>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "refractedlabs.flowtrade.v1.EventFlowCreated";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "flow", kind: "message", T: Flow },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventFlowCreated {
    return new EventFlowCreated().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventFlowCreated {
    return new EventFlowCreated().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventFlowCreated {
    return new EventFlowCreated().fromJsonString(jsonString, options);
  }

  static equals(a: EventFlowCreated | PlainMessage<EventFlowCreated> | undefined, b: EventFlowCreated | PlainMessage<EventFlowCreated> | undefined): boolean {
    return proto3.util.equals(EventFlowCreated, a, b);
  }
}

/**
 * @generated from message refractedlabs.flowtrade.v1.EventFlowEnded
 */
export class EventFlowEnded extends Message<EventFlowEnded> {
  /**
   * @generated from field: uint64 flow_id = 1;
   */
  flowId = protoInt64.zero;

  constructor(data?: PartialMessage<EventFlowEnded>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "refractedlabs.flowtrade.v1.EventFlowEnded";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "flow_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventFlowEnded {
    return new EventFlowEnded().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventFlowEnded {
    return new EventFlowEnded().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventFlowEnded {
    return new EventFlowEnded().fromJsonString(jsonString, options);
  }

  static equals(a: EventFlowEnded | PlainMessage<EventFlowEnded> | undefined, b: EventFlowEnded | PlainMessage<EventFlowEnded> | undefined): boolean {
    return proto3.util.equals(EventFlowEnded, a, b);
  }
}

/**
 * @generated from message refractedlabs.flowtrade.v1.EventFlowStopped
 */
export class EventFlowStopped extends Message<EventFlowStopped> {
  /**
   * @generated from field: uint64 flow_id = 1;
   */
  flowId = protoInt64.zero;

  constructor(data?: PartialMessage<EventFlowStopped>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "refractedlabs.flowtrade.v1.EventFlowStopped";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "flow_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventFlowStopped {
    return new EventFlowStopped().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventFlowStopped {
    return new EventFlowStopped().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventFlowStopped {
    return new EventFlowStopped().fromJsonString(jsonString, options);
  }

  static equals(a: EventFlowStopped | PlainMessage<EventFlowStopped> | undefined, b: EventFlowStopped | PlainMessage<EventFlowStopped> | undefined): boolean {
    return proto3.util.equals(EventFlowStopped, a, b);
  }
}

/**
 * @generated from message refractedlabs.flowtrade.v1.EventFlowCheckedOut
 */
export class EventFlowCheckedOut extends Message<EventFlowCheckedOut> {
  /**
   * @generated from field: uint64 flow_id = 1;
   */
  flowId = protoInt64.zero;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin returned_deposit = 2;
   */
  returnedDeposit?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin returned_token_out = 3;
   */
  returnedTokenOut?: Coin;

  constructor(data?: PartialMessage<EventFlowCheckedOut>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "refractedlabs.flowtrade.v1.EventFlowCheckedOut";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "flow_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "returned_deposit", kind: "message", T: Coin },
    { no: 3, name: "returned_token_out", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventFlowCheckedOut {
    return new EventFlowCheckedOut().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventFlowCheckedOut {
    return new EventFlowCheckedOut().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventFlowCheckedOut {
    return new EventFlowCheckedOut().fromJsonString(jsonString, options);
  }

  static equals(a: EventFlowCheckedOut | PlainMessage<EventFlowCheckedOut> | undefined, b: EventFlowCheckedOut | PlainMessage<EventFlowCheckedOut> | undefined): boolean {
    return proto3.util.equals(EventFlowCheckedOut, a, b);
  }
}

/**
 * @generated from message refractedlabs.flowtrade.v1.EventFlowTokenInClaimed
 */
export class EventFlowTokenInClaimed extends Message<EventFlowTokenInClaimed> {
  /**
   * @generated from field: uint64 flow_id = 1;
   */
  flowId = protoInt64.zero;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
   */
  amount?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin fee = 3;
   */
  fee?: Coin;

  /**
   * @generated from field: string treasury = 4;
   */
  treasury = "";

  constructor(data?: PartialMessage<EventFlowTokenInClaimed>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "refractedlabs.flowtrade.v1.EventFlowTokenInClaimed";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "flow_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "amount", kind: "message", T: Coin },
    { no: 3, name: "fee", kind: "message", T: Coin },
    { no: 4, name: "treasury", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventFlowTokenInClaimed {
    return new EventFlowTokenInClaimed().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventFlowTokenInClaimed {
    return new EventFlowTokenInClaimed().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventFlowTokenInClaimed {
    return new EventFlowTokenInClaimed().fromJsonString(jsonString, options);
  }

  static equals(a: EventFlowTokenInClaimed | PlainMessage<EventFlowTokenInClaimed> | undefined, b: EventFlowTokenInClaimed | PlainMessage<EventFlowTokenInClaimed> | undefined): boolean {
    return proto3.util.equals(EventFlowTokenInClaimed, a, b);
  }
}

/**
 * @generated from message refractedlabs.flowtrade.v1.EventFlowTokenOutClaimed
 */
export class EventFlowTokenOutClaimed extends Message<EventFlowTokenOutClaimed> {
  /**
   * @generated from field: uint64 flow_id = 1;
   */
  flowId = protoInt64.zero;

  /**
   * @generated from field: string owner = 2;
   */
  owner = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
   */
  amount?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin fee = 4;
   */
  fee?: Coin;

  constructor(data?: PartialMessage<EventFlowTokenOutClaimed>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "refractedlabs.flowtrade.v1.EventFlowTokenOutClaimed";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "flow_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin },
    { no: 4, name: "fee", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventFlowTokenOutClaimed {
    return new EventFlowTokenOutClaimed().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventFlowTokenOutClaimed {
    return new EventFlowTokenOutClaimed().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventFlowTokenOutClaimed {
    return new EventFlowTokenOutClaimed().fromJsonString(jsonString, options);
  }

  static equals(a: EventFlowTokenOutClaimed | PlainMessage<EventFlowTokenOutClaimed> | undefined, b: EventFlowTokenOutClaimed | PlainMessage<EventFlowTokenOutClaimed> | undefined): boolean {
    return proto3.util.equals(EventFlowTokenOutClaimed, a, b);
  }
}

/**
 * @generated from message refractedlabs.flowtrade.v1.EventJoinFlow
 */
export class EventJoinFlow extends Message<EventJoinFlow> {
  /**
   * @generated from field: uint64 flow_id = 1;
   */
  flowId = protoInt64.zero;

  /**
   * @generated from field: string address = 2;
   */
  address = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<EventJoinFlow>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "refractedlabs.flowtrade.v1.EventJoinFlow";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "flow_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventJoinFlow {
    return new EventJoinFlow().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventJoinFlow {
    return new EventJoinFlow().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventJoinFlow {
    return new EventJoinFlow().fromJsonString(jsonString, options);
  }

  static equals(a: EventJoinFlow | PlainMessage<EventJoinFlow> | undefined, b: EventJoinFlow | PlainMessage<EventJoinFlow> | undefined): boolean {
    return proto3.util.equals(EventJoinFlow, a, b);
  }
}

/**
 * @generated from message refractedlabs.flowtrade.v1.EventExitFlow
 */
export class EventExitFlow extends Message<EventExitFlow> {
  /**
   * @generated from field: uint64 flow_id = 1;
   */
  flowId = protoInt64.zero;

  /**
   * @generated from field: string address = 2;
   */
  address = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<EventExitFlow>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "refractedlabs.flowtrade.v1.EventExitFlow";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "flow_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventExitFlow {
    return new EventExitFlow().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventExitFlow {
    return new EventExitFlow().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventExitFlow {
    return new EventExitFlow().fromJsonString(jsonString, options);
  }

  static equals(a: EventExitFlow | PlainMessage<EventExitFlow> | undefined, b: EventExitFlow | PlainMessage<EventExitFlow> | undefined): boolean {
    return proto3.util.equals(EventExitFlow, a, b);
  }
}

/**
 * @generated from message refractedlabs.flowtrade.v1.EventSetOperator
 */
export class EventSetOperator extends Message<EventSetOperator> {
  /**
   * @generated from field: uint64 flow_id = 1;
   */
  flowId = protoInt64.zero;

  /**
   * @generated from field: string owner = 2;
   */
  owner = "";

  /**
   * @generated from field: string operator = 3;
   */
  operator = "";

  constructor(data?: PartialMessage<EventSetOperator>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "refractedlabs.flowtrade.v1.EventSetOperator";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "flow_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "operator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetOperator {
    return new EventSetOperator().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetOperator {
    return new EventSetOperator().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetOperator {
    return new EventSetOperator().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetOperator | PlainMessage<EventSetOperator> | undefined, b: EventSetOperator | PlainMessage<EventSetOperator> | undefined): boolean {
    return proto3.util.equals(EventSetOperator, a, b);
  }
}

/**
 * @generated from message refractedlabs.flowtrade.v1.EventSetFlow
 */
export class EventSetFlow extends Message<EventSetFlow> {
  /**
   * @generated from field: refractedlabs.flowtrade.v1.Flow flow = 1;
   */
  flow?: Flow;

  constructor(data?: PartialMessage<EventSetFlow>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "refractedlabs.flowtrade.v1.EventSetFlow";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "flow", kind: "message", T: Flow },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetFlow {
    return new EventSetFlow().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetFlow {
    return new EventSetFlow().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetFlow {
    return new EventSetFlow().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetFlow | PlainMessage<EventSetFlow> | undefined, b: EventSetFlow | PlainMessage<EventSetFlow> | undefined): boolean {
    return proto3.util.equals(EventSetFlow, a, b);
  }
}

/**
 * @generated from message refractedlabs.flowtrade.v1.EventSetPosition
 */
export class EventSetPosition extends Message<EventSetPosition> {
  /**
   * @generated from field: refractedlabs.flowtrade.v1.Position position = 1;
   */
  position?: Position;

  constructor(data?: PartialMessage<EventSetPosition>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "refractedlabs.flowtrade.v1.EventSetPosition";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "position", kind: "message", T: Position },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetPosition {
    return new EventSetPosition().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetPosition {
    return new EventSetPosition().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetPosition {
    return new EventSetPosition().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetPosition | PlainMessage<EventSetPosition> | undefined, b: EventSetPosition | PlainMessage<EventSetPosition> | undefined): boolean {
    return proto3.util.equals(EventSetPosition, a, b);
  }
}

