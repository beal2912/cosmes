// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/evmos/blob/main/LICENSE)

// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file evmos/inflation/v1/query.proto (package evmos.inflation.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { Params } from "./genesis_pb.js";

/**
 * QueryPeriodRequest is the request type for the Query/Period RPC method.
 *
 * @generated from message evmos.inflation.v1.QueryPeriodRequest
 */
export class QueryPeriodRequest extends Message<QueryPeriodRequest> {
  constructor(data?: PartialMessage<QueryPeriodRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.inflation.v1.QueryPeriodRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPeriodRequest {
    return new QueryPeriodRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPeriodRequest {
    return new QueryPeriodRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPeriodRequest {
    return new QueryPeriodRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPeriodRequest | PlainMessage<QueryPeriodRequest> | undefined, b: QueryPeriodRequest | PlainMessage<QueryPeriodRequest> | undefined): boolean {
    return proto3.util.equals(QueryPeriodRequest, a, b);
  }
}

/**
 * QueryPeriodResponse is the response type for the Query/Period RPC method.
 *
 * @generated from message evmos.inflation.v1.QueryPeriodResponse
 */
export class QueryPeriodResponse extends Message<QueryPeriodResponse> {
  /**
   * period is the current minting per epoch provision value.
   *
   * @generated from field: uint64 period = 1;
   */
  period = protoInt64.zero;

  constructor(data?: PartialMessage<QueryPeriodResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.inflation.v1.QueryPeriodResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "period", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPeriodResponse {
    return new QueryPeriodResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPeriodResponse {
    return new QueryPeriodResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPeriodResponse {
    return new QueryPeriodResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPeriodResponse | PlainMessage<QueryPeriodResponse> | undefined, b: QueryPeriodResponse | PlainMessage<QueryPeriodResponse> | undefined): boolean {
    return proto3.util.equals(QueryPeriodResponse, a, b);
  }
}

/**
 * QueryEpochMintProvisionRequest is the request type for the
 * Query/EpochMintProvision RPC method.
 *
 * @generated from message evmos.inflation.v1.QueryEpochMintProvisionRequest
 */
export class QueryEpochMintProvisionRequest extends Message<QueryEpochMintProvisionRequest> {
  constructor(data?: PartialMessage<QueryEpochMintProvisionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.inflation.v1.QueryEpochMintProvisionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEpochMintProvisionRequest {
    return new QueryEpochMintProvisionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEpochMintProvisionRequest {
    return new QueryEpochMintProvisionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEpochMintProvisionRequest {
    return new QueryEpochMintProvisionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryEpochMintProvisionRequest | PlainMessage<QueryEpochMintProvisionRequest> | undefined, b: QueryEpochMintProvisionRequest | PlainMessage<QueryEpochMintProvisionRequest> | undefined): boolean {
    return proto3.util.equals(QueryEpochMintProvisionRequest, a, b);
  }
}

/**
 * QueryEpochMintProvisionResponse is the response type for the
 * Query/EpochMintProvision RPC method.
 *
 * @generated from message evmos.inflation.v1.QueryEpochMintProvisionResponse
 */
export class QueryEpochMintProvisionResponse extends Message<QueryEpochMintProvisionResponse> {
  /**
   * epoch_mint_provision is the current minting per epoch provision value.
   *
   * @generated from field: cosmos.base.v1beta1.DecCoin epoch_mint_provision = 1;
   */
  epochMintProvision?: DecCoin;

  constructor(data?: PartialMessage<QueryEpochMintProvisionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.inflation.v1.QueryEpochMintProvisionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "epoch_mint_provision", kind: "message", T: DecCoin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEpochMintProvisionResponse {
    return new QueryEpochMintProvisionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEpochMintProvisionResponse {
    return new QueryEpochMintProvisionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEpochMintProvisionResponse {
    return new QueryEpochMintProvisionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryEpochMintProvisionResponse | PlainMessage<QueryEpochMintProvisionResponse> | undefined, b: QueryEpochMintProvisionResponse | PlainMessage<QueryEpochMintProvisionResponse> | undefined): boolean {
    return proto3.util.equals(QueryEpochMintProvisionResponse, a, b);
  }
}

/**
 * QuerySkippedEpochsRequest is the request type for the Query/SkippedEpochs RPC
 * method.
 *
 * @generated from message evmos.inflation.v1.QuerySkippedEpochsRequest
 */
export class QuerySkippedEpochsRequest extends Message<QuerySkippedEpochsRequest> {
  constructor(data?: PartialMessage<QuerySkippedEpochsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.inflation.v1.QuerySkippedEpochsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySkippedEpochsRequest {
    return new QuerySkippedEpochsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySkippedEpochsRequest {
    return new QuerySkippedEpochsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySkippedEpochsRequest {
    return new QuerySkippedEpochsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySkippedEpochsRequest | PlainMessage<QuerySkippedEpochsRequest> | undefined, b: QuerySkippedEpochsRequest | PlainMessage<QuerySkippedEpochsRequest> | undefined): boolean {
    return proto3.util.equals(QuerySkippedEpochsRequest, a, b);
  }
}

/**
 * QuerySkippedEpochsResponse is the response type for the Query/SkippedEpochs
 * RPC method.
 *
 * @generated from message evmos.inflation.v1.QuerySkippedEpochsResponse
 */
export class QuerySkippedEpochsResponse extends Message<QuerySkippedEpochsResponse> {
  /**
   * skipped_epochs is the number of epochs that the inflation module has been disabled.
   *
   * @generated from field: uint64 skipped_epochs = 1;
   */
  skippedEpochs = protoInt64.zero;

  constructor(data?: PartialMessage<QuerySkippedEpochsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.inflation.v1.QuerySkippedEpochsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "skipped_epochs", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySkippedEpochsResponse {
    return new QuerySkippedEpochsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySkippedEpochsResponse {
    return new QuerySkippedEpochsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySkippedEpochsResponse {
    return new QuerySkippedEpochsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySkippedEpochsResponse | PlainMessage<QuerySkippedEpochsResponse> | undefined, b: QuerySkippedEpochsResponse | PlainMessage<QuerySkippedEpochsResponse> | undefined): boolean {
    return proto3.util.equals(QuerySkippedEpochsResponse, a, b);
  }
}

/**
 * QueryCirculatingSupplyRequest is the request type for the
 * Query/CirculatingSupply RPC method.
 *
 * @generated from message evmos.inflation.v1.QueryCirculatingSupplyRequest
 */
export class QueryCirculatingSupplyRequest extends Message<QueryCirculatingSupplyRequest> {
  constructor(data?: PartialMessage<QueryCirculatingSupplyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.inflation.v1.QueryCirculatingSupplyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCirculatingSupplyRequest {
    return new QueryCirculatingSupplyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCirculatingSupplyRequest {
    return new QueryCirculatingSupplyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCirculatingSupplyRequest {
    return new QueryCirculatingSupplyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCirculatingSupplyRequest | PlainMessage<QueryCirculatingSupplyRequest> | undefined, b: QueryCirculatingSupplyRequest | PlainMessage<QueryCirculatingSupplyRequest> | undefined): boolean {
    return proto3.util.equals(QueryCirculatingSupplyRequest, a, b);
  }
}

/**
 * QueryCirculatingSupplyResponse is the response type for the
 * Query/CirculatingSupply RPC method.
 *
 * @generated from message evmos.inflation.v1.QueryCirculatingSupplyResponse
 */
export class QueryCirculatingSupplyResponse extends Message<QueryCirculatingSupplyResponse> {
  /**
   * circulating_supply is the total amount of coins in circulation
   *
   * @generated from field: cosmos.base.v1beta1.DecCoin circulating_supply = 1;
   */
  circulatingSupply?: DecCoin;

  constructor(data?: PartialMessage<QueryCirculatingSupplyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.inflation.v1.QueryCirculatingSupplyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "circulating_supply", kind: "message", T: DecCoin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCirculatingSupplyResponse {
    return new QueryCirculatingSupplyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCirculatingSupplyResponse {
    return new QueryCirculatingSupplyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCirculatingSupplyResponse {
    return new QueryCirculatingSupplyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCirculatingSupplyResponse | PlainMessage<QueryCirculatingSupplyResponse> | undefined, b: QueryCirculatingSupplyResponse | PlainMessage<QueryCirculatingSupplyResponse> | undefined): boolean {
    return proto3.util.equals(QueryCirculatingSupplyResponse, a, b);
  }
}

/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 *
 * @generated from message evmos.inflation.v1.QueryInflationRateRequest
 */
export class QueryInflationRateRequest extends Message<QueryInflationRateRequest> {
  constructor(data?: PartialMessage<QueryInflationRateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.inflation.v1.QueryInflationRateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInflationRateRequest {
    return new QueryInflationRateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInflationRateRequest {
    return new QueryInflationRateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInflationRateRequest {
    return new QueryInflationRateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryInflationRateRequest | PlainMessage<QueryInflationRateRequest> | undefined, b: QueryInflationRateRequest | PlainMessage<QueryInflationRateRequest> | undefined): boolean {
    return proto3.util.equals(QueryInflationRateRequest, a, b);
  }
}

/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 *
 * @generated from message evmos.inflation.v1.QueryInflationRateResponse
 */
export class QueryInflationRateResponse extends Message<QueryInflationRateResponse> {
  /**
   * inflation_rate by which the total supply increases within one period
   *
   * @generated from field: string inflation_rate = 1;
   */
  inflationRate = "";

  constructor(data?: PartialMessage<QueryInflationRateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.inflation.v1.QueryInflationRateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "inflation_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInflationRateResponse {
    return new QueryInflationRateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInflationRateResponse {
    return new QueryInflationRateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInflationRateResponse {
    return new QueryInflationRateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryInflationRateResponse | PlainMessage<QueryInflationRateResponse> | undefined, b: QueryInflationRateResponse | PlainMessage<QueryInflationRateResponse> | undefined): boolean {
    return proto3.util.equals(QueryInflationRateResponse, a, b);
  }
}

/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message evmos.inflation.v1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.inflation.v1.QueryParamsRequest";
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
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message evmos.inflation.v1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params defines the parameters of the module.
   *
   * @generated from field: evmos.inflation.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.inflation.v1.QueryParamsResponse";
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

