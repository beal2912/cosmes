// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/evmos/blob/main/LICENSE)

// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file evmos/vesting/v1/vesting.proto (package evmos.vesting.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { BaseVestingAccount, Period } from "../../../cosmos/vesting/v1beta1/vesting_pb.js";

/**
 * ClawbackVestingAccount implements the VestingAccount interface. It provides
 * an account that can hold contributions subject to "lockup" (like a
 * PeriodicVestingAccount), or vesting which is subject to clawback
 * of unvested tokens, or a combination (tokens vest, but are still locked).
 *
 * @generated from message evmos.vesting.v1.ClawbackVestingAccount
 */
export class ClawbackVestingAccount extends Message<ClawbackVestingAccount> {
  /**
   * base_vesting_account implements the VestingAccount interface. It contains
   * all the necessary fields needed for any vesting account implementation
   *
   * @generated from field: cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account = 1;
   */
  baseVestingAccount?: BaseVestingAccount;

  /**
   * funder_address specifies the account which can perform clawback
   *
   * @generated from field: string funder_address = 2;
   */
  funderAddress = "";

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

  constructor(data?: PartialMessage<ClawbackVestingAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.vesting.v1.ClawbackVestingAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_vesting_account", kind: "message", T: BaseVestingAccount },
    { no: 2, name: "funder_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "start_time", kind: "message", T: Timestamp },
    { no: 4, name: "lockup_periods", kind: "message", T: Period, repeated: true },
    { no: 5, name: "vesting_periods", kind: "message", T: Period, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClawbackVestingAccount {
    return new ClawbackVestingAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClawbackVestingAccount {
    return new ClawbackVestingAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClawbackVestingAccount {
    return new ClawbackVestingAccount().fromJsonString(jsonString, options);
  }

  static equals(a: ClawbackVestingAccount | PlainMessage<ClawbackVestingAccount> | undefined, b: ClawbackVestingAccount | PlainMessage<ClawbackVestingAccount> | undefined): boolean {
    return proto3.util.equals(ClawbackVestingAccount, a, b);
  }
}

