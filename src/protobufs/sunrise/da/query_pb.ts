// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file sunrise/da/query.proto (package sunrise.da, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { PublishedData } from "./published_data_pb.js";

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message sunrise.da.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.da.QueryParamsRequest";
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
 * @generated from message sunrise.da.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: sunrise.da.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.da.QueryParamsResponse";
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
 * QueryPublishedDataRequest is request type for the Query/PublishedData RPC
 * method.
 *
 * @generated from message sunrise.da.QueryPublishedDataRequest
 */
export class QueryPublishedDataRequest extends Message<QueryPublishedDataRequest> {
  /**
   * @generated from field: string metadata_uri = 1;
   */
  metadataUri = "";

  constructor(data?: PartialMessage<QueryPublishedDataRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.da.QueryPublishedDataRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metadata_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPublishedDataRequest {
    return new QueryPublishedDataRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPublishedDataRequest {
    return new QueryPublishedDataRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPublishedDataRequest {
    return new QueryPublishedDataRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPublishedDataRequest | PlainMessage<QueryPublishedDataRequest> | undefined, b: QueryPublishedDataRequest | PlainMessage<QueryPublishedDataRequest> | undefined): boolean {
    return proto3.util.equals(QueryPublishedDataRequest, a, b);
  }
}

/**
 * QueryPublishedDataResponse is response type for the Query/PublishedData RPC
 * method.
 *
 * @generated from message sunrise.da.QueryPublishedDataResponse
 */
export class QueryPublishedDataResponse extends Message<QueryPublishedDataResponse> {
  /**
   * @generated from field: sunrise.da.PublishedData data = 1;
   */
  data?: PublishedData;

  constructor(data?: PartialMessage<QueryPublishedDataResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.da.QueryPublishedDataResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "message", T: PublishedData },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPublishedDataResponse {
    return new QueryPublishedDataResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPublishedDataResponse {
    return new QueryPublishedDataResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPublishedDataResponse {
    return new QueryPublishedDataResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPublishedDataResponse | PlainMessage<QueryPublishedDataResponse> | undefined, b: QueryPublishedDataResponse | PlainMessage<QueryPublishedDataResponse> | undefined): boolean {
    return proto3.util.equals(QueryPublishedDataResponse, a, b);
  }
}

/**
 * QueryAllPublishedDataRequest is request type for the
 * Query/AllPublishedData RPC method.
 *
 * @generated from message sunrise.da.QueryAllPublishedDataRequest
 */
export class QueryAllPublishedDataRequest extends Message<QueryAllPublishedDataRequest> {
  constructor(data?: PartialMessage<QueryAllPublishedDataRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.da.QueryAllPublishedDataRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllPublishedDataRequest {
    return new QueryAllPublishedDataRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllPublishedDataRequest {
    return new QueryAllPublishedDataRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllPublishedDataRequest {
    return new QueryAllPublishedDataRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllPublishedDataRequest | PlainMessage<QueryAllPublishedDataRequest> | undefined, b: QueryAllPublishedDataRequest | PlainMessage<QueryAllPublishedDataRequest> | undefined): boolean {
    return proto3.util.equals(QueryAllPublishedDataRequest, a, b);
  }
}

/**
 * QueryAllPublishedDataResponse is response type for the
 * Query/AllPublishedData RPC method.
 *
 * @generated from message sunrise.da.QueryAllPublishedDataResponse
 */
export class QueryAllPublishedDataResponse extends Message<QueryAllPublishedDataResponse> {
  /**
   * @generated from field: repeated sunrise.da.PublishedData data = 1;
   */
  data: PublishedData[] = [];

  constructor(data?: PartialMessage<QueryAllPublishedDataResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.da.QueryAllPublishedDataResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "message", T: PublishedData, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllPublishedDataResponse {
    return new QueryAllPublishedDataResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllPublishedDataResponse {
    return new QueryAllPublishedDataResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllPublishedDataResponse {
    return new QueryAllPublishedDataResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllPublishedDataResponse | PlainMessage<QueryAllPublishedDataResponse> | undefined, b: QueryAllPublishedDataResponse | PlainMessage<QueryAllPublishedDataResponse> | undefined): boolean {
    return proto3.util.equals(QueryAllPublishedDataResponse, a, b);
  }
}

/**
 * QueryZkpProofThresholdRequest is request type for the
 * Query/ZkpProofThreshold RPC method.
 *
 * @generated from message sunrise.da.QueryZkpProofThresholdRequest
 */
export class QueryZkpProofThresholdRequest extends Message<QueryZkpProofThresholdRequest> {
  /**
   * @generated from field: uint64 shard_count = 1;
   */
  shardCount = protoInt64.zero;

  constructor(data?: PartialMessage<QueryZkpProofThresholdRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.da.QueryZkpProofThresholdRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "shard_count", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryZkpProofThresholdRequest {
    return new QueryZkpProofThresholdRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryZkpProofThresholdRequest {
    return new QueryZkpProofThresholdRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryZkpProofThresholdRequest {
    return new QueryZkpProofThresholdRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryZkpProofThresholdRequest | PlainMessage<QueryZkpProofThresholdRequest> | undefined, b: QueryZkpProofThresholdRequest | PlainMessage<QueryZkpProofThresholdRequest> | undefined): boolean {
    return proto3.util.equals(QueryZkpProofThresholdRequest, a, b);
  }
}

/**
 * QueryZkpProofThresholdResponse is response type for the
 * Query/ZkpProofThreshold RPC method.
 *
 * @generated from message sunrise.da.QueryZkpProofThresholdResponse
 */
export class QueryZkpProofThresholdResponse extends Message<QueryZkpProofThresholdResponse> {
  /**
   * @generated from field: uint64 threshold = 2;
   */
  threshold = protoInt64.zero;

  constructor(data?: PartialMessage<QueryZkpProofThresholdResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.da.QueryZkpProofThresholdResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "threshold", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryZkpProofThresholdResponse {
    return new QueryZkpProofThresholdResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryZkpProofThresholdResponse {
    return new QueryZkpProofThresholdResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryZkpProofThresholdResponse {
    return new QueryZkpProofThresholdResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryZkpProofThresholdResponse | PlainMessage<QueryZkpProofThresholdResponse> | undefined, b: QueryZkpProofThresholdResponse | PlainMessage<QueryZkpProofThresholdResponse> | undefined): boolean {
    return proto3.util.equals(QueryZkpProofThresholdResponse, a, b);
  }
}

