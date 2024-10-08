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

/**
 * MsgRegisterERC20 is the Msg/RegisterERC20 request type for registering
 * an Erc20 contract token pair.
 *
 * @generated from message evmos.erc20.v1.MsgRegisterERC20
 */
export class MsgRegisterERC20 extends Message<MsgRegisterERC20> {
  /**
   * authority is the address of the governance account.
   *
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * erc20addresses is a slice of ERC20 token contract hex addresses
   *
   * @generated from field: repeated string erc20addresses = 2;
   */
  erc20addresses: string[] = [];

  constructor(data?: PartialMessage<MsgRegisterERC20>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.erc20.v1.MsgRegisterERC20";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "erc20addresses", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRegisterERC20 {
    return new MsgRegisterERC20().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRegisterERC20 {
    return new MsgRegisterERC20().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRegisterERC20 {
    return new MsgRegisterERC20().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRegisterERC20 | PlainMessage<MsgRegisterERC20> | undefined, b: MsgRegisterERC20 | PlainMessage<MsgRegisterERC20> | undefined): boolean {
    return proto3.util.equals(MsgRegisterERC20, a, b);
  }
}

/**
 * MsgRegisterERC20Response defines the response structure for executing a
 * MsgRegisterERC20 message.
 *
 * @generated from message evmos.erc20.v1.MsgRegisterERC20Response
 */
export class MsgRegisterERC20Response extends Message<MsgRegisterERC20Response> {
  constructor(data?: PartialMessage<MsgRegisterERC20Response>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.erc20.v1.MsgRegisterERC20Response";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRegisterERC20Response {
    return new MsgRegisterERC20Response().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRegisterERC20Response {
    return new MsgRegisterERC20Response().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRegisterERC20Response {
    return new MsgRegisterERC20Response().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRegisterERC20Response | PlainMessage<MsgRegisterERC20Response> | undefined, b: MsgRegisterERC20Response | PlainMessage<MsgRegisterERC20Response> | undefined): boolean {
    return proto3.util.equals(MsgRegisterERC20Response, a, b);
  }
}

/**
 * MsgToggleConversion is the Msg/MsgToggleConversion request type for toggling
 * an Erc20 contract conversion capability.
 *
 * @generated from message evmos.erc20.v1.MsgToggleConversion
 */
export class MsgToggleConversion extends Message<MsgToggleConversion> {
  /**
   * authority is the address of the governance account.
   *
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   *
   * @generated from field: string token = 2;
   */
  token = "";

  constructor(data?: PartialMessage<MsgToggleConversion>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.erc20.v1.MsgToggleConversion";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgToggleConversion {
    return new MsgToggleConversion().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgToggleConversion {
    return new MsgToggleConversion().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgToggleConversion {
    return new MsgToggleConversion().fromJsonString(jsonString, options);
  }

  static equals(a: MsgToggleConversion | PlainMessage<MsgToggleConversion> | undefined, b: MsgToggleConversion | PlainMessage<MsgToggleConversion> | undefined): boolean {
    return proto3.util.equals(MsgToggleConversion, a, b);
  }
}

/**
 * MsgToggleConversionResponse defines the response structure for executing a
 * ToggleConversion message.
 *
 * @generated from message evmos.erc20.v1.MsgToggleConversionResponse
 */
export class MsgToggleConversionResponse extends Message<MsgToggleConversionResponse> {
  constructor(data?: PartialMessage<MsgToggleConversionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.erc20.v1.MsgToggleConversionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgToggleConversionResponse {
    return new MsgToggleConversionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgToggleConversionResponse {
    return new MsgToggleConversionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgToggleConversionResponse {
    return new MsgToggleConversionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgToggleConversionResponse | PlainMessage<MsgToggleConversionResponse> | undefined, b: MsgToggleConversionResponse | PlainMessage<MsgToggleConversionResponse> | undefined): boolean {
    return proto3.util.equals(MsgToggleConversionResponse, a, b);
  }
}

