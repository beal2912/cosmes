// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/evmos/blob/main/LICENSE)

// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ethermint/evm/v1/evm.proto (package ethermint.evm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * AccessType defines the types of permissions for the operations
 *
 * @generated from enum ethermint.evm.v1.AccessType
 */
export enum AccessType {
  /**
   * ACCESS_TYPE_PERMISSIONLESS does not restrict the operation to anyone
   *
   * @generated from enum value: ACCESS_TYPE_PERMISSIONLESS = 0;
   */
  PERMISSIONLESS = 0,

  /**
   * ACCESS_TYPE_RESTRICTED restrict the operation to anyone
   *
   * @generated from enum value: ACCESS_TYPE_RESTRICTED = 1;
   */
  RESTRICTED = 1,

  /**
   * ACCESS_TYPE_PERMISSIONED only allows the operation for specific addresses
   *
   * @generated from enum value: ACCESS_TYPE_PERMISSIONED = 2;
   */
  PERMISSIONED = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(AccessType)
proto3.util.setEnumType(AccessType, "ethermint.evm.v1.AccessType", [
  { no: 0, name: "ACCESS_TYPE_PERMISSIONLESS" },
  { no: 1, name: "ACCESS_TYPE_RESTRICTED" },
  { no: 2, name: "ACCESS_TYPE_PERMISSIONED" },
]);

/**
 * Params defines the EVM module parameters
 *
 * @generated from message ethermint.evm.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * extra_eips defines the additional EIPs for the vm.Config
   *
   * @generated from field: repeated string extra_eips = 4;
   */
  extraEips: string[] = [];

  /**
   * allow_unprotected_txs defines if replay-protected (i.e non EIP155
   * signed) transactions can be executed on the state machine.
   *
   * @generated from field: bool allow_unprotected_txs = 6;
   */
  allowUnprotectedTxs = false;

  /**
   * evm_channels is the list of channel identifiers from EVM compatible chains
   *
   * @generated from field: repeated string evm_channels = 8;
   */
  evmChannels: string[] = [];

  /**
   * access_control defines the permission policy of the EVM
   *
   * @generated from field: ethermint.evm.v1.AccessControl access_control = 9;
   */
  accessControl?: AccessControl;

  /**
   * active_static_precompiles defines the slice of hex addresses of the precompiled
   * contracts that are active
   *
   * @generated from field: repeated string active_static_precompiles = 10;
   */
  activeStaticPrecompiles: string[] = [];

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ethermint.evm.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 4, name: "extra_eips", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "allow_unprotected_txs", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "evm_channels", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 9, name: "access_control", kind: "message", T: AccessControl },
    { no: 10, name: "active_static_precompiles", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params {
    return new Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJsonString(jsonString, options);
  }

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean {
    return proto3.util.equals(Params, a, b);
  }
}

/**
 * AccessControl defines the permission policy of the EVM
 * for creating and calling contracts
 *
 * @generated from message ethermint.evm.v1.AccessControl
 */
export class AccessControl extends Message<AccessControl> {
  /**
   * create defines the permission policy for creating contracts
   *
   * @generated from field: ethermint.evm.v1.AccessControlType create = 1;
   */
  create?: AccessControlType;

  /**
   * call defines the permission policy for calling contracts
   *
   * @generated from field: ethermint.evm.v1.AccessControlType call = 2;
   */
  call?: AccessControlType;

