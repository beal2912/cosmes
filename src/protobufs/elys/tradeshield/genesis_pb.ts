// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/tradeshield/genesis.proto (package elys.tradeshield, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { PerpetualOrder, SpotOrder } from "./types_pb.js";

/**
 * GenesisState defines the tradeshield module's genesis state.
 *
 * @generated from message elys.tradeshield.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * @generated from field: elys.tradeshield.Params params = 1;
   */
  params?: Params;

  /**
   * @generated from field: repeated elys.tradeshield.SpotOrder pending_spot_order_list = 2;
   */
  pendingSpotOrderList: SpotOrder[] = [];

  /**
   * @generated from field: uint64 pending_spot_order_count = 3;
   */
  pendingSpotOrderCount = protoInt64.zero;

  /**
   * @generated from field: repeated elys.tradeshield.PerpetualOrder pending_perpetual_order_list = 4;
   */
  pendingPerpetualOrderList: PerpetualOrder[] = [];

  /**
   * @generated from field: uint64 pending_perpetual_order_count = 5;
   */
  pendingPerpetualOrderCount = protoInt64.zero;

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "pending_spot_order_list", kind: "message", T: SpotOrder, repeated: true },
    { no: 3, name: "pending_spot_order_count", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "pending_perpetual_order_list", kind: "message", T: PerpetualOrder, repeated: true },
    { no: 5, name: "pending_perpetual_order_count", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
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

