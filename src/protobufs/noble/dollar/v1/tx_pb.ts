// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file noble/dollar/v1/tx.proto (package noble.dollar.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * MsgClaimYield is a message holders of the Noble Dollar can use to claim their yield.
 *
 * @generated from message noble.dollar.v1.MsgClaimYield
 */
export class MsgClaimYield extends Message<MsgClaimYield> {
  /**
   * @generated from field: string signer = 1;
   */
  signer = "";

  constructor(data?: PartialMessage<MsgClaimYield>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "noble.dollar.v1.MsgClaimYield";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClaimYield {
    return new MsgClaimYield().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClaimYield {
    return new MsgClaimYield().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClaimYield {
    return new MsgClaimYield().fromJsonString(jsonString, options);
  }

  static equals(a: MsgClaimYield | PlainMessage<MsgClaimYield> | undefined, b: MsgClaimYield | PlainMessage<MsgClaimYield> | undefined): boolean {
    return proto3.util.equals(MsgClaimYield, a, b);
  }
}

/**
 * MsgClaimYieldResponse is the response of the ClaimYield message.
 *
 * @generated from message noble.dollar.v1.MsgClaimYieldResponse
 */
export class MsgClaimYieldResponse extends Message<MsgClaimYieldResponse> {
  constructor(data?: PartialMessage<MsgClaimYieldResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "noble.dollar.v1.MsgClaimYieldResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClaimYieldResponse {
    return new MsgClaimYieldResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClaimYieldResponse {
    return new MsgClaimYieldResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClaimYieldResponse {
    return new MsgClaimYieldResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgClaimYieldResponse | PlainMessage<MsgClaimYieldResponse> | undefined, b: MsgClaimYieldResponse | PlainMessage<MsgClaimYieldResponse> | undefined): boolean {
    return proto3.util.equals(MsgClaimYieldResponse, a, b);
  }
}

/**
 * MsgSetPausedState allows the authority to configure the Noble Dollar Portal paused state.
 *
 * @generated from message noble.dollar.v1.MsgSetPausedState
 */
export class MsgSetPausedState extends Message<MsgSetPausedState> {
  /**
   * @generated from field: string signer = 1;
   */
  signer = "";

  /**
   * @generated from field: bool paused = 2;
   */
  paused = false;

  constructor(data?: PartialMessage<MsgSetPausedState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "noble.dollar.v1.MsgSetPausedState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "paused", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetPausedState {
    return new MsgSetPausedState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetPausedState {
    return new MsgSetPausedState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetPausedState {
    return new MsgSetPausedState().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSetPausedState | PlainMessage<MsgSetPausedState> | undefined, b: MsgSetPausedState | PlainMessage<MsgSetPausedState> | undefined): boolean {
    return proto3.util.equals(MsgSetPausedState, a, b);
  }
}

/**
 * MsgSetPausedStateResponse is the response of the SetPausedState message.
 *
 * @generated from message noble.dollar.v1.MsgSetPausedStateResponse
 */
export class MsgSetPausedStateResponse extends Message<MsgSetPausedStateResponse> {
  constructor(data?: PartialMessage<MsgSetPausedStateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "noble.dollar.v1.MsgSetPausedStateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetPausedStateResponse {
    return new MsgSetPausedStateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetPausedStateResponse {
    return new MsgSetPausedStateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetPausedStateResponse {
    return new MsgSetPausedStateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSetPausedStateResponse | PlainMessage<MsgSetPausedStateResponse> | undefined, b: MsgSetPausedStateResponse | PlainMessage<MsgSetPausedStateResponse> | undefined): boolean {
    return proto3.util.equals(MsgSetPausedStateResponse, a, b);
  }
}

