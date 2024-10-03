// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file sunrise/blobstream/v1/types.proto (package sunrise.blobstream.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * BridgeValidator represents a validator's ETH address and its power
 *
 * @generated from message sunrise.blobstream.v1.BridgeValidator
 */
export class BridgeValidator extends Message<BridgeValidator> {
  /**
   * Voting power of the validator.
   *
   * @generated from field: uint64 power = 1;
   */
  power = protoInt64.zero;

  /**
   * EVM address that will be used by the validator to sign messages.
   *
   * @generated from field: string evm_address = 2;
   */
  evmAddress = "";

  constructor(data?: PartialMessage<BridgeValidator>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.blobstream.v1.BridgeValidator";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "power", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "evm_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BridgeValidator {
    return new BridgeValidator().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BridgeValidator {
    return new BridgeValidator().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BridgeValidator {
    return new BridgeValidator().fromJsonString(jsonString, options);
  }

  static equals(a: BridgeValidator | PlainMessage<BridgeValidator> | undefined, b: BridgeValidator | PlainMessage<BridgeValidator> | undefined): boolean {
    return proto3.util.equals(BridgeValidator, a, b);
  }
}

/**
 * Valset is the EVM Bridge Multsig Set, each Blobstream validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 *
 * @generated from message sunrise.blobstream.v1.Valset
 */
export class Valset extends Message<Valset> {
  /**
   * Universal nonce defined under:
   * https://github.com/sunriselayer/sunrise/pull/464
   *
   * @generated from field: uint64 nonce = 1;
   */
  nonce = protoInt64.zero;

  /**
   * List of BridgeValidator containing the current validator set.
   *
   * @generated from field: repeated sunrise.blobstream.v1.BridgeValidator members = 2;
   */
  members: BridgeValidator[] = [];

  /**
   * Current chain height
   *
   * @generated from field: uint64 height = 3;
   */
  height = protoInt64.zero;

  /**
   * Block time where this valset was created
   *
   * @generated from field: google.protobuf.Timestamp time = 4;
   */
  time?: Timestamp;

  constructor(data?: PartialMessage<Valset>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.blobstream.v1.Valset";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "nonce", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "members", kind: "message", T: BridgeValidator, repeated: true },
    { no: 3, name: "height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Valset {
    return new Valset().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Valset {
    return new Valset().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Valset {
    return new Valset().fromJsonString(jsonString, options);
  }

  static equals(a: Valset | PlainMessage<Valset> | undefined, b: Valset | PlainMessage<Valset> | undefined): boolean {
    return proto3.util.equals(Valset, a, b);
  }
}

/**
 * DataCommitment is the data commitment request message that will be signed
 * using orchestrators.
 * It does not contain a `commitment` field as this message will be created
 * inside the state machine and it doesn't make sense to ask tendermint for the
 * commitment there.
 * The range defined by begin_block and end_block is end exclusive.
 *
 * @generated from message sunrise.blobstream.v1.DataCommitment
 */
export class DataCommitment extends Message<DataCommitment> {
  /**
   * Universal nonce defined under:
   * https://github.com/sunriselayer/sunrise/pull/464
   *
   * @generated from field: uint64 nonce = 1;
   */
  nonce = protoInt64.zero;

  /**
   * First block defining the ordered set of blocks used to create the
   * commitment.
   *
   * @generated from field: uint64 begin_block = 2;
   */
  beginBlock = protoInt64.zero;

  /**
   * End exclusive last block defining the ordered set of blocks used to create
   * the commitment.
   *
   * @generated from field: uint64 end_block = 3;
   */
  endBlock = protoInt64.zero;

  /**
   * Block time where this data commitment was created
   *
   * @generated from field: google.protobuf.Timestamp time = 4;
   */
  time?: Timestamp;

  constructor(data?: PartialMessage<DataCommitment>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.blobstream.v1.DataCommitment";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "nonce", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "begin_block", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "end_block", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DataCommitment {
    return new DataCommitment().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DataCommitment {
    return new DataCommitment().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DataCommitment {
    return new DataCommitment().fromJsonString(jsonString, options);
  }

  static equals(a: DataCommitment | PlainMessage<DataCommitment> | undefined, b: DataCommitment | PlainMessage<DataCommitment> | undefined): boolean {
    return proto3.util.equals(DataCommitment, a, b);
  }
}

