// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/bep3/v1beta1/tx.proto (package kava.bep3.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * MsgCreateAtomicSwap defines the Msg/CreateAtomicSwap request type.
 *
 * @generated from message kava.bep3.v1beta1.MsgCreateAtomicSwap
 */
export class MsgCreateAtomicSwap extends Message<MsgCreateAtomicSwap> {
  /**
   * @generated from field: string from = 1;
   */
  from = "";

  /**
   * @generated from field: string to = 2;
   */
  to = "";

  /**
   * @generated from field: string recipient_other_chain = 3;
   */
  recipientOtherChain = "";

  /**
   * @generated from field: string sender_other_chain = 4;
   */
  senderOtherChain = "";

  /**
   * @generated from field: string random_number_hash = 5;
   */
  randomNumberHash = "";

  /**
   * @generated from field: int64 timestamp = 6;
   */
  timestamp = protoInt64.zero;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 7;
   */
  amount: Coin[] = [];

  /**
   * @generated from field: uint64 height_span = 8;
   */
  heightSpan = protoInt64.zero;

  constructor(data?: PartialMessage<MsgCreateAtomicSwap>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.MsgCreateAtomicSwap";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "from", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "recipient_other_chain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "sender_other_chain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "random_number_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "amount", kind: "message", T: Coin, repeated: true },
    { no: 8, name: "height_span", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateAtomicSwap {
    return new MsgCreateAtomicSwap().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateAtomicSwap {
    return new MsgCreateAtomicSwap().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateAtomicSwap {
    return new MsgCreateAtomicSwap().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateAtomicSwap | PlainMessage<MsgCreateAtomicSwap> | undefined, b: MsgCreateAtomicSwap | PlainMessage<MsgCreateAtomicSwap> | undefined): boolean {
    return proto3.util.equals(MsgCreateAtomicSwap, a, b);
  }
}

/**
 * MsgCreateAtomicSwapResponse defines the Msg/CreateAtomicSwap response type.
 *
 * @generated from message kava.bep3.v1beta1.MsgCreateAtomicSwapResponse
 */
export class MsgCreateAtomicSwapResponse extends Message<MsgCreateAtomicSwapResponse> {
  constructor(data?: PartialMessage<MsgCreateAtomicSwapResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.MsgCreateAtomicSwapResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateAtomicSwapResponse {
    return new MsgCreateAtomicSwapResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateAtomicSwapResponse {
    return new MsgCreateAtomicSwapResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateAtomicSwapResponse {
    return new MsgCreateAtomicSwapResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateAtomicSwapResponse | PlainMessage<MsgCreateAtomicSwapResponse> | undefined, b: MsgCreateAtomicSwapResponse | PlainMessage<MsgCreateAtomicSwapResponse> | undefined): boolean {
    return proto3.util.equals(MsgCreateAtomicSwapResponse, a, b);
  }
}

/**
 * MsgClaimAtomicSwap defines the Msg/ClaimAtomicSwap request type.
 *
 * @generated from message kava.bep3.v1beta1.MsgClaimAtomicSwap
 */
export class MsgClaimAtomicSwap extends Message<MsgClaimAtomicSwap> {
  /**
   * @generated from field: string from = 1;
   */
  from = "";

  /**
   * @generated from field: string swap_id = 2;
   */
  swapId = "";

  /**
   * @generated from field: string random_number = 3;
   */
  randomNumber = "";

  constructor(data?: PartialMessage<MsgClaimAtomicSwap>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.MsgClaimAtomicSwap";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "from", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "swap_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "random_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClaimAtomicSwap {
    return new MsgClaimAtomicSwap().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClaimAtomicSwap {
    return new MsgClaimAtomicSwap().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClaimAtomicSwap {
    return new MsgClaimAtomicSwap().fromJsonString(jsonString, options);
  }

  static equals(a: MsgClaimAtomicSwap | PlainMessage<MsgClaimAtomicSwap> | undefined, b: MsgClaimAtomicSwap | PlainMessage<MsgClaimAtomicSwap> | undefined): boolean {
    return proto3.util.equals(MsgClaimAtomicSwap, a, b);
  }
}

/**
 * MsgClaimAtomicSwapResponse defines the Msg/ClaimAtomicSwap response type.
 *
 * @generated from message kava.bep3.v1beta1.MsgClaimAtomicSwapResponse
 */
export class MsgClaimAtomicSwapResponse extends Message<MsgClaimAtomicSwapResponse> {
  constructor(data?: PartialMessage<MsgClaimAtomicSwapResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.MsgClaimAtomicSwapResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClaimAtomicSwapResponse {
    return new MsgClaimAtomicSwapResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClaimAtomicSwapResponse {
    return new MsgClaimAtomicSwapResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClaimAtomicSwapResponse {
    return new MsgClaimAtomicSwapResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgClaimAtomicSwapResponse | PlainMessage<MsgClaimAtomicSwapResponse> | undefined, b: MsgClaimAtomicSwapResponse | PlainMessage<MsgClaimAtomicSwapResponse> | undefined): boolean {
    return proto3.util.equals(MsgClaimAtomicSwapResponse, a, b);
  }
}

/**
 * MsgRefundAtomicSwap defines the Msg/RefundAtomicSwap request type.
 *
 * @generated from message kava.bep3.v1beta1.MsgRefundAtomicSwap
 */
export class MsgRefundAtomicSwap extends Message<MsgRefundAtomicSwap> {
  /**
   * @generated from field: string from = 1;
   */
  from = "";

  /**
   * @generated from field: string swap_id = 2;
   */
  swapId = "";

  constructor(data?: PartialMessage<MsgRefundAtomicSwap>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.MsgRefundAtomicSwap";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "from", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "swap_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRefundAtomicSwap {
    return new MsgRefundAtomicSwap().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRefundAtomicSwap {
    return new MsgRefundAtomicSwap().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRefundAtomicSwap {
    return new MsgRefundAtomicSwap().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRefundAtomicSwap | PlainMessage<MsgRefundAtomicSwap> | undefined, b: MsgRefundAtomicSwap | PlainMessage<MsgRefundAtomicSwap> | undefined): boolean {
    return proto3.util.equals(MsgRefundAtomicSwap, a, b);
  }
}

/**
 * MsgRefundAtomicSwapResponse defines the Msg/RefundAtomicSwap response type.
 *
 * @generated from message kava.bep3.v1beta1.MsgRefundAtomicSwapResponse
 */
export class MsgRefundAtomicSwapResponse extends Message<MsgRefundAtomicSwapResponse> {
  constructor(data?: PartialMessage<MsgRefundAtomicSwapResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.MsgRefundAtomicSwapResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRefundAtomicSwapResponse {
    return new MsgRefundAtomicSwapResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRefundAtomicSwapResponse {
    return new MsgRefundAtomicSwapResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRefundAtomicSwapResponse {
    return new MsgRefundAtomicSwapResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRefundAtomicSwapResponse | PlainMessage<MsgRefundAtomicSwapResponse> | undefined, b: MsgRefundAtomicSwapResponse | PlainMessage<MsgRefundAtomicSwapResponse> | undefined): boolean {
    return proto3.util.equals(MsgRefundAtomicSwapResponse, a, b);
  }
}
