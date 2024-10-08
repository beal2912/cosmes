// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/masterchef/tx.proto (package elys.masterchef, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";

/**
 * @generated from message elys.masterchef.MsgAddExternalRewardDenom
 */
export class MsgAddExternalRewardDenom extends Message<MsgAddExternalRewardDenom> {
  /**
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: string reward_denom = 2;
   */
  rewardDenom = "";

  /**
   * @generated from field: string min_amount = 3;
   */
  minAmount = "";

  /**
   * @generated from field: bool supported = 4;
   */
  supported = false;

  constructor(data?: PartialMessage<MsgAddExternalRewardDenom>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.masterchef.MsgAddExternalRewardDenom";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "reward_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "min_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "supported", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddExternalRewardDenom {
    return new MsgAddExternalRewardDenom().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddExternalRewardDenom {
    return new MsgAddExternalRewardDenom().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddExternalRewardDenom {
    return new MsgAddExternalRewardDenom().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAddExternalRewardDenom | PlainMessage<MsgAddExternalRewardDenom> | undefined, b: MsgAddExternalRewardDenom | PlainMessage<MsgAddExternalRewardDenom> | undefined): boolean {
    return proto3.util.equals(MsgAddExternalRewardDenom, a, b);
  }
}

/**
 * @generated from message elys.masterchef.MsgAddExternalRewardDenomResponse
 */
export class MsgAddExternalRewardDenomResponse extends Message<MsgAddExternalRewardDenomResponse> {
  constructor(data?: PartialMessage<MsgAddExternalRewardDenomResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.masterchef.MsgAddExternalRewardDenomResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddExternalRewardDenomResponse {
    return new MsgAddExternalRewardDenomResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddExternalRewardDenomResponse {
    return new MsgAddExternalRewardDenomResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddExternalRewardDenomResponse {
    return new MsgAddExternalRewardDenomResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAddExternalRewardDenomResponse | PlainMessage<MsgAddExternalRewardDenomResponse> | undefined, b: MsgAddExternalRewardDenomResponse | PlainMessage<MsgAddExternalRewardDenomResponse> | undefined): boolean {
    return proto3.util.equals(MsgAddExternalRewardDenomResponse, a, b);
  }
}

/**
 * @generated from message elys.masterchef.MsgAddExternalIncentive
 */
export class MsgAddExternalIncentive extends Message<MsgAddExternalIncentive> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string reward_denom = 2;
   */
  rewardDenom = "";

  /**
   * @generated from field: uint64 pool_id = 3;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: int64 from_block = 4;
   */
  fromBlock = protoInt64.zero;

  /**
   * @generated from field: int64 to_block = 5;
   */
  toBlock = protoInt64.zero;

  /**
   * @generated from field: string amount_per_block = 6;
   */
  amountPerBlock = "";

  constructor(data?: PartialMessage<MsgAddExternalIncentive>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.masterchef.MsgAddExternalIncentive";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "reward_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "from_block", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "to_block", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "amount_per_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddExternalIncentive {
    return new MsgAddExternalIncentive().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddExternalIncentive {
    return new MsgAddExternalIncentive().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddExternalIncentive {
    return new MsgAddExternalIncentive().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAddExternalIncentive | PlainMessage<MsgAddExternalIncentive> | undefined, b: MsgAddExternalIncentive | PlainMessage<MsgAddExternalIncentive> | undefined): boolean {
    return proto3.util.equals(MsgAddExternalIncentive, a, b);
  }
}

/**
 * @generated from message elys.masterchef.MsgAddExternalIncentiveResponse
 */
export class MsgAddExternalIncentiveResponse extends Message<MsgAddExternalIncentiveResponse> {
  constructor(data?: PartialMessage<MsgAddExternalIncentiveResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.masterchef.MsgAddExternalIncentiveResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddExternalIncentiveResponse {
    return new MsgAddExternalIncentiveResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddExternalIncentiveResponse {
    return new MsgAddExternalIncentiveResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddExternalIncentiveResponse {
    return new MsgAddExternalIncentiveResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAddExternalIncentiveResponse | PlainMessage<MsgAddExternalIncentiveResponse> | undefined, b: MsgAddExternalIncentiveResponse | PlainMessage<MsgAddExternalIncentiveResponse> | undefined): boolean {
    return proto3.util.equals(MsgAddExternalIncentiveResponse, a, b);
  }
}

/**
 * @generated from message elys.masterchef.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: elys.masterchef.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.masterchef.MsgUpdateParams";
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
 * @generated from message elys.masterchef.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.masterchef.MsgUpdateParamsResponse";
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
 * @generated from message elys.masterchef.PoolMultiplier
 */
export class PoolMultiplier extends Message<PoolMultiplier> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string multiplier = 2;
   */
  multiplier = "";

  constructor(data?: PartialMessage<PoolMultiplier>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.masterchef.PoolMultiplier";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "multiplier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolMultiplier {
    return new PoolMultiplier().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolMultiplier {
    return new PoolMultiplier().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolMultiplier {
    return new PoolMultiplier().fromJsonString(jsonString, options);
  }

  static equals(a: PoolMultiplier | PlainMessage<PoolMultiplier> | undefined, b: PoolMultiplier | PlainMessage<PoolMultiplier> | undefined): boolean {
    return proto3.util.equals(PoolMultiplier, a, b);
  }
}

/**
 * @generated from message elys.masterchef.MsgUpdatePoolMultipliers
 */
export class MsgUpdatePoolMultipliers extends Message<MsgUpdatePoolMultipliers> {
  /**
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: repeated elys.masterchef.PoolMultiplier pool_multipliers = 2;
   */
  poolMultipliers: PoolMultiplier[] = [];

  constructor(data?: PartialMessage<MsgUpdatePoolMultipliers>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.masterchef.MsgUpdatePoolMultipliers";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_multipliers", kind: "message", T: PoolMultiplier, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdatePoolMultipliers {
    return new MsgUpdatePoolMultipliers().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdatePoolMultipliers {
    return new MsgUpdatePoolMultipliers().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdatePoolMultipliers {
    return new MsgUpdatePoolMultipliers().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdatePoolMultipliers | PlainMessage<MsgUpdatePoolMultipliers> | undefined, b: MsgUpdatePoolMultipliers | PlainMessage<MsgUpdatePoolMultipliers> | undefined): boolean {
    return proto3.util.equals(MsgUpdatePoolMultipliers, a, b);
  }
}

/**
 * @generated from message elys.masterchef.MsgUpdatePoolMultipliersResponse
 */
export class MsgUpdatePoolMultipliersResponse extends Message<MsgUpdatePoolMultipliersResponse> {
  constructor(data?: PartialMessage<MsgUpdatePoolMultipliersResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.masterchef.MsgUpdatePoolMultipliersResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdatePoolMultipliersResponse {
    return new MsgUpdatePoolMultipliersResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdatePoolMultipliersResponse {
    return new MsgUpdatePoolMultipliersResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdatePoolMultipliersResponse {
    return new MsgUpdatePoolMultipliersResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdatePoolMultipliersResponse | PlainMessage<MsgUpdatePoolMultipliersResponse> | undefined, b: MsgUpdatePoolMultipliersResponse | PlainMessage<MsgUpdatePoolMultipliersResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdatePoolMultipliersResponse, a, b);
  }
}

/**
 * @generated from message elys.masterchef.MsgClaimRewards
 */
export class MsgClaimRewards extends Message<MsgClaimRewards> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: repeated uint64 pool_ids = 2;
   */
  poolIds: bigint[] = [];

  constructor(data?: PartialMessage<MsgClaimRewards>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.masterchef.MsgClaimRewards";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_ids", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClaimRewards {
    return new MsgClaimRewards().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClaimRewards {
    return new MsgClaimRewards().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClaimRewards {
    return new MsgClaimRewards().fromJsonString(jsonString, options);
  }

  static equals(a: MsgClaimRewards | PlainMessage<MsgClaimRewards> | undefined, b: MsgClaimRewards | PlainMessage<MsgClaimRewards> | undefined): boolean {
    return proto3.util.equals(MsgClaimRewards, a, b);
  }
}

/**
 * @generated from message elys.masterchef.MsgClaimRewardsResponse
 */
export class MsgClaimRewardsResponse extends Message<MsgClaimRewardsResponse> {
  constructor(data?: PartialMessage<MsgClaimRewardsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.masterchef.MsgClaimRewardsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClaimRewardsResponse {
    return new MsgClaimRewardsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClaimRewardsResponse {
    return new MsgClaimRewardsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClaimRewardsResponse {
    return new MsgClaimRewardsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgClaimRewardsResponse | PlainMessage<MsgClaimRewardsResponse> | undefined, b: MsgClaimRewardsResponse | PlainMessage<MsgClaimRewardsResponse> | undefined): boolean {
    return proto3.util.equals(MsgClaimRewardsResponse, a, b);
  }
}

/**
 * @generated from message elys.masterchef.MsgTogglePoolEdenRewards
 */
export class MsgTogglePoolEdenRewards extends Message<MsgTogglePoolEdenRewards> {
  /**
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: uint64 pool_id = 2;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: bool enable = 3;
   */
  enable = false;

  constructor(data?: PartialMessage<MsgTogglePoolEdenRewards>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.masterchef.MsgTogglePoolEdenRewards";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "enable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTogglePoolEdenRewards {
    return new MsgTogglePoolEdenRewards().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTogglePoolEdenRewards {
    return new MsgTogglePoolEdenRewards().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTogglePoolEdenRewards {
    return new MsgTogglePoolEdenRewards().fromJsonString(jsonString, options);
  }

  static equals(a: MsgTogglePoolEdenRewards | PlainMessage<MsgTogglePoolEdenRewards> | undefined, b: MsgTogglePoolEdenRewards | PlainMessage<MsgTogglePoolEdenRewards> | undefined): boolean {
    return proto3.util.equals(MsgTogglePoolEdenRewards, a, b);
  }
}

/**
 * @generated from message elys.masterchef.MsgTogglePoolEdenRewardsResponse
 */
export class MsgTogglePoolEdenRewardsResponse extends Message<MsgTogglePoolEdenRewardsResponse> {
  constructor(data?: PartialMessage<MsgTogglePoolEdenRewardsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.masterchef.MsgTogglePoolEdenRewardsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTogglePoolEdenRewardsResponse {
    return new MsgTogglePoolEdenRewardsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTogglePoolEdenRewardsResponse {
    return new MsgTogglePoolEdenRewardsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTogglePoolEdenRewardsResponse {
    return new MsgTogglePoolEdenRewardsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgTogglePoolEdenRewardsResponse | PlainMessage<MsgTogglePoolEdenRewardsResponse> | undefined, b: MsgTogglePoolEdenRewardsResponse | PlainMessage<MsgTogglePoolEdenRewardsResponse> | undefined): boolean {
    return proto3.util.equals(MsgTogglePoolEdenRewardsResponse, a, b);
  }
}

