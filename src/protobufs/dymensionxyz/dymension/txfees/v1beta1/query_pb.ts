// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file dymensionxyz/dymension/txfees/v1beta1/query.proto (package dymensionxyz.dymension.txfees.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./genesis_pb.js";
import { FeeToken } from "./feetoken_pb.js";

/**
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryParamsRequest";
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
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * @generated from field: dymensionxyz.dymension.txfees.v1beta1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryParamsResponse";
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
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryFeeTokensRequest
 */
export class QueryFeeTokensRequest extends Message<QueryFeeTokensRequest> {
  constructor(data?: PartialMessage<QueryFeeTokensRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryFeeTokensRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeeTokensRequest {
    return new QueryFeeTokensRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeeTokensRequest {
    return new QueryFeeTokensRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeeTokensRequest {
    return new QueryFeeTokensRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryFeeTokensRequest | PlainMessage<QueryFeeTokensRequest> | undefined, b: QueryFeeTokensRequest | PlainMessage<QueryFeeTokensRequest> | undefined): boolean {
    return proto3.util.equals(QueryFeeTokensRequest, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryFeeTokensResponse
 */
export class QueryFeeTokensResponse extends Message<QueryFeeTokensResponse> {
  /**
   * @generated from field: repeated dymensionxyz.dymension.txfees.v1beta1.FeeToken fee_tokens = 1;
   */
  feeTokens: FeeToken[] = [];

  constructor(data?: PartialMessage<QueryFeeTokensResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryFeeTokensResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "fee_tokens", kind: "message", T: FeeToken, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeeTokensResponse {
    return new QueryFeeTokensResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeeTokensResponse {
    return new QueryFeeTokensResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeeTokensResponse {
    return new QueryFeeTokensResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryFeeTokensResponse | PlainMessage<QueryFeeTokensResponse> | undefined, b: QueryFeeTokensResponse | PlainMessage<QueryFeeTokensResponse> | undefined): boolean {
    return proto3.util.equals(QueryFeeTokensResponse, a, b);
  }
}

/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 *
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryDenomSpotPriceRequest
 */
export class QueryDenomSpotPriceRequest extends Message<QueryDenomSpotPriceRequest> {
  /**
   * @generated from field: string denom = 1;
   */
  denom = "";

  constructor(data?: PartialMessage<QueryDenomSpotPriceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryDenomSpotPriceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomSpotPriceRequest {
    return new QueryDenomSpotPriceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomSpotPriceRequest {
    return new QueryDenomSpotPriceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomSpotPriceRequest {
    return new QueryDenomSpotPriceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDenomSpotPriceRequest | PlainMessage<QueryDenomSpotPriceRequest> | undefined, b: QueryDenomSpotPriceRequest | PlainMessage<QueryDenomSpotPriceRequest> | undefined): boolean {
    return proto3.util.equals(QueryDenomSpotPriceRequest, a, b);
  }
}

/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 *
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryDenomSpotPriceResponse
 */
export class QueryDenomSpotPriceResponse extends Message<QueryDenomSpotPriceResponse> {
  /**
   * @generated from field: uint64 poolID = 1;
   */
  poolID = protoInt64.zero;

  /**
   * @generated from field: string spot_price = 2;
   */
  spotPrice = "";

  constructor(data?: PartialMessage<QueryDenomSpotPriceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryDenomSpotPriceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "poolID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "spot_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomSpotPriceResponse {
    return new QueryDenomSpotPriceResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomSpotPriceResponse {
    return new QueryDenomSpotPriceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomSpotPriceResponse {
    return new QueryDenomSpotPriceResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDenomSpotPriceResponse | PlainMessage<QueryDenomSpotPriceResponse> | undefined, b: QueryDenomSpotPriceResponse | PlainMessage<QueryDenomSpotPriceResponse> | undefined): boolean {
    return proto3.util.equals(QueryDenomSpotPriceResponse, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryDenomPoolIdRequest
 */
export class QueryDenomPoolIdRequest extends Message<QueryDenomPoolIdRequest> {
  /**
   * @generated from field: string denom = 1;
   */
  denom = "";

  constructor(data?: PartialMessage<QueryDenomPoolIdRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryDenomPoolIdRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomPoolIdRequest {
    return new QueryDenomPoolIdRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomPoolIdRequest {
    return new QueryDenomPoolIdRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomPoolIdRequest {
    return new QueryDenomPoolIdRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDenomPoolIdRequest | PlainMessage<QueryDenomPoolIdRequest> | undefined, b: QueryDenomPoolIdRequest | PlainMessage<QueryDenomPoolIdRequest> | undefined): boolean {
    return proto3.util.equals(QueryDenomPoolIdRequest, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryDenomPoolIdResponse
 */
export class QueryDenomPoolIdResponse extends Message<QueryDenomPoolIdResponse> {
  /**
   * @generated from field: uint64 poolID = 1;
   */
  poolID = protoInt64.zero;

  constructor(data?: PartialMessage<QueryDenomPoolIdResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryDenomPoolIdResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "poolID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomPoolIdResponse {
    return new QueryDenomPoolIdResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomPoolIdResponse {
    return new QueryDenomPoolIdResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomPoolIdResponse {
    return new QueryDenomPoolIdResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDenomPoolIdResponse | PlainMessage<QueryDenomPoolIdResponse> | undefined, b: QueryDenomPoolIdResponse | PlainMessage<QueryDenomPoolIdResponse> | undefined): boolean {
    return proto3.util.equals(QueryDenomPoolIdResponse, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryBaseDenomRequest
 */
export class QueryBaseDenomRequest extends Message<QueryBaseDenomRequest> {
  constructor(data?: PartialMessage<QueryBaseDenomRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryBaseDenomRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBaseDenomRequest {
    return new QueryBaseDenomRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBaseDenomRequest {
    return new QueryBaseDenomRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBaseDenomRequest {
    return new QueryBaseDenomRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryBaseDenomRequest | PlainMessage<QueryBaseDenomRequest> | undefined, b: QueryBaseDenomRequest | PlainMessage<QueryBaseDenomRequest> | undefined): boolean {
    return proto3.util.equals(QueryBaseDenomRequest, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryBaseDenomResponse
 */
export class QueryBaseDenomResponse extends Message<QueryBaseDenomResponse> {
  /**
   * @generated from field: string base_denom = 1;
   */
  baseDenom = "";

  constructor(data?: PartialMessage<QueryBaseDenomResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryBaseDenomResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBaseDenomResponse {
    return new QueryBaseDenomResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBaseDenomResponse {
    return new QueryBaseDenomResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBaseDenomResponse {
    return new QueryBaseDenomResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryBaseDenomResponse | PlainMessage<QueryBaseDenomResponse> | undefined, b: QueryBaseDenomResponse | PlainMessage<QueryBaseDenomResponse> | undefined): boolean {
    return proto3.util.equals(QueryBaseDenomResponse, a, b);
  }
}

