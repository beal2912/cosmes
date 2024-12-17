// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file tendermint/types/types.proto (package tendermint.types, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Proof } from "../crypto/proof_pb.js";
import { Consensus } from "../version/types_pb.js";
import { BlockIDFlag, ValidatorSet } from "./validator_pb.js";

/**
 * SignedMsgType is a type of signed message in the consensus.
 *
 * @generated from enum tendermint.types.SignedMsgType
 */
export enum SignedMsgType {
  /**
   * @generated from enum value: SIGNED_MSG_TYPE_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * Votes
   *
   * @generated from enum value: SIGNED_MSG_TYPE_PREVOTE = 1;
   */
  PREVOTE = 1,

  /**
   * @generated from enum value: SIGNED_MSG_TYPE_PRECOMMIT = 2;
   */
  PRECOMMIT = 2,

  /**
   * Proposals
   *
   * @generated from enum value: SIGNED_MSG_TYPE_PROPOSAL = 32;
   */
  PROPOSAL = 32,
}
// Retrieve enum metadata with: proto3.getEnumType(SignedMsgType)
proto3.util.setEnumType(SignedMsgType, "tendermint.types.SignedMsgType", [
  { no: 0, name: "SIGNED_MSG_TYPE_UNKNOWN" },
  { no: 1, name: "SIGNED_MSG_TYPE_PREVOTE" },
  { no: 2, name: "SIGNED_MSG_TYPE_PRECOMMIT" },
  { no: 32, name: "SIGNED_MSG_TYPE_PROPOSAL" },
]);

/**
 * PartsetHeader
 *
 * @generated from message tendermint.types.PartSetHeader
 */
export class PartSetHeader extends Message<PartSetHeader> {
  /**
   * @generated from field: uint32 total = 1;
   */
  total = 0;

  /**
   * @generated from field: bytes hash = 2;
   */
  hash = new Uint8Array(0);

