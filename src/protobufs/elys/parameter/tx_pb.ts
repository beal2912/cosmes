// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/parameter/tx.proto (package elys.parameter, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message elys.parameter.MsgUpdateMinCommission
 */
export class MsgUpdateMinCommission extends Message<MsgUpdateMinCommission> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string min_commission = 2;
   */
  minCommission = "";

  constructor(data?: PartialMessage<MsgUpdateMinCommission>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.parameter.MsgUpdateMinCommission";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "min_commission", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateMinCommission {
    return new MsgUpdateMinCommission().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateMinCommission {
    return new MsgUpdateMinCommission().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateMinCommission {
    return new MsgUpdateMinCommission().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateMinCommission | PlainMessage<MsgUpdateMinCommission> | undefined, b: MsgUpdateMinCommission | PlainMessage<MsgUpdateMinCommission> | undefined): boolean {
    return proto3.util.equals(MsgUpdateMinCommission, a, b);
  }
}

/**
 * @generated from message elys.parameter.MsgUpdateMinCommissionResponse
 */
export class MsgUpdateMinCommissionResponse extends Message<MsgUpdateMinCommissionResponse> {
  constructor(data?: PartialMessage<MsgUpdateMinCommissionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.parameter.MsgUpdateMinCommissionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateMinCommissionResponse {
    return new MsgUpdateMinCommissionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateMinCommissionResponse {
    return new MsgUpdateMinCommissionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateMinCommissionResponse {
    return new MsgUpdateMinCommissionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateMinCommissionResponse | PlainMessage<MsgUpdateMinCommissionResponse> | undefined, b: MsgUpdateMinCommissionResponse | PlainMessage<MsgUpdateMinCommissionResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateMinCommissionResponse, a, b);
  }
}

/**
 * @generated from message elys.parameter.MsgUpdateMaxVotingPower
 */
export class MsgUpdateMaxVotingPower extends Message<MsgUpdateMaxVotingPower> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string max_voting_power = 2;
   */
  maxVotingPower = "";

  constructor(data?: PartialMessage<MsgUpdateMaxVotingPower>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.parameter.MsgUpdateMaxVotingPower";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "max_voting_power", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateMaxVotingPower {
    return new MsgUpdateMaxVotingPower().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateMaxVotingPower {
    return new MsgUpdateMaxVotingPower().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateMaxVotingPower {
    return new MsgUpdateMaxVotingPower().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateMaxVotingPower | PlainMessage<MsgUpdateMaxVotingPower> | undefined, b: MsgUpdateMaxVotingPower | PlainMessage<MsgUpdateMaxVotingPower> | undefined): boolean {
    return proto3.util.equals(MsgUpdateMaxVotingPower, a, b);
  }
}

/**
 * @generated from message elys.parameter.MsgUpdateMaxVotingPowerResponse
 */
export class MsgUpdateMaxVotingPowerResponse extends Message<MsgUpdateMaxVotingPowerResponse> {
  constructor(data?: PartialMessage<MsgUpdateMaxVotingPowerResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.parameter.MsgUpdateMaxVotingPowerResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateMaxVotingPowerResponse {
    return new MsgUpdateMaxVotingPowerResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateMaxVotingPowerResponse {
    return new MsgUpdateMaxVotingPowerResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateMaxVotingPowerResponse {
    return new MsgUpdateMaxVotingPowerResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateMaxVotingPowerResponse | PlainMessage<MsgUpdateMaxVotingPowerResponse> | undefined, b: MsgUpdateMaxVotingPowerResponse | PlainMessage<MsgUpdateMaxVotingPowerResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateMaxVotingPowerResponse, a, b);
  }
}

/**
 * @generated from message elys.parameter.MsgUpdateMinSelfDelegation
 */
export class MsgUpdateMinSelfDelegation extends Message<MsgUpdateMinSelfDelegation> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string min_self_delegation = 2;
   */
  minSelfDelegation = "";

  constructor(data?: PartialMessage<MsgUpdateMinSelfDelegation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.parameter.MsgUpdateMinSelfDelegation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "min_self_delegation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateMinSelfDelegation {
    return new MsgUpdateMinSelfDelegation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateMinSelfDelegation {
    return new MsgUpdateMinSelfDelegation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateMinSelfDelegation {
    return new MsgUpdateMinSelfDelegation().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateMinSelfDelegation | PlainMessage<MsgUpdateMinSelfDelegation> | undefined, b: MsgUpdateMinSelfDelegation | PlainMessage<MsgUpdateMinSelfDelegation> | undefined): boolean {
    return proto3.util.equals(MsgUpdateMinSelfDelegation, a, b);
  }
}

/**
 * @generated from message elys.parameter.MsgUpdateMinSelfDelegationResponse
 */
export class MsgUpdateMinSelfDelegationResponse extends Message<MsgUpdateMinSelfDelegationResponse> {
  constructor(data?: PartialMessage<MsgUpdateMinSelfDelegationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.parameter.MsgUpdateMinSelfDelegationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateMinSelfDelegationResponse {
    return new MsgUpdateMinSelfDelegationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateMinSelfDelegationResponse {
    return new MsgUpdateMinSelfDelegationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateMinSelfDelegationResponse {
    return new MsgUpdateMinSelfDelegationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateMinSelfDelegationResponse | PlainMessage<MsgUpdateMinSelfDelegationResponse> | undefined, b: MsgUpdateMinSelfDelegationResponse | PlainMessage<MsgUpdateMinSelfDelegationResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateMinSelfDelegationResponse, a, b);
  }
}

/**
 * @generated from message elys.parameter.MsgUpdateBrokerAddress
 */
export class MsgUpdateBrokerAddress extends Message<MsgUpdateBrokerAddress> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string broker_address = 2;
   */
  brokerAddress = "";

  constructor(data?: PartialMessage<MsgUpdateBrokerAddress>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.parameter.MsgUpdateBrokerAddress";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "broker_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateBrokerAddress {
    return new MsgUpdateBrokerAddress().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateBrokerAddress {
    return new MsgUpdateBrokerAddress().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateBrokerAddress {
    return new MsgUpdateBrokerAddress().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateBrokerAddress | PlainMessage<MsgUpdateBrokerAddress> | undefined, b: MsgUpdateBrokerAddress | PlainMessage<MsgUpdateBrokerAddress> | undefined): boolean {
    return proto3.util.equals(MsgUpdateBrokerAddress, a, b);
  }
}

/**
 * @generated from message elys.parameter.MsgUpdateBrokerAddressResponse
 */
export class MsgUpdateBrokerAddressResponse extends Message<MsgUpdateBrokerAddressResponse> {
  constructor(data?: PartialMessage<MsgUpdateBrokerAddressResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.parameter.MsgUpdateBrokerAddressResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateBrokerAddressResponse {
    return new MsgUpdateBrokerAddressResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateBrokerAddressResponse {
    return new MsgUpdateBrokerAddressResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateBrokerAddressResponse {
    return new MsgUpdateBrokerAddressResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateBrokerAddressResponse | PlainMessage<MsgUpdateBrokerAddressResponse> | undefined, b: MsgUpdateBrokerAddressResponse | PlainMessage<MsgUpdateBrokerAddressResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateBrokerAddressResponse, a, b);
  }
}

/**
 * @generated from message elys.parameter.MsgUpdateTotalBlocksPerYear
 */
export class MsgUpdateTotalBlocksPerYear extends Message<MsgUpdateTotalBlocksPerYear> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: int64 total_blocks_per_year = 2;
   */
  totalBlocksPerYear = protoInt64.zero;

  constructor(data?: PartialMessage<MsgUpdateTotalBlocksPerYear>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.parameter.MsgUpdateTotalBlocksPerYear";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "total_blocks_per_year", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateTotalBlocksPerYear {
    return new MsgUpdateTotalBlocksPerYear().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateTotalBlocksPerYear {
    return new MsgUpdateTotalBlocksPerYear().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateTotalBlocksPerYear {
    return new MsgUpdateTotalBlocksPerYear().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateTotalBlocksPerYear | PlainMessage<MsgUpdateTotalBlocksPerYear> | undefined, b: MsgUpdateTotalBlocksPerYear | PlainMessage<MsgUpdateTotalBlocksPerYear> | undefined): boolean {
    return proto3.util.equals(MsgUpdateTotalBlocksPerYear, a, b);
  }
}

/**
 * @generated from message elys.parameter.MsgUpdateTotalBlocksPerYearResponse
 */
export class MsgUpdateTotalBlocksPerYearResponse extends Message<MsgUpdateTotalBlocksPerYearResponse> {
  constructor(data?: PartialMessage<MsgUpdateTotalBlocksPerYearResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.parameter.MsgUpdateTotalBlocksPerYearResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateTotalBlocksPerYearResponse {
    return new MsgUpdateTotalBlocksPerYearResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateTotalBlocksPerYearResponse {
    return new MsgUpdateTotalBlocksPerYearResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateTotalBlocksPerYearResponse {
    return new MsgUpdateTotalBlocksPerYearResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateTotalBlocksPerYearResponse | PlainMessage<MsgUpdateTotalBlocksPerYearResponse> | undefined, b: MsgUpdateTotalBlocksPerYearResponse | PlainMessage<MsgUpdateTotalBlocksPerYearResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateTotalBlocksPerYearResponse, a, b);
  }
}
