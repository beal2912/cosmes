// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/icstaking/v1/params.proto (package pryzm.icstaking.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";

/**
 * Params defines the parameters for the module.
 *
 * @generated from message pryzm.icstaking.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * the default staking parameters. properties of HostChain.staking_params are overridden to this default params if provided
   *
   * @generated from field: pryzm.icstaking.v1.StakingParams staking_params = 1;
   */
  stakingParams?: StakingParams;

  /**
   * the list of admin addresses, able to register a new host chain or update an existing host chain
   *
   * @generated from field: repeated string admins = 2;
   */
  admins: string[] = [];

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.icstaking.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "staking_params", kind: "message", T: StakingParams },
    { no: 2, name: "admins", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
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
 * StakingParams defines the parameters related to staking on each host chain
 *
 * @generated from message pryzm.icstaking.v1.StakingParams
 */
export class StakingParams extends Message<StakingParams> {
  /**
   * the amount of operation fees
   *
   * @generated from field: pryzm.icstaking.v1.FeeRatios fee_ratios = 1;
   */
  feeRatios?: FeeRatios;

  /**
   * the interval in which PRYZM sends delegation messages to the host chain
   *
   * @generated from field: google.protobuf.Duration delegation_interval = 2;
   */
  delegationInterval?: Duration;

  /**
   * the interval in which PRYZM sends undelegation messages to the host chain
   * host chain's (UnbondingTime / MaxEntries) must be considered as the max value when setting this field
   *
   * @generated from field: google.protobuf.Duration undelegation_interval = 3;
   */
  undelegationInterval?: Duration;

  /**
   * the time-out value being set on ibc transfer messages
   *
   * @generated from field: google.protobuf.Duration ibc_transfer_timeout = 4;
   */
  ibcTransferTimeout?: Duration;

  /**
   * the time-out value being set on ica messages
   *
   * @generated from field: google.protobuf.Duration ica_timeout = 5;
   */
  icaTimeout?: Duration;

  /**
   * @generated from field: pryzm.icstaking.v1.RebalanceParams rebalance_params = 6;
   */
  rebalanceParams?: RebalanceParams;

  /**
   * the interval in which PRYZM sends LSM redeem messages to the host chain
   *
   * @generated from field: google.protobuf.Duration lsm_redeem_interval = 7;
   */
  lsmRedeemInterval?: Duration;

  constructor(data?: PartialMessage<StakingParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.icstaking.v1.StakingParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "fee_ratios", kind: "message", T: FeeRatios },
    { no: 2, name: "delegation_interval", kind: "message", T: Duration },
    { no: 3, name: "undelegation_interval", kind: "message", T: Duration },
    { no: 4, name: "ibc_transfer_timeout", kind: "message", T: Duration },
    { no: 5, name: "ica_timeout", kind: "message", T: Duration },
    { no: 6, name: "rebalance_params", kind: "message", T: RebalanceParams },
    { no: 7, name: "lsm_redeem_interval", kind: "message", T: Duration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StakingParams {
    return new StakingParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StakingParams {
    return new StakingParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StakingParams {
    return new StakingParams().fromJsonString(jsonString, options);
  }

  static equals(a: StakingParams | PlainMessage<StakingParams> | undefined, b: StakingParams | PlainMessage<StakingParams> | undefined): boolean {
    return proto3.util.equals(StakingParams, a, b);
  }
}

/**
 * FeeRatios defines the fee ratio operations supported by icstaking
 *
 * @generated from message pryzm.icstaking.v1.FeeRatios
 */
export class FeeRatios extends Message<FeeRatios> {
  /**
   * the ratio of fee reduced from yield of staking on the host chain
   *
   * @generated from field: string yield = 1;
   */
  yield = "";

  /**
   * the ratio of fee reduced from the amount of assets being staked on PRYZM
   *
   * @generated from field: string staking = 2;
   */
  staking = "";

  /**
   * the ratio of fee reduced from the amount of assets being unstaked from PRYZM
   *
   * @generated from field: string unstaking = 3;
   */
  unstaking = "";

  /**
   * the ratio of fee reduced from the amount of assets being instantly unstaked from PRYZM
   *
   * @generated from field: string instant_unstaking = 4;
   */
  instantUnstaking = "";

  constructor(data?: PartialMessage<FeeRatios>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.icstaking.v1.FeeRatios";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "yield", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "staking", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "unstaking", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "instant_unstaking", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeeRatios {
    return new FeeRatios().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeeRatios {
    return new FeeRatios().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeeRatios {
    return new FeeRatios().fromJsonString(jsonString, options);
  }

  static equals(a: FeeRatios | PlainMessage<FeeRatios> | undefined, b: FeeRatios | PlainMessage<FeeRatios> | undefined): boolean {
    return proto3.util.equals(FeeRatios, a, b);
  }
}

/**
 * RebalanceParams contains the parameters for re-balancing a host chain's validator delegation weights
 *
 * @generated from message pryzm.icstaking.v1.RebalanceParams
 */
export class RebalanceParams extends Message<RebalanceParams> {
  /**
   * the maximum number of redelegation messages sent to the host chain in each rebalance operation
   *
   * @generated from field: int32 max_msgs = 1;
   */
  maxMsgs = 0;

  /**
   * the minimum divergence a validator delegation weight must have with the expected weight to start rebalance operation
   *
   * @generated from field: string rebalance_threshold = 2;
   */
  rebalanceThreshold = "";

  /**
   * the minimum amount of assets for each redelegation message sent to a host chain
   *
   * @generated from field: string min_rebalance_amount = 3;
   */
  minRebalanceAmount = "";

  /**
   * the minimum interval between two rebalance operations
   *
   * @generated from field: google.protobuf.Duration min_rebalance_interval = 4;
   */
  minRebalanceInterval?: Duration;

  constructor(data?: PartialMessage<RebalanceParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.icstaking.v1.RebalanceParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "max_msgs", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "rebalance_threshold", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "min_rebalance_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "min_rebalance_interval", kind: "message", T: Duration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RebalanceParams {
    return new RebalanceParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RebalanceParams {
    return new RebalanceParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RebalanceParams {
    return new RebalanceParams().fromJsonString(jsonString, options);
  }

  static equals(a: RebalanceParams | PlainMessage<RebalanceParams> | undefined, b: RebalanceParams | PlainMessage<RebalanceParams> | undefined): boolean {
    return proto3.util.equals(RebalanceParams, a, b);
  }
}

