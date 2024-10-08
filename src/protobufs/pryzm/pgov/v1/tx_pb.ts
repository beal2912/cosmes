// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/pgov/v1/tx.proto (package pryzm.pgov.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { WeightedVoteOption } from "../../../cosmos/gov/v1/gov_pb.js";
import { Height } from "../../../ibc/core/client/v1/client_pb.js";
import { Proposal } from "./proposal_pb.js";

/**
 * @generated from message pryzm.pgov.v1.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: pryzm.pgov.v1.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.pgov.v1.MsgUpdateParams";
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
 * @generated from message pryzm.pgov.v1.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.pgov.v1.MsgUpdateParamsResponse";
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
 * @generated from message pryzm.pgov.v1.MsgStakePAssets
 */
export class MsgStakePAssets extends Message<MsgStakePAssets> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 2;
   */
  amount: Coin[] = [];

  constructor(data?: PartialMessage<MsgStakePAssets>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.pgov.v1.MsgStakePAssets";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgStakePAssets {
    return new MsgStakePAssets().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgStakePAssets {
    return new MsgStakePAssets().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgStakePAssets {
    return new MsgStakePAssets().fromJsonString(jsonString, options);
  }

  static equals(a: MsgStakePAssets | PlainMessage<MsgStakePAssets> | undefined, b: MsgStakePAssets | PlainMessage<MsgStakePAssets> | undefined): boolean {
    return proto3.util.equals(MsgStakePAssets, a, b);
  }
}

/**
 * @generated from message pryzm.pgov.v1.MsgStakePAssetsResponse
 */
export class MsgStakePAssetsResponse extends Message<MsgStakePAssetsResponse> {
  /**
   * @generated from field: string total_staked_p_assets = 1;
   */
  totalStakedPAssets = "";

  constructor(data?: PartialMessage<MsgStakePAssetsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.pgov.v1.MsgStakePAssetsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "total_staked_p_assets", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgStakePAssetsResponse {
    return new MsgStakePAssetsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgStakePAssetsResponse {
    return new MsgStakePAssetsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgStakePAssetsResponse {
    return new MsgStakePAssetsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgStakePAssetsResponse | PlainMessage<MsgStakePAssetsResponse> | undefined, b: MsgStakePAssetsResponse | PlainMessage<MsgStakePAssetsResponse> | undefined): boolean {
    return proto3.util.equals(MsgStakePAssetsResponse, a, b);
  }
}

/**
 * @generated from message pryzm.pgov.v1.MsgUnstakePAssets
 */
export class MsgUnstakePAssets extends Message<MsgUnstakePAssets> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 2;
   */
  amount: Coin[] = [];

  constructor(data?: PartialMessage<MsgUnstakePAssets>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.pgov.v1.MsgUnstakePAssets";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnstakePAssets {
    return new MsgUnstakePAssets().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnstakePAssets {
    return new MsgUnstakePAssets().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnstakePAssets {
    return new MsgUnstakePAssets().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUnstakePAssets | PlainMessage<MsgUnstakePAssets> | undefined, b: MsgUnstakePAssets | PlainMessage<MsgUnstakePAssets> | undefined): boolean {
    return proto3.util.equals(MsgUnstakePAssets, a, b);
  }
}

/**
 * @generated from message pryzm.pgov.v1.MsgUnstakePAssetsResponse
 */
export class MsgUnstakePAssetsResponse extends Message<MsgUnstakePAssetsResponse> {
  /**
   * @generated from field: string total_staked_p_assets = 1;
   */
  totalStakedPAssets = "";

  constructor(data?: PartialMessage<MsgUnstakePAssetsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.pgov.v1.MsgUnstakePAssetsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "total_staked_p_assets", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnstakePAssetsResponse {
    return new MsgUnstakePAssetsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnstakePAssetsResponse {
    return new MsgUnstakePAssetsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnstakePAssetsResponse {
    return new MsgUnstakePAssetsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUnstakePAssetsResponse | PlainMessage<MsgUnstakePAssetsResponse> | undefined, b: MsgUnstakePAssetsResponse | PlainMessage<MsgUnstakePAssetsResponse> | undefined): boolean {
    return proto3.util.equals(MsgUnstakePAssetsResponse, a, b);
  }
}

/**
 * @generated from message pryzm.pgov.v1.MsgSubmitVote
 */
export class MsgSubmitVote extends Message<MsgSubmitVote> {
  /**
   * @generated from field: string voter = 1;
   */
  voter = "";

  /**
   * @generated from field: string asset = 2;
   */
  asset = "";

  /**
   * @generated from field: uint64 proposal = 3;
   */
  proposal = protoInt64.zero;

  /**
   * @generated from field: repeated cosmos.gov.v1.WeightedVoteOption options = 4;
   */
  options: WeightedVoteOption[] = [];

  constructor(data?: PartialMessage<MsgSubmitVote>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.pgov.v1.MsgSubmitVote";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "proposal", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "options", kind: "message", T: WeightedVoteOption, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitVote {
    return new MsgSubmitVote().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitVote {
    return new MsgSubmitVote().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitVote {
    return new MsgSubmitVote().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSubmitVote | PlainMessage<MsgSubmitVote> | undefined, b: MsgSubmitVote | PlainMessage<MsgSubmitVote> | undefined): boolean {
    return proto3.util.equals(MsgSubmitVote, a, b);
  }
}

/**
 * @generated from message pryzm.pgov.v1.MsgSubmitVoteResponse
 */
export class MsgSubmitVoteResponse extends Message<MsgSubmitVoteResponse> {
  constructor(data?: PartialMessage<MsgSubmitVoteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.pgov.v1.MsgSubmitVoteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitVoteResponse {
    return new MsgSubmitVoteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitVoteResponse {
    return new MsgSubmitVoteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitVoteResponse {
    return new MsgSubmitVoteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSubmitVoteResponse | PlainMessage<MsgSubmitVoteResponse> | undefined, b: MsgSubmitVoteResponse | PlainMessage<MsgSubmitVoteResponse> | undefined): boolean {
    return proto3.util.equals(MsgSubmitVoteResponse, a, b);
  }
}

/**
 * @generated from message pryzm.pgov.v1.MsgSubmitProposal
 */
export class MsgSubmitProposal extends Message<MsgSubmitProposal> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string asset = 2;
   */
  asset = "";

  /**
   * @generated from field: bytes proposal = 3;
   */
  proposal = new Uint8Array(0);

  /**
   * @generated from field: ibc.core.client.v1.Height height = 4;
   */
  height?: Height;

  /**
   * @generated from field: bytes proof = 5;
   */
  proof = new Uint8Array(0);

  constructor(data?: PartialMessage<MsgSubmitProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.pgov.v1.MsgSubmitProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "proposal", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "height", kind: "message", T: Height },
    { no: 5, name: "proof", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitProposal {
    return new MsgSubmitProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitProposal {
    return new MsgSubmitProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitProposal {
    return new MsgSubmitProposal().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSubmitProposal | PlainMessage<MsgSubmitProposal> | undefined, b: MsgSubmitProposal | PlainMessage<MsgSubmitProposal> | undefined): boolean {
    return proto3.util.equals(MsgSubmitProposal, a, b);
  }
}

/**
 * @generated from message pryzm.pgov.v1.MsgSubmitProposalResponse
 */
export class MsgSubmitProposalResponse extends Message<MsgSubmitProposalResponse> {
  /**
   * @generated from field: pryzm.pgov.v1.Proposal proposal = 1;
   */
  proposal?: Proposal;

  constructor(data?: PartialMessage<MsgSubmitProposalResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.pgov.v1.MsgSubmitProposalResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal", kind: "message", T: Proposal },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitProposalResponse {
    return new MsgSubmitProposalResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitProposalResponse {
    return new MsgSubmitProposalResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitProposalResponse {
    return new MsgSubmitProposalResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSubmitProposalResponse | PlainMessage<MsgSubmitProposalResponse> | undefined, b: MsgSubmitProposalResponse | PlainMessage<MsgSubmitProposalResponse> | undefined): boolean {
    return proto3.util.equals(MsgSubmitProposalResponse, a, b);
  }
}

/**
 * @generated from message pryzm.pgov.v1.MsgRetryVoteTransmit
 */
export class MsgRetryVoteTransmit extends Message<MsgRetryVoteTransmit> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string asset = 2;
   */
  asset = "";

  /**
   * @generated from field: uint64 proposal = 3;
   */
  proposal = protoInt64.zero;

  constructor(data?: PartialMessage<MsgRetryVoteTransmit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.pgov.v1.MsgRetryVoteTransmit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "proposal", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRetryVoteTransmit {
    return new MsgRetryVoteTransmit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRetryVoteTransmit {
    return new MsgRetryVoteTransmit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRetryVoteTransmit {
    return new MsgRetryVoteTransmit().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRetryVoteTransmit | PlainMessage<MsgRetryVoteTransmit> | undefined, b: MsgRetryVoteTransmit | PlainMessage<MsgRetryVoteTransmit> | undefined): boolean {
    return proto3.util.equals(MsgRetryVoteTransmit, a, b);
  }
}

/**
 * @generated from message pryzm.pgov.v1.MsgRetryVoteTransmitResponse
 */
export class MsgRetryVoteTransmitResponse extends Message<MsgRetryVoteTransmitResponse> {
  constructor(data?: PartialMessage<MsgRetryVoteTransmitResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.pgov.v1.MsgRetryVoteTransmitResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRetryVoteTransmitResponse {
    return new MsgRetryVoteTransmitResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRetryVoteTransmitResponse {
    return new MsgRetryVoteTransmitResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRetryVoteTransmitResponse {
    return new MsgRetryVoteTransmitResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRetryVoteTransmitResponse | PlainMessage<MsgRetryVoteTransmitResponse> | undefined, b: MsgRetryVoteTransmitResponse | PlainMessage<MsgRetryVoteTransmitResponse> | undefined): boolean {
    return proto3.util.equals(MsgRetryVoteTransmitResponse, a, b);
  }
}

