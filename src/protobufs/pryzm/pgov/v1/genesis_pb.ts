// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/pgov/v1/genesis.proto (package pryzm.pgov.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { StakedPAsset } from "./staked_p_asset_pb.js";
import { Proposal } from "./proposal_pb.js";
import { Vote } from "./vote_pb.js";

/**
 * GenesisState defines the pgov module's genesis state.
 *
 * @generated from message pryzm.pgov.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * @generated from field: pryzm.pgov.v1.Params params = 1;
   */
  params?: Params;

  /**
   * @generated from field: repeated pryzm.pgov.v1.StakedPAsset staked_p_asset_list = 2;
   */
  stakedPAssetList: StakedPAsset[] = [];

  /**
   * @generated from field: repeated pryzm.pgov.v1.Proposal proposal_list = 3;
   */
  proposalList: Proposal[] = [];

  /**
   * this line is used by starport scaffolding # genesis/proto/state
   *
   * @generated from field: repeated pryzm.pgov.v1.Vote vote_list = 4;
   */
  voteList: Vote[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.pgov.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "staked_p_asset_list", kind: "message", T: StakedPAsset, repeated: true },
    { no: 3, name: "proposal_list", kind: "message", T: Proposal, repeated: true },
    { no: 4, name: "vote_list", kind: "message", T: Vote, repeated: true },
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
