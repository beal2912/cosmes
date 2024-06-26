// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/evmos/blob/main/LICENSE)

// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file evmos/vesting/v2/tx.proto (package evmos.vesting.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Period } from "../../../cosmos/vesting/v1beta1/vesting_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * MsgCreateClawbackVestingAccount defines a message that enables creating a
 * ClawbackVestingAccount.
 *
 * @generated from message evmos.vesting.v2.MsgCreateClawbackVestingAccount
 */
export class MsgCreateClawbackVestingAccount extends Message<MsgCreateClawbackVestingAccount> {
  /**
   * funder_address specifies the account that will be able to fund the vesting account
   *
   * @generated from field: string funder_address = 1;
   */
  funderAddress = "";

  /**
   * vesting_address specifies the address that will receive the vesting tokens
   *
   * @generated from field: string vesting_address = 2;
   */
  vestingAddress = "";

  /**
   * enable_gov_clawback specifies whether the governance module can clawback this account
   *
   * @generated from field: bool enable_gov_clawback = 3;
   */
  enableGovClawback = false;

  constructor(data?: PartialMessage<MsgCreateClawbackVestingAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.vesting.v2.MsgCreateClawbackVestingAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "funder_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "vesting_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "enable_gov_clawback", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateClawbackVestingAccount {
    return new MsgCreateClawbackVestingAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateClawbackVestingAccount {
    return new MsgCreateClawbackVestingAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateClawbackVestingAccount {
    return new MsgCreateClawbackVestingAccount().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateClawbackVestingAccount | PlainMessage<MsgCreateClawbackVestingAccount> | undefined, b: MsgCreateClawbackVestingAccount | PlainMessage<MsgCreateClawbackVestingAccount> | undefined): boolean {
    return proto3.util.equals(MsgCreateClawbackVestingAccount, a, b);
  }
}

/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 *
 * @generated from message evmos.vesting.v2.MsgCreateClawbackVestingAccountResponse
 */
export class MsgCreateClawbackVestingAccountResponse extends Message<MsgCreateClawbackVestingAccountResponse> {
  constructor(data?: PartialMessage<MsgCreateClawbackVestingAccountResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.vesting.v2.MsgCreateClawbackVestingAccountResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateClawbackVestingAccountResponse {
    return new MsgCreateClawbackVestingAccountResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateClawbackVestingAccountResponse {
    return new MsgCreateClawbackVestingAccountResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateClawbackVestingAccountResponse {
    return new MsgCreateClawbackVestingAccountResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateClawbackVestingAccountResponse | PlainMessage<MsgCreateClawbackVestingAccountResponse> | undefined, b: MsgCreateClawbackVestingAccountResponse | PlainMessage<MsgCreateClawbackVestingAccountResponse> | undefined): boolean {
    return proto3.util.equals(MsgCreateClawbackVestingAccountResponse, a, b);
  }
}

/**
 * MsgFundVestingAccount defines a message that enables funding an existing clawback
 * vesting account.
 *
 * @generated from message evmos.vesting.v2.MsgFundVestingAccount
 */
export class MsgFundVestingAccount extends Message<MsgFundVestingAccount> {
  /**
   * funder_address specifies the account that funds the vesting account
   *
   * @generated from field: string funder_address = 1;
   */
  funderAddress = "";

  /**
   * vesting_address specifies the account that receives the funds
   *
   * @generated from field: string vesting_address = 2;
   */
  vestingAddress = "";

  /**
   * start_time defines the time at which the vesting period begins
   *
   * @generated from field: google.protobuf.Timestamp start_time = 3;
   */
  startTime?: Timestamp;

  /**
   * lockup_periods defines the unlocking schedule relative to the start_time
   *
   * @generated from field: repeated cosmos.vesting.v1beta1.Period lockup_periods = 4;
   */
  lockupPeriods: Period[] = [];

  /**
   * vesting_periods defines the vesting schedule relative to the start_time
   *
   * @generated from field: repeated cosmos.vesting.v1beta1.Period vesting_periods = 5;
   */
  vestingPeriods: Period[] = [];

  constructor(data?: PartialMessage<MsgFundVestingAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.vesting.v2.MsgFundVestingAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "funder_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "vesting_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "start_time", kind: "message", T: Timestamp },
    { no: 4, name: "lockup_periods", kind: "message", T: Period, repeated: true },
    { no: 5, name: "vesting_periods", kind: "message", T: Period, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFundVestingAccount {
    return new MsgFundVestingAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFundVestingAccount {
    return new MsgFundVestingAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFundVestingAccount {
    return new MsgFundVestingAccount().fromJsonString(jsonString, options);
  }

  static equals(a: MsgFundVestingAccount | PlainMessage<MsgFundVestingAccount> | undefined, b: MsgFundVestingAccount | PlainMessage<MsgFundVestingAccount> | undefined): boolean {
    return proto3.util.equals(MsgFundVestingAccount, a, b);
  }
}

/**
 * MsgFundVestingAccountResponse defines the
 * MsgFundVestingAccount response type.
 *
 * @generated from message evmos.vesting.v2.MsgFundVestingAccountResponse
 */
export class MsgFundVestingAccountResponse extends Message<MsgFundVestingAccountResponse> {
  constructor(data?: PartialMessage<MsgFundVestingAccountResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.vesting.v2.MsgFundVestingAccountResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFundVestingAccountResponse {
    return new MsgFundVestingAccountResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFundVestingAccountResponse {
    return new MsgFundVestingAccountResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFundVestingAccountResponse {
    return new MsgFundVestingAccountResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgFundVestingAccountResponse | PlainMessage<MsgFundVestingAccountResponse> | undefined, b: MsgFundVestingAccountResponse | PlainMessage<MsgFundVestingAccountResponse> | undefined): boolean {
    return proto3.util.equals(MsgFundVestingAccountResponse, a, b);
  }
}

/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 *
 * @generated from message evmos.vesting.v2.MsgClawback
 */
export class MsgClawback extends Message<MsgClawback> {
  /**
   * funder_address is the address which funded the account
   *
   * @generated from field: string funder_address = 1;
   */
  funderAddress = "";

  /**
   * account_address is the address of the ClawbackVestingAccount to claw back
   * from.
   *
   * @generated from field: string account_address = 2;
   */
  accountAddress = "";

  /**
   * dest_address specifies where the clawed-back tokens should be transferred
   * to. If empty, the tokens will be transferred back to the original funder of
   * the account.
   *
   * @generated from field: string dest_address = 3;
   */
  destAddress = "";

  constructor(data?: PartialMessage<MsgClawback>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.vesting.v2.MsgClawback";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "funder_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "account_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "dest_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClawback {
    return new MsgClawback().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClawback {
    return new MsgClawback().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClawback {
    return new MsgClawback().fromJsonString(jsonString, options);
  }

  static equals(a: MsgClawback | PlainMessage<MsgClawback> | undefined, b: MsgClawback | PlainMessage<MsgClawback> | undefined): boolean {
    return proto3.util.equals(MsgClawback, a, b);
  }
}

/**
 * MsgClawbackResponse defines the MsgClawback response type.
 *
 * @generated from message evmos.vesting.v2.MsgClawbackResponse
 */
export class MsgClawbackResponse extends Message<MsgClawbackResponse> {
  /**
   * coins is the slice of clawed back coins
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 1;
   */
  coins: Coin[] = [];

  constructor(data?: PartialMessage<MsgClawbackResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.vesting.v2.MsgClawbackResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "coins", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClawbackResponse {
    return new MsgClawbackResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClawbackResponse {
    return new MsgClawbackResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClawbackResponse {
    return new MsgClawbackResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgClawbackResponse | PlainMessage<MsgClawbackResponse> | undefined, b: MsgClawbackResponse | PlainMessage<MsgClawbackResponse> | undefined): boolean {
    return proto3.util.equals(MsgClawbackResponse, a, b);
  }
}

/**
 * MsgUpdateVestingFunder defines a message that updates the funder account of a
 * ClawbackVestingAccount.
 *
 * @generated from message evmos.vesting.v2.MsgUpdateVestingFunder
 */
export class MsgUpdateVestingFunder extends Message<MsgUpdateVestingFunder> {
  /**
   * funder_address is the current funder address of the ClawbackVestingAccount
   *
   * @generated from field: string funder_address = 1;
   */
  funderAddress = "";

  /**
   * new_funder_address is the new address to replace the existing funder_address
   *
   * @generated from field: string new_funder_address = 2;
   */
  newFunderAddress = "";

  /**
   * vesting_address is the address of the ClawbackVestingAccount being updated
   *
   * @generated from field: string vesting_address = 3;
   */
  vestingAddress = "";

  constructor(data?: PartialMessage<MsgUpdateVestingFunder>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.vesting.v2.MsgUpdateVestingFunder";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "funder_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "new_funder_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "vesting_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateVestingFunder {
    return new MsgUpdateVestingFunder().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateVestingFunder {
    return new MsgUpdateVestingFunder().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateVestingFunder {
    return new MsgUpdateVestingFunder().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateVestingFunder | PlainMessage<MsgUpdateVestingFunder> | undefined, b: MsgUpdateVestingFunder | PlainMessage<MsgUpdateVestingFunder> | undefined): boolean {
    return proto3.util.equals(MsgUpdateVestingFunder, a, b);
  }
}

/**
 * MsgUpdateVestingFunderResponse defines the MsgUpdateVestingFunder response
 * type.
 *
 * @generated from message evmos.vesting.v2.MsgUpdateVestingFunderResponse
 */
export class MsgUpdateVestingFunderResponse extends Message<MsgUpdateVestingFunderResponse> {
  constructor(data?: PartialMessage<MsgUpdateVestingFunderResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.vesting.v2.MsgUpdateVestingFunderResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateVestingFunderResponse {
    return new MsgUpdateVestingFunderResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateVestingFunderResponse {
    return new MsgUpdateVestingFunderResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateVestingFunderResponse {
    return new MsgUpdateVestingFunderResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateVestingFunderResponse | PlainMessage<MsgUpdateVestingFunderResponse> | undefined, b: MsgUpdateVestingFunderResponse | PlainMessage<MsgUpdateVestingFunderResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateVestingFunderResponse, a, b);
  }
}

/**
 * MsgConvertVestingAccount defines a message that enables converting a vesting account to an eth account
 *
 * @generated from message evmos.vesting.v2.MsgConvertVestingAccount
 */
export class MsgConvertVestingAccount extends Message<MsgConvertVestingAccount> {
  /**
   * vesting_address is the address of the vesting account to convert
   *
   * @generated from field: string vesting_address = 1;
   */
  vestingAddress = "";

  constructor(data?: PartialMessage<MsgConvertVestingAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.vesting.v2.MsgConvertVestingAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "vesting_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConvertVestingAccount {
    return new MsgConvertVestingAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConvertVestingAccount {
    return new MsgConvertVestingAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConvertVestingAccount {
    return new MsgConvertVestingAccount().fromJsonString(jsonString, options);
  }

  static equals(a: MsgConvertVestingAccount | PlainMessage<MsgConvertVestingAccount> | undefined, b: MsgConvertVestingAccount | PlainMessage<MsgConvertVestingAccount> | undefined): boolean {
    return proto3.util.equals(MsgConvertVestingAccount, a, b);
  }
}

/**
 * MsgConvertVestingAccountResponse defines the MsgConvertVestingAccount response type.
 *
 * @generated from message evmos.vesting.v2.MsgConvertVestingAccountResponse
 */
export class MsgConvertVestingAccountResponse extends Message<MsgConvertVestingAccountResponse> {
  constructor(data?: PartialMessage<MsgConvertVestingAccountResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.vesting.v2.MsgConvertVestingAccountResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConvertVestingAccountResponse {
    return new MsgConvertVestingAccountResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConvertVestingAccountResponse {
    return new MsgConvertVestingAccountResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConvertVestingAccountResponse {
    return new MsgConvertVestingAccountResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgConvertVestingAccountResponse | PlainMessage<MsgConvertVestingAccountResponse> | undefined, b: MsgConvertVestingAccountResponse | PlainMessage<MsgConvertVestingAccountResponse> | undefined): boolean {
    return proto3.util.equals(MsgConvertVestingAccountResponse, a, b);
  }
}

