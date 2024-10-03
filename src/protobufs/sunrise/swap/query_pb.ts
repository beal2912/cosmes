// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file sunrise/swap/query.proto (package sunrise.swap, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { IncomingInFlightPacket, OutgoingInFlightPacket } from "./in_flight_packet_pb.js";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination_pb.js";
import { Route, RouteResult } from "./route_pb.js";

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message sunrise.swap.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.swap.QueryParamsRequest";
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
 * @generated from message sunrise.swap.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: sunrise.swap.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.swap.QueryParamsResponse";
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
 * @generated from message sunrise.swap.QueryIncomingInFlightPacketRequest
 */
export class QueryIncomingInFlightPacketRequest extends Message<QueryIncomingInFlightPacketRequest> {
  /**
   * @generated from field: string src_port_id = 1;
   */
  srcPortId = "";

  /**
   * @generated from field: string src_channel_id = 2;
   */
  srcChannelId = "";

  /**
   * @generated from field: uint64 sequence = 3;
   */
  sequence = protoInt64.zero;

  constructor(data?: PartialMessage<QueryIncomingInFlightPacketRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.swap.QueryIncomingInFlightPacketRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "src_port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "src_channel_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryIncomingInFlightPacketRequest {
    return new QueryIncomingInFlightPacketRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryIncomingInFlightPacketRequest {
    return new QueryIncomingInFlightPacketRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryIncomingInFlightPacketRequest {
    return new QueryIncomingInFlightPacketRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryIncomingInFlightPacketRequest | PlainMessage<QueryIncomingInFlightPacketRequest> | undefined, b: QueryIncomingInFlightPacketRequest | PlainMessage<QueryIncomingInFlightPacketRequest> | undefined): boolean {
    return proto3.util.equals(QueryIncomingInFlightPacketRequest, a, b);
  }
}

/**
 * @generated from message sunrise.swap.QueryIncomingInFlightPacketResponse
 */
export class QueryIncomingInFlightPacketResponse extends Message<QueryIncomingInFlightPacketResponse> {
  /**
   * @generated from field: sunrise.swap.IncomingInFlightPacket packet = 1;
   */
  packet?: IncomingInFlightPacket;

  constructor(data?: PartialMessage<QueryIncomingInFlightPacketResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.swap.QueryIncomingInFlightPacketResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "packet", kind: "message", T: IncomingInFlightPacket },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryIncomingInFlightPacketResponse {
    return new QueryIncomingInFlightPacketResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryIncomingInFlightPacketResponse {
    return new QueryIncomingInFlightPacketResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryIncomingInFlightPacketResponse {
    return new QueryIncomingInFlightPacketResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryIncomingInFlightPacketResponse | PlainMessage<QueryIncomingInFlightPacketResponse> | undefined, b: QueryIncomingInFlightPacketResponse | PlainMessage<QueryIncomingInFlightPacketResponse> | undefined): boolean {
    return proto3.util.equals(QueryIncomingInFlightPacketResponse, a, b);
  }
}

/**
 * @generated from message sunrise.swap.QueryIncomingInFlightPacketsRequest
 */
export class QueryIncomingInFlightPacketsRequest extends Message<QueryIncomingInFlightPacketsRequest> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryIncomingInFlightPacketsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.swap.QueryIncomingInFlightPacketsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryIncomingInFlightPacketsRequest {
    return new QueryIncomingInFlightPacketsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryIncomingInFlightPacketsRequest {
    return new QueryIncomingInFlightPacketsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryIncomingInFlightPacketsRequest {
    return new QueryIncomingInFlightPacketsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryIncomingInFlightPacketsRequest | PlainMessage<QueryIncomingInFlightPacketsRequest> | undefined, b: QueryIncomingInFlightPacketsRequest | PlainMessage<QueryIncomingInFlightPacketsRequest> | undefined): boolean {
    return proto3.util.equals(QueryIncomingInFlightPacketsRequest, a, b);
  }
}

/**
 * @generated from message sunrise.swap.QueryIncomingInFlightPacketsResponse
 */
export class QueryIncomingInFlightPacketsResponse extends Message<QueryIncomingInFlightPacketsResponse> {
  /**
   * @generated from field: repeated sunrise.swap.IncomingInFlightPacket packets = 1;
   */
  packets: IncomingInFlightPacket[] = [];

  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryIncomingInFlightPacketsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.swap.QueryIncomingInFlightPacketsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "packets", kind: "message", T: IncomingInFlightPacket, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryIncomingInFlightPacketsResponse {
    return new QueryIncomingInFlightPacketsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryIncomingInFlightPacketsResponse {
    return new QueryIncomingInFlightPacketsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryIncomingInFlightPacketsResponse {
    return new QueryIncomingInFlightPacketsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryIncomingInFlightPacketsResponse | PlainMessage<QueryIncomingInFlightPacketsResponse> | undefined, b: QueryIncomingInFlightPacketsResponse | PlainMessage<QueryIncomingInFlightPacketsResponse> | undefined): boolean {
    return proto3.util.equals(QueryIncomingInFlightPacketsResponse, a, b);
  }
}

/**
 * @generated from message sunrise.swap.QueryOutgoingInFlightPacketRequest
 */
export class QueryOutgoingInFlightPacketRequest extends Message<QueryOutgoingInFlightPacketRequest> {
  /**
   * @generated from field: string src_port_id = 1;
   */
  srcPortId = "";

  /**
   * @generated from field: string src_channel_id = 2;
   */
  srcChannelId = "";

  /**
   * @generated from field: uint64 sequence = 3;
   */
  sequence = protoInt64.zero;

  constructor(data?: PartialMessage<QueryOutgoingInFlightPacketRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.swap.QueryOutgoingInFlightPacketRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "src_port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "src_channel_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOutgoingInFlightPacketRequest {
    return new QueryOutgoingInFlightPacketRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOutgoingInFlightPacketRequest {
    return new QueryOutgoingInFlightPacketRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOutgoingInFlightPacketRequest {
    return new QueryOutgoingInFlightPacketRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryOutgoingInFlightPacketRequest | PlainMessage<QueryOutgoingInFlightPacketRequest> | undefined, b: QueryOutgoingInFlightPacketRequest | PlainMessage<QueryOutgoingInFlightPacketRequest> | undefined): boolean {
    return proto3.util.equals(QueryOutgoingInFlightPacketRequest, a, b);
  }
}

/**
 * @generated from message sunrise.swap.QueryOutgoingInFlightPacketResponse
 */
export class QueryOutgoingInFlightPacketResponse extends Message<QueryOutgoingInFlightPacketResponse> {
  /**
   * @generated from field: sunrise.swap.OutgoingInFlightPacket packet = 1;
   */
  packet?: OutgoingInFlightPacket;

  constructor(data?: PartialMessage<QueryOutgoingInFlightPacketResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.swap.QueryOutgoingInFlightPacketResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "packet", kind: "message", T: OutgoingInFlightPacket },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOutgoingInFlightPacketResponse {
    return new QueryOutgoingInFlightPacketResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOutgoingInFlightPacketResponse {
    return new QueryOutgoingInFlightPacketResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOutgoingInFlightPacketResponse {
    return new QueryOutgoingInFlightPacketResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryOutgoingInFlightPacketResponse | PlainMessage<QueryOutgoingInFlightPacketResponse> | undefined, b: QueryOutgoingInFlightPacketResponse | PlainMessage<QueryOutgoingInFlightPacketResponse> | undefined): boolean {
    return proto3.util.equals(QueryOutgoingInFlightPacketResponse, a, b);
  }
}

/**
 * @generated from message sunrise.swap.QueryOutgoingInFlightPacketsRequest
 */
export class QueryOutgoingInFlightPacketsRequest extends Message<QueryOutgoingInFlightPacketsRequest> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryOutgoingInFlightPacketsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.swap.QueryOutgoingInFlightPacketsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOutgoingInFlightPacketsRequest {
    return new QueryOutgoingInFlightPacketsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOutgoingInFlightPacketsRequest {
    return new QueryOutgoingInFlightPacketsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOutgoingInFlightPacketsRequest {
    return new QueryOutgoingInFlightPacketsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryOutgoingInFlightPacketsRequest | PlainMessage<QueryOutgoingInFlightPacketsRequest> | undefined, b: QueryOutgoingInFlightPacketsRequest | PlainMessage<QueryOutgoingInFlightPacketsRequest> | undefined): boolean {
    return proto3.util.equals(QueryOutgoingInFlightPacketsRequest, a, b);
  }
}

/**
 * @generated from message sunrise.swap.QueryOutgoingInFlightPacketsResponse
 */
export class QueryOutgoingInFlightPacketsResponse extends Message<QueryOutgoingInFlightPacketsResponse> {
  /**
   * @generated from field: repeated sunrise.swap.OutgoingInFlightPacket packets = 1;
   */
  packets: OutgoingInFlightPacket[] = [];

  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryOutgoingInFlightPacketsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.swap.QueryOutgoingInFlightPacketsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "packets", kind: "message", T: OutgoingInFlightPacket, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOutgoingInFlightPacketsResponse {
    return new QueryOutgoingInFlightPacketsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOutgoingInFlightPacketsResponse {
    return new QueryOutgoingInFlightPacketsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOutgoingInFlightPacketsResponse {
    return new QueryOutgoingInFlightPacketsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryOutgoingInFlightPacketsResponse | PlainMessage<QueryOutgoingInFlightPacketsResponse> | undefined, b: QueryOutgoingInFlightPacketsResponse | PlainMessage<QueryOutgoingInFlightPacketsResponse> | undefined): boolean {
    return proto3.util.equals(QueryOutgoingInFlightPacketsResponse, a, b);
  }
}

/**
 * @generated from message sunrise.swap.QueryCalculationSwapExactAmountInRequest
 */
export class QueryCalculationSwapExactAmountInRequest extends Message<QueryCalculationSwapExactAmountInRequest> {
  /**
   * @generated from field: bool has_interface_fee = 1;
   */
  hasInterfaceFee = false;

  /**
   * @generated from field: sunrise.swap.Route route = 2;
   */
  route?: Route;

  /**
   * @generated from field: string amount_in = 3;
   */
  amountIn = "";

  constructor(data?: PartialMessage<QueryCalculationSwapExactAmountInRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.swap.QueryCalculationSwapExactAmountInRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "has_interface_fee", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "route", kind: "message", T: Route },
    { no: 3, name: "amount_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCalculationSwapExactAmountInRequest {
    return new QueryCalculationSwapExactAmountInRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCalculationSwapExactAmountInRequest {
    return new QueryCalculationSwapExactAmountInRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCalculationSwapExactAmountInRequest {
    return new QueryCalculationSwapExactAmountInRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCalculationSwapExactAmountInRequest | PlainMessage<QueryCalculationSwapExactAmountInRequest> | undefined, b: QueryCalculationSwapExactAmountInRequest | PlainMessage<QueryCalculationSwapExactAmountInRequest> | undefined): boolean {
    return proto3.util.equals(QueryCalculationSwapExactAmountInRequest, a, b);
  }
}

/**
 * @generated from message sunrise.swap.QueryCalculationSwapExactAmountInResponse
 */
export class QueryCalculationSwapExactAmountInResponse extends Message<QueryCalculationSwapExactAmountInResponse> {
  /**
   * @generated from field: sunrise.swap.RouteResult result = 1;
   */
  result?: RouteResult;

  /**
   * @generated from field: string interface_provider_fee = 2;
   */
  interfaceProviderFee = "";

  /**
   * @generated from field: string amount_out = 3;
   */
  amountOut = "";

  constructor(data?: PartialMessage<QueryCalculationSwapExactAmountInResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.swap.QueryCalculationSwapExactAmountInResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: RouteResult },
    { no: 2, name: "interface_provider_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount_out", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCalculationSwapExactAmountInResponse {
    return new QueryCalculationSwapExactAmountInResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCalculationSwapExactAmountInResponse {
    return new QueryCalculationSwapExactAmountInResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCalculationSwapExactAmountInResponse {
    return new QueryCalculationSwapExactAmountInResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCalculationSwapExactAmountInResponse | PlainMessage<QueryCalculationSwapExactAmountInResponse> | undefined, b: QueryCalculationSwapExactAmountInResponse | PlainMessage<QueryCalculationSwapExactAmountInResponse> | undefined): boolean {
    return proto3.util.equals(QueryCalculationSwapExactAmountInResponse, a, b);
  }
}

/**
 * @generated from message sunrise.swap.QueryCalculationSwapExactAmountOutRequest
 */
export class QueryCalculationSwapExactAmountOutRequest extends Message<QueryCalculationSwapExactAmountOutRequest> {
  /**
   * @generated from field: bool has_interface_fee = 1;
   */
  hasInterfaceFee = false;

  /**
   * @generated from field: sunrise.swap.Route route = 2;
   */
  route?: Route;

  /**
   * @generated from field: string amount_out = 3;
   */
  amountOut = "";

  constructor(data?: PartialMessage<QueryCalculationSwapExactAmountOutRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.swap.QueryCalculationSwapExactAmountOutRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "has_interface_fee", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "route", kind: "message", T: Route },
    { no: 3, name: "amount_out", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCalculationSwapExactAmountOutRequest {
    return new QueryCalculationSwapExactAmountOutRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCalculationSwapExactAmountOutRequest {
    return new QueryCalculationSwapExactAmountOutRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCalculationSwapExactAmountOutRequest {
    return new QueryCalculationSwapExactAmountOutRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCalculationSwapExactAmountOutRequest | PlainMessage<QueryCalculationSwapExactAmountOutRequest> | undefined, b: QueryCalculationSwapExactAmountOutRequest | PlainMessage<QueryCalculationSwapExactAmountOutRequest> | undefined): boolean {
    return proto3.util.equals(QueryCalculationSwapExactAmountOutRequest, a, b);
  }
}

/**
 * @generated from message sunrise.swap.QueryCalculationSwapExactAmountOutResponse
 */
export class QueryCalculationSwapExactAmountOutResponse extends Message<QueryCalculationSwapExactAmountOutResponse> {
  /**
   * @generated from field: sunrise.swap.RouteResult result = 1;
   */
  result?: RouteResult;

  /**
   * @generated from field: string interface_provider_fee = 2;
   */
  interfaceProviderFee = "";

  /**
   * @generated from field: string amount_in = 3;
   */
  amountIn = "";

  constructor(data?: PartialMessage<QueryCalculationSwapExactAmountOutResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.swap.QueryCalculationSwapExactAmountOutResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: RouteResult },
    { no: 2, name: "interface_provider_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCalculationSwapExactAmountOutResponse {
    return new QueryCalculationSwapExactAmountOutResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCalculationSwapExactAmountOutResponse {
    return new QueryCalculationSwapExactAmountOutResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCalculationSwapExactAmountOutResponse {
    return new QueryCalculationSwapExactAmountOutResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCalculationSwapExactAmountOutResponse | PlainMessage<QueryCalculationSwapExactAmountOutResponse> | undefined, b: QueryCalculationSwapExactAmountOutResponse | PlainMessage<QueryCalculationSwapExactAmountOutResponse> | undefined): boolean {
    return proto3.util.equals(QueryCalculationSwapExactAmountOutResponse, a, b);
  }
}

