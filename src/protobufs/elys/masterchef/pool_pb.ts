// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/masterchef/pool.proto (package elys.masterchef, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message elys.masterchef.PoolInfo
 */
export class PoolInfo extends Message<PoolInfo> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * reward wallet address
   *
   * @generated from field: string reward_wallet = 2;
   */
  rewardWallet = "";

  /**
   * multiplier for lp rewards
   *
   * @generated from field: string multiplier = 3;
   */
  multiplier = "";

  /**
   * Eden APR, updated at every distribution
   *
   * @generated from field: string eden_apr = 4;
   */
  edenApr = "";

  /**
   * Dex APR, updated based on 24hr accumulation
   *
   * @generated from field: string dex_apr = 5;
   */
  dexApr = "";

  /**
   * Gas APR, updated based on 24hr accumulation
   *
   * @generated from field: string gas_apr = 6;
   */
  gasApr = "";

  /**
   * External Incentive APR, updated at every distribution
   *
   * @generated from field: string external_incentive_apr = 7;
   */
  externalIncentiveApr = "";

  /**
   * external reward denoms on the pool
   *
   * @generated from field: repeated string external_reward_denoms = 8;
   */
  externalRewardDenoms: string[] = [];

  constructor(data?: PartialMessage<PoolInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.masterchef.PoolInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "reward_wallet", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "multiplier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "eden_apr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "dex_apr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "gas_apr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "external_incentive_apr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "external_reward_denoms", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolInfo {
    return new PoolInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolInfo {
    return new PoolInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolInfo {
    return new PoolInfo().fromJsonString(jsonString, options);
  }

  static equals(a: PoolInfo | PlainMessage<PoolInfo> | undefined, b: PoolInfo | PlainMessage<PoolInfo> | undefined): boolean {
    return proto3.util.equals(PoolInfo, a, b);
  }
}

/**
 * @generated from message elys.masterchef.PoolRewardInfo
 */
export class PoolRewardInfo extends Message<PoolRewardInfo> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string reward_denom = 2;
   */
  rewardDenom = "";

  /**
   * @generated from field: string pool_acc_reward_per_share = 3;
   */
  poolAccRewardPerShare = "";

  /**
   * @generated from field: uint64 last_updated_block = 4;
   */
  lastUpdatedBlock = protoInt64.zero;

  constructor(data?: PartialMessage<PoolRewardInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.masterchef.PoolRewardInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "reward_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "pool_acc_reward_per_share", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "last_updated_block", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolRewardInfo {
    return new PoolRewardInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolRewardInfo {
    return new PoolRewardInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolRewardInfo {
    return new PoolRewardInfo().fromJsonString(jsonString, options);
  }

  static equals(a: PoolRewardInfo | PlainMessage<PoolRewardInfo> | undefined, b: PoolRewardInfo | PlainMessage<PoolRewardInfo> | undefined): boolean {
    return proto3.util.equals(PoolRewardInfo, a, b);
  }
}

/**
 * @generated from message elys.masterchef.UserRewardInfo
 */
export class UserRewardInfo extends Message<UserRewardInfo> {
  /**
   * @generated from field: string user = 1;
   */
  user = "";

  /**
   * @generated from field: uint64 pool_id = 2;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string reward_denom = 3;
   */
  rewardDenom = "";

  /**
   * @generated from field: string reward_debt = 4;
   */
  rewardDebt = "";

  /**
   * @generated from field: string reward_pending = 5;
   */
  rewardPending = "";

  constructor(data?: PartialMessage<UserRewardInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.masterchef.UserRewardInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "reward_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "reward_debt", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "reward_pending", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserRewardInfo {
    return new UserRewardInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserRewardInfo {
    return new UserRewardInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserRewardInfo {
    return new UserRewardInfo().fromJsonString(jsonString, options);
  }

  static equals(a: UserRewardInfo | PlainMessage<UserRewardInfo> | undefined, b: UserRewardInfo | PlainMessage<UserRewardInfo> | undefined): boolean {
    return proto3.util.equals(UserRewardInfo, a, b);
  }
}

/**
 * @generated from message elys.masterchef.PoolRewardsAccum
 */
export class PoolRewardsAccum extends Message<PoolRewardsAccum> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: int64 block_height = 2;
   */
  blockHeight = protoInt64.zero;

  /**
   * @generated from field: uint64 timestamp = 3;
   */
  timestamp = protoInt64.zero;

  /**
   * @generated from field: string dex_reward = 4;
   */
  dexReward = "";

  /**
   * @generated from field: string gas_reward = 5;
   */
  gasReward = "";

  /**
   * @generated from field: string eden_reward = 6;
   */
  edenReward = "";

  constructor(data?: PartialMessage<PoolRewardsAccum>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.masterchef.PoolRewardsAccum";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "block_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "timestamp", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "dex_reward", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "gas_reward", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "eden_reward", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolRewardsAccum {
    return new PoolRewardsAccum().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolRewardsAccum {
    return new PoolRewardsAccum().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolRewardsAccum {
    return new PoolRewardsAccum().fromJsonString(jsonString, options);
  }

  static equals(a: PoolRewardsAccum | PlainMessage<PoolRewardsAccum> | undefined, b: PoolRewardsAccum | PlainMessage<PoolRewardsAccum> | undefined): boolean {
    return proto3.util.equals(PoolRewardsAccum, a, b);
  }
}

