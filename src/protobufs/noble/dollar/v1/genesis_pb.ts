// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file noble/dollar/v1/genesis.proto (package noble.dollar.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { GenesisState as GenesisState$1 } from "../portal/v1/genesis_pb.js";
import { GenesisState as GenesisState$2 } from "../vaults/v1/genesis_pb.js";
import { Stats } from "./dollar_pb.js";

/**
 * GenesisState defines the genesis state of the Noble Dollar module.
 *
 * @generated from message noble.dollar.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * portal contains the genesis state of the Noble Dollar Portal submodule.
   *
   * @generated from field: noble.dollar.portal.v1.GenesisState portal = 1;
   */
  portal?: GenesisState$1;

  /**
   * vaults contains the genesis state of the Noble Dollar Vaults submodule.
   *
   * @generated from field: noble.dollar.vaults.v1.GenesisState vaults = 2;
   */
  vaults?: GenesisState$2;

  /**
   * paused contains the genesis paused state of the Noble Dollar.
   *
   * @generated from field: bool paused = 3;
   */
  paused = false;

  /**
   * index contains the genesis index of the Noble Dollar, used for rebasing.
   *
   * @generated from field: int64 index = 4;
   */
  index = protoInt64.zero;

  /**
   * principal contains the genesis principal amounts of Noble Dollar holders.
   *
   * @generated from field: map<string, string> principal = 5;
   */
  principal: { [key: string]: string } = {};

  /**
   * stats contains the genesis statistics around the Noble Dollar.
   *
   * @generated from field: noble.dollar.v1.Stats stats = 6;
   */
  stats?: Stats;

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "noble.dollar.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "portal", kind: "message", T: GenesisState$1 },
    { no: 2, name: "vaults", kind: "message", T: GenesisState$2 },
    { no: 3, name: "paused", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "index", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "principal", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 6, name: "stats", kind: "message", T: Stats },
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

