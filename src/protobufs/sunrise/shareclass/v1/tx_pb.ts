// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file sunrise/shareclass/v1/tx.proto (package sunrise.shareclass.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { CommissionRates, Description } from "../../../cosmos/staking/v1beta1/staking_pb.js";

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * @generated from message sunrise.shareclass.v1.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   *
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: sunrise.shareclass.v1.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.shareclass.v1.MsgUpdateParams";
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
 * @generated from message sunrise.shareclass.v1.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.shareclass.v1.MsgUpdateParamsResponse";
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
 * MsgNonVotingDelegate
 *
 * @generated from message sunrise.shareclass.v1.MsgNonVotingDelegate
 */
export class MsgNonVotingDelegate extends Message<MsgNonVotingDelegate> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string validator_address = 2;
   */
  validatorAddress = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<MsgNonVotingDelegate>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.shareclass.v1.MsgNonVotingDelegate";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgNonVotingDelegate {
    return new MsgNonVotingDelegate().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgNonVotingDelegate {
    return new MsgNonVotingDelegate().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgNonVotingDelegate {
    return new MsgNonVotingDelegate().fromJsonString(jsonString, options);
  }

  static equals(a: MsgNonVotingDelegate | PlainMessage<MsgNonVotingDelegate> | undefined, b: MsgNonVotingDelegate | PlainMessage<MsgNonVotingDelegate> | undefined): boolean {
    return proto3.util.equals(MsgNonVotingDelegate, a, b);
  }
}

/**
 * MsgNonVotingDelegateResponse
 *
 * @generated from message sunrise.shareclass.v1.MsgNonVotingDelegateResponse
 */
