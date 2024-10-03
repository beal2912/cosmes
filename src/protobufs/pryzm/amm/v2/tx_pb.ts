// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/amm/v2/tx.proto (package pryzm.amm.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PairMatchProposal } from "./pair_match_proposal_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * @generated from message pryzm.amm.v2.MsgProposeMatch
 */
export class MsgProposeMatch extends Message<MsgProposeMatch> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: repeated pryzm.amm.v2.PairMatchProposal pairs = 2;
   */
  pairs: PairMatchProposal[] = [];

  /**
   * this includes the output amount of virtual orders as well as the proposer reward
   * if the limits are not met, the transaction will fail
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin min_amounts_out = 3;
   */
  minAmountsOut: Coin[] = [];

  /**
   * is not casted to coins, to allow for zero limits
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin max_amounts_in = 4;
   */
  maxAmountsIn: Coin[] = [];

  constructor(data?: PartialMessage<MsgProposeMatch>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.amm.v2.MsgProposeMatch";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pairs", kind: "message", T: PairMatchProposal, repeated: true },
    { no: 3, name: "min_amounts_out", kind: "message", T: Coin, repeated: true },
    { no: 4, name: "max_amounts_in", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgProposeMatch {
    return new MsgProposeMatch().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgProposeMatch {
    return new MsgProposeMatch().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgProposeMatch {
    return new MsgProposeMatch().fromJsonString(jsonString, options);
  }

  static equals(a: MsgProposeMatch | PlainMessage<MsgProposeMatch> | undefined, b: MsgProposeMatch | PlainMessage<MsgProposeMatch> | undefined): boolean {
    return proto3.util.equals(MsgProposeMatch, a, b);
  }
}

/**
 * @generated from message pryzm.amm.v2.MsgProposeMatchResponse
 */
export class MsgProposeMatchResponse extends Message<MsgProposeMatchResponse> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin proposer_reward = 1;
   */
  proposerReward: Coin[] = [];

  constructor(data?: PartialMessage<MsgProposeMatchResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.amm.v2.MsgProposeMatchResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposer_reward", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgProposeMatchResponse {
    return new MsgProposeMatchResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgProposeMatchResponse {
    return new MsgProposeMatchResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgProposeMatchResponse {
    return new MsgProposeMatchResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgProposeMatchResponse | PlainMessage<MsgProposeMatchResponse> | undefined, b: MsgProposeMatchResponse | PlainMessage<MsgProposeMatchResponse> | undefined): boolean {
    return proto3.util.equals(MsgProposeMatchResponse, a, b);
  }
}

