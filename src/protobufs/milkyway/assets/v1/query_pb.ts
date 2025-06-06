// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file milkyway/assets/v1/query.proto (package milkyway.assets.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination_pb.js";
import { Asset } from "./models_pb.js";

/**
 * QueryAssetsRequest is the request type for the Query/Assets RPC method.
 *
 * @generated from message milkyway.assets.v1.QueryAssetsRequest
 */
export class QueryAssetsRequest extends Message<QueryAssetsRequest> {
  /**
   * Ticker defines an optional filter parameter to query assets with the given
   * ticker.
   *
   * @generated from field: string ticker = 1;
   */
  ticker = "";

  /**
   * Pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryAssetsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "milkyway.assets.v1.QueryAssetsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ticker", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAssetsRequest {
    return new QueryAssetsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAssetsRequest {
    return new QueryAssetsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAssetsRequest {
    return new QueryAssetsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAssetsRequest | PlainMessage<QueryAssetsRequest> | undefined, b: QueryAssetsRequest | PlainMessage<QueryAssetsRequest> | undefined): boolean {
    return proto3.util.equals(QueryAssetsRequest, a, b);
  }
}

/**
 * QueryAssetsResponse is the response type for the Query/Assets RPC method.
 *
 * @generated from message milkyway.assets.v1.QueryAssetsResponse
 */
export class QueryAssetsResponse extends Message<QueryAssetsResponse> {
  /**
   * Assets represents all the assets registered.
   *
   * @generated from field: repeated milkyway.assets.v1.Asset assets = 1;
   */
  assets: Asset[] = [];

  /**
   * Pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryAssetsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "milkyway.assets.v1.QueryAssetsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "assets", kind: "message", T: Asset, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAssetsResponse {
    return new QueryAssetsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAssetsResponse {
    return new QueryAssetsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAssetsResponse {
    return new QueryAssetsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAssetsResponse | PlainMessage<QueryAssetsResponse> | undefined, b: QueryAssetsResponse | PlainMessage<QueryAssetsResponse> | undefined): boolean {
    return proto3.util.equals(QueryAssetsResponse, a, b);
  }
}

/**
 * QueryAssetRequest is the request type for the Query/Asset RPC method.
 *
 * @generated from message milkyway.assets.v1.QueryAssetRequest
 */
export class QueryAssetRequest extends Message<QueryAssetRequest> {
  /**
   * Denom is the token denomination for which the ticker is to be queried.
   *
   * @generated from field: string denom = 1;
   */
  denom = "";

  constructor(data?: PartialMessage<QueryAssetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "milkyway.assets.v1.QueryAssetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAssetRequest {
    return new QueryAssetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAssetRequest {
    return new QueryAssetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAssetRequest {
    return new QueryAssetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAssetRequest | PlainMessage<QueryAssetRequest> | undefined, b: QueryAssetRequest | PlainMessage<QueryAssetRequest> | undefined): boolean {
    return proto3.util.equals(QueryAssetRequest, a, b);
  }
}

/**
 * QueryAssetResponse is the response type for the Query/Asset RPC method.
 *
 * @generated from message milkyway.assets.v1.QueryAssetResponse
 */
export class QueryAssetResponse extends Message<QueryAssetResponse> {
  /**
   * Asset is the asset associated with the token denomination.
   *
   * @generated from field: milkyway.assets.v1.Asset asset = 1;
   */
  asset?: Asset;

  constructor(data?: PartialMessage<QueryAssetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "milkyway.assets.v1.QueryAssetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "asset", kind: "message", T: Asset },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAssetResponse {
    return new QueryAssetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAssetResponse {
    return new QueryAssetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAssetResponse {
    return new QueryAssetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAssetResponse | PlainMessage<QueryAssetResponse> | undefined, b: QueryAssetResponse | PlainMessage<QueryAssetResponse> | undefined): boolean {
    return proto3.util.equals(QueryAssetResponse, a, b);
  }
}

