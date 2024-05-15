// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/committee/v1beta1/tx.proto (package kava.committee.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { VoteType } from "./genesis_pb.js";

/**
 * MsgSubmitProposal is used by committee members to create a new proposal that they can vote on.
 *
 * @generated from message kava.committee.v1beta1.MsgSubmitProposal
 */
export class MsgSubmitProposal extends Message<MsgSubmitProposal> {
  /**
   * @generated from field: google.protobuf.Any pub_proposal = 1;
   */
  pubProposal?: Any;

  /**
   * @generated from field: string proposer = 2;
   */
  proposer = "";

  /**
   * @generated from field: uint64 committee_id = 3;
   */
  committeeId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgSubmitProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.MsgSubmitProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pub_proposal", kind: "message", T: Any },
    { no: 2, name: "proposer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "committee_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
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
 * MsgSubmitProposalResponse defines the SubmitProposal response type
 *
 * @generated from message kava.committee.v1beta1.MsgSubmitProposalResponse
 */
export class MsgSubmitProposalResponse extends Message<MsgSubmitProposalResponse> {
  /**
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgSubmitProposalResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.MsgSubmitProposalResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
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
 * MsgVote is submitted by committee members to vote on proposals.
 *
 * @generated from message kava.committee.v1beta1.MsgVote
 */
export class MsgVote extends Message<MsgVote> {
  /**
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  /**
   * @generated from field: string voter = 2;
   */
  voter = "";

  /**
   * @generated from field: kava.committee.v1beta1.VoteType vote_type = 3;
   */
  voteType = VoteType.UNSPECIFIED;

  constructor(data?: PartialMessage<MsgVote>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.MsgVote";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "vote_type", kind: "enum", T: proto3.getEnumType(VoteType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgVote {
    return new MsgVote().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgVote {
    return new MsgVote().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgVote {
    return new MsgVote().fromJsonString(jsonString, options);
  }

  static equals(a: MsgVote | PlainMessage<MsgVote> | undefined, b: MsgVote | PlainMessage<MsgVote> | undefined): boolean {
    return proto3.util.equals(MsgVote, a, b);
  }
}

/**
 * MsgVoteResponse defines the Vote response type
 *
 * @generated from message kava.committee.v1beta1.MsgVoteResponse
 */
export class MsgVoteResponse extends Message<MsgVoteResponse> {
  constructor(data?: PartialMessage<MsgVoteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.MsgVoteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgVoteResponse {
    return new MsgVoteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgVoteResponse {
    return new MsgVoteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgVoteResponse {
    return new MsgVoteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgVoteResponse | PlainMessage<MsgVoteResponse> | undefined, b: MsgVoteResponse | PlainMessage<MsgVoteResponse> | undefined): boolean {
    return proto3.util.equals(MsgVoteResponse, a, b);
  }
}