export class MsgNonVotingDelegateResponse extends Message<MsgNonVotingDelegateResponse> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin share = 1;
   */
  share: Coin[] = [];

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin rewards = 2;
   */
  rewards: Coin[] = [];

  constructor(data?: PartialMessage<MsgNonVotingDelegateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.shareclass.v1.MsgNonVotingDelegateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "share", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "rewards", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgNonVotingDelegateResponse {
    return new MsgNonVotingDelegateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgNonVotingDelegateResponse {
    return new MsgNonVotingDelegateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgNonVotingDelegateResponse {
    return new MsgNonVotingDelegateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgNonVotingDelegateResponse | PlainMessage<MsgNonVotingDelegateResponse> | undefined, b: MsgNonVotingDelegateResponse | PlainMessage<MsgNonVotingDelegateResponse> | undefined): boolean {
    return proto3.util.equals(MsgNonVotingDelegateResponse, a, b);
  }
}

/**
 * MsgNonVotingUndelegate
 *
 * @generated from message sunrise.shareclass.v1.MsgNonVotingUndelegate
 */
export class MsgNonVotingUndelegate extends Message<MsgNonVotingUndelegate> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string validator_address = 2;
   */
  validatorAddress = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
   */
  amount?: Coin;

  /**
   * @generated from field: string recipient = 4;
   */
  recipient = "";

  constructor(data?: PartialMessage<MsgNonVotingUndelegate>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.shareclass.v1.MsgNonVotingUndelegate";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin },
    { no: 4, name: "recipient", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgNonVotingUndelegate {
    return new MsgNonVotingUndelegate().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgNonVotingUndelegate {
    return new MsgNonVotingUndelegate().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgNonVotingUndelegate {
    return new MsgNonVotingUndelegate().fromJsonString(jsonString, options);
  }

  static equals(a: MsgNonVotingUndelegate | PlainMessage<MsgNonVotingUndelegate> | undefined, b: MsgNonVotingUndelegate | PlainMessage<MsgNonVotingUndelegate> | undefined): boolean {
    return proto3.util.equals(MsgNonVotingUndelegate, a, b);
  }
}

/**
 * MsgNonVotingUndelegateResponse
 *
 * @generated from message sunrise.shareclass.v1.MsgNonVotingUndelegateResponse
 */
export class MsgNonVotingUndelegateResponse extends Message<MsgNonVotingUndelegateResponse> {
  /**
   * @generated from field: google.protobuf.Timestamp completion_time = 1;
   */
  completionTime?: Timestamp;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
   */
  amount?: Coin;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin rewards = 3;
   */
  rewards: Coin[] = [];

  constructor(data?: PartialMessage<MsgNonVotingUndelegateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.shareclass.v1.MsgNonVotingUndelegateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "completion_time", kind: "message", T: Timestamp },
    { no: 2, name: "amount", kind: "message", T: Coin },
    { no: 3, name: "rewards", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgNonVotingUndelegateResponse {
    return new MsgNonVotingUndelegateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgNonVotingUndelegateResponse {
    return new MsgNonVotingUndelegateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgNonVotingUndelegateResponse {
    return new MsgNonVotingUndelegateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgNonVotingUndelegateResponse | PlainMessage<MsgNonVotingUndelegateResponse> | undefined, b: MsgNonVotingUndelegateResponse | PlainMessage<MsgNonVotingUndelegateResponse> | undefined): boolean {
    return proto3.util.equals(MsgNonVotingUndelegateResponse, a, b);
  }
}

/**
 * MsgClaimRewards
 *
 * @generated from message sunrise.shareclass.v1.MsgClaimRewards
 */
export class MsgClaimRewards extends Message<MsgClaimRewards> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string validator_address = 2;
   */
  validatorAddress = "";

  constructor(data?: PartialMessage<MsgClaimRewards>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.shareclass.v1.MsgClaimRewards";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * MsgClaimRewardsResponse
 *
 * @generated from message sunrise.shareclass.v1.MsgClaimRewardsResponse
 */
export class MsgClaimRewardsResponse extends Message<MsgClaimRewardsResponse> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
   */
  amount: Coin[] = [];

  constructor(data?: PartialMessage<MsgClaimRewardsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.shareclass.v1.MsgClaimRewardsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin, repeated: true },
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
 * MsgCreateValidator
 *
 * @generated from message sunrise.shareclass.v1.MsgCreateValidator
 */
export class MsgCreateValidator extends Message<MsgCreateValidator> {
  /**
   * @generated from field: cosmos.staking.v1beta1.Description description = 1;
   */
  description?: Description;

  /**
   * @generated from field: cosmos.staking.v1beta1.CommissionRates commission = 2;
   */
  commission?: CommissionRates;

  /**
   * @generated from field: string min_self_delegation = 3;
   */
  minSelfDelegation = "";

  /**
   * @generated from field: string validator_address = 4;
   */
  validatorAddress = "";

  /**
   * @generated from field: google.protobuf.Any pubkey = 5;
   */
  pubkey?: Any;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 6;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<MsgCreateValidator>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.shareclass.v1.MsgCreateValidator";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "description", kind: "message", T: Description },
    { no: 2, name: "commission", kind: "message", T: CommissionRates },
    { no: 3, name: "min_self_delegation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "pubkey", kind: "message", T: Any },
    { no: 6, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateValidator {
    return new MsgCreateValidator().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateValidator {
    return new MsgCreateValidator().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateValidator {
    return new MsgCreateValidator().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateValidator | PlainMessage<MsgCreateValidator> | undefined, b: MsgCreateValidator | PlainMessage<MsgCreateValidator> | undefined): boolean {
    return proto3.util.equals(MsgCreateValidator, a, b);
  }
}

/**
 * MsgCreateValidatorResponse
 *
 * @generated from message sunrise.shareclass.v1.MsgCreateValidatorResponse
 */
export class MsgCreateValidatorResponse extends Message<MsgCreateValidatorResponse> {
  constructor(data?: PartialMessage<MsgCreateValidatorResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.shareclass.v1.MsgCreateValidatorResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateValidatorResponse {
    return new MsgCreateValidatorResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateValidatorResponse {
    return new MsgCreateValidatorResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateValidatorResponse {
    return new MsgCreateValidatorResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateValidatorResponse | PlainMessage<MsgCreateValidatorResponse> | undefined, b: MsgCreateValidatorResponse | PlainMessage<MsgCreateValidatorResponse> | undefined): boolean {
    return proto3.util.equals(MsgCreateValidatorResponse, a, b);
  }
}

