// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file sunrise/liquidityincentive/tx.proto (package sunrise.liquidityincentive, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { PoolWeight } from "./gauge_pb.js";

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * @generated from message sunrise.liquidityincentive.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   *
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: sunrise.liquidityincentive.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.liquidityincentive.MsgUpdateParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean {
    return proto3.util.equals(MsgUpdateParams, a, b);
  }
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * @generated from message sunrise.liquidityincentive.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.liquidityincentive.MsgUpdateParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateParamsResponse, a, b);
  }
}

/**
 * MsgVoteGauge
 *
 * @generated from message sunrise.liquidityincentive.MsgVoteGauge
 */
export class MsgVoteGauge extends Message<MsgVoteGauge> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: repeated sunrise.liquidityincentive.PoolWeight pool_weights = 2;
   */
  poolWeights: PoolWeight[] = [];

  constructor(data?: PartialMessage<MsgVoteGauge>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.liquidityincentive.MsgVoteGauge";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_weights", kind: "message", T: PoolWeight, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgVoteGauge {
    return new MsgVoteGauge().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgVoteGauge {
    return new MsgVoteGauge().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgVoteGauge {
    return new MsgVoteGauge().fromJsonString(jsonString, options);
  }

  static equals(a: MsgVoteGauge | PlainMessage<MsgVoteGauge> | undefined, b: MsgVoteGauge | PlainMessage<MsgVoteGauge> | undefined): boolean {
    return proto3.util.equals(MsgVoteGauge, a, b);
  }
}

/**
 * MsgVoteGaugeResponse
 *
 * @generated from message sunrise.liquidityincentive.MsgVoteGaugeResponse
 */
export class MsgVoteGaugeResponse extends Message<MsgVoteGaugeResponse> {
  constructor(data?: PartialMessage<MsgVoteGaugeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.liquidityincentive.MsgVoteGaugeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgVoteGaugeResponse {
    return new MsgVoteGaugeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgVoteGaugeResponse {
    return new MsgVoteGaugeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgVoteGaugeResponse {
    return new MsgVoteGaugeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgVoteGaugeResponse | PlainMessage<MsgVoteGaugeResponse> | undefined, b: MsgVoteGaugeResponse | PlainMessage<MsgVoteGaugeResponse> | undefined): boolean {
    return proto3.util.equals(MsgVoteGaugeResponse, a, b);
  }
}

/**
 * MsgCollectVoteRewards
 *
 * @generated from message sunrise.liquidityincentive.MsgCollectVoteRewards
 */
export class MsgCollectVoteRewards extends Message<MsgCollectVoteRewards> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  constructor(data?: PartialMessage<MsgCollectVoteRewards>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.liquidityincentive.MsgCollectVoteRewards";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCollectVoteRewards {
    return new MsgCollectVoteRewards().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCollectVoteRewards {
    return new MsgCollectVoteRewards().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCollectVoteRewards {
    return new MsgCollectVoteRewards().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCollectVoteRewards | PlainMessage<MsgCollectVoteRewards> | undefined, b: MsgCollectVoteRewards | PlainMessage<MsgCollectVoteRewards> | undefined): boolean {
    return proto3.util.equals(MsgCollectVoteRewards, a, b);
  }
}

/**
 * MsgCollectVoteRewardsResponse
 *
 * @generated from message sunrise.liquidityincentive.MsgCollectVoteRewardsResponse
 */
export class MsgCollectVoteRewardsResponse extends Message<MsgCollectVoteRewardsResponse> {
  constructor(data?: PartialMessage<MsgCollectVoteRewardsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.liquidityincentive.MsgCollectVoteRewardsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCollectVoteRewardsResponse {
    return new MsgCollectVoteRewardsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCollectVoteRewardsResponse {
    return new MsgCollectVoteRewardsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCollectVoteRewardsResponse {
    return new MsgCollectVoteRewardsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCollectVoteRewardsResponse | PlainMessage<MsgCollectVoteRewardsResponse> | undefined, b: MsgCollectVoteRewardsResponse | PlainMessage<MsgCollectVoteRewardsResponse> | undefined): boolean {
    return proto3.util.equals(MsgCollectVoteRewardsResponse, a, b);
  }
}

