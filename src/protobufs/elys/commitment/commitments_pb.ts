// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/commitment/commitments.proto (package elys.commitment, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";

/**
 * GenesisState defines the commitment module's genesis state.
 *
 * @generated from message elys.commitment.Commitments
 */
export class Commitments extends Message<Commitments> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: repeated elys.commitment.CommittedTokens committed_tokens = 2;
   */
  committedTokens: CommittedTokens[] = [];

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin claimed = 3;
   */
  claimed: Coin[] = [];

  /**
   * @generated from field: repeated elys.commitment.VestingTokens vesting_tokens = 4;
   */
  vestingTokens: VestingTokens[] = [];

  constructor(data?: PartialMessage<Commitments>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.Commitments";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "committed_tokens", kind: "message", T: CommittedTokens, repeated: true },
    { no: 3, name: "claimed", kind: "message", T: Coin, repeated: true },
    { no: 4, name: "vesting_tokens", kind: "message", T: VestingTokens, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Commitments {
    return new Commitments().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Commitments {
    return new Commitments().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Commitments {
    return new Commitments().fromJsonString(jsonString, options);
  }

  static equals(a: Commitments | PlainMessage<Commitments> | undefined, b: Commitments | PlainMessage<Commitments> | undefined): boolean {
    return proto3.util.equals(Commitments, a, b);
  }
}

/**
 * @generated from message elys.commitment.Lockup
 */
export class Lockup extends Message<Lockup> {
  /**
   * @generated from field: string amount = 1;
   */
  amount = "";

  /**
   * @generated from field: uint64 unlock_timestamp = 2;
   */
  unlockTimestamp = protoInt64.zero;

  constructor(data?: PartialMessage<Lockup>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.Lockup";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "unlock_timestamp", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Lockup {
    return new Lockup().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Lockup {
    return new Lockup().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Lockup {
    return new Lockup().fromJsonString(jsonString, options);
  }

  static equals(a: Lockup | PlainMessage<Lockup> | undefined, b: Lockup | PlainMessage<Lockup> | undefined): boolean {
    return proto3.util.equals(Lockup, a, b);
  }
}

/**
 * @generated from message elys.commitment.CommittedTokens
 */
export class CommittedTokens extends Message<CommittedTokens> {
  /**
   * @generated from field: string denom = 1;
   */
  denom = "";

  /**
   * @generated from field: string amount = 2;
   */
  amount = "";

  /**
   * @generated from field: repeated elys.commitment.Lockup lockups = 3;
   */
  lockups: Lockup[] = [];

  constructor(data?: PartialMessage<CommittedTokens>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.CommittedTokens";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "lockups", kind: "message", T: Lockup, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommittedTokens {
    return new CommittedTokens().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommittedTokens {
    return new CommittedTokens().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommittedTokens {
    return new CommittedTokens().fromJsonString(jsonString, options);
  }

  static equals(a: CommittedTokens | PlainMessage<CommittedTokens> | undefined, b: CommittedTokens | PlainMessage<CommittedTokens> | undefined): boolean {
    return proto3.util.equals(CommittedTokens, a, b);
  }
}

/**
 * @generated from message elys.commitment.VestingTokens
 */
export class VestingTokens extends Message<VestingTokens> {
  /**
   * @generated from field: string denom = 1;
   */
  denom = "";

  /**
   * @generated from field: string total_amount = 2;
   */
  totalAmount = "";

  /**
   * @generated from field: string claimed_amount = 3;
   */
  claimedAmount = "";

  /**
   * @generated from field: int64 num_blocks = 5;
   */
  numBlocks = protoInt64.zero;

  /**
   * @generated from field: int64 start_block = 6;
   */
  startBlock = protoInt64.zero;

  /**
   * @generated from field: int64 vest_started_timestamp = 7;
   */
  vestStartedTimestamp = protoInt64.zero;

  constructor(data?: PartialMessage<VestingTokens>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.VestingTokens";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "total_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "claimed_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "num_blocks", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "start_block", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "vest_started_timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VestingTokens {
    return new VestingTokens().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VestingTokens {
    return new VestingTokens().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VestingTokens {
    return new VestingTokens().fromJsonString(jsonString, options);
  }

  static equals(a: VestingTokens | PlainMessage<VestingTokens> | undefined, b: VestingTokens | PlainMessage<VestingTokens> | undefined): boolean {
    return proto3.util.equals(VestingTokens, a, b);
  }
}

