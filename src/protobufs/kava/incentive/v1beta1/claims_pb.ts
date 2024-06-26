// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/incentive/v1beta1/claims.proto (package kava.incentive.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * BaseClaim is a claim with a single reward coin types
 *
 * @generated from message kava.incentive.v1beta1.BaseClaim
 */
export class BaseClaim extends Message<BaseClaim> {
  /**
   * @generated from field: bytes owner = 1;
   */
  owner = new Uint8Array(0);

  /**
   * @generated from field: cosmos.base.v1beta1.Coin reward = 2;
   */
  reward?: Coin;

  constructor(data?: PartialMessage<BaseClaim>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.incentive.v1beta1.BaseClaim";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "reward", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BaseClaim {
    return new BaseClaim().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BaseClaim {
    return new BaseClaim().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BaseClaim {
    return new BaseClaim().fromJsonString(jsonString, options);
  }

  static equals(a: BaseClaim | PlainMessage<BaseClaim> | undefined, b: BaseClaim | PlainMessage<BaseClaim> | undefined): boolean {
    return proto3.util.equals(BaseClaim, a, b);
  }
}

/**
 * BaseMultiClaim is a claim with multiple reward coin types
 *
 * @generated from message kava.incentive.v1beta1.BaseMultiClaim
 */
export class BaseMultiClaim extends Message<BaseMultiClaim> {
  /**
   * @generated from field: bytes owner = 1;
   */
  owner = new Uint8Array(0);

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin reward = 2;
   */
  reward: Coin[] = [];

  constructor(data?: PartialMessage<BaseMultiClaim>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.incentive.v1beta1.BaseMultiClaim";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "reward", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BaseMultiClaim {
    return new BaseMultiClaim().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BaseMultiClaim {
    return new BaseMultiClaim().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BaseMultiClaim {
    return new BaseMultiClaim().fromJsonString(jsonString, options);
  }

  static equals(a: BaseMultiClaim | PlainMessage<BaseMultiClaim> | undefined, b: BaseMultiClaim | PlainMessage<BaseMultiClaim> | undefined): boolean {
    return proto3.util.equals(BaseMultiClaim, a, b);
  }
}

/**
 * RewardIndex stores reward accumulation information
 *
 * @generated from message kava.incentive.v1beta1.RewardIndex
 */
export class RewardIndex extends Message<RewardIndex> {
  /**
   * @generated from field: string collateral_type = 1;
   */
  collateralType = "";

  /**
   * @generated from field: bytes reward_factor = 2;
   */
  rewardFactor = new Uint8Array(0);

  constructor(data?: PartialMessage<RewardIndex>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.incentive.v1beta1.RewardIndex";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collateral_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "reward_factor", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RewardIndex {
    return new RewardIndex().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RewardIndex {
    return new RewardIndex().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RewardIndex {
    return new RewardIndex().fromJsonString(jsonString, options);
  }

  static equals(a: RewardIndex | PlainMessage<RewardIndex> | undefined, b: RewardIndex | PlainMessage<RewardIndex> | undefined): boolean {
    return proto3.util.equals(RewardIndex, a, b);
  }
}

/**
 * RewardIndexesProto defines a Protobuf wrapper around a RewardIndexes slice
 *
 * @generated from message kava.incentive.v1beta1.RewardIndexesProto
 */
export class RewardIndexesProto extends Message<RewardIndexesProto> {
  /**
   * @generated from field: repeated kava.incentive.v1beta1.RewardIndex reward_indexes = 1;
   */
  rewardIndexes: RewardIndex[] = [];

  constructor(data?: PartialMessage<RewardIndexesProto>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.incentive.v1beta1.RewardIndexesProto";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "reward_indexes", kind: "message", T: RewardIndex, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RewardIndexesProto {
    return new RewardIndexesProto().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RewardIndexesProto {
    return new RewardIndexesProto().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RewardIndexesProto {
    return new RewardIndexesProto().fromJsonString(jsonString, options);
  }

  static equals(a: RewardIndexesProto | PlainMessage<RewardIndexesProto> | undefined, b: RewardIndexesProto | PlainMessage<RewardIndexesProto> | undefined): boolean {
    return proto3.util.equals(RewardIndexesProto, a, b);
  }
}

/**
 * MultiRewardIndex stores reward accumulation information on multiple reward types
 *
 * @generated from message kava.incentive.v1beta1.MultiRewardIndex
 */
export class MultiRewardIndex extends Message<MultiRewardIndex> {
  /**
   * @generated from field: string collateral_type = 1;
   */
  collateralType = "";

  /**
   * @generated from field: repeated kava.incentive.v1beta1.RewardIndex reward_indexes = 2;
   */
  rewardIndexes: RewardIndex[] = [];

  constructor(data?: PartialMessage<MultiRewardIndex>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.incentive.v1beta1.MultiRewardIndex";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collateral_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "reward_indexes", kind: "message", T: RewardIndex, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MultiRewardIndex {
    return new MultiRewardIndex().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MultiRewardIndex {
    return new MultiRewardIndex().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MultiRewardIndex {
    return new MultiRewardIndex().fromJsonString(jsonString, options);
  }

  static equals(a: MultiRewardIndex | PlainMessage<MultiRewardIndex> | undefined, b: MultiRewardIndex | PlainMessage<MultiRewardIndex> | undefined): boolean {
    return proto3.util.equals(MultiRewardIndex, a, b);
  }
}

/**
 * MultiRewardIndexesProto defines a Protobuf wrapper around a MultiRewardIndexes slice
 *
 * @generated from message kava.incentive.v1beta1.MultiRewardIndexesProto
 */
export class MultiRewardIndexesProto extends Message<MultiRewardIndexesProto> {
  /**
   * @generated from field: repeated kava.incentive.v1beta1.MultiRewardIndex multi_reward_indexes = 1;
   */
  multiRewardIndexes: MultiRewardIndex[] = [];

  constructor(data?: PartialMessage<MultiRewardIndexesProto>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.incentive.v1beta1.MultiRewardIndexesProto";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "multi_reward_indexes", kind: "message", T: MultiRewardIndex, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MultiRewardIndexesProto {
    return new MultiRewardIndexesProto().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MultiRewardIndexesProto {
    return new MultiRewardIndexesProto().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MultiRewardIndexesProto {
    return new MultiRewardIndexesProto().fromJsonString(jsonString, options);
  }

  static equals(a: MultiRewardIndexesProto | PlainMessage<MultiRewardIndexesProto> | undefined, b: MultiRewardIndexesProto | PlainMessage<MultiRewardIndexesProto> | undefined): boolean {
    return proto3.util.equals(MultiRewardIndexesProto, a, b);
  }
}

/**
 * USDXMintingClaim is for USDX minting rewards
 *
 * @generated from message kava.incentive.v1beta1.USDXMintingClaim
 */
export class USDXMintingClaim extends Message<USDXMintingClaim> {
  /**
   * @generated from field: kava.incentive.v1beta1.BaseClaim base_claim = 1;
   */
  baseClaim?: BaseClaim;

  /**
   * @generated from field: repeated kava.incentive.v1beta1.RewardIndex reward_indexes = 2;
   */
  rewardIndexes: RewardIndex[] = [];

  constructor(data?: PartialMessage<USDXMintingClaim>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.incentive.v1beta1.USDXMintingClaim";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_claim", kind: "message", T: BaseClaim },
    { no: 2, name: "reward_indexes", kind: "message", T: RewardIndex, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): USDXMintingClaim {
    return new USDXMintingClaim().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): USDXMintingClaim {
    return new USDXMintingClaim().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): USDXMintingClaim {
    return new USDXMintingClaim().fromJsonString(jsonString, options);
  }

  static equals(a: USDXMintingClaim | PlainMessage<USDXMintingClaim> | undefined, b: USDXMintingClaim | PlainMessage<USDXMintingClaim> | undefined): boolean {
    return proto3.util.equals(USDXMintingClaim, a, b);
  }
}

/**
 * HardLiquidityProviderClaim stores the hard liquidity provider rewards that can be claimed by owner
 *
 * @generated from message kava.incentive.v1beta1.HardLiquidityProviderClaim
 */
export class HardLiquidityProviderClaim extends Message<HardLiquidityProviderClaim> {
  /**
   * @generated from field: kava.incentive.v1beta1.BaseMultiClaim base_claim = 1;
   */
  baseClaim?: BaseMultiClaim;

  /**
   * @generated from field: repeated kava.incentive.v1beta1.MultiRewardIndex supply_reward_indexes = 2;
   */
  supplyRewardIndexes: MultiRewardIndex[] = [];

  /**
   * @generated from field: repeated kava.incentive.v1beta1.MultiRewardIndex borrow_reward_indexes = 3;
   */
  borrowRewardIndexes: MultiRewardIndex[] = [];

  constructor(data?: PartialMessage<HardLiquidityProviderClaim>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.incentive.v1beta1.HardLiquidityProviderClaim";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_claim", kind: "message", T: BaseMultiClaim },
    { no: 2, name: "supply_reward_indexes", kind: "message", T: MultiRewardIndex, repeated: true },
    { no: 3, name: "borrow_reward_indexes", kind: "message", T: MultiRewardIndex, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HardLiquidityProviderClaim {
    return new HardLiquidityProviderClaim().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HardLiquidityProviderClaim {
    return new HardLiquidityProviderClaim().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HardLiquidityProviderClaim {
    return new HardLiquidityProviderClaim().fromJsonString(jsonString, options);
  }

  static equals(a: HardLiquidityProviderClaim | PlainMessage<HardLiquidityProviderClaim> | undefined, b: HardLiquidityProviderClaim | PlainMessage<HardLiquidityProviderClaim> | undefined): boolean {
    return proto3.util.equals(HardLiquidityProviderClaim, a, b);
  }
}

/**
 * DelegatorClaim stores delegation rewards that can be claimed by owner
 *
 * @generated from message kava.incentive.v1beta1.DelegatorClaim
 */
export class DelegatorClaim extends Message<DelegatorClaim> {
  /**
   * @generated from field: kava.incentive.v1beta1.BaseMultiClaim base_claim = 1;
   */
  baseClaim?: BaseMultiClaim;

  /**
   * @generated from field: repeated kava.incentive.v1beta1.MultiRewardIndex reward_indexes = 2;
   */
  rewardIndexes: MultiRewardIndex[] = [];

  constructor(data?: PartialMessage<DelegatorClaim>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.incentive.v1beta1.DelegatorClaim";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_claim", kind: "message", T: BaseMultiClaim },
    { no: 2, name: "reward_indexes", kind: "message", T: MultiRewardIndex, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DelegatorClaim {
    return new DelegatorClaim().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DelegatorClaim {
    return new DelegatorClaim().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DelegatorClaim {
    return new DelegatorClaim().fromJsonString(jsonString, options);
  }

  static equals(a: DelegatorClaim | PlainMessage<DelegatorClaim> | undefined, b: DelegatorClaim | PlainMessage<DelegatorClaim> | undefined): boolean {
    return proto3.util.equals(DelegatorClaim, a, b);
  }
}

/**
 * SwapClaim stores the swap rewards that can be claimed by owner
 *
 * @generated from message kava.incentive.v1beta1.SwapClaim
 */
export class SwapClaim extends Message<SwapClaim> {
  /**
   * @generated from field: kava.incentive.v1beta1.BaseMultiClaim base_claim = 1;
   */
  baseClaim?: BaseMultiClaim;

  /**
   * @generated from field: repeated kava.incentive.v1beta1.MultiRewardIndex reward_indexes = 2;
   */
  rewardIndexes: MultiRewardIndex[] = [];

  constructor(data?: PartialMessage<SwapClaim>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.incentive.v1beta1.SwapClaim";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_claim", kind: "message", T: BaseMultiClaim },
    { no: 2, name: "reward_indexes", kind: "message", T: MultiRewardIndex, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SwapClaim {
    return new SwapClaim().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SwapClaim {
    return new SwapClaim().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SwapClaim {
    return new SwapClaim().fromJsonString(jsonString, options);
  }

  static equals(a: SwapClaim | PlainMessage<SwapClaim> | undefined, b: SwapClaim | PlainMessage<SwapClaim> | undefined): boolean {
    return proto3.util.equals(SwapClaim, a, b);
  }
}

/**
 * SavingsClaim stores the savings rewards that can be claimed by owner
 *
 * @generated from message kava.incentive.v1beta1.SavingsClaim
 */
export class SavingsClaim extends Message<SavingsClaim> {
  /**
   * @generated from field: kava.incentive.v1beta1.BaseMultiClaim base_claim = 1;
   */
  baseClaim?: BaseMultiClaim;

  /**
   * @generated from field: repeated kava.incentive.v1beta1.MultiRewardIndex reward_indexes = 2;
   */
  rewardIndexes: MultiRewardIndex[] = [];

  constructor(data?: PartialMessage<SavingsClaim>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.incentive.v1beta1.SavingsClaim";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_claim", kind: "message", T: BaseMultiClaim },
    { no: 2, name: "reward_indexes", kind: "message", T: MultiRewardIndex, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SavingsClaim {
    return new SavingsClaim().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SavingsClaim {
    return new SavingsClaim().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SavingsClaim {
    return new SavingsClaim().fromJsonString(jsonString, options);
  }

  static equals(a: SavingsClaim | PlainMessage<SavingsClaim> | undefined, b: SavingsClaim | PlainMessage<SavingsClaim> | undefined): boolean {
    return proto3.util.equals(SavingsClaim, a, b);
  }
}

/**
 * EarnClaim stores the earn rewards that can be claimed by owner
 *
 * @generated from message kava.incentive.v1beta1.EarnClaim
 */
export class EarnClaim extends Message<EarnClaim> {
  /**
   * @generated from field: kava.incentive.v1beta1.BaseMultiClaim base_claim = 1;
   */
  baseClaim?: BaseMultiClaim;

  /**
   * @generated from field: repeated kava.incentive.v1beta1.MultiRewardIndex reward_indexes = 2;
   */
  rewardIndexes: MultiRewardIndex[] = [];

  constructor(data?: PartialMessage<EarnClaim>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.incentive.v1beta1.EarnClaim";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_claim", kind: "message", T: BaseMultiClaim },
    { no: 2, name: "reward_indexes", kind: "message", T: MultiRewardIndex, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EarnClaim {
    return new EarnClaim().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EarnClaim {
    return new EarnClaim().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EarnClaim {
    return new EarnClaim().fromJsonString(jsonString, options);
  }

  static equals(a: EarnClaim | PlainMessage<EarnClaim> | undefined, b: EarnClaim | PlainMessage<EarnClaim> | undefined): boolean {
    return proto3.util.equals(EarnClaim, a, b);
  }
}