  constructor(data?: PartialMessage<PartSetHeader>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.PartSetHeader";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "total", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PartSetHeader {
    return new PartSetHeader().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PartSetHeader {
    return new PartSetHeader().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PartSetHeader {
    return new PartSetHeader().fromJsonString(jsonString, options);
  }

  static equals(a: PartSetHeader | PlainMessage<PartSetHeader> | undefined, b: PartSetHeader | PlainMessage<PartSetHeader> | undefined): boolean {
    return proto3.util.equals(PartSetHeader, a, b);
  }
}

/**
 * @generated from message tendermint.types.Part
 */
export class Part extends Message<Part> {
  /**
   * @generated from field: uint32 index = 1;
   */
  index = 0;

  /**
   * @generated from field: bytes bytes = 2;
   */
  bytes = new Uint8Array(0);

  /**
   * @generated from field: tendermint.crypto.Proof proof = 3;
   */
  proof?: Proof;

  constructor(data?: PartialMessage<Part>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.Part";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "index", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "proof", kind: "message", T: Proof },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Part {
    return new Part().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Part {
    return new Part().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Part {
    return new Part().fromJsonString(jsonString, options);
  }

  static equals(a: Part | PlainMessage<Part> | undefined, b: Part | PlainMessage<Part> | undefined): boolean {
    return proto3.util.equals(Part, a, b);
  }
}

/**
 * BlockID
 *
 * @generated from message tendermint.types.BlockID
 */
export class BlockID extends Message<BlockID> {
  /**
   * @generated from field: bytes hash = 1;
   */
  hash = new Uint8Array(0);

  /**
   * @generated from field: tendermint.types.PartSetHeader part_set_header = 2;
   */
  partSetHeader?: PartSetHeader;

  constructor(data?: PartialMessage<BlockID>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.BlockID";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "part_set_header", kind: "message", T: PartSetHeader },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockID {
    return new BlockID().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockID {
    return new BlockID().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockID {
    return new BlockID().fromJsonString(jsonString, options);
  }

  static equals(a: BlockID | PlainMessage<BlockID> | undefined, b: BlockID | PlainMessage<BlockID> | undefined): boolean {
    return proto3.util.equals(BlockID, a, b);
  }
}

/**
 * Header defines the structure of a block header.
 *
 * @generated from message tendermint.types.Header
 */
export class Header extends Message<Header> {
  /**
   * basic block info
   *
   * @generated from field: tendermint.version.Consensus version = 1;
   */
  version?: Consensus;

  /**
   * @generated from field: string chain_id = 2;
   */
  chainId = "";

  /**
   * @generated from field: int64 height = 3;
   */
  height = protoInt64.zero;

  /**
   * @generated from field: google.protobuf.Timestamp time = 4;
   */
  time?: Timestamp;

  /**
   * prev block info
   *
   * @generated from field: tendermint.types.BlockID last_block_id = 5;
   */
  lastBlockId?: BlockID;

  /**
   * hashes of block data
   *
   * commit from validators from the last block
   *
   * @generated from field: bytes last_commit_hash = 6;
   */
  lastCommitHash = new Uint8Array(0);

  /**
   * transactions
   *
   * @generated from field: bytes data_hash = 7;
   */
  dataHash = new Uint8Array(0);

  /**
   * hashes from the app output from the prev block
   *
   * validators for the current block
   *
   * @generated from field: bytes validators_hash = 8;
   */
  validatorsHash = new Uint8Array(0);

  /**
   * validators for the next block
   *
   * @generated from field: bytes next_validators_hash = 9;
   */
  nextValidatorsHash = new Uint8Array(0);

  /**
   * consensus params for current block
   *
   * @generated from field: bytes consensus_hash = 10;
   */
  consensusHash = new Uint8Array(0);

  /**
   * state after txs from the previous block
   *
   * @generated from field: bytes app_hash = 11;
   */
  appHash = new Uint8Array(0);

  /**
   * root hash of all results from the txs from the previous block
   *
   * @generated from field: bytes last_results_hash = 12;
   */
  lastResultsHash = new Uint8Array(0);

  /**
   * consensus info
   *
   * evidence included in the block
   *
   * @generated from field: bytes evidence_hash = 13;
   */
  evidenceHash = new Uint8Array(0);

  /**
   * original proposer of the block
   *
   * @generated from field: bytes proposer_address = 14;
   */
  proposerAddress = new Uint8Array(0);

  constructor(data?: PartialMessage<Header>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.Header";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "message", T: Consensus },
    { no: 2, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "time", kind: "message", T: Timestamp },
    { no: 5, name: "last_block_id", kind: "message", T: BlockID },
    { no: 6, name: "last_commit_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 7, name: "data_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 8, name: "validators_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 9, name: "next_validators_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 10, name: "consensus_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 11, name: "app_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 12, name: "last_results_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 13, name: "evidence_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 14, name: "proposer_address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Header {
    return new Header().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Header {
    return new Header().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Header {
    return new Header().fromJsonString(jsonString, options);
  }

  static equals(a: Header | PlainMessage<Header> | undefined, b: Header | PlainMessage<Header> | undefined): boolean {
    return proto3.util.equals(Header, a, b);
  }
}

/**
 * Data contains the set of transactions included in the block
 *
 * @generated from message tendermint.types.Data
 */
export class Data extends Message<Data> {
  /**
   * Txs that will be applied by state @ block.Height+1.
   * NOTE: not all txs here are valid.  We're just agreeing on the order first.
   * This means that block.AppHash does not include these txs.
   *
   * @generated from field: repeated bytes txs = 1;
   */
  txs: Uint8Array[] = [];

  constructor(data?: PartialMessage<Data>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.Data";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "txs", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Data {
    return new Data().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Data {
    return new Data().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Data {
    return new Data().fromJsonString(jsonString, options);
  }

  static equals(a: Data | PlainMessage<Data> | undefined, b: Data | PlainMessage<Data> | undefined): boolean {
    return proto3.util.equals(Data, a, b);
  }
}

/**
 * Vote represents a prevote or precommit vote from validators for
 * consensus.
 *
 * @generated from message tendermint.types.Vote
 */
export class Vote extends Message<Vote> {
  /**
   * @generated from field: tendermint.types.SignedMsgType type = 1;
   */
  type = SignedMsgType.UNKNOWN;

  /**
   * @generated from field: int64 height = 2;
   */
  height = protoInt64.zero;

  /**
   * @generated from field: int32 round = 3;
   */
  round = 0;

  /**
   * zero if vote is nil.
   *
   * @generated from field: tendermint.types.BlockID block_id = 4;
   */
  blockId?: BlockID;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 5;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: bytes validator_address = 6;
   */
  validatorAddress = new Uint8Array(0);

  /**
   * @generated from field: int32 validator_index = 7;
   */
  validatorIndex = 0;

  /**
   * Vote signature by the validator if they participated in consensus for the
   * associated block.
   *
   * @generated from field: bytes signature = 8;
   */
  signature = new Uint8Array(0);

  /**
   * Vote extension provided by the application. Only valid for precommit
   * messages.
   *
   * @generated from field: bytes extension = 9;
   */
  extension = new Uint8Array(0);

  /**
   * Vote extension signature by the validator if they participated in
   * consensus for the associated block.
   * Only valid for precommit messages.
   *
   * @generated from field: bytes extension_signature = 10;
   */
  extensionSignature = new Uint8Array(0);

  constructor(data?: PartialMessage<Vote>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.Vote";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(SignedMsgType) },
    { no: 2, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "block_id", kind: "message", T: BlockID },
    { no: 5, name: "timestamp", kind: "message", T: Timestamp },
    { no: 6, name: "validator_address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 7, name: "validator_index", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "signature", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 9, name: "extension", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 10, name: "extension_signature", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Vote {
    return new Vote().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Vote {
    return new Vote().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Vote {
    return new Vote().fromJsonString(jsonString, options);
  }

  static equals(a: Vote | PlainMessage<Vote> | undefined, b: Vote | PlainMessage<Vote> | undefined): boolean {
    return proto3.util.equals(Vote, a, b);
  }
}

/**
 * Commit contains the evidence that a block was committed by a set of validators.
 *
 * @generated from message tendermint.types.Commit
 */
export class Commit extends Message<Commit> {
  /**
   * @generated from field: int64 height = 1;
   */
  height = protoInt64.zero;

  /**
   * @generated from field: int32 round = 2;
   */
  round = 0;

  /**
   * @generated from field: tendermint.types.BlockID block_id = 3;
   */
  blockId?: BlockID;

  /**
   * @generated from field: repeated tendermint.types.CommitSig signatures = 4;
   */
  signatures: CommitSig[] = [];

  constructor(data?: PartialMessage<Commit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.Commit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "block_id", kind: "message", T: BlockID },
    { no: 4, name: "signatures", kind: "message", T: CommitSig, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Commit {
    return new Commit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Commit {
    return new Commit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Commit {
    return new Commit().fromJsonString(jsonString, options);
  }

  static equals(a: Commit | PlainMessage<Commit> | undefined, b: Commit | PlainMessage<Commit> | undefined): boolean {
    return proto3.util.equals(Commit, a, b);
  }
}

/**
 * CommitSig is a part of the Vote included in a Commit.
 *
 * @generated from message tendermint.types.CommitSig
 */
export class CommitSig extends Message<CommitSig> {
  /**
   * @generated from field: tendermint.types.BlockIDFlag block_id_flag = 1;
   */
  blockIdFlag = BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;

  /**
   * @generated from field: bytes validator_address = 2;
   */
  validatorAddress = new Uint8Array(0);

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 3;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: bytes signature = 4;
   */
  signature = new Uint8Array(0);

  constructor(data?: PartialMessage<CommitSig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.CommitSig";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "block_id_flag", kind: "enum", T: proto3.getEnumType(BlockIDFlag) },
    { no: 2, name: "validator_address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "timestamp", kind: "message", T: Timestamp },
    { no: 4, name: "signature", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommitSig {
    return new CommitSig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommitSig {
    return new CommitSig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommitSig {
    return new CommitSig().fromJsonString(jsonString, options);
  }

  static equals(a: CommitSig | PlainMessage<CommitSig> | undefined, b: CommitSig | PlainMessage<CommitSig> | undefined): boolean {
    return proto3.util.equals(CommitSig, a, b);
  }
}

/**
 * @generated from message tendermint.types.ExtendedCommit
 */
export class ExtendedCommit extends Message<ExtendedCommit> {
  /**
   * @generated from field: int64 height = 1;
   */
  height = protoInt64.zero;

  /**
   * @generated from field: int32 round = 2;
   */
  round = 0;

  /**
   * @generated from field: tendermint.types.BlockID block_id = 3;
   */
  blockId?: BlockID;

  /**
   * @generated from field: repeated tendermint.types.ExtendedCommitSig extended_signatures = 4;
   */
  extendedSignatures: ExtendedCommitSig[] = [];

  constructor(data?: PartialMessage<ExtendedCommit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.ExtendedCommit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "block_id", kind: "message", T: BlockID },
    { no: 4, name: "extended_signatures", kind: "message", T: ExtendedCommitSig, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExtendedCommit {
    return new ExtendedCommit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExtendedCommit {
    return new ExtendedCommit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExtendedCommit {
    return new ExtendedCommit().fromJsonString(jsonString, options);
  }

  static equals(a: ExtendedCommit | PlainMessage<ExtendedCommit> | undefined, b: ExtendedCommit | PlainMessage<ExtendedCommit> | undefined): boolean {
    return proto3.util.equals(ExtendedCommit, a, b);
  }
}

/**
 * ExtendedCommitSig retains all the same fields as CommitSig but adds vote
 * extension-related fields. We use two signatures to ensure backwards compatibility.
 * That is the digest of the original signature is still the same in prior versions
 *
 * @generated from message tendermint.types.ExtendedCommitSig
 */
export class ExtendedCommitSig extends Message<ExtendedCommitSig> {
  /**
   * @generated from field: tendermint.types.BlockIDFlag block_id_flag = 1;
   */
  blockIdFlag = BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;

  /**
   * @generated from field: bytes validator_address = 2;
   */
  validatorAddress = new Uint8Array(0);

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 3;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: bytes signature = 4;
   */
  signature = new Uint8Array(0);

  /**
   * Vote extension data
   *
   * @generated from field: bytes extension = 5;
   */
  extension = new Uint8Array(0);

  /**
   * Vote extension signature
   *
   * @generated from field: bytes extension_signature = 6;
   */
  extensionSignature = new Uint8Array(0);

  constructor(data?: PartialMessage<ExtendedCommitSig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.ExtendedCommitSig";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "block_id_flag", kind: "enum", T: proto3.getEnumType(BlockIDFlag) },
    { no: 2, name: "validator_address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "timestamp", kind: "message", T: Timestamp },
    { no: 4, name: "signature", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "extension", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "extension_signature", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExtendedCommitSig {
    return new ExtendedCommitSig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExtendedCommitSig {
    return new ExtendedCommitSig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExtendedCommitSig {
    return new ExtendedCommitSig().fromJsonString(jsonString, options);
  }

  static equals(a: ExtendedCommitSig | PlainMessage<ExtendedCommitSig> | undefined, b: ExtendedCommitSig | PlainMessage<ExtendedCommitSig> | undefined): boolean {
    return proto3.util.equals(ExtendedCommitSig, a, b);
  }
}

/**
 * @generated from message tendermint.types.Proposal
 */
export class Proposal extends Message<Proposal> {
  /**
   * @generated from field: tendermint.types.SignedMsgType type = 1;
   */
  type = SignedMsgType.UNKNOWN;

  /**
   * @generated from field: int64 height = 2;
   */
  height = protoInt64.zero;

  /**
   * @generated from field: int32 round = 3;
   */
  round = 0;

  /**
   * @generated from field: int32 pol_round = 4;
   */
  polRound = 0;

  /**
   * @generated from field: tendermint.types.BlockID block_id = 5;
   */
  blockId?: BlockID;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 6;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: bytes signature = 7;
   */
  signature = new Uint8Array(0);

  constructor(data?: PartialMessage<Proposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.Proposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(SignedMsgType) },
    { no: 2, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "pol_round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "block_id", kind: "message", T: BlockID },
    { no: 6, name: "timestamp", kind: "message", T: Timestamp },
    { no: 7, name: "signature", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Proposal {
    return new Proposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Proposal {
    return new Proposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Proposal {
    return new Proposal().fromJsonString(jsonString, options);
  }

  static equals(a: Proposal | PlainMessage<Proposal> | undefined, b: Proposal | PlainMessage<Proposal> | undefined): boolean {
    return proto3.util.equals(Proposal, a, b);
  }
}

/**
 * @generated from message tendermint.types.SignedHeader
 */
export class SignedHeader extends Message<SignedHeader> {
  /**
   * @generated from field: tendermint.types.Header header = 1;
   */
  header?: Header;

  /**
   * @generated from field: tendermint.types.Commit commit = 2;
   */
  commit?: Commit;

  constructor(data?: PartialMessage<SignedHeader>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.SignedHeader";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "header", kind: "message", T: Header },
    { no: 2, name: "commit", kind: "message", T: Commit },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignedHeader {
    return new SignedHeader().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignedHeader {
    return new SignedHeader().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignedHeader {
    return new SignedHeader().fromJsonString(jsonString, options);
  }

  static equals(a: SignedHeader | PlainMessage<SignedHeader> | undefined, b: SignedHeader | PlainMessage<SignedHeader> | undefined): boolean {
    return proto3.util.equals(SignedHeader, a, b);
  }
}

/**
 * @generated from message tendermint.types.LightBlock
 */
export class LightBlock extends Message<LightBlock> {
  /**
   * @generated from field: tendermint.types.SignedHeader signed_header = 1;
   */
  signedHeader?: SignedHeader;

  /**
   * @generated from field: tendermint.types.ValidatorSet validator_set = 2;
   */
  validatorSet?: ValidatorSet;

  constructor(data?: PartialMessage<LightBlock>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.LightBlock";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "signed_header", kind: "message", T: SignedHeader },
    { no: 2, name: "validator_set", kind: "message", T: ValidatorSet },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LightBlock {
    return new LightBlock().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LightBlock {
    return new LightBlock().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LightBlock {
    return new LightBlock().fromJsonString(jsonString, options);
  }

  static equals(a: LightBlock | PlainMessage<LightBlock> | undefined, b: LightBlock | PlainMessage<LightBlock> | undefined): boolean {
    return proto3.util.equals(LightBlock, a, b);
  }
}

/**
 * @generated from message tendermint.types.BlockMeta
 */
export class BlockMeta extends Message<BlockMeta> {
  /**
   * @generated from field: tendermint.types.BlockID block_id = 1;
   */
  blockId?: BlockID;

  /**
   * @generated from field: int64 block_size = 2;
   */
  blockSize = protoInt64.zero;

  /**
   * @generated from field: tendermint.types.Header header = 3;
   */
  header?: Header;

  /**
   * @generated from field: int64 num_txs = 4;
   */
  numTxs = protoInt64.zero;

  constructor(data?: PartialMessage<BlockMeta>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.BlockMeta";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "block_id", kind: "message", T: BlockID },
    { no: 2, name: "block_size", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "header", kind: "message", T: Header },
    { no: 4, name: "num_txs", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockMeta {
    return new BlockMeta().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockMeta {
    return new BlockMeta().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockMeta {
    return new BlockMeta().fromJsonString(jsonString, options);
  }

  static equals(a: BlockMeta | PlainMessage<BlockMeta> | undefined, b: BlockMeta | PlainMessage<BlockMeta> | undefined): boolean {
    return proto3.util.equals(BlockMeta, a, b);
  }
}

/**
 * TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree.
 *
 * @generated from message tendermint.types.TxProof
 */
export class TxProof extends Message<TxProof> {
  /**
   * @generated from field: bytes root_hash = 1;
   */
  rootHash = new Uint8Array(0);

  /**
   * @generated from field: bytes data = 2;
   */
  data = new Uint8Array(0);

  /**
   * @generated from field: tendermint.crypto.Proof proof = 3;
   */
  proof?: Proof;

  constructor(data?: PartialMessage<TxProof>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.TxProof";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "root_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "proof", kind: "message", T: Proof },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxProof {
    return new TxProof().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxProof {
    return new TxProof().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxProof {
    return new TxProof().fromJsonString(jsonString, options);
  }

  static equals(a: TxProof | PlainMessage<TxProof> | undefined, b: TxProof | PlainMessage<TxProof> | undefined): boolean {
    return proto3.util.equals(TxProof, a, b);
  }
}

