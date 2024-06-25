// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/evmos/blob/main/LICENSE)

// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file evmos/erc20/v1/tx.proto (package evmos.erc20.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { Params } from "./genesis_pb.js";

/**
 * MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token
 *
 * @generated from message evmos.erc20.v1.MsgConvertCoin
 */
export class MsgConvertCoin extends Message<MsgConvertCoin> {
  /**
   * coin is a Cosmos coin whose denomination is registered in a token pair. The coin
   * amount defines the amount of coins to convert.
   *
   * @generated from field: cosmos.base.v1beta1.Coin coin = 1;
   */
  coin?: Coin;

  /**
   * receiver is the hex address to receive ERC20 token
   *
   * @generated from field: string receiver = 2;
   */
  receiver = "";

  /**
   * sender is the cosmos bech32 address from the owner of the given Cosmos coins
   *
   * @generated from field: string sender = 3;
   */
  sender = "";

  constructor(data?: PartialMessage<MsgConvertCoin>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.erc20.v1.MsgConvertCoin";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "coin", kind: "message", T: Coin },
    { no: 2, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConvertCoin {
    return new MsgConvertCoin().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConvertCoin {
    return new MsgConvertCoin().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConvertCoin {
    return new MsgConvertCoin().fromJsonString(jsonString, options);
  }

  static equals(a: MsgConvertCoin | PlainMessage<MsgConvertCoin> | undefined, b: MsgConvertCoin | PlainMessage<MsgConvertCoin> | undefined): boolean {
    return proto3.util.equals(MsgConvertCoin, a, b);
  }
}

/**
 * MsgConvertCoinResponse returns no fields
 *
 * @generated from message evmos.erc20.v1.MsgConvertCoinResponse
 */
export class MsgConvertCoinResponse extends Message<MsgConvertCoinResponse> {
  constructor(data?: PartialMessage<MsgConvertCoinResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.erc20.v1.MsgConvertCoinResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConvertCoinResponse {
    return new MsgConvertCoinResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConvertCoinResponse {
    return new MsgConvertCoinResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConvertCoinResponse {
    return new MsgConvertCoinResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgConvertCoinResponse | PlainMessage<MsgConvertCoinResponse> | undefined, b: MsgConvertCoinResponse | PlainMessage<MsgConvertCoinResponse> | undefined): boolean {
    return proto3.util.equals(MsgConvertCoinResponse, a, b);
  }
}

/**
 * MsgConvertERC20 defines a Msg to convert a ERC20 token to a native Cosmos
 * coin.
 *
 * @generated from message evmos.erc20.v1.MsgConvertERC20
 */
export class MsgConvertERC20 extends Message<MsgConvertERC20> {
  /**
   * contract_address of an ERC20 token contract, that is registered in a token pair
   *
   * @generated from field: string contract_address = 1;
   */
  contractAddress = "";

  /**
   * amount of ERC20 tokens to convert
   *
   * @generated from field: string amount = 2;
   */
  amount = "";

  /**
   * receiver is the bech32 address to receive native Cosmos coins
   *
   * @generated from field: string receiver = 3;
   */
  receiver = "";

  /**
   * sender is the hex address from the owner of the given ERC20 tokens
   *
   * @generated from field: string sender = 4;
   */
  sender = "";

  constructor(data?: PartialMessage<MsgConvertERC20>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.erc20.v1.MsgConvertERC20";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConvertERC20 {
    return new MsgConvertERC20().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConvertERC20 {
    return new MsgConvertERC20().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConvertERC20 {
    return new MsgConvertERC20().fromJsonString(jsonString, options);
  }

  static equals(a: MsgConvertERC20 | PlainMessage<MsgConvertERC20> | undefined, b: MsgConvertERC20 | PlainMessage<MsgConvertERC20> | undefined): boolean {
    return proto3.util.equals(MsgConvertERC20, a, b);
  }
}

/**
 * MsgConvertERC20Response returns no fields
 *
 * @generated from message evmos.erc20.v1.MsgConvertERC20Response
 */
export class MsgConvertERC20Response extends Message<MsgConvertERC20Response> {
  constructor(data?: PartialMessage<MsgConvertERC20Response>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.erc20.v1.MsgConvertERC20Response";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConvertERC20Response {
    return new MsgConvertERC20Response().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConvertERC20Response {
    return new MsgConvertERC20Response().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConvertERC20Response {
    return new MsgConvertERC20Response().fromJsonString(jsonString, options);
  }

  static equals(a: MsgConvertERC20Response | PlainMessage<MsgConvertERC20Response> | undefined, b: MsgConvertERC20Response | PlainMessage<MsgConvertERC20Response> | undefined): boolean {
    return proto3.util.equals(MsgConvertERC20Response, a, b);
  }
}

/**
 * MsgUpdateParams is the Msg/UpdateParams request type for Erc20 parameters.
 * Since: cosmos-sdk 0.47
 *
 * @generated from message evmos.erc20.v1.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * authority is the address of the governance account.
   *
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * params defines the x/evm parameters to update.
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: evmos.erc20.v1.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.erc20.v1.MsgUpdateParams";
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
 * Since: cosmos-sdk 0.47
 *
 * @generated from message evmos.erc20.v1.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.erc20.v1.MsgUpdateParamsResponse";
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

