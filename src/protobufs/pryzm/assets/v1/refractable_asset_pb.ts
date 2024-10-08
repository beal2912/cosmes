// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/assets/v1/refractable_asset.proto (package pryzm.assets.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * The properties of a supported asset
 *
 * @generated from message pryzm.assets.v1.RefractableAsset
 */
export class RefractableAsset extends Message<RefractableAsset> {
  /**
   * A unique user-provided identifier. Is used in the p/y token denom
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * The denomination of the token on Pryzm. This may be an icstaking cToken or an IBC transferred token denom for external assets.
   *
   * @generated from field: string token_denom = 2;
   */
  tokenDenom = "";

  /**
   * The id for the host chain on which the asset is staked. This is empty if the asset is external.
   *
   * @generated from field: string host_chain_id = 3;
   */
  hostChainId = "";

  /**
   * Disabled assets cannot be refracted, but can still be redeemed.
   *
   * @generated from field: bool disabled = 4;
   */
  disabled = false;

  /**
   * @generated from field: pryzm.assets.v1.MaturityParams maturity_params = 5;
   */
  maturityParams?: MaturityParams;

  /**
   * The amount of fee for each operation on the asset.
   *
   * @generated from field: pryzm.assets.v1.FeeRatios fee_ratios = 6;
   */
  feeRatios?: FeeRatios;

  constructor(data?: PartialMessage<RefractableAsset>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.assets.v1.RefractableAsset";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "token_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "host_chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "maturity_params", kind: "message", T: MaturityParams },
    { no: 6, name: "fee_ratios", kind: "message", T: FeeRatios },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RefractableAsset {
    return new RefractableAsset().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RefractableAsset {
    return new RefractableAsset().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RefractableAsset {
    return new RefractableAsset().fromJsonString(jsonString, options);
  }

  static equals(a: RefractableAsset | PlainMessage<RefractableAsset> | undefined, b: RefractableAsset | PlainMessage<RefractableAsset> | undefined): boolean {
    return proto3.util.equals(RefractableAsset, a, b);
  }
}

/**
 * The parameters based on which new maturities are introduced
 *
 * @generated from message pryzm.assets.v1.MaturityParams
 */
export class MaturityParams extends Message<MaturityParams> {
  /**
   * The number of maturities per year: can be 0, 1, 2, 4, 12
   * note: levels_per_year should be zero, if and only if years is 0 (which means no automatic maturity creation)
   *
   * @generated from field: int32 levels_per_year = 1;
   */
  levelsPerYear = 0;

  /**
   * The number of years in advance that maturities are made available for
   * note: years should be zero, if and only if levels_per_year is 0 (which means no automatic maturity creation)
   *
   * @generated from field: int32 years = 2;
   */
  years = 0;

  constructor(data?: PartialMessage<MaturityParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.assets.v1.MaturityParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "levels_per_year", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "years", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MaturityParams {
    return new MaturityParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MaturityParams {
    return new MaturityParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MaturityParams {
    return new MaturityParams().fromJsonString(jsonString, options);
  }

  static equals(a: MaturityParams | PlainMessage<MaturityParams> | undefined, b: MaturityParams | PlainMessage<MaturityParams> | undefined): boolean {
    return proto3.util.equals(MaturityParams, a, b);
  }
}

/**
 * Fee ratio per each operation
 *
 * @generated from message pryzm.assets.v1.FeeRatios
 */
export class FeeRatios extends Message<FeeRatios> {
  /**
   * @generated from field: string yield = 1;
   */
  yield = "";

  /**
   * @generated from field: string refractor_refract = 2;
   */
  refractorRefract = "";

  /**
   * @generated from field: string refractor_merge = 3;
   */
  refractorMerge = "";

  /**
   * @generated from field: string refractor_redeem = 4;
   */
  refractorRedeem = "";

  /**
   * @generated from field: string y_staking_claim_reward = 5;
   */
  yStakingClaimReward = "";

  constructor(data?: PartialMessage<FeeRatios>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.assets.v1.FeeRatios";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "yield", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "refractor_refract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "refractor_merge", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "refractor_redeem", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "y_staking_claim_reward", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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

