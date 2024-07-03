// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/concentratedliquidity/v1beta1/tickInfo.proto (package osmosis.concentratedliquidity.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

// this is a legacy package that requires additional migration logic
// in order to use the correct package. Decision made to use legacy package path
// until clear steps for migration logic and the unknowns for state breaking are
// investigated for changing proto package.

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.TickInfo
 */
export class TickInfo extends Message<TickInfo> {
  /**
   * @generated from field: string liquidity_gross = 1;
   */
  liquidityGross = "";

  /**
   * @generated from field: string liquidity_net = 2;
   */
  liquidityNet = "";

  /**
   * Total spread rewards accumulated in the opposite direction that the tick
   * was last crossed. i.e. if the current tick is to the right of this tick
   * (meaning its currently a greater price), then this is the total spread
   * rewards accumulated below the tick. If the current tick is to the left of
   * this tick (meaning its currently at a lower price), then this is the total
   * spread rewards accumulated above the tick.
   *
   * Note: the way this value is used depends on the direction of spread rewards
   * we are calculating for. If we are calculating spread rewards below the
   * lower tick and the lower tick is the active tick, then this is the
   * spreadRewardGrowthGlobal - the lower tick's
   * spreadRewardGrowthOppositeDirectionOfLastTraversal. If we are calculating
   * spread rewards above the upper tick and the upper tick is the active tick,
   * then this is just the tick's
   * spreadRewardGrowthOppositeDirectionOfLastTraversal value.
   *
   * @generated from field: repeated cosmos.base.v1beta1.DecCoin spread_reward_growth_opposite_direction_of_last_traversal = 3;
   */
  spreadRewardGrowthOppositeDirectionOfLastTraversal: DecCoin[] = [];

  /**
   * uptime_trackers is a container encapsulating the uptime trackers.
   * We use a container instead of a "repeated UptimeTracker" directly
   * because we need the ability to serialize and deserialize the
   * container easily for events when crossing a tick.
   *
   * @generated from field: osmosis.concentratedliquidity.v1beta1.UptimeTrackers uptime_trackers = 4;
   */
  uptimeTrackers?: UptimeTrackers;

  constructor(data?: PartialMessage<TickInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.TickInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "liquidity_gross", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "liquidity_net", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "spread_reward_growth_opposite_direction_of_last_traversal", kind: "message", T: DecCoin, repeated: true },
    { no: 4, name: "uptime_trackers", kind: "message", T: UptimeTrackers },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TickInfo {
    return new TickInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TickInfo {
    return new TickInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TickInfo {
    return new TickInfo().fromJsonString(jsonString, options);
  }

  static equals(a: TickInfo | PlainMessage<TickInfo> | undefined, b: TickInfo | PlainMessage<TickInfo> | undefined): boolean {
    return proto3.util.equals(TickInfo, a, b);
  }
}

/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.UptimeTrackers
 */
export class UptimeTrackers extends Message<UptimeTrackers> {
  /**
   * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.UptimeTracker list = 1;
   */
  list: UptimeTracker[] = [];

  constructor(data?: PartialMessage<UptimeTrackers>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.UptimeTrackers";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "list", kind: "message", T: UptimeTracker, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UptimeTrackers {
    return new UptimeTrackers().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UptimeTrackers {
    return new UptimeTrackers().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UptimeTrackers {
    return new UptimeTrackers().fromJsonString(jsonString, options);
  }

  static equals(a: UptimeTrackers | PlainMessage<UptimeTrackers> | undefined, b: UptimeTrackers | PlainMessage<UptimeTrackers> | undefined): boolean {
    return proto3.util.equals(UptimeTrackers, a, b);
  }
}

/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.UptimeTracker
 */
export class UptimeTracker extends Message<UptimeTracker> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.DecCoin uptime_growth_outside = 1;
   */
  uptimeGrowthOutside: DecCoin[] = [];

  constructor(data?: PartialMessage<UptimeTracker>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.UptimeTracker";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uptime_growth_outside", kind: "message", T: DecCoin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UptimeTracker {
    return new UptimeTracker().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UptimeTracker {
    return new UptimeTracker().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UptimeTracker {
    return new UptimeTracker().fromJsonString(jsonString, options);
  }

  static equals(a: UptimeTracker | PlainMessage<UptimeTracker> | undefined, b: UptimeTracker | PlainMessage<UptimeTracker> | undefined): boolean {
    return proto3.util.equals(UptimeTracker, a, b);
  }
}
