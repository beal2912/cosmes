// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file neutron/dex/genesis.proto (package neutron.dex, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { TickLiquidity } from "./tick_liquidity_pb.js";
import { LimitOrderTranche } from "./limit_order_tranche_pb.js";
import { LimitOrderTrancheUser } from "./limit_order_tranche_user_pb.js";
import { PoolMetadata } from "./pool_metadata_pb.js";

/**
 * GenesisState defines the dex module's genesis state.
 *
 * @generated from message neutron.dex.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * @generated from field: neutron.dex.Params params = 1;
   */
  params?: Params;

  /**
   * @generated from field: repeated neutron.dex.TickLiquidity tick_liquidity_list = 2;
   */
  tickLiquidityList: TickLiquidity[] = [];

  /**
   * @generated from field: repeated neutron.dex.LimitOrderTranche inactive_limit_order_tranche_list = 3;
   */
  inactiveLimitOrderTrancheList: LimitOrderTranche[] = [];

  /**
   * @generated from field: repeated neutron.dex.LimitOrderTrancheUser limit_order_tranche_user_list = 4;
   */
  limitOrderTrancheUserList: LimitOrderTrancheUser[] = [];

  /**
   * @generated from field: repeated neutron.dex.PoolMetadata pool_metadata_list = 5;
   */
  poolMetadataList: PoolMetadata[] = [];

  /**
   * this line is used by starport scaffolding # genesis/proto/state
   *
   * @generated from field: uint64 pool_count = 6;
   */
  poolCount = protoInt64.zero;

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "tick_liquidity_list", kind: "message", T: TickLiquidity, repeated: true },
    { no: 3, name: "inactive_limit_order_tranche_list", kind: "message", T: LimitOrderTranche, repeated: true },
    { no: 4, name: "limit_order_tranche_user_list", kind: "message", T: LimitOrderTrancheUser, repeated: true },
    { no: 5, name: "pool_metadata_list", kind: "message", T: PoolMetadata, repeated: true },
    { no: 6, name: "pool_count", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}

