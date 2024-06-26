// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/pricefeed/v1beta1/query.proto (package kava.pricefeed.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Params } from "./store_pb.js";

/**
 * QueryParamsRequest defines the request type for querying x/pricefeed
 * parameters.
 *
 * @generated from message kava.pricefeed.v1beta1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.pricefeed.v1beta1.QueryParamsRequest";
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
 * QueryParamsResponse defines the response type for querying x/pricefeed
 * parameters.
 *
 * @generated from message kava.pricefeed.v1beta1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * @generated from field: kava.pricefeed.v1beta1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.pricefeed.v1beta1.QueryParamsResponse";
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
 * QueryPriceRequest is the request type for the Query/PriceRequest RPC method.
 *
 * @generated from message kava.pricefeed.v1beta1.QueryPriceRequest
 */
export class QueryPriceRequest extends Message<QueryPriceRequest> {
  /**
   * @generated from field: string market_id = 1;
   */
  marketId = "";

  constructor(data?: PartialMessage<QueryPriceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.pricefeed.v1beta1.QueryPriceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPriceRequest {
    return new QueryPriceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPriceRequest {
    return new QueryPriceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPriceRequest {
    return new QueryPriceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPriceRequest | PlainMessage<QueryPriceRequest> | undefined, b: QueryPriceRequest | PlainMessage<QueryPriceRequest> | undefined): boolean {
    return proto3.util.equals(QueryPriceRequest, a, b);
  }
}

/**
 * QueryPriceResponse is the response type for the Query/Prices RPC method.
 *
 * @generated from message kava.pricefeed.v1beta1.QueryPriceResponse
 */
export class QueryPriceResponse extends Message<QueryPriceResponse> {
  /**
   * @generated from field: kava.pricefeed.v1beta1.CurrentPriceResponse price = 1;
   */
  price?: CurrentPriceResponse;

  constructor(data?: PartialMessage<QueryPriceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.pricefeed.v1beta1.QueryPriceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "price", kind: "message", T: CurrentPriceResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPriceResponse {
    return new QueryPriceResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPriceResponse {
    return new QueryPriceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPriceResponse {
    return new QueryPriceResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPriceResponse | PlainMessage<QueryPriceResponse> | undefined, b: QueryPriceResponse | PlainMessage<QueryPriceResponse> | undefined): boolean {
    return proto3.util.equals(QueryPriceResponse, a, b);
  }
}

/**
 * QueryPricesRequest is the request type for the Query/Prices RPC method.
 *
 * @generated from message kava.pricefeed.v1beta1.QueryPricesRequest
 */
export class QueryPricesRequest extends Message<QueryPricesRequest> {
  constructor(data?: PartialMessage<QueryPricesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.pricefeed.v1beta1.QueryPricesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPricesRequest {
    return new QueryPricesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPricesRequest {
    return new QueryPricesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPricesRequest {
    return new QueryPricesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPricesRequest | PlainMessage<QueryPricesRequest> | undefined, b: QueryPricesRequest | PlainMessage<QueryPricesRequest> | undefined): boolean {
    return proto3.util.equals(QueryPricesRequest, a, b);
  }
}

/**
 * QueryPricesResponse is the response type for the Query/Prices RPC method.
 *
 * @generated from message kava.pricefeed.v1beta1.QueryPricesResponse
 */
export class QueryPricesResponse extends Message<QueryPricesResponse> {
  /**
   * @generated from field: repeated kava.pricefeed.v1beta1.CurrentPriceResponse prices = 1;
   */
  prices: CurrentPriceResponse[] = [];

  constructor(data?: PartialMessage<QueryPricesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.pricefeed.v1beta1.QueryPricesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "prices", kind: "message", T: CurrentPriceResponse, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPricesResponse {
    return new QueryPricesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPricesResponse {
    return new QueryPricesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPricesResponse {
    return new QueryPricesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPricesResponse | PlainMessage<QueryPricesResponse> | undefined, b: QueryPricesResponse | PlainMessage<QueryPricesResponse> | undefined): boolean {
    return proto3.util.equals(QueryPricesResponse, a, b);
  }
}

/**
 * QueryRawPricesRequest is the request type for the Query/RawPrices RPC method.
 *
 * @generated from message kava.pricefeed.v1beta1.QueryRawPricesRequest
 */
export class QueryRawPricesRequest extends Message<QueryRawPricesRequest> {
  /**
   * @generated from field: string market_id = 1;
   */
  marketId = "";

  constructor(data?: PartialMessage<QueryRawPricesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.pricefeed.v1beta1.QueryRawPricesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRawPricesRequest {
    return new QueryRawPricesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRawPricesRequest {
    return new QueryRawPricesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRawPricesRequest {
    return new QueryRawPricesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryRawPricesRequest | PlainMessage<QueryRawPricesRequest> | undefined, b: QueryRawPricesRequest | PlainMessage<QueryRawPricesRequest> | undefined): boolean {
    return proto3.util.equals(QueryRawPricesRequest, a, b);
  }
}

/**
 * QueryRawPricesResponse is the response type for the Query/RawPrices RPC
 * method.
 *
 * @generated from message kava.pricefeed.v1beta1.QueryRawPricesResponse
 */
export class QueryRawPricesResponse extends Message<QueryRawPricesResponse> {
  /**
   * @generated from field: repeated kava.pricefeed.v1beta1.PostedPriceResponse raw_prices = 1;
   */
  rawPrices: PostedPriceResponse[] = [];

  constructor(data?: PartialMessage<QueryRawPricesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.pricefeed.v1beta1.QueryRawPricesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "raw_prices", kind: "message", T: PostedPriceResponse, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRawPricesResponse {
    return new QueryRawPricesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRawPricesResponse {
    return new QueryRawPricesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRawPricesResponse {
    return new QueryRawPricesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryRawPricesResponse | PlainMessage<QueryRawPricesResponse> | undefined, b: QueryRawPricesResponse | PlainMessage<QueryRawPricesResponse> | undefined): boolean {
    return proto3.util.equals(QueryRawPricesResponse, a, b);
  }
}

/**
 * QueryOraclesRequest is the request type for the Query/Oracles RPC method.
 *
 * @generated from message kava.pricefeed.v1beta1.QueryOraclesRequest
 */
export class QueryOraclesRequest extends Message<QueryOraclesRequest> {
  /**
   * @generated from field: string market_id = 1;
   */
  marketId = "";

  constructor(data?: PartialMessage<QueryOraclesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.pricefeed.v1beta1.QueryOraclesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOraclesRequest {
    return new QueryOraclesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOraclesRequest {
    return new QueryOraclesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOraclesRequest {
    return new QueryOraclesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryOraclesRequest | PlainMessage<QueryOraclesRequest> | undefined, b: QueryOraclesRequest | PlainMessage<QueryOraclesRequest> | undefined): boolean {
    return proto3.util.equals(QueryOraclesRequest, a, b);
  }
}

/**
 * QueryOraclesResponse is the response type for the Query/Oracles RPC method.
 *
 * @generated from message kava.pricefeed.v1beta1.QueryOraclesResponse
 */
export class QueryOraclesResponse extends Message<QueryOraclesResponse> {
  /**
   * List of oracle addresses
   *
   * @generated from field: repeated string oracles = 1;
   */
  oracles: string[] = [];

  constructor(data?: PartialMessage<QueryOraclesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.pricefeed.v1beta1.QueryOraclesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "oracles", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOraclesResponse {
    return new QueryOraclesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOraclesResponse {
    return new QueryOraclesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOraclesResponse {
    return new QueryOraclesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryOraclesResponse | PlainMessage<QueryOraclesResponse> | undefined, b: QueryOraclesResponse | PlainMessage<QueryOraclesResponse> | undefined): boolean {
    return proto3.util.equals(QueryOraclesResponse, a, b);
  }
}

/**
 * QueryMarketsRequest is the request type for the Query/Markets RPC method.
 *
 * @generated from message kava.pricefeed.v1beta1.QueryMarketsRequest
 */
export class QueryMarketsRequest extends Message<QueryMarketsRequest> {
  constructor(data?: PartialMessage<QueryMarketsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.pricefeed.v1beta1.QueryMarketsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryMarketsRequest {
    return new QueryMarketsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryMarketsRequest {
    return new QueryMarketsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryMarketsRequest {
    return new QueryMarketsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryMarketsRequest | PlainMessage<QueryMarketsRequest> | undefined, b: QueryMarketsRequest | PlainMessage<QueryMarketsRequest> | undefined): boolean {
    return proto3.util.equals(QueryMarketsRequest, a, b);
  }
}

/**
 * QueryMarketsResponse is the response type for the Query/Markets RPC method.
 *
 * @generated from message kava.pricefeed.v1beta1.QueryMarketsResponse
 */
export class QueryMarketsResponse extends Message<QueryMarketsResponse> {
  /**
   * List of markets
   *
   * @generated from field: repeated kava.pricefeed.v1beta1.MarketResponse markets = 1;
   */
  markets: MarketResponse[] = [];

  constructor(data?: PartialMessage<QueryMarketsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.pricefeed.v1beta1.QueryMarketsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "markets", kind: "message", T: MarketResponse, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryMarketsResponse {
    return new QueryMarketsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryMarketsResponse {
    return new QueryMarketsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryMarketsResponse {
    return new QueryMarketsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryMarketsResponse | PlainMessage<QueryMarketsResponse> | undefined, b: QueryMarketsResponse | PlainMessage<QueryMarketsResponse> | undefined): boolean {
    return proto3.util.equals(QueryMarketsResponse, a, b);
  }
}

/**
 * PostedPriceResponse defines a price for market posted by a specific oracle.
 *
 * @generated from message kava.pricefeed.v1beta1.PostedPriceResponse
 */
export class PostedPriceResponse extends Message<PostedPriceResponse> {
  /**
   * @generated from field: string market_id = 1;
   */
  marketId = "";

  /**
   * @generated from field: string oracle_address = 2;
   */
  oracleAddress = "";

  /**
   * @generated from field: string price = 3;
   */
  price = "";

  /**
   * @generated from field: google.protobuf.Timestamp expiry = 4;
   */
  expiry?: Timestamp;

  constructor(data?: PartialMessage<PostedPriceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.pricefeed.v1beta1.PostedPriceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "oracle_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "expiry", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostedPriceResponse {
    return new PostedPriceResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostedPriceResponse {
    return new PostedPriceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostedPriceResponse {
    return new PostedPriceResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PostedPriceResponse | PlainMessage<PostedPriceResponse> | undefined, b: PostedPriceResponse | PlainMessage<PostedPriceResponse> | undefined): boolean {
    return proto3.util.equals(PostedPriceResponse, a, b);
  }
}

/**
 * CurrentPriceResponse defines a current price for a particular market in the pricefeed
 * module.
 *
 * @generated from message kava.pricefeed.v1beta1.CurrentPriceResponse
 */
export class CurrentPriceResponse extends Message<CurrentPriceResponse> {
  /**
   * @generated from field: string market_id = 1;
   */
  marketId = "";

  /**
   * @generated from field: string price = 2;
   */
  price = "";

  constructor(data?: PartialMessage<CurrentPriceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.pricefeed.v1beta1.CurrentPriceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrentPriceResponse {
    return new CurrentPriceResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrentPriceResponse {
    return new CurrentPriceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrentPriceResponse {
    return new CurrentPriceResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CurrentPriceResponse | PlainMessage<CurrentPriceResponse> | undefined, b: CurrentPriceResponse | PlainMessage<CurrentPriceResponse> | undefined): boolean {
    return proto3.util.equals(CurrentPriceResponse, a, b);
  }
}

/**
 * MarketResponse defines an asset in the pricefeed.
 *
 * @generated from message kava.pricefeed.v1beta1.MarketResponse
 */
export class MarketResponse extends Message<MarketResponse> {
  /**
   * @generated from field: string market_id = 1;
   */
  marketId = "";

  /**
   * @generated from field: string base_asset = 2;
   */
  baseAsset = "";

  /**
   * @generated from field: string quote_asset = 3;
   */
  quoteAsset = "";

  /**
   * @generated from field: repeated string oracles = 4;
   */
  oracles: string[] = [];

  /**
   * @generated from field: bool active = 5;
   */
  active = false;

  constructor(data?: PartialMessage<MarketResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.pricefeed.v1beta1.MarketResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "base_asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "quote_asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "oracles", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MarketResponse {
    return new MarketResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MarketResponse {
    return new MarketResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MarketResponse {
    return new MarketResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MarketResponse | PlainMessage<MarketResponse> | undefined, b: MarketResponse | PlainMessage<MarketResponse> | undefined): boolean {
    return proto3.util.equals(MarketResponse, a, b);
  }
}

