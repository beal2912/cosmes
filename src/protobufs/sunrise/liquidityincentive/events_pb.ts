// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file sunrise/liquidityincentive/events.proto (package sunrise.liquidityincentive, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PoolWeight } from "./gauge_pb.js";

/**
 * EventVoteGauge
 *
 * @generated from message sunrise.liquidityincentive.EventVoteGauge
 */
export class EventVoteGauge extends Message<EventVoteGauge> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * @generated from field: repeated sunrise.liquidityincentive.PoolWeight pool_weights = 2;
   */
  poolWeights: PoolWeight[] = [];

  constructor(data?: PartialMessage<EventVoteGauge>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.liquidityincentive.EventVoteGauge";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_weights", kind: "message", T: PoolWeight, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventVoteGauge {
    return new EventVoteGauge().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventVoteGauge {
    return new EventVoteGauge().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventVoteGauge {
    return new EventVoteGauge().fromJsonString(jsonString, options);
  }

  static equals(a: EventVoteGauge | PlainMessage<EventVoteGauge> | undefined, b: EventVoteGauge | PlainMessage<EventVoteGauge> | undefined): boolean {
    return proto3.util.equals(EventVoteGauge, a, b);
  }
}

/**
 * EventCollectVoteRewards
 *
 * @generated from message sunrise.liquidityincentive.EventCollectVoteRewards
 */
export class EventCollectVoteRewards extends Message<EventCollectVoteRewards> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  constructor(data?: PartialMessage<EventCollectVoteRewards>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.liquidityincentive.EventCollectVoteRewards";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventCollectVoteRewards {
    return new EventCollectVoteRewards().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventCollectVoteRewards {
    return new EventCollectVoteRewards().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventCollectVoteRewards {
    return new EventCollectVoteRewards().fromJsonString(jsonString, options);
  }

  static equals(a: EventCollectVoteRewards | PlainMessage<EventCollectVoteRewards> | undefined, b: EventCollectVoteRewards | PlainMessage<EventCollectVoteRewards> | undefined): boolean {
    return proto3.util.equals(EventCollectVoteRewards, a, b);
  }
}

