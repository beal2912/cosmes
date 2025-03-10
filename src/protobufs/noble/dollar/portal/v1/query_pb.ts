// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file noble/dollar/portal/v1/query.proto (package noble.dollar.portal.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Peer } from "./portal_pb.js";

/**
 * @generated from message noble.dollar.portal.v1.QueryOwner
 */
export class QueryOwner extends Message<QueryOwner> {
  constructor(data?: PartialMessage<QueryOwner>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "noble.dollar.portal.v1.QueryOwner";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOwner {
    return new QueryOwner().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOwner {
    return new QueryOwner().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOwner {
    return new QueryOwner().fromJsonString(jsonString, options);
  }

  static equals(a: QueryOwner | PlainMessage<QueryOwner> | undefined, b: QueryOwner | PlainMessage<QueryOwner> | undefined): boolean {
    return proto3.util.equals(QueryOwner, a, b);
  }
}

/**
 * @generated from message noble.dollar.portal.v1.QueryOwnerResponse
 */
export class QueryOwnerResponse extends Message<QueryOwnerResponse> {
  /**
   * @generated from field: string owner = 1;
   */
  owner = "";

  constructor(data?: PartialMessage<QueryOwnerResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "noble.dollar.portal.v1.QueryOwnerResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOwnerResponse {
    return new QueryOwnerResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOwnerResponse {
    return new QueryOwnerResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOwnerResponse {
    return new QueryOwnerResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryOwnerResponse | PlainMessage<QueryOwnerResponse> | undefined, b: QueryOwnerResponse | PlainMessage<QueryOwnerResponse> | undefined): boolean {
    return proto3.util.equals(QueryOwnerResponse, a, b);
  }
}

/**
 * @generated from message noble.dollar.portal.v1.QueryPaused
 */
export class QueryPaused extends Message<QueryPaused> {
  constructor(data?: PartialMessage<QueryPaused>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "noble.dollar.portal.v1.QueryPaused";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPaused {
    return new QueryPaused().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPaused {
    return new QueryPaused().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPaused {
    return new QueryPaused().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPaused | PlainMessage<QueryPaused> | undefined, b: QueryPaused | PlainMessage<QueryPaused> | undefined): boolean {
    return proto3.util.equals(QueryPaused, a, b);
  }
}

/**
 * @generated from message noble.dollar.portal.v1.QueryPausedResponse
 */
export class QueryPausedResponse extends Message<QueryPausedResponse> {
  /**
   * @generated from field: bool paused = 1;
   */
  paused = false;

  constructor(data?: PartialMessage<QueryPausedResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "noble.dollar.portal.v1.QueryPausedResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "paused", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPausedResponse {
    return new QueryPausedResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPausedResponse {
    return new QueryPausedResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPausedResponse {
    return new QueryPausedResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPausedResponse | PlainMessage<QueryPausedResponse> | undefined, b: QueryPausedResponse | PlainMessage<QueryPausedResponse> | undefined): boolean {
    return proto3.util.equals(QueryPausedResponse, a, b);
  }
}

/**
 * @generated from message noble.dollar.portal.v1.QueryPeers
 */
export class QueryPeers extends Message<QueryPeers> {
  constructor(data?: PartialMessage<QueryPeers>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "noble.dollar.portal.v1.QueryPeers";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPeers {
    return new QueryPeers().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPeers {
    return new QueryPeers().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPeers {
    return new QueryPeers().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPeers | PlainMessage<QueryPeers> | undefined, b: QueryPeers | PlainMessage<QueryPeers> | undefined): boolean {
    return proto3.util.equals(QueryPeers, a, b);
  }
}

/**
 * @generated from message noble.dollar.portal.v1.QueryPeersResponse
 */
export class QueryPeersResponse extends Message<QueryPeersResponse> {
  /**
   * @generated from field: map<uint32, noble.dollar.portal.v1.Peer> peers = 1;
   */
  peers: { [key: number]: Peer } = {};

  constructor(data?: PartialMessage<QueryPeersResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "noble.dollar.portal.v1.QueryPeersResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "peers", kind: "map", K: 13 /* ScalarType.UINT32 */, V: {kind: "message", T: Peer} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPeersResponse {
    return new QueryPeersResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPeersResponse {
    return new QueryPeersResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPeersResponse {
    return new QueryPeersResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPeersResponse | PlainMessage<QueryPeersResponse> | undefined, b: QueryPeersResponse | PlainMessage<QueryPeersResponse> | undefined): boolean {
    return proto3.util.equals(QueryPeersResponse, a, b);
  }
}

/**
 * @generated from message noble.dollar.portal.v1.QueryDestinationTokens
 */
export class QueryDestinationTokens extends Message<QueryDestinationTokens> {
  /**
   * @generated from field: uint32 chain_id = 1;
   */
  chainId = 0;

  constructor(data?: PartialMessage<QueryDestinationTokens>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "noble.dollar.portal.v1.QueryDestinationTokens";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chain_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDestinationTokens {
    return new QueryDestinationTokens().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDestinationTokens {
    return new QueryDestinationTokens().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDestinationTokens {
    return new QueryDestinationTokens().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDestinationTokens | PlainMessage<QueryDestinationTokens> | undefined, b: QueryDestinationTokens | PlainMessage<QueryDestinationTokens> | undefined): boolean {
    return proto3.util.equals(QueryDestinationTokens, a, b);
  }
}

/**
 * @generated from message noble.dollar.portal.v1.QueryDestinationTokensResponse
 */
export class QueryDestinationTokensResponse extends Message<QueryDestinationTokensResponse> {
  /**
   * @generated from field: repeated bytes destination_tokens = 2;
   */
  destinationTokens: Uint8Array[] = [];

  constructor(data?: PartialMessage<QueryDestinationTokensResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "noble.dollar.portal.v1.QueryDestinationTokensResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "destination_tokens", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDestinationTokensResponse {
    return new QueryDestinationTokensResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDestinationTokensResponse {
    return new QueryDestinationTokensResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDestinationTokensResponse {
    return new QueryDestinationTokensResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDestinationTokensResponse | PlainMessage<QueryDestinationTokensResponse> | undefined, b: QueryDestinationTokensResponse | PlainMessage<QueryDestinationTokensResponse> | undefined): boolean {
    return proto3.util.equals(QueryDestinationTokensResponse, a, b);
  }
}

/**
 * @generated from message noble.dollar.portal.v1.QueryNonce
 */
export class QueryNonce extends Message<QueryNonce> {
  constructor(data?: PartialMessage<QueryNonce>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "noble.dollar.portal.v1.QueryNonce";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNonce {
    return new QueryNonce().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNonce {
    return new QueryNonce().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNonce {
    return new QueryNonce().fromJsonString(jsonString, options);
  }

  static equals(a: QueryNonce | PlainMessage<QueryNonce> | undefined, b: QueryNonce | PlainMessage<QueryNonce> | undefined): boolean {
    return proto3.util.equals(QueryNonce, a, b);
  }
}

/**
 * @generated from message noble.dollar.portal.v1.QueryNonceResponse
 */
export class QueryNonceResponse extends Message<QueryNonceResponse> {
  /**
   * @generated from field: uint32 nonce = 1;
   */
  nonce = 0;

  constructor(data?: PartialMessage<QueryNonceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "noble.dollar.portal.v1.QueryNonceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "nonce", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNonceResponse {
    return new QueryNonceResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNonceResponse {
    return new QueryNonceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNonceResponse {
    return new QueryNonceResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryNonceResponse | PlainMessage<QueryNonceResponse> | undefined, b: QueryNonceResponse | PlainMessage<QueryNonceResponse> | undefined): boolean {
    return proto3.util.equals(QueryNonceResponse, a, b);
  }
}

