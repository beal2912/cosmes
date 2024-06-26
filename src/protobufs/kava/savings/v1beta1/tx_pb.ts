// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/savings/v1beta1/tx.proto (package kava.savings.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * MsgDeposit defines the Msg/Deposit request type.
 *
 * @generated from message kava.savings.v1beta1.MsgDeposit
 */
export class MsgDeposit extends Message<MsgDeposit> {
  /**
   * @generated from field: string depositor = 1;
   */
  depositor = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 2;
   */
  amount: Coin[] = [];

  constructor(data?: PartialMessage<MsgDeposit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.savings.v1beta1.MsgDeposit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDeposit {
    return new MsgDeposit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDeposit {
    return new MsgDeposit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDeposit {
    return new MsgDeposit().fromJsonString(jsonString, options);
  }

  static equals(a: MsgDeposit | PlainMessage<MsgDeposit> | undefined, b: MsgDeposit | PlainMessage<MsgDeposit> | undefined): boolean {
    return proto3.util.equals(MsgDeposit, a, b);
  }
}

/**
 * MsgDepositResponse defines the Msg/Deposit response type.
 *
 * @generated from message kava.savings.v1beta1.MsgDepositResponse
 */
export class MsgDepositResponse extends Message<MsgDepositResponse> {
  constructor(data?: PartialMessage<MsgDepositResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.savings.v1beta1.MsgDepositResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDepositResponse {
    return new MsgDepositResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDepositResponse {
    return new MsgDepositResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDepositResponse {
    return new MsgDepositResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgDepositResponse | PlainMessage<MsgDepositResponse> | undefined, b: MsgDepositResponse | PlainMessage<MsgDepositResponse> | undefined): boolean {
    return proto3.util.equals(MsgDepositResponse, a, b);
  }
}

/**
 * MsgWithdraw defines the Msg/Withdraw request type.
 *
 * @generated from message kava.savings.v1beta1.MsgWithdraw
 */
export class MsgWithdraw extends Message<MsgWithdraw> {
  /**
   * @generated from field: string depositor = 1;
   */
  depositor = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 2;
   */
  amount: Coin[] = [];

  constructor(data?: PartialMessage<MsgWithdraw>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.savings.v1beta1.MsgWithdraw";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdraw {
    return new MsgWithdraw().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdraw {
    return new MsgWithdraw().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdraw {
    return new MsgWithdraw().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdraw | PlainMessage<MsgWithdraw> | undefined, b: MsgWithdraw | PlainMessage<MsgWithdraw> | undefined): boolean {
    return proto3.util.equals(MsgWithdraw, a, b);
  }
}

/**
 * MsgWithdrawResponse defines the Msg/Withdraw response type.
 *
 * @generated from message kava.savings.v1beta1.MsgWithdrawResponse
 */
export class MsgWithdrawResponse extends Message<MsgWithdrawResponse> {
  constructor(data?: PartialMessage<MsgWithdrawResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.savings.v1beta1.MsgWithdrawResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawResponse {
    return new MsgWithdrawResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawResponse {
    return new MsgWithdrawResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawResponse {
    return new MsgWithdrawResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawResponse | PlainMessage<MsgWithdrawResponse> | undefined, b: MsgWithdrawResponse | PlainMessage<MsgWithdrawResponse> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawResponse, a, b);
  }
}

