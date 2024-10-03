// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/treasury/v1/query.proto (package pryzm.treasury.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Action } from "./action_pb.js";
import { FlowTrade } from "./flow_trade_pb.js";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination_pb.js";

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message pryzm.treasury.v1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.treasury.v1.QueryParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean {
    return proto3.util.equals(QueryParamsRequest, a, b);
  }
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message pryzm.treasury.v1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: pryzm.treasury.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.treasury.v1.QueryParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean {
    return proto3.util.equals(QueryParamsResponse, a, b);
  }
}

/**
 * @generated from message pryzm.treasury.v1.QueryGetActionRequest
 */
export class QueryGetActionRequest extends Message<QueryGetActionRequest> {
  constructor(data?: PartialMessage<QueryGetActionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.treasury.v1.QueryGetActionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetActionRequest {
    return new QueryGetActionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetActionRequest {
    return new QueryGetActionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetActionRequest {
    return new QueryGetActionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGetActionRequest | PlainMessage<QueryGetActionRequest> | undefined, b: QueryGetActionRequest | PlainMessage<QueryGetActionRequest> | undefined): boolean {
    return proto3.util.equals(QueryGetActionRequest, a, b);
  }
}

/**
 * @generated from message pryzm.treasury.v1.QueryGetActionResponse
 */
export class QueryGetActionResponse extends Message<QueryGetActionResponse> {
  /**
   * @generated from field: pryzm.treasury.v1.Action action = 1;
   */
  action?: Action;

  constructor(data?: PartialMessage<QueryGetActionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.treasury.v1.QueryGetActionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "action", kind: "message", T: Action },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetActionResponse {
    return new QueryGetActionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetActionResponse {
    return new QueryGetActionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetActionResponse {
    return new QueryGetActionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGetActionResponse | PlainMessage<QueryGetActionResponse> | undefined, b: QueryGetActionResponse | PlainMessage<QueryGetActionResponse> | undefined): boolean {
    return proto3.util.equals(QueryGetActionResponse, a, b);
  }
}

/**
 * @generated from message pryzm.treasury.v1.QueryGetFlowTradeRequest
 */
export class QueryGetFlowTradeRequest extends Message<QueryGetFlowTradeRequest> {
  /**
   * @generated from field: uint64 flow_id = 1;
   */
  flowId = protoInt64.zero;

  constructor(data?: PartialMessage<QueryGetFlowTradeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.treasury.v1.QueryGetFlowTradeRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "flow_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetFlowTradeRequest {
    return new QueryGetFlowTradeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetFlowTradeRequest {
    return new QueryGetFlowTradeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetFlowTradeRequest {
    return new QueryGetFlowTradeRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGetFlowTradeRequest | PlainMessage<QueryGetFlowTradeRequest> | undefined, b: QueryGetFlowTradeRequest | PlainMessage<QueryGetFlowTradeRequest> | undefined): boolean {
    return proto3.util.equals(QueryGetFlowTradeRequest, a, b);
  }
}

/**
 * @generated from message pryzm.treasury.v1.QueryGetFlowTradeResponse
 */
export class QueryGetFlowTradeResponse extends Message<QueryGetFlowTradeResponse> {
  /**
   * @generated from field: pryzm.treasury.v1.FlowTrade flow_trade = 1;
   */
  flowTrade?: FlowTrade;

  constructor(data?: PartialMessage<QueryGetFlowTradeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.treasury.v1.QueryGetFlowTradeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "flow_trade", kind: "message", T: FlowTrade },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetFlowTradeResponse {
    return new QueryGetFlowTradeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetFlowTradeResponse {
    return new QueryGetFlowTradeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetFlowTradeResponse {
    return new QueryGetFlowTradeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGetFlowTradeResponse | PlainMessage<QueryGetFlowTradeResponse> | undefined, b: QueryGetFlowTradeResponse | PlainMessage<QueryGetFlowTradeResponse> | undefined): boolean {
    return proto3.util.equals(QueryGetFlowTradeResponse, a, b);
  }
}

/**
 * @generated from message pryzm.treasury.v1.QueryAllFlowTradeRequest
 */
export class QueryAllFlowTradeRequest extends Message<QueryAllFlowTradeRequest> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryAllFlowTradeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.treasury.v1.QueryAllFlowTradeRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllFlowTradeRequest {
    return new QueryAllFlowTradeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllFlowTradeRequest {
    return new QueryAllFlowTradeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllFlowTradeRequest {
    return new QueryAllFlowTradeRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllFlowTradeRequest | PlainMessage<QueryAllFlowTradeRequest> | undefined, b: QueryAllFlowTradeRequest | PlainMessage<QueryAllFlowTradeRequest> | undefined): boolean {
    return proto3.util.equals(QueryAllFlowTradeRequest, a, b);
  }
}

/**
 * @generated from message pryzm.treasury.v1.QueryAllFlowTradeResponse
 */
export class QueryAllFlowTradeResponse extends Message<QueryAllFlowTradeResponse> {
  /**
   * @generated from field: repeated pryzm.treasury.v1.FlowTrade flow_trade = 1;
   */
  flowTrade: FlowTrade[] = [];

  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryAllFlowTradeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.treasury.v1.QueryAllFlowTradeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "flow_trade", kind: "message", T: FlowTrade, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllFlowTradeResponse {
    return new QueryAllFlowTradeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllFlowTradeResponse {
    return new QueryAllFlowTradeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllFlowTradeResponse {
    return new QueryAllFlowTradeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllFlowTradeResponse | PlainMessage<QueryAllFlowTradeResponse> | undefined, b: QueryAllFlowTradeResponse | PlainMessage<QueryAllFlowTradeResponse> | undefined): boolean {
    return proto3.util.equals(QueryAllFlowTradeResponse, a, b);
  }
}
