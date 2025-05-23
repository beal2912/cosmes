// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file neutron/revenue/tx.proto (package neutron.revenue, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";

/**
 * Request type for the Msg/UpdateParams RPC method.
 *
 * @generated from message neutron.revenue.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * The address of the authority of the module.
   *
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * The new parameters of the module. All parameters must be supplied.
   *
   * @generated from field: neutron.revenue.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.revenue.MsgUpdateParams";
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
 * Response type for the Msg/UpdateParams RPC method.
 *
 * @generated from message neutron.revenue.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.revenue.MsgUpdateParamsResponse";
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
 * Request type for the Msg/FundTreasury RPC method.
 *
 * @generated from message neutron.revenue.MsgFundTreasury
 */
export class MsgFundTreasury extends Message<MsgFundTreasury> {
  /**
   * The signer of the message.
   *
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * The amount of coins to fund the revenue treasury pool with. Must match the reward asset denom.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 2;
   */
  amount: Coin[] = [];

  constructor(data?: PartialMessage<MsgFundTreasury>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.revenue.MsgFundTreasury";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFundTreasury {
    return new MsgFundTreasury().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFundTreasury {
    return new MsgFundTreasury().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFundTreasury {
    return new MsgFundTreasury().fromJsonString(jsonString, options);
  }

  static equals(a: MsgFundTreasury | PlainMessage<MsgFundTreasury> | undefined, b: MsgFundTreasury | PlainMessage<MsgFundTreasury> | undefined): boolean {
    return proto3.util.equals(MsgFundTreasury, a, b);
  }
}

/**
 * Response type for the Msg/FundTreasury RPC method.
 *
 * @generated from message neutron.revenue.MsgFundTreasuryResponse
 */
export class MsgFundTreasuryResponse extends Message<MsgFundTreasuryResponse> {
  constructor(data?: PartialMessage<MsgFundTreasuryResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.revenue.MsgFundTreasuryResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFundTreasuryResponse {
    return new MsgFundTreasuryResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFundTreasuryResponse {
    return new MsgFundTreasuryResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFundTreasuryResponse {
    return new MsgFundTreasuryResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgFundTreasuryResponse | PlainMessage<MsgFundTreasuryResponse> | undefined, b: MsgFundTreasuryResponse | PlainMessage<MsgFundTreasuryResponse> | undefined): boolean {
    return proto3.util.equals(MsgFundTreasuryResponse, a, b);
  }
}

