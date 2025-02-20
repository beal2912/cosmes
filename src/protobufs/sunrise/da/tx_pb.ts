// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file sunrise/da/tx.proto (package sunrise.da, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * @generated from message sunrise.da.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   *
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: sunrise.da.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.da.MsgUpdateParams";
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
 *
 * @generated from message sunrise.da.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.da.MsgUpdateParamsResponse";
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
 * MsgPublishData
 *
 * @generated from message sunrise.da.MsgPublishData
 */
export class MsgPublishData extends Message<MsgPublishData> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string metadata_uri = 2;
   */
  metadataUri = "";

  /**
   * @generated from field: uint64 parity_shard_count = 3;
   */
  parityShardCount = protoInt64.zero;

  /**
   * @generated from field: repeated bytes shard_double_hashes = 4;
   */
  shardDoubleHashes: Uint8Array[] = [];

  /**
   * @generated from field: string data_source_info = 5;
   */
  dataSourceInfo = "";

  constructor(data?: PartialMessage<MsgPublishData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.da.MsgPublishData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metadata_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "parity_shard_count", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "shard_double_hashes", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 5, name: "data_source_info", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgPublishData {
    return new MsgPublishData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgPublishData {
    return new MsgPublishData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgPublishData {
    return new MsgPublishData().fromJsonString(jsonString, options);
  }

  static equals(a: MsgPublishData | PlainMessage<MsgPublishData> | undefined, b: MsgPublishData | PlainMessage<MsgPublishData> | undefined): boolean {
    return proto3.util.equals(MsgPublishData, a, b);
  }
}

/**
 * MsgPublishDataResponse
 *
 * @generated from message sunrise.da.MsgPublishDataResponse
 */
export class MsgPublishDataResponse extends Message<MsgPublishDataResponse> {
  constructor(data?: PartialMessage<MsgPublishDataResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.da.MsgPublishDataResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgPublishDataResponse {
    return new MsgPublishDataResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgPublishDataResponse {
    return new MsgPublishDataResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgPublishDataResponse {
    return new MsgPublishDataResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgPublishDataResponse | PlainMessage<MsgPublishDataResponse> | undefined, b: MsgPublishDataResponse | PlainMessage<MsgPublishDataResponse> | undefined): boolean {
    return proto3.util.equals(MsgPublishDataResponse, a, b);
  }
}

/**
 * MsgChallengeForFraud
 *
 * @generated from message sunrise.da.MsgChallengeForFraud
 */
export class MsgChallengeForFraud extends Message<MsgChallengeForFraud> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string metadata_uri = 2;
   */
  metadataUri = "";

  constructor(data?: PartialMessage<MsgChallengeForFraud>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.da.MsgChallengeForFraud";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metadata_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChallengeForFraud {
    return new MsgChallengeForFraud().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChallengeForFraud {
    return new MsgChallengeForFraud().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChallengeForFraud {
    return new MsgChallengeForFraud().fromJsonString(jsonString, options);
  }

  static equals(a: MsgChallengeForFraud | PlainMessage<MsgChallengeForFraud> | undefined, b: MsgChallengeForFraud | PlainMessage<MsgChallengeForFraud> | undefined): boolean {
    return proto3.util.equals(MsgChallengeForFraud, a, b);
  }
}

/**
 * MsgChallengeForFraudResponse
 *
 * @generated from message sunrise.da.MsgChallengeForFraudResponse
 */
export class MsgChallengeForFraudResponse extends Message<MsgChallengeForFraudResponse> {
  constructor(data?: PartialMessage<MsgChallengeForFraudResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.da.MsgChallengeForFraudResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChallengeForFraudResponse {
    return new MsgChallengeForFraudResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChallengeForFraudResponse {
    return new MsgChallengeForFraudResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChallengeForFraudResponse {
    return new MsgChallengeForFraudResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgChallengeForFraudResponse | PlainMessage<MsgChallengeForFraudResponse> | undefined, b: MsgChallengeForFraudResponse | PlainMessage<MsgChallengeForFraudResponse> | undefined): boolean {
    return proto3.util.equals(MsgChallengeForFraudResponse, a, b);
  }
}

/**
 * MsgSubmitProof
 *
 * @generated from message sunrise.da.MsgSubmitProof
 */
export class MsgSubmitProof extends Message<MsgSubmitProof> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string metadata_uri = 2;
   */
  metadataUri = "";

  /**
   * @generated from field: repeated int64 indices = 3;
   */
  indices: bigint[] = [];

  /**
   * @generated from field: repeated bytes proofs = 4;
   */
  proofs: Uint8Array[] = [];

  /**
   * @generated from field: bool is_valid_data = 5;
   */
  isValidData = false;

  constructor(data?: PartialMessage<MsgSubmitProof>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.da.MsgSubmitProof";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metadata_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "indices", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 4, name: "proofs", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 5, name: "is_valid_data", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitProof {
    return new MsgSubmitProof().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitProof {
    return new MsgSubmitProof().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitProof {
    return new MsgSubmitProof().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSubmitProof | PlainMessage<MsgSubmitProof> | undefined, b: MsgSubmitProof | PlainMessage<MsgSubmitProof> | undefined): boolean {
    return proto3.util.equals(MsgSubmitProof, a, b);
  }
}

/**
 * MsgSubmitProofResponse
 *
 * @generated from message sunrise.da.MsgSubmitProofResponse
 */
export class MsgSubmitProofResponse extends Message<MsgSubmitProofResponse> {
  constructor(data?: PartialMessage<MsgSubmitProofResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.da.MsgSubmitProofResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitProofResponse {
    return new MsgSubmitProofResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitProofResponse {
    return new MsgSubmitProofResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitProofResponse {
    return new MsgSubmitProofResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSubmitProofResponse | PlainMessage<MsgSubmitProofResponse> | undefined, b: MsgSubmitProofResponse | PlainMessage<MsgSubmitProofResponse> | undefined): boolean {
    return proto3.util.equals(MsgSubmitProofResponse, a, b);
  }
}

