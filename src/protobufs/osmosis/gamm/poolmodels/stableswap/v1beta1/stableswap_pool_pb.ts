// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/gamm/poolmodels/stableswap/v1beta1/stableswap_pool.proto (package osmosis.gamm.poolmodels.stableswap.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 *
 * @generated from message osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams
 */
export class PoolParams extends Message<PoolParams> {
  /**
   * @generated from field: string swap_fee = 1;
   */
  swapFee = "";

  /**
   * N.B.: exit fee is disabled during pool creation in x/poolmanager. While old
   * pools can maintain a non-zero fee. No new pool can be created with non-zero
   * fee anymore
   *
   * @generated from field: string exit_fee = 2;
   */
  exitFee = "";

  constructor(data?: PartialMessage<PoolParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "swap_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "exit_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolParams {
    return new PoolParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolParams {
    return new PoolParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolParams {
    return new PoolParams().fromJsonString(jsonString, options);
  }

  static equals(a: PoolParams | PlainMessage<PoolParams> | undefined, b: PoolParams | PlainMessage<PoolParams> | undefined): boolean {
    return proto3.util.equals(PoolParams, a, b);
  }
}

/**
 * Pool is the stableswap Pool struct
 *
 * @generated from message osmosis.gamm.poolmodels.stableswap.v1beta1.Pool
 */
export class Pool extends Message<Pool> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * @generated from field: uint64 id = 2;
   */
  id = protoInt64.zero;

  /**
   * @generated from field: osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams pool_params = 3;
   */
  poolParams?: PoolParams;

  /**
   * This string specifies who will govern the pool in the future.
   * Valid forms of this are:
   * {token name},{duration}
   * {duration}
   * where {token name} if specified is the token which determines the
   * governor, and if not specified is the LP token for this pool.duration is
   * a time specified as 0w,1w,2w, etc. which specifies how long the token
   * would need to be locked up to count in governance. 0w means no lockup.
   *
   * @generated from field: string future_pool_governor = 4;
   */
  futurePoolGovernor = "";

  /**
   * sum of all LP shares
   *
   * @generated from field: cosmos.base.v1beta1.Coin total_shares = 5;
   */
  totalShares?: Coin;

  /**
   * assets in the pool
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin pool_liquidity = 6;
   */
  poolLiquidity: Coin[] = [];

  /**
   * for calculation amongst assets with different precisions
   *
   * @generated from field: repeated uint64 scaling_factors = 7;
   */
  scalingFactors: bigint[] = [];

  /**
   * scaling_factor_controller is the address can adjust pool scaling factors
   *
   * @generated from field: string scaling_factor_controller = 8;
   */
  scalingFactorController = "";

  constructor(data?: PartialMessage<Pool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.gamm.poolmodels.stableswap.v1beta1.Pool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "pool_params", kind: "message", T: PoolParams },
    { no: 4, name: "future_pool_governor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "total_shares", kind: "message", T: Coin },
    { no: 6, name: "pool_liquidity", kind: "message", T: Coin, repeated: true },
    { no: 7, name: "scaling_factors", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 8, name: "scaling_factor_controller", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Pool {
    return new Pool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Pool {
    return new Pool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Pool {
    return new Pool().fromJsonString(jsonString, options);
  }

  static equals(a: Pool | PlainMessage<Pool> | undefined, b: Pool | PlainMessage<Pool> | undefined): boolean {
    return proto3.util.equals(Pool, a, b);
  }
}

