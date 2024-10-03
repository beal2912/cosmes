// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file dymensionxyz/dymension/incentives/query.proto (package dymensionxyz.dymension.incentives, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { Gauge } from "./gauge_pb.js";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination_pb.js";

/**
 * @generated from message dymensionxyz.dymension.incentives.ModuleToDistributeCoinsRequest
 */
export class ModuleToDistributeCoinsRequest extends Message<ModuleToDistributeCoinsRequest> {
  constructor(data?: PartialMessage<ModuleToDistributeCoinsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.ModuleToDistributeCoinsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleToDistributeCoinsRequest {
    return new ModuleToDistributeCoinsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleToDistributeCoinsRequest {
    return new ModuleToDistributeCoinsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleToDistributeCoinsRequest {
    return new ModuleToDistributeCoinsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ModuleToDistributeCoinsRequest | PlainMessage<ModuleToDistributeCoinsRequest> | undefined, b: ModuleToDistributeCoinsRequest | PlainMessage<ModuleToDistributeCoinsRequest> | undefined): boolean {
    return proto3.util.equals(ModuleToDistributeCoinsRequest, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.incentives.ModuleToDistributeCoinsResponse
 */
export class ModuleToDistributeCoinsResponse extends Message<ModuleToDistributeCoinsResponse> {
  /**
   * Coins that have yet to be distributed
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 1;
   */
  coins: Coin[] = [];

  constructor(data?: PartialMessage<ModuleToDistributeCoinsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.ModuleToDistributeCoinsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "coins", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleToDistributeCoinsResponse {
    return new ModuleToDistributeCoinsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleToDistributeCoinsResponse {
    return new ModuleToDistributeCoinsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleToDistributeCoinsResponse {
    return new ModuleToDistributeCoinsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ModuleToDistributeCoinsResponse | PlainMessage<ModuleToDistributeCoinsResponse> | undefined, b: ModuleToDistributeCoinsResponse | PlainMessage<ModuleToDistributeCoinsResponse> | undefined): boolean {
    return proto3.util.equals(ModuleToDistributeCoinsResponse, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.incentives.GaugeByIDRequest
 */
export class GaugeByIDRequest extends Message<GaugeByIDRequest> {
  /**
   * Gague ID being queried
   *
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<GaugeByIDRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.GaugeByIDRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GaugeByIDRequest {
    return new GaugeByIDRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GaugeByIDRequest {
    return new GaugeByIDRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GaugeByIDRequest {
    return new GaugeByIDRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GaugeByIDRequest | PlainMessage<GaugeByIDRequest> | undefined, b: GaugeByIDRequest | PlainMessage<GaugeByIDRequest> | undefined): boolean {
    return proto3.util.equals(GaugeByIDRequest, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.incentives.GaugeByIDResponse
 */
export class GaugeByIDResponse extends Message<GaugeByIDResponse> {
  /**
   * Gauge that corresponds to provided gague ID
   *
   * @generated from field: dymensionxyz.dymension.incentives.Gauge gauge = 1;
   */
  gauge?: Gauge;

  constructor(data?: PartialMessage<GaugeByIDResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.GaugeByIDResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "gauge", kind: "message", T: Gauge },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GaugeByIDResponse {
    return new GaugeByIDResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GaugeByIDResponse {
    return new GaugeByIDResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GaugeByIDResponse {
    return new GaugeByIDResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GaugeByIDResponse | PlainMessage<GaugeByIDResponse> | undefined, b: GaugeByIDResponse | PlainMessage<GaugeByIDResponse> | undefined): boolean {
    return proto3.util.equals(GaugeByIDResponse, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.incentives.GaugesRequest
 */
export class GaugesRequest extends Message<GaugesRequest> {
  /**
   * Pagination defines pagination for the request
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<GaugesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.GaugesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GaugesRequest {
    return new GaugesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GaugesRequest {
    return new GaugesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GaugesRequest {
    return new GaugesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GaugesRequest | PlainMessage<GaugesRequest> | undefined, b: GaugesRequest | PlainMessage<GaugesRequest> | undefined): boolean {
    return proto3.util.equals(GaugesRequest, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.incentives.GaugesResponse
 */
export class GaugesResponse extends Message<GaugesResponse> {
  /**
   * Upcoming and active gauges
   *
   * @generated from field: repeated dymensionxyz.dymension.incentives.Gauge data = 1;
   */
  data: Gauge[] = [];

  /**
   * Pagination defines pagination for the response
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<GaugesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.GaugesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "message", T: Gauge, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GaugesResponse {
    return new GaugesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GaugesResponse {
    return new GaugesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GaugesResponse {
    return new GaugesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GaugesResponse | PlainMessage<GaugesResponse> | undefined, b: GaugesResponse | PlainMessage<GaugesResponse> | undefined): boolean {
    return proto3.util.equals(GaugesResponse, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.incentives.ActiveGaugesRequest
 */
export class ActiveGaugesRequest extends Message<ActiveGaugesRequest> {
  /**
   * Pagination defines pagination for the request
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<ActiveGaugesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.ActiveGaugesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActiveGaugesRequest {
    return new ActiveGaugesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActiveGaugesRequest {
    return new ActiveGaugesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActiveGaugesRequest {
    return new ActiveGaugesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ActiveGaugesRequest | PlainMessage<ActiveGaugesRequest> | undefined, b: ActiveGaugesRequest | PlainMessage<ActiveGaugesRequest> | undefined): boolean {
    return proto3.util.equals(ActiveGaugesRequest, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.incentives.ActiveGaugesResponse
 */
export class ActiveGaugesResponse extends Message<ActiveGaugesResponse> {
  /**
   * Active gagues only
   *
   * @generated from field: repeated dymensionxyz.dymension.incentives.Gauge data = 1;
   */
  data: Gauge[] = [];

  /**
   * Pagination defines pagination for the response
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<ActiveGaugesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.ActiveGaugesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "message", T: Gauge, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActiveGaugesResponse {
    return new ActiveGaugesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActiveGaugesResponse {
    return new ActiveGaugesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActiveGaugesResponse {
    return new ActiveGaugesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ActiveGaugesResponse | PlainMessage<ActiveGaugesResponse> | undefined, b: ActiveGaugesResponse | PlainMessage<ActiveGaugesResponse> | undefined): boolean {
    return proto3.util.equals(ActiveGaugesResponse, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.incentives.ActiveGaugesPerDenomRequest
 */
export class ActiveGaugesPerDenomRequest extends Message<ActiveGaugesPerDenomRequest> {
  /**
   * Desired denom when querying active gagues
   *
   * @generated from field: string denom = 1;
   */
  denom = "";

  /**
   * Pagination defines pagination for the request
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<ActiveGaugesPerDenomRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.ActiveGaugesPerDenomRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActiveGaugesPerDenomRequest {
    return new ActiveGaugesPerDenomRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActiveGaugesPerDenomRequest {
    return new ActiveGaugesPerDenomRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActiveGaugesPerDenomRequest {
    return new ActiveGaugesPerDenomRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ActiveGaugesPerDenomRequest | PlainMessage<ActiveGaugesPerDenomRequest> | undefined, b: ActiveGaugesPerDenomRequest | PlainMessage<ActiveGaugesPerDenomRequest> | undefined): boolean {
    return proto3.util.equals(ActiveGaugesPerDenomRequest, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.incentives.ActiveGaugesPerDenomResponse
 */
export class ActiveGaugesPerDenomResponse extends Message<ActiveGaugesPerDenomResponse> {
  /**
   * Active gagues that match denom in query
   *
   * @generated from field: repeated dymensionxyz.dymension.incentives.Gauge data = 1;
   */
  data: Gauge[] = [];

  /**
   * Pagination defines pagination for the response
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<ActiveGaugesPerDenomResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.ActiveGaugesPerDenomResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "message", T: Gauge, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActiveGaugesPerDenomResponse {
    return new ActiveGaugesPerDenomResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActiveGaugesPerDenomResponse {
    return new ActiveGaugesPerDenomResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActiveGaugesPerDenomResponse {
    return new ActiveGaugesPerDenomResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ActiveGaugesPerDenomResponse | PlainMessage<ActiveGaugesPerDenomResponse> | undefined, b: ActiveGaugesPerDenomResponse | PlainMessage<ActiveGaugesPerDenomResponse> | undefined): boolean {
    return proto3.util.equals(ActiveGaugesPerDenomResponse, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.incentives.UpcomingGaugesRequest
 */
export class UpcomingGaugesRequest extends Message<UpcomingGaugesRequest> {
  /**
   * Pagination defines pagination for the request
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<UpcomingGaugesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.UpcomingGaugesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpcomingGaugesRequest {
    return new UpcomingGaugesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpcomingGaugesRequest {
    return new UpcomingGaugesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpcomingGaugesRequest {
    return new UpcomingGaugesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpcomingGaugesRequest | PlainMessage<UpcomingGaugesRequest> | undefined, b: UpcomingGaugesRequest | PlainMessage<UpcomingGaugesRequest> | undefined): boolean {
    return proto3.util.equals(UpcomingGaugesRequest, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.incentives.UpcomingGaugesResponse
 */
export class UpcomingGaugesResponse extends Message<UpcomingGaugesResponse> {
  /**
   * Gauges whose distribution is upcoming
   *
   * @generated from field: repeated dymensionxyz.dymension.incentives.Gauge data = 1;
   */
  data: Gauge[] = [];

  /**
   * Pagination defines pagination for the response
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<UpcomingGaugesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.UpcomingGaugesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "message", T: Gauge, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpcomingGaugesResponse {
    return new UpcomingGaugesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpcomingGaugesResponse {
    return new UpcomingGaugesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpcomingGaugesResponse {
    return new UpcomingGaugesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UpcomingGaugesResponse | PlainMessage<UpcomingGaugesResponse> | undefined, b: UpcomingGaugesResponse | PlainMessage<UpcomingGaugesResponse> | undefined): boolean {
    return proto3.util.equals(UpcomingGaugesResponse, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.incentives.UpcomingGaugesPerDenomRequest
 */
export class UpcomingGaugesPerDenomRequest extends Message<UpcomingGaugesPerDenomRequest> {
  /**
   * Filter for upcoming gagues that match specific denom
   *
   * @generated from field: string denom = 1;
   */
  denom = "";

  /**
   * Pagination defines pagination for the request
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<UpcomingGaugesPerDenomRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.UpcomingGaugesPerDenomRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpcomingGaugesPerDenomRequest {
    return new UpcomingGaugesPerDenomRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpcomingGaugesPerDenomRequest {
    return new UpcomingGaugesPerDenomRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpcomingGaugesPerDenomRequest {
    return new UpcomingGaugesPerDenomRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpcomingGaugesPerDenomRequest | PlainMessage<UpcomingGaugesPerDenomRequest> | undefined, b: UpcomingGaugesPerDenomRequest | PlainMessage<UpcomingGaugesPerDenomRequest> | undefined): boolean {
    return proto3.util.equals(UpcomingGaugesPerDenomRequest, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.incentives.UpcomingGaugesPerDenomResponse
 */
export class UpcomingGaugesPerDenomResponse extends Message<UpcomingGaugesPerDenomResponse> {
  /**
   * Upcoming gagues that match denom in query
   *
   * @generated from field: repeated dymensionxyz.dymension.incentives.Gauge upcoming_gauges = 1;
   */
  upcomingGauges: Gauge[] = [];

  /**
   * Pagination defines pagination for the response
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<UpcomingGaugesPerDenomResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.UpcomingGaugesPerDenomResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "upcoming_gauges", kind: "message", T: Gauge, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpcomingGaugesPerDenomResponse {
    return new UpcomingGaugesPerDenomResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpcomingGaugesPerDenomResponse {
    return new UpcomingGaugesPerDenomResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpcomingGaugesPerDenomResponse {
    return new UpcomingGaugesPerDenomResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UpcomingGaugesPerDenomResponse | PlainMessage<UpcomingGaugesPerDenomResponse> | undefined, b: UpcomingGaugesPerDenomResponse | PlainMessage<UpcomingGaugesPerDenomResponse> | undefined): boolean {
    return proto3.util.equals(UpcomingGaugesPerDenomResponse, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.incentives.RewardsEstRequest
 */
export class RewardsEstRequest extends Message<RewardsEstRequest> {
  /**
   * Address that is being queried for future estimated rewards
   *
   * @generated from field: string owner = 1;
   */
  owner = "";

  /**
   * Lock IDs included in future reward estimation
   *
   * @generated from field: repeated uint64 lock_ids = 2;
   */
  lockIds: bigint[] = [];

  /**
   * Upper time limit of reward estimation
   * Lower limit is current epoch
   *
   * @generated from field: int64 end_epoch = 3;
   */
  endEpoch = protoInt64.zero;

  constructor(data?: PartialMessage<RewardsEstRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.RewardsEstRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "lock_ids", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 3, name: "end_epoch", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RewardsEstRequest {
    return new RewardsEstRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RewardsEstRequest {
    return new RewardsEstRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RewardsEstRequest {
    return new RewardsEstRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RewardsEstRequest | PlainMessage<RewardsEstRequest> | undefined, b: RewardsEstRequest | PlainMessage<RewardsEstRequest> | undefined): boolean {
    return proto3.util.equals(RewardsEstRequest, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.incentives.RewardsEstResponse
 */
export class RewardsEstResponse extends Message<RewardsEstResponse> {
  /**
   * Estimated coin rewards that will be recieved at provided address
   * from specified locks between current time and end epoch
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 1;
   */
  coins: Coin[] = [];

  constructor(data?: PartialMessage<RewardsEstResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.RewardsEstResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "coins", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RewardsEstResponse {
    return new RewardsEstResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RewardsEstResponse {
    return new RewardsEstResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RewardsEstResponse {
    return new RewardsEstResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RewardsEstResponse | PlainMessage<RewardsEstResponse> | undefined, b: RewardsEstResponse | PlainMessage<RewardsEstResponse> | undefined): boolean {
    return proto3.util.equals(RewardsEstResponse, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.incentives.QueryLockableDurationsRequest
 */
export class QueryLockableDurationsRequest extends Message<QueryLockableDurationsRequest> {
  constructor(data?: PartialMessage<QueryLockableDurationsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.QueryLockableDurationsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryLockableDurationsRequest {
    return new QueryLockableDurationsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryLockableDurationsRequest {
    return new QueryLockableDurationsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryLockableDurationsRequest {
    return new QueryLockableDurationsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryLockableDurationsRequest | PlainMessage<QueryLockableDurationsRequest> | undefined, b: QueryLockableDurationsRequest | PlainMessage<QueryLockableDurationsRequest> | undefined): boolean {
    return proto3.util.equals(QueryLockableDurationsRequest, a, b);
  }
}

/**
 * @generated from message dymensionxyz.dymension.incentives.QueryLockableDurationsResponse
 */
export class QueryLockableDurationsResponse extends Message<QueryLockableDurationsResponse> {
  /**
   * Time durations that users can lock coins for in order to recieve rewards
   *
   * @generated from field: repeated google.protobuf.Duration lockable_durations = 1;
   */
  lockableDurations: Duration[] = [];

  constructor(data?: PartialMessage<QueryLockableDurationsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dymensionxyz.dymension.incentives.QueryLockableDurationsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "lockable_durations", kind: "message", T: Duration, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryLockableDurationsResponse {
    return new QueryLockableDurationsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryLockableDurationsResponse {
    return new QueryLockableDurationsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryLockableDurationsResponse {
    return new QueryLockableDurationsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryLockableDurationsResponse | PlainMessage<QueryLockableDurationsResponse> | undefined, b: QueryLockableDurationsResponse | PlainMessage<QueryLockableDurationsResponse> | undefined): boolean {
    return proto3.util.equals(QueryLockableDurationsResponse, a, b);
  }
}
