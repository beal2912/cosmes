// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file noble/dollar/vaults/v1/genesis.proto (package noble.dollar.vaults.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PausedType, PositionEntry, Reward, Stats } from "./vaults_pb.js";

/**
 * GenesisState defines the genesis state of the Noble Dollar Vaults submodule.
 *
 * @generated from message noble.dollar.vaults.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * total_flexible_principal contains all the users positions inside Vaults.
   *
   * @generated from field: repeated noble.dollar.vaults.v1.PositionEntry positions = 2;
   */
  positions: PositionEntry[] = [];

  /**
   * rewards maps the rewards amounts by the index.
   *
   * @generated from field: repeated noble.dollar.vaults.v1.Reward rewards = 3;
   */
  rewards: Reward[] = [];

  /**
   * total_flexible_principal contains the total principal amount contained in the flexible Vault.
   *
   * @generated from field: string total_flexible_principal = 4;
   */
  totalFlexiblePrincipal = "";

  /**
   * paused represents the current pausing state of the Vaults.
   *
   * @generated from field: noble.dollar.vaults.v1.PausedType paused = 5;
   */
  paused = PausedType.NONE;

  /**
   * stats contains the genesis statistics around the Noble Dollar Vaults.
   *
   * @generated from field: noble.dollar.vaults.v1.Stats stats = 6;
   */
  stats?: Stats;

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "noble.dollar.vaults.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "positions", kind: "message", T: PositionEntry, repeated: true },
    { no: 3, name: "rewards", kind: "message", T: Reward, repeated: true },
    { no: 4, name: "total_flexible_principal", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "paused", kind: "enum", T: proto3.getEnumType(PausedType) },
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

