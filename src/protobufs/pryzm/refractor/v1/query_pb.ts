// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/refractor/v1/query.proto (package pryzm.refractor.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { AssetState } from "./asset_state_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { Params } from "./params_pb.js";

/**
 * @generated from message pryzm.refractor.v1.QueryGetAssetStateRequest
 */
export class QueryGetAssetStateRequest extends Message<QueryGetAssetStateRequest> {
  /**
   * @generated from field: string asset_id = 1;
   */
  assetId = "";

  constructor(data?: PartialMessage<QueryGetAssetStateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.refractor.v1.QueryGetAssetStateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "asset_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetAssetStateRequest {
    return new QueryGetAssetStateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetAssetStateRequest {
    return new QueryGetAssetStateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetAssetStateRequest {
    return new QueryGetAssetStateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGetAssetStateRequest | PlainMessage<QueryGetAssetStateRequest> | undefined, b: QueryGetAssetStateRequest | PlainMessage<QueryGetAssetStateRequest> | undefined): boolean {
    return proto3.util.equals(QueryGetAssetStateRequest, a, b);
  }
}

/**
 * @generated from message pryzm.refractor.v1.QueryGetAssetStateResponse
 */
export class QueryGetAssetStateResponse extends Message<QueryGetAssetStateResponse> {
  /**
   * @generated from field: pryzm.refractor.v1.AssetState asset_state = 1;
   */
  assetState?: AssetState;

  constructor(data?: PartialMessage<QueryGetAssetStateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.refractor.v1.QueryGetAssetStateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "asset_state", kind: "message", T: AssetState },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetAssetStateResponse {
    return new QueryGetAssetStateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetAssetStateResponse {
    return new QueryGetAssetStateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetAssetStateResponse {
    return new QueryGetAssetStateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGetAssetStateResponse | PlainMessage<QueryGetAssetStateResponse> | undefined, b: QueryGetAssetStateResponse | PlainMessage<QueryGetAssetStateResponse> | undefined): boolean {
    return proto3.util.equals(QueryGetAssetStateResponse, a, b);
  }
}

/**
 * @generated from message pryzm.refractor.v1.QueryGetCPExchangeRateRequest
 */
export class QueryGetCPExchangeRateRequest extends Message<QueryGetCPExchangeRateRequest> {
  /**
   * @generated from field: string asset_id = 1;
   */
  assetId = "";

  constructor(data?: PartialMessage<QueryGetCPExchangeRateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.refractor.v1.QueryGetCPExchangeRateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "asset_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetCPExchangeRateRequest {
    return new QueryGetCPExchangeRateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetCPExchangeRateRequest {
    return new QueryGetCPExchangeRateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetCPExchangeRateRequest {
    return new QueryGetCPExchangeRateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGetCPExchangeRateRequest | PlainMessage<QueryGetCPExchangeRateRequest> | undefined, b: QueryGetCPExchangeRateRequest | PlainMessage<QueryGetCPExchangeRateRequest> | undefined): boolean {
    return proto3.util.equals(QueryGetCPExchangeRateRequest, a, b);
  }
}

/**
 * @generated from message pryzm.refractor.v1.QueryGetCPExchangeRateResponse
 */
export class QueryGetCPExchangeRateResponse extends Message<QueryGetCPExchangeRateResponse> {
  /**
   * @generated from field: string exchange_rate = 1;
   */
  exchangeRate = "";

  constructor(data?: PartialMessage<QueryGetCPExchangeRateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.refractor.v1.QueryGetCPExchangeRateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "exchange_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetCPExchangeRateResponse {
    return new QueryGetCPExchangeRateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetCPExchangeRateResponse {
    return new QueryGetCPExchangeRateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetCPExchangeRateResponse {
    return new QueryGetCPExchangeRateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGetCPExchangeRateResponse | PlainMessage<QueryGetCPExchangeRateResponse> | undefined, b: QueryGetCPExchangeRateResponse | PlainMessage<QueryGetCPExchangeRateResponse> | undefined): boolean {
    return proto3.util.equals(QueryGetCPExchangeRateResponse, a, b);
  }
}

/**
 * @generated from message pryzm.refractor.v1.QuerySimulateRefractRequest
 */
export class QuerySimulateRefractRequest extends Message<QuerySimulateRefractRequest> {
  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 1;
   */
  amount?: Coin;

  /**
   * @generated from field: string maturity = 2;
   */
  maturity = "";

  constructor(data?: PartialMessage<QuerySimulateRefractRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.refractor.v1.QuerySimulateRefractRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin },
    { no: 2, name: "maturity", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySimulateRefractRequest {
    return new QuerySimulateRefractRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySimulateRefractRequest {
    return new QuerySimulateRefractRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySimulateRefractRequest {
    return new QuerySimulateRefractRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySimulateRefractRequest | PlainMessage<QuerySimulateRefractRequest> | undefined, b: QuerySimulateRefractRequest | PlainMessage<QuerySimulateRefractRequest> | undefined): boolean {
    return proto3.util.equals(QuerySimulateRefractRequest, a, b);
  }
}

/**
 * @generated from message pryzm.refractor.v1.QuerySimulateRefractResponse
 */
export class QuerySimulateRefractResponse extends Message<QuerySimulateRefractResponse> {
  /**
   * @generated from field: cosmos.base.v1beta1.Coin p_amount = 1;
   */
  pAmount?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin y_amount = 2;
   */
  yAmount?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin fee = 3;
   */
  fee?: Coin;

  constructor(data?: PartialMessage<QuerySimulateRefractResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.refractor.v1.QuerySimulateRefractResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "p_amount", kind: "message", T: Coin },
    { no: 2, name: "y_amount", kind: "message", T: Coin },
    { no: 3, name: "fee", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySimulateRefractResponse {
    return new QuerySimulateRefractResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySimulateRefractResponse {
    return new QuerySimulateRefractResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySimulateRefractResponse {
    return new QuerySimulateRefractResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySimulateRefractResponse | PlainMessage<QuerySimulateRefractResponse> | undefined, b: QuerySimulateRefractResponse | PlainMessage<QuerySimulateRefractResponse> | undefined): boolean {
    return proto3.util.equals(QuerySimulateRefractResponse, a, b);
  }
}

/**
 * @generated from message pryzm.refractor.v1.QuerySimulateRedeemRequest
 */
export class QuerySimulateRedeemRequest extends Message<QuerySimulateRedeemRequest> {
  /**
   * @generated from field: cosmos.base.v1beta1.Coin p_amount = 1;
   */
  pAmount?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin y_amount = 2;
   */
  yAmount?: Coin;

  constructor(data?: PartialMessage<QuerySimulateRedeemRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.refractor.v1.QuerySimulateRedeemRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "p_amount", kind: "message", T: Coin },
    { no: 2, name: "y_amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySimulateRedeemRequest {
    return new QuerySimulateRedeemRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySimulateRedeemRequest {
    return new QuerySimulateRedeemRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySimulateRedeemRequest {
    return new QuerySimulateRedeemRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySimulateRedeemRequest | PlainMessage<QuerySimulateRedeemRequest> | undefined, b: QuerySimulateRedeemRequest | PlainMessage<QuerySimulateRedeemRequest> | undefined): boolean {
    return proto3.util.equals(QuerySimulateRedeemRequest, a, b);
  }
}

/**
 * @generated from message pryzm.refractor.v1.QuerySimulateRedeemResponse
 */
export class QuerySimulateRedeemResponse extends Message<QuerySimulateRedeemResponse> {
  /**
   * @generated from field: cosmos.base.v1beta1.Coin c_amount = 1;
   */
  cAmount?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin fee = 2;
   */
  fee?: Coin;

  constructor(data?: PartialMessage<QuerySimulateRedeemResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.refractor.v1.QuerySimulateRedeemResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "c_amount", kind: "message", T: Coin },
    { no: 2, name: "fee", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySimulateRedeemResponse {
    return new QuerySimulateRedeemResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySimulateRedeemResponse {
    return new QuerySimulateRedeemResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySimulateRedeemResponse {
    return new QuerySimulateRedeemResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySimulateRedeemResponse | PlainMessage<QuerySimulateRedeemResponse> | undefined, b: QuerySimulateRedeemResponse | PlainMessage<QuerySimulateRedeemResponse> | undefined): boolean {
    return proto3.util.equals(QuerySimulateRedeemResponse, a, b);
  }
}

/**
 * @generated from message pryzm.refractor.v1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.refractor.v1.QueryParamsRequest";
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
 * @generated from message pryzm.refractor.v1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * @generated from field: pryzm.refractor.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.refractor.v1.QueryParamsResponse";
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

