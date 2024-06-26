// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/bep3/v1beta1/genesis.proto (package kava.bep3.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { AssetSupply, AtomicSwap, Params } from "./bep3_pb.js";

/**
 * GenesisState defines the pricefeed module's genesis state.
 *
 * @generated from message kava.bep3.v1beta1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * params defines all the parameters of the module.
   *
   * @generated from field: kava.bep3.v1beta1.Params params = 1;
   */
  params?: Params;

  /**
   * atomic_swaps represents the state of stored atomic swaps
   *
   * @generated from field: repeated kava.bep3.v1beta1.AtomicSwap atomic_swaps = 2;
   */
  atomicSwaps: AtomicSwap[] = [];

  /**
   * supplies represents the supply information of each atomic swap
   *
   * @generated from field: repeated kava.bep3.v1beta1.AssetSupply supplies = 3;
   */
  supplies: AssetSupply[] = [];

  /**
   * previous_block_time represents the time of the previous block
   *
   * @generated from field: google.protobuf.Timestamp previous_block_time = 4;
   */
  previousBlockTime?: Timestamp;

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "atomic_swaps", kind: "message", T: AtomicSwap, repeated: true },
    { no: 3, name: "supplies", kind: "message", T: AssetSupply, repeated: true },
    { no: 4, name: "previous_block_time", kind: "message", T: Timestamp },
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

