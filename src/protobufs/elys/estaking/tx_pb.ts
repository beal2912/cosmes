// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/estaking/tx.proto (package elys.estaking, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * @generated from message elys.estaking.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: elys.estaking.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.estaking.MsgUpdateParams";
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
 * @generated from message elys.estaking.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.estaking.MsgUpdateParamsResponse";
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
 * MsgWithdrawReward represents delegation withdrawal to a delegator from a
 * single validator.
 *
 * @generated from message elys.estaking.MsgWithdrawReward
 */
export class MsgWithdrawReward extends Message<MsgWithdrawReward> {
  /**
   * @generated from field: string delegator_address = 1;
   */
  delegatorAddress = "";

  /**
   * @generated from field: string validator_address = 2;
   */
  validatorAddress = "";

  constructor(data?: PartialMessage<MsgWithdrawReward>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.estaking.MsgWithdrawReward";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawReward {
    return new MsgWithdrawReward().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawReward {
    return new MsgWithdrawReward().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawReward {
    return new MsgWithdrawReward().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawReward | PlainMessage<MsgWithdrawReward> | undefined, b: MsgWithdrawReward | PlainMessage<MsgWithdrawReward> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawReward, a, b);
  }
}

/**
 * MsgWithdrawRewardResponse defines the Msg/WithdrawDelegatorReward response
 * type.
 *
 * @generated from message elys.estaking.MsgWithdrawRewardResponse
 */
export class MsgWithdrawRewardResponse extends Message<MsgWithdrawRewardResponse> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
   */
  amount: Coin[] = [];

  constructor(data?: PartialMessage<MsgWithdrawRewardResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.estaking.MsgWithdrawRewardResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawRewardResponse {
    return new MsgWithdrawRewardResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawRewardResponse {
    return new MsgWithdrawRewardResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawRewardResponse {
    return new MsgWithdrawRewardResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawRewardResponse | PlainMessage<MsgWithdrawRewardResponse> | undefined, b: MsgWithdrawRewardResponse | PlainMessage<MsgWithdrawRewardResponse> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawRewardResponse, a, b);
  }
}

/**
 * MsgWithdrawElysStakingRewards represents delegation withdrawal to a delegator
 * from all the validators.
 *
 * @generated from message elys.estaking.MsgWithdrawElysStakingRewards
 */
export class MsgWithdrawElysStakingRewards extends Message<MsgWithdrawElysStakingRewards> {
  /**
   * @generated from field: string delegator_address = 1;
   */
  delegatorAddress = "";

  constructor(data?: PartialMessage<MsgWithdrawElysStakingRewards>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.estaking.MsgWithdrawElysStakingRewards";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawElysStakingRewards {
    return new MsgWithdrawElysStakingRewards().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawElysStakingRewards {
    return new MsgWithdrawElysStakingRewards().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawElysStakingRewards {
    return new MsgWithdrawElysStakingRewards().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawElysStakingRewards | PlainMessage<MsgWithdrawElysStakingRewards> | undefined, b: MsgWithdrawElysStakingRewards | PlainMessage<MsgWithdrawElysStakingRewards> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawElysStakingRewards, a, b);
  }
}

/**
 * MsgWithdrawElysStakingRewards defines the Msg/WithdrawElysStakingRewards
 * response type.
 *
 * @generated from message elys.estaking.MsgWithdrawElysStakingRewardsResponse
 */
export class MsgWithdrawElysStakingRewardsResponse extends Message<MsgWithdrawElysStakingRewardsResponse> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
   */
  amount: Coin[] = [];

  constructor(data?: PartialMessage<MsgWithdrawElysStakingRewardsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.estaking.MsgWithdrawElysStakingRewardsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawElysStakingRewardsResponse {
    return new MsgWithdrawElysStakingRewardsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawElysStakingRewardsResponse {
    return new MsgWithdrawElysStakingRewardsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawElysStakingRewardsResponse {
    return new MsgWithdrawElysStakingRewardsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawElysStakingRewardsResponse | PlainMessage<MsgWithdrawElysStakingRewardsResponse> | undefined, b: MsgWithdrawElysStakingRewardsResponse | PlainMessage<MsgWithdrawElysStakingRewardsResponse> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawElysStakingRewardsResponse, a, b);
  }
}

/**
 * MsgWithdrawAllRewards represents delegation withdrawal to a delegator from
 * all the validators and Eden/EdenB commitment.
 *
 * @generated from message elys.estaking.MsgWithdrawAllRewards
 */
export class MsgWithdrawAllRewards extends Message<MsgWithdrawAllRewards> {
  /**
   * @generated from field: string delegator_address = 1;
   */
  delegatorAddress = "";

  constructor(data?: PartialMessage<MsgWithdrawAllRewards>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.estaking.MsgWithdrawAllRewards";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawAllRewards {
    return new MsgWithdrawAllRewards().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawAllRewards {
    return new MsgWithdrawAllRewards().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawAllRewards {
    return new MsgWithdrawAllRewards().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawAllRewards | PlainMessage<MsgWithdrawAllRewards> | undefined, b: MsgWithdrawAllRewards | PlainMessage<MsgWithdrawAllRewards> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawAllRewards, a, b);
  }
}

/**
 * MsgWithdrawAllRewardsResponse defines the Msg/WithdrawAllRewards response
 * type.
 *
 * @generated from message elys.estaking.MsgWithdrawAllRewardsResponse
 */
export class MsgWithdrawAllRewardsResponse extends Message<MsgWithdrawAllRewardsResponse> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
   */
  amount: Coin[] = [];

  constructor(data?: PartialMessage<MsgWithdrawAllRewardsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.estaking.MsgWithdrawAllRewardsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawAllRewardsResponse {
    return new MsgWithdrawAllRewardsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawAllRewardsResponse {
    return new MsgWithdrawAllRewardsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawAllRewardsResponse {
    return new MsgWithdrawAllRewardsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawAllRewardsResponse | PlainMessage<MsgWithdrawAllRewardsResponse> | undefined, b: MsgWithdrawAllRewardsResponse | PlainMessage<MsgWithdrawAllRewardsResponse> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawAllRewardsResponse, a, b);
  }
}

