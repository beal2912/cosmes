// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/perpetual/tx.proto (package elys.perpetual, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Position } from "./types_pb.js";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
import { Params } from "./params_pb.js";

/**
 * @generated from message elys.perpetual.MsgOpen
 */
export class MsgOpen extends Message<MsgOpen> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: elys.perpetual.Position position = 2;
   */
  position = Position.UNSPECIFIED;

  /**
   * @generated from field: string leverage = 3;
   */
  leverage = "";

  /**
   * @generated from field: string trading_asset = 4;
   */
  tradingAsset = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin collateral = 5;
   */
  collateral?: Coin;

  /**
   * @generated from field: string take_profit_price = 6;
   */
  takeProfitPrice = "";

  constructor(data?: PartialMessage<MsgOpen>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.MsgOpen";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "position", kind: "enum", T: proto3.getEnumType(Position) },
    { no: 3, name: "leverage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "trading_asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "collateral", kind: "message", T: Coin },
    { no: 6, name: "take_profit_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgOpen {
    return new MsgOpen().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgOpen {
    return new MsgOpen().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgOpen {
    return new MsgOpen().fromJsonString(jsonString, options);
  }

  static equals(a: MsgOpen | PlainMessage<MsgOpen> | undefined, b: MsgOpen | PlainMessage<MsgOpen> | undefined): boolean {
    return proto3.util.equals(MsgOpen, a, b);
  }
}

/**
 * @generated from message elys.perpetual.MsgBrokerOpen
 */
export class MsgBrokerOpen extends Message<MsgBrokerOpen> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: elys.perpetual.Position position = 2;
   */
  position = Position.UNSPECIFIED;

  /**
   * @generated from field: string leverage = 3;
   */
  leverage = "";

  /**
   * @generated from field: string trading_asset = 4;
   */
  tradingAsset = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin collateral = 5;
   */
  collateral?: Coin;

  /**
   * @generated from field: string take_profit_price = 6;
   */
  takeProfitPrice = "";

  /**
   * @generated from field: string owner = 7;
   */
  owner = "";

  constructor(data?: PartialMessage<MsgBrokerOpen>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.MsgBrokerOpen";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "position", kind: "enum", T: proto3.getEnumType(Position) },
    { no: 3, name: "leverage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "trading_asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "collateral", kind: "message", T: Coin },
    { no: 6, name: "take_profit_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBrokerOpen {
    return new MsgBrokerOpen().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBrokerOpen {
    return new MsgBrokerOpen().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBrokerOpen {
    return new MsgBrokerOpen().fromJsonString(jsonString, options);
  }

  static equals(a: MsgBrokerOpen | PlainMessage<MsgBrokerOpen> | undefined, b: MsgBrokerOpen | PlainMessage<MsgBrokerOpen> | undefined): boolean {
    return proto3.util.equals(MsgBrokerOpen, a, b);
  }
}

/**
 * @generated from message elys.perpetual.MsgOpenResponse
 */
export class MsgOpenResponse extends Message<MsgOpenResponse> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<MsgOpenResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.MsgOpenResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgOpenResponse {
    return new MsgOpenResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgOpenResponse {
    return new MsgOpenResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgOpenResponse {
    return new MsgOpenResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgOpenResponse | PlainMessage<MsgOpenResponse> | undefined, b: MsgOpenResponse | PlainMessage<MsgOpenResponse> | undefined): boolean {
    return proto3.util.equals(MsgOpenResponse, a, b);
  }
}

/**
 * @generated from message elys.perpetual.MsgClose
 */
export class MsgClose extends Message<MsgClose> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: uint64 id = 2;
   */
  id = protoInt64.zero;

  /**
   * @generated from field: string amount = 3;
   */
  amount = "";

  constructor(data?: PartialMessage<MsgClose>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.MsgClose";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClose {
    return new MsgClose().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClose {
    return new MsgClose().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClose {
    return new MsgClose().fromJsonString(jsonString, options);
  }

  static equals(a: MsgClose | PlainMessage<MsgClose> | undefined, b: MsgClose | PlainMessage<MsgClose> | undefined): boolean {
    return proto3.util.equals(MsgClose, a, b);
  }
}

/**
 * @generated from message elys.perpetual.MsgBrokerClose
 */
export class MsgBrokerClose extends Message<MsgBrokerClose> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: uint64 id = 2;
   */
  id = protoInt64.zero;

  /**
   * @generated from field: string amount = 3;
   */
  amount = "";

  /**
   * @generated from field: string owner = 4;
   */
  owner = "";

  constructor(data?: PartialMessage<MsgBrokerClose>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.MsgBrokerClose";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBrokerClose {
    return new MsgBrokerClose().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBrokerClose {
    return new MsgBrokerClose().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBrokerClose {
    return new MsgBrokerClose().fromJsonString(jsonString, options);
  }

  static equals(a: MsgBrokerClose | PlainMessage<MsgBrokerClose> | undefined, b: MsgBrokerClose | PlainMessage<MsgBrokerClose> | undefined): boolean {
    return proto3.util.equals(MsgBrokerClose, a, b);
  }
}

/**
 * @generated from message elys.perpetual.MsgCloseResponse
 */
export class MsgCloseResponse extends Message<MsgCloseResponse> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * @generated from field: string amount = 2;
   */
  amount = "";

  constructor(data?: PartialMessage<MsgCloseResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.MsgCloseResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCloseResponse {
    return new MsgCloseResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCloseResponse {
    return new MsgCloseResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCloseResponse {
    return new MsgCloseResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCloseResponse | PlainMessage<MsgCloseResponse> | undefined, b: MsgCloseResponse | PlainMessage<MsgCloseResponse> | undefined): boolean {
    return proto3.util.equals(MsgCloseResponse, a, b);
  }
}

/**
 * @generated from message elys.perpetual.MsgUpdateParams
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
   * @generated from field: elys.perpetual.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.MsgUpdateParams";
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
 * @generated from message elys.perpetual.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.MsgUpdateParamsResponse";
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
 * @generated from message elys.perpetual.MsgWhitelist
 */
export class MsgWhitelist extends Message<MsgWhitelist> {
  /**
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: string whitelisted_address = 2;
   */
  whitelistedAddress = "";

  constructor(data?: PartialMessage<MsgWhitelist>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.MsgWhitelist";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "whitelisted_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWhitelist {
    return new MsgWhitelist().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWhitelist {
    return new MsgWhitelist().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWhitelist {
    return new MsgWhitelist().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWhitelist | PlainMessage<MsgWhitelist> | undefined, b: MsgWhitelist | PlainMessage<MsgWhitelist> | undefined): boolean {
    return proto3.util.equals(MsgWhitelist, a, b);
  }
}

/**
 * @generated from message elys.perpetual.MsgWhitelistResponse
 */
export class MsgWhitelistResponse extends Message<MsgWhitelistResponse> {
  constructor(data?: PartialMessage<MsgWhitelistResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.MsgWhitelistResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWhitelistResponse {
    return new MsgWhitelistResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWhitelistResponse {
    return new MsgWhitelistResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWhitelistResponse {
    return new MsgWhitelistResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWhitelistResponse | PlainMessage<MsgWhitelistResponse> | undefined, b: MsgWhitelistResponse | PlainMessage<MsgWhitelistResponse> | undefined): boolean {
    return proto3.util.equals(MsgWhitelistResponse, a, b);
  }
}

/**
 * @generated from message elys.perpetual.MsgDewhitelist
 */
export class MsgDewhitelist extends Message<MsgDewhitelist> {
  /**
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: string whitelisted_address = 2;
   */
  whitelistedAddress = "";

  constructor(data?: PartialMessage<MsgDewhitelist>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.MsgDewhitelist";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "whitelisted_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDewhitelist {
    return new MsgDewhitelist().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDewhitelist {
    return new MsgDewhitelist().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDewhitelist {
    return new MsgDewhitelist().fromJsonString(jsonString, options);
  }

  static equals(a: MsgDewhitelist | PlainMessage<MsgDewhitelist> | undefined, b: MsgDewhitelist | PlainMessage<MsgDewhitelist> | undefined): boolean {
    return proto3.util.equals(MsgDewhitelist, a, b);
  }
}

/**
 * @generated from message elys.perpetual.MsgDewhitelistResponse
 */
export class MsgDewhitelistResponse extends Message<MsgDewhitelistResponse> {
  constructor(data?: PartialMessage<MsgDewhitelistResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.MsgDewhitelistResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDewhitelistResponse {
    return new MsgDewhitelistResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDewhitelistResponse {
    return new MsgDewhitelistResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDewhitelistResponse {
    return new MsgDewhitelistResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgDewhitelistResponse | PlainMessage<MsgDewhitelistResponse> | undefined, b: MsgDewhitelistResponse | PlainMessage<MsgDewhitelistResponse> | undefined): boolean {
    return proto3.util.equals(MsgDewhitelistResponse, a, b);
  }
}

/**
 * @generated from message elys.perpetual.MsgAddCollateral
 */
export class MsgAddCollateral extends Message<MsgAddCollateral> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string amount = 2;
   */
  amount = "";

  /**
   * @generated from field: uint64 id = 3;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<MsgAddCollateral>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.MsgAddCollateral";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddCollateral {
    return new MsgAddCollateral().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddCollateral {
    return new MsgAddCollateral().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddCollateral {
    return new MsgAddCollateral().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAddCollateral | PlainMessage<MsgAddCollateral> | undefined, b: MsgAddCollateral | PlainMessage<MsgAddCollateral> | undefined): boolean {
    return proto3.util.equals(MsgAddCollateral, a, b);
  }
}

/**
 * @generated from message elys.perpetual.MsgAddCollateralResponse
 */
export class MsgAddCollateralResponse extends Message<MsgAddCollateralResponse> {
  constructor(data?: PartialMessage<MsgAddCollateralResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.MsgAddCollateralResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddCollateralResponse {
    return new MsgAddCollateralResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddCollateralResponse {
    return new MsgAddCollateralResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddCollateralResponse {
    return new MsgAddCollateralResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAddCollateralResponse | PlainMessage<MsgAddCollateralResponse> | undefined, b: MsgAddCollateralResponse | PlainMessage<MsgAddCollateralResponse> | undefined): boolean {
    return proto3.util.equals(MsgAddCollateralResponse, a, b);
  }
}

/**
 * @generated from message elys.perpetual.MsgBrokerAddCollateral
 */
export class MsgBrokerAddCollateral extends Message<MsgBrokerAddCollateral> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string amount = 2;
   */
  amount = "";

  /**
   * @generated from field: int32 id = 3;
   */
  id = 0;

  /**
   * @generated from field: string owner = 4;
   */
  owner = "";

  constructor(data?: PartialMessage<MsgBrokerAddCollateral>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.MsgBrokerAddCollateral";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBrokerAddCollateral {
    return new MsgBrokerAddCollateral().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBrokerAddCollateral {
    return new MsgBrokerAddCollateral().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBrokerAddCollateral {
    return new MsgBrokerAddCollateral().fromJsonString(jsonString, options);
  }

  static equals(a: MsgBrokerAddCollateral | PlainMessage<MsgBrokerAddCollateral> | undefined, b: MsgBrokerAddCollateral | PlainMessage<MsgBrokerAddCollateral> | undefined): boolean {
    return proto3.util.equals(MsgBrokerAddCollateral, a, b);
  }
}

