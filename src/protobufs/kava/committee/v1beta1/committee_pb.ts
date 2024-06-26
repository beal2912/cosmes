// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/committee/v1beta1/committee.proto (package kava.committee.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Duration, Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * TallyOption enumerates the valid types of a tally.
 *
 * @generated from enum kava.committee.v1beta1.TallyOption
 */
export enum TallyOption {
  /**
   * TALLY_OPTION_UNSPECIFIED defines a null tally option.
   *
   * @generated from enum value: TALLY_OPTION_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Votes are tallied each block and the proposal passes as soon as the vote threshold is reached
   *
   * @generated from enum value: TALLY_OPTION_FIRST_PAST_THE_POST = 1;
   */
  FIRST_PAST_THE_POST = 1,

  /**
   * Votes are tallied exactly once, when the deadline time is reached
   *
   * @generated from enum value: TALLY_OPTION_DEADLINE = 2;
   */
  DEADLINE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(TallyOption)
proto3.util.setEnumType(TallyOption, "kava.committee.v1beta1.TallyOption", [
  { no: 0, name: "TALLY_OPTION_UNSPECIFIED" },
  { no: 1, name: "TALLY_OPTION_FIRST_PAST_THE_POST" },
  { no: 2, name: "TALLY_OPTION_DEADLINE" },
]);

/**
 * BaseCommittee is a common type shared by all Committees
 *
 * @generated from message kava.committee.v1beta1.BaseCommittee
 */
export class BaseCommittee extends Message<BaseCommittee> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: repeated bytes members = 3;
   */
  members: Uint8Array[] = [];

  /**
   * @generated from field: repeated google.protobuf.Any permissions = 4;
   */
  permissions: Any[] = [];

  /**
   * Smallest percentage that must vote for a proposal to pass
   *
   * @generated from field: string vote_threshold = 5;
   */
  voteThreshold = "";

  /**
   * The length of time a proposal remains active for. Proposals will close earlier if they get enough votes.
   *
   * @generated from field: google.protobuf.Duration proposal_duration = 6;
   */
  proposalDuration?: Duration;

  /**
   * @generated from field: kava.committee.v1beta1.TallyOption tally_option = 7;
   */
  tallyOption = TallyOption.UNSPECIFIED;

  constructor(data?: PartialMessage<BaseCommittee>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.BaseCommittee";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "members", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 4, name: "permissions", kind: "message", T: Any, repeated: true },
    { no: 5, name: "vote_threshold", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "proposal_duration", kind: "message", T: Duration },
    { no: 7, name: "tally_option", kind: "enum", T: proto3.getEnumType(TallyOption) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BaseCommittee {
    return new BaseCommittee().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BaseCommittee {
    return new BaseCommittee().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BaseCommittee {
    return new BaseCommittee().fromJsonString(jsonString, options);
  }

  static equals(a: BaseCommittee | PlainMessage<BaseCommittee> | undefined, b: BaseCommittee | PlainMessage<BaseCommittee> | undefined): boolean {
    return proto3.util.equals(BaseCommittee, a, b);
  }
}

/**
 * MemberCommittee is an alias of BaseCommittee
 *
 * @generated from message kava.committee.v1beta1.MemberCommittee
 */
export class MemberCommittee extends Message<MemberCommittee> {
  /**
   * @generated from field: kava.committee.v1beta1.BaseCommittee base_committee = 1;
   */
  baseCommittee?: BaseCommittee;

  constructor(data?: PartialMessage<MemberCommittee>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.MemberCommittee";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_committee", kind: "message", T: BaseCommittee },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MemberCommittee {
    return new MemberCommittee().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MemberCommittee {
    return new MemberCommittee().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MemberCommittee {
    return new MemberCommittee().fromJsonString(jsonString, options);
  }

  static equals(a: MemberCommittee | PlainMessage<MemberCommittee> | undefined, b: MemberCommittee | PlainMessage<MemberCommittee> | undefined): boolean {
    return proto3.util.equals(MemberCommittee, a, b);
  }
}

/**
 * TokenCommittee supports voting on proposals by token holders
 *
 * @generated from message kava.committee.v1beta1.TokenCommittee
 */
export class TokenCommittee extends Message<TokenCommittee> {
  /**
   * @generated from field: kava.committee.v1beta1.BaseCommittee base_committee = 1;
   */
  baseCommittee?: BaseCommittee;

  /**
   * @generated from field: string quorum = 2;
   */
  quorum = "";

  /**
   * @generated from field: string tally_denom = 3;
   */
  tallyDenom = "";

  constructor(data?: PartialMessage<TokenCommittee>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.TokenCommittee";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_committee", kind: "message", T: BaseCommittee },
    { no: 2, name: "quorum", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "tally_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenCommittee {
    return new TokenCommittee().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenCommittee {
    return new TokenCommittee().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenCommittee {
    return new TokenCommittee().fromJsonString(jsonString, options);
  }

  static equals(a: TokenCommittee | PlainMessage<TokenCommittee> | undefined, b: TokenCommittee | PlainMessage<TokenCommittee> | undefined): boolean {
    return proto3.util.equals(TokenCommittee, a, b);
  }
}