  constructor(data?: PartialMessage<AccessControl>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ethermint.evm.v1.AccessControl";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "create", kind: "message", T: AccessControlType },
    { no: 2, name: "call", kind: "message", T: AccessControlType },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccessControl {
    return new AccessControl().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccessControl {
    return new AccessControl().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccessControl {
    return new AccessControl().fromJsonString(jsonString, options);
  }

  static equals(a: AccessControl | PlainMessage<AccessControl> | undefined, b: AccessControl | PlainMessage<AccessControl> | undefined): boolean {
    return proto3.util.equals(AccessControl, a, b);
  }
}

/**
 * AccessControlType defines the permission type for policies
 *
 * @generated from message ethermint.evm.v1.AccessControlType
 */
export class AccessControlType extends Message<AccessControlType> {
  /**
   * access_type defines which type of permission is required for the operation
   *
   * @generated from field: ethermint.evm.v1.AccessType access_type = 1;
   */
  accessType = AccessType.PERMISSIONLESS;

  /**
   * access_control_list defines defines different things depending on the AccessType:
   * - ACCESS_TYPE_PERMISSIONLESS: list of addresses that are blocked from performing the operation
   * - ACCESS_TYPE_RESTRICTED: ignored
   * - ACCESS_TYPE_PERMISSIONED: list of addresses that are allowed to perform the operation
   *
   * @generated from field: repeated string access_control_list = 2;
   */
  accessControlList: string[] = [];

  constructor(data?: PartialMessage<AccessControlType>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ethermint.evm.v1.AccessControlType";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_type", kind: "enum", T: proto3.getEnumType(AccessType) },
    { no: 2, name: "access_control_list", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccessControlType {
    return new AccessControlType().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccessControlType {
    return new AccessControlType().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccessControlType {
    return new AccessControlType().fromJsonString(jsonString, options);
  }

  static equals(a: AccessControlType | PlainMessage<AccessControlType> | undefined, b: AccessControlType | PlainMessage<AccessControlType> | undefined): boolean {
    return proto3.util.equals(AccessControlType, a, b);
  }
}

/**
 * ChainConfig defines the Ethereum ChainConfig parameters using *sdk.Int values
 * instead of *big.Int.
 *
 * @generated from message ethermint.evm.v1.ChainConfig
 */
export class ChainConfig extends Message<ChainConfig> {
  /**
   * homestead_block switch (nil no fork, 0 = already homestead)
   *
   * @generated from field: string homestead_block = 1;
   */
  homesteadBlock = "";

  /**
   * dao_fork_block corresponds to TheDAO hard-fork switch block (nil no fork)
   *
   * @generated from field: string dao_fork_block = 2;
   */
  daoForkBlock = "";

  /**
   * dao_fork_support defines whether the nodes supports or opposes the DAO hard-fork
   *
   * @generated from field: bool dao_fork_support = 3;
   */
  daoForkSupport = false;

  /**
   * eip150_block: EIP150 implements the Gas price changes
   * (https://github.com/ethereum/EIPs/issues/150) EIP150 HF block (nil no fork)
   *
   * @generated from field: string eip150_block = 4;
   */
  eip150Block = "";

  /**
   * eip150_hash: EIP150 HF hash (needed for header only clients as only gas pricing changed)
   *
   * @generated from field: string eip150_hash = 5;
   */
  eip150Hash = "";

  /**
   * eip155_block: EIP155Block HF block
   *
   * @generated from field: string eip155_block = 6;
   */
  eip155Block = "";

  /**
   * eip158_block: EIP158 HF block
   *
   * @generated from field: string eip158_block = 7;
   */
  eip158Block = "";

  /**
   * byzantium_block: Byzantium switch block (nil no fork, 0 = already on byzantium)
   *
   * @generated from field: string byzantium_block = 8;
   */
  byzantiumBlock = "";

  /**
   * constantinople_block: Constantinople switch block (nil no fork, 0 = already activated)
   *
   * @generated from field: string constantinople_block = 9;
   */
  constantinopleBlock = "";

  /**
   * petersburg_block: Petersburg switch block (nil same as Constantinople)
   *
   * @generated from field: string petersburg_block = 10;
   */
  petersburgBlock = "";

  /**
   * istanbul_block: Istanbul switch block (nil no fork, 0 = already on istanbul)
   *
   * @generated from field: string istanbul_block = 11;
   */
  istanbulBlock = "";

  /**
   * muir_glacier_block: Eip-2384 (bomb delay) switch block (nil no fork, 0 = already activated)
   *
   * @generated from field: string muir_glacier_block = 12;
   */
  muirGlacierBlock = "";

  /**
   * berlin_block: Berlin switch block (nil = no fork, 0 = already on berlin)
   *
   * @generated from field: string berlin_block = 13;
   */
  berlinBlock = "";

  /**
   * london_block: London switch block (nil = no fork, 0 = already on london)
   *
   * @generated from field: string london_block = 17;
   */
  londonBlock = "";

  /**
   * arrow_glacier_block: Eip-4345 (bomb delay) switch block (nil = no fork, 0 = already activated)
   *
   * @generated from field: string arrow_glacier_block = 18;
   */
  arrowGlacierBlock = "";

  /**
   * gray_glacier_block: EIP-5133 (bomb delay) switch block (nil = no fork, 0 = already activated)
   *
   * @generated from field: string gray_glacier_block = 20;
   */
  grayGlacierBlock = "";

  /**
   * merge_netsplit_block: Virtual fork after The Merge to use as a network splitter
   *
   * @generated from field: string merge_netsplit_block = 21;
   */
  mergeNetsplitBlock = "";

  /**
   * shanghai_block switch block (nil = no fork, 0 = already on shanghai)
   *
   * @generated from field: string shanghai_block = 22;
   */
  shanghaiBlock = "";

  /**
   * cancun_block switch block (nil = no fork, 0 = already on cancun)
   *
   * @generated from field: string cancun_block = 23;
   */
  cancunBlock = "";

  /**
   * chain_id is the id of the chain (EIP-155)
   *
   * @generated from field: uint64 chain_id = 24;
   */
  chainId = protoInt64.zero;

  /**
   * denom is the denomination used on the EVM
   *
   * @generated from field: string denom = 25;
   */
  denom = "";

  /**
   * decimals is the real decimal precision of the denomination used on the EVM
   *
   * @generated from field: uint64 decimals = 26;
   */
  decimals = protoInt64.zero;

  constructor(data?: PartialMessage<ChainConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ethermint.evm.v1.ChainConfig";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "homestead_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "dao_fork_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "dao_fork_support", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "eip150_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "eip150_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "eip155_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "eip158_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "byzantium_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "constantinople_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "petersburg_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "istanbul_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "muir_glacier_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "berlin_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "london_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "arrow_glacier_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "gray_glacier_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "merge_netsplit_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 22, name: "shanghai_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 23, name: "cancun_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 24, name: "chain_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 25, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 26, name: "decimals", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainConfig {
    return new ChainConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainConfig {
    return new ChainConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainConfig {
    return new ChainConfig().fromJsonString(jsonString, options);
  }

  static equals(a: ChainConfig | PlainMessage<ChainConfig> | undefined, b: ChainConfig | PlainMessage<ChainConfig> | undefined): boolean {
    return proto3.util.equals(ChainConfig, a, b);
  }
}

/**
 * State represents a single Storage key value pair item.
 *
 * @generated from message ethermint.evm.v1.State
 */
export class State extends Message<State> {
  /**
   * key is the stored key
   *
   * @generated from field: string key = 1;
   */
  key = "";

  /**
   * value is the stored value for the given key
   *
   * @generated from field: string value = 2;
   */
  value = "";

  constructor(data?: PartialMessage<State>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ethermint.evm.v1.State";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): State {
    return new State().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): State {
    return new State().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): State {
    return new State().fromJsonString(jsonString, options);
  }

  static equals(a: State | PlainMessage<State> | undefined, b: State | PlainMessage<State> | undefined): boolean {
    return proto3.util.equals(State, a, b);
  }
}

/**
 * TransactionLogs define the logs generated from a transaction execution
 * with a given hash. It it used for import/export data as transactions are not
 * persisted on blockchain state after an upgrade.
 *
 * @generated from message ethermint.evm.v1.TransactionLogs
 */
export class TransactionLogs extends Message<TransactionLogs> {
  /**
   * hash of the transaction
   *
   * @generated from field: string hash = 1;
   */
  hash = "";

  /**
   * logs is an array of Logs for the given transaction hash
   *
   * @generated from field: repeated ethermint.evm.v1.Log logs = 2;
   */
  logs: Log[] = [];

  constructor(data?: PartialMessage<TransactionLogs>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ethermint.evm.v1.TransactionLogs";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "logs", kind: "message", T: Log, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionLogs {
    return new TransactionLogs().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionLogs {
    return new TransactionLogs().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionLogs {
    return new TransactionLogs().fromJsonString(jsonString, options);
  }

  static equals(a: TransactionLogs | PlainMessage<TransactionLogs> | undefined, b: TransactionLogs | PlainMessage<TransactionLogs> | undefined): boolean {
    return proto3.util.equals(TransactionLogs, a, b);
  }
}

/**
 * Log represents an protobuf compatible Ethereum Log that defines a contract
 * log event. These events are generated by the LOG opcode and stored/indexed by
 * the node.
 *
 * NOTE: address, topics and data are consensus fields. The rest of the fields
 * are derived, i.e. filled in by the nodes, but not secured by consensus.
 *
 * @generated from message ethermint.evm.v1.Log
 */
export class Log extends Message<Log> {
  /**
   * address of the contract that generated the event
   *
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * topics is a list of topics provided by the contract.
   *
   * @generated from field: repeated string topics = 2;
   */
  topics: string[] = [];

  /**
   * data which is supplied by the contract, usually ABI-encoded
   *
   * @generated from field: bytes data = 3;
   */
  data = new Uint8Array(0);

  /**
   * block_number of the block in which the transaction was included
   *
   * @generated from field: uint64 block_number = 4;
   */
  blockNumber = protoInt64.zero;

  /**
   * tx_hash is the transaction hash
   *
   * @generated from field: string tx_hash = 5;
   */
  txHash = "";

  /**
   * tx_index of the transaction in the block
   *
   * @generated from field: uint64 tx_index = 6;
   */
  txIndex = protoInt64.zero;

  /**
   * block_hash of the block in which the transaction was included
   *
   * @generated from field: string block_hash = 7;
   */
  blockHash = "";

  /**
   * index of the log in the block
   *
   * @generated from field: uint64 index = 8;
   */
  index = protoInt64.zero;

  /**
   * removed is true if this log was reverted due to a chain
   * reorganisation. You must pay attention to this field if you receive logs
   * through a filter query.
   *
   * @generated from field: bool removed = 9;
   */
  removed = false;

  constructor(data?: PartialMessage<Log>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ethermint.evm.v1.Log";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "topics", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "block_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "tx_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "tx_index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "block_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 9, name: "removed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Log {
    return new Log().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Log {
    return new Log().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Log {
    return new Log().fromJsonString(jsonString, options);
  }

  static equals(a: Log | PlainMessage<Log> | undefined, b: Log | PlainMessage<Log> | undefined): boolean {
    return proto3.util.equals(Log, a, b);
  }
}

/**
 * TxResult stores results of Tx execution.
 *
 * @generated from message ethermint.evm.v1.TxResult
 */
export class TxResult extends Message<TxResult> {
  /**
   * contract_address contains the ethereum address of the created contract (if
   * any). If the state transition is an evm.Call, the contract address will be
   * empty.
   *
   * @generated from field: string contract_address = 1;
   */
  contractAddress = "";

  /**
   * bloom represents the bloom filter bytes
   *
   * @generated from field: bytes bloom = 2;
   */
  bloom = new Uint8Array(0);

  /**
   * tx_logs contains the transaction hash and the proto-compatible ethereum
   * logs.
   *
   * @generated from field: ethermint.evm.v1.TransactionLogs tx_logs = 3;
   */
  txLogs?: TransactionLogs;

  /**
   * ret defines the bytes from the execution.
   *
   * @generated from field: bytes ret = 4;
   */
  ret = new Uint8Array(0);

  /**
   * reverted flag is set to true when the call has been reverted
   *
   * @generated from field: bool reverted = 5;
   */
  reverted = false;

  /**
   * gas_used notes the amount of gas consumed while execution
   *
   * @generated from field: uint64 gas_used = 6;
   */
  gasUsed = protoInt64.zero;

  constructor(data?: PartialMessage<TxResult>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ethermint.evm.v1.TxResult";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bloom", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "tx_logs", kind: "message", T: TransactionLogs },
    { no: 4, name: "ret", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "reverted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "gas_used", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxResult {
    return new TxResult().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxResult {
    return new TxResult().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxResult {
    return new TxResult().fromJsonString(jsonString, options);
  }

  static equals(a: TxResult | PlainMessage<TxResult> | undefined, b: TxResult | PlainMessage<TxResult> | undefined): boolean {
    return proto3.util.equals(TxResult, a, b);
  }
}

/**
 * AccessTuple is the element type of an access list.
 *
 * @generated from message ethermint.evm.v1.AccessTuple
 */
export class AccessTuple extends Message<AccessTuple> {
  /**
   * address is a hex formatted ethereum address
   *
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * storage_keys are hex formatted hashes of the storage keys
   *
   * @generated from field: repeated string storage_keys = 2;
   */
  storageKeys: string[] = [];

  constructor(data?: PartialMessage<AccessTuple>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ethermint.evm.v1.AccessTuple";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "storage_keys", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccessTuple {
    return new AccessTuple().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccessTuple {
    return new AccessTuple().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccessTuple {
    return new AccessTuple().fromJsonString(jsonString, options);
  }

  static equals(a: AccessTuple | PlainMessage<AccessTuple> | undefined, b: AccessTuple | PlainMessage<AccessTuple> | undefined): boolean {
    return proto3.util.equals(AccessTuple, a, b);
  }
}

/**
 * TraceConfig holds extra parameters to trace functions.
 *
 * @generated from message ethermint.evm.v1.TraceConfig
 */
export class TraceConfig extends Message<TraceConfig> {
  /**
   * tracer is a custom javascript tracer
   *
   * @generated from field: string tracer = 1;
   */
  tracer = "";

  /**
   * timeout overrides the default timeout of 5 seconds for JavaScript-based tracing
   * calls
   *
   * @generated from field: string timeout = 2;
   */
  timeout = "";

  /**
   * reexec defines the number of blocks the tracer is willing to go back
   *
   * @generated from field: uint64 reexec = 3;
   */
  reexec = protoInt64.zero;

  /**
   * disable_stack switches stack capture
   *
   * @generated from field: bool disable_stack = 5;
   */
  disableStack = false;

  /**
   * disable_storage switches storage capture
   *
   * @generated from field: bool disable_storage = 6;
   */
  disableStorage = false;

  /**
   * debug can be used to print output during capture end
   *
   * @generated from field: bool debug = 8;
   */
  debug = false;

  /**
   * limit defines the maximum length of output, but zero means unlimited
   *
   * @generated from field: int32 limit = 9;
   */
  limit = 0;

  /**
   * overrides can be used to execute a trace using future fork rules
   *
   * @generated from field: ethermint.evm.v1.ChainConfig overrides = 10;
   */
  overrides?: ChainConfig;

  /**
   * enable_memory switches memory capture
   *
   * @generated from field: bool enable_memory = 11;
   */
  enableMemory = false;

  /**
   * enable_return_data switches the capture of return data
   *
   * @generated from field: bool enable_return_data = 12;
   */
  enableReturnData = false;

  /**
   * tracer_json_config configures the tracer using a JSON string
   *
   * @generated from field: string tracer_json_config = 13;
   */
  tracerJsonConfig = "";

  constructor(data?: PartialMessage<TraceConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ethermint.evm.v1.TraceConfig";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tracer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "timeout", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "reexec", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "disable_stack", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "disable_storage", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "debug", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "limit", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 10, name: "overrides", kind: "message", T: ChainConfig },
    { no: 11, name: "enable_memory", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "enable_return_data", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "tracer_json_config", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TraceConfig {
    return new TraceConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TraceConfig {
    return new TraceConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TraceConfig {
    return new TraceConfig().fromJsonString(jsonString, options);
  }

  static equals(a: TraceConfig | PlainMessage<TraceConfig> | undefined, b: TraceConfig | PlainMessage<TraceConfig> | undefined): boolean {
    return proto3.util.equals(TraceConfig, a, b);
  }
}

