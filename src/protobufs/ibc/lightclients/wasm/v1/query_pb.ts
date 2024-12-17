// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ibc/lightclients/wasm/v1/query.proto (package ibc.lightclients.wasm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination_pb.js";

/**
 * QueryChecksumsRequest is the request type for the Query/Checksums RPC method.
 *
 * @generated from message ibc.lightclients.wasm.v1.QueryChecksumsRequest
 */
export class QueryChecksumsRequest extends Message<QueryChecksumsRequest> {
  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryChecksumsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.lightclients.wasm.v1.QueryChecksumsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryChecksumsRequest {
    return new QueryChecksumsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryChecksumsRequest {
    return new QueryChecksumsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryChecksumsRequest {
    return new QueryChecksumsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryChecksumsRequest | PlainMessage<QueryChecksumsRequest> | undefined, b: QueryChecksumsRequest | PlainMessage<QueryChecksumsRequest> | undefined): boolean {
    return proto3.util.equals(QueryChecksumsRequest, a, b);
  }
}

/**
 * QueryChecksumsResponse is the response type for the Query/Checksums RPC method.
 *
 * @generated from message ibc.lightclients.wasm.v1.QueryChecksumsResponse
 */
export class QueryChecksumsResponse extends Message<QueryChecksumsResponse> {
  /**
   * checksums is a list of the hex encoded checksums of all wasm codes stored.
   *
   * @generated from field: repeated string checksums = 1;
   */
  checksums: string[] = [];

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryChecksumsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.lightclients.wasm.v1.QueryChecksumsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "checksums", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryChecksumsResponse {
    return new QueryChecksumsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryChecksumsResponse {
    return new QueryChecksumsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryChecksumsResponse {
    return new QueryChecksumsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryChecksumsResponse | PlainMessage<QueryChecksumsResponse> | undefined, b: QueryChecksumsResponse | PlainMessage<QueryChecksumsResponse> | undefined): boolean {
    return proto3.util.equals(QueryChecksumsResponse, a, b);
  }
}

/**
 * QueryCodeRequest is the request type for the Query/Code RPC method.
 *
 * @generated from message ibc.lightclients.wasm.v1.QueryCodeRequest
 */
export class QueryCodeRequest extends Message<QueryCodeRequest> {
  /**
   * checksum is a hex encoded string of the code stored.
   *
   * @generated from field: string checksum = 1;
   */
  checksum = "";

  constructor(data?: PartialMessage<QueryCodeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.lightclients.wasm.v1.QueryCodeRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "checksum", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCodeRequest {
    return new QueryCodeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCodeRequest {
    return new QueryCodeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCodeRequest {
    return new QueryCodeRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCodeRequest | PlainMessage<QueryCodeRequest> | undefined, b: QueryCodeRequest | PlainMessage<QueryCodeRequest> | undefined): boolean {
    return proto3.util.equals(QueryCodeRequest, a, b);
  }
}

/**
 * QueryCodeResponse is the response type for the Query/Code RPC method.
 *
 * @generated from message ibc.lightclients.wasm.v1.QueryCodeResponse
 */
export class QueryCodeResponse extends Message<QueryCodeResponse> {
  /**
   * @generated from field: bytes data = 1;
   */
  data = new Uint8Array(0);

  constructor(data?: PartialMessage<QueryCodeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.lightclients.wasm.v1.QueryCodeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCodeResponse {
    return new QueryCodeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCodeResponse {
    return new QueryCodeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCodeResponse {
    return new QueryCodeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCodeResponse | PlainMessage<QueryCodeResponse> | undefined, b: QueryCodeResponse | PlainMessage<QueryCodeResponse> | undefined): boolean {
    return proto3.util.equals(QueryCodeResponse, a, b);
  }
}

