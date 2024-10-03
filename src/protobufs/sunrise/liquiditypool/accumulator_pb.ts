// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file sunrise/liquiditypool/accumulator.proto (package sunrise.liquiditypool, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DecCoin } from "../../cosmos/base/v1beta1/coin_pb.js";

/**
 * @generated from message sunrise.liquiditypool.AccumulatorObject
 */
export class AccumulatorObject extends Message<AccumulatorObject> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.DecCoin accum_value = 2;
   */
  accumValue: DecCoin[] = [];

  /**
   * @generated from field: string total_shares = 3;
   */
  totalShares = "";

  constructor(data?: PartialMessage<AccumulatorObject>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.liquiditypool.AccumulatorObject";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "accum_value", kind: "message", T: DecCoin, repeated: true },
    { no: 3, name: "total_shares", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccumulatorObject {
    return new AccumulatorObject().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccumulatorObject {
    return new AccumulatorObject().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccumulatorObject {
    return new AccumulatorObject().fromJsonString(jsonString, options);
  }

  static equals(a: AccumulatorObject | PlainMessage<AccumulatorObject> | undefined, b: AccumulatorObject | PlainMessage<AccumulatorObject> | undefined): boolean {
    return proto3.util.equals(AccumulatorObject, a, b);
  }
}

/**
 * @generated from message sunrise.liquiditypool.AccumulatorPosition
 */
export class AccumulatorPosition extends Message<AccumulatorPosition> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: string index = 2;
   */
  index = "";

  /**
   * @generated from field: string num_shares = 3;
   */
  numShares = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.DecCoin accum_value_per_share = 4;
   */
  accumValuePerShare: DecCoin[] = [];

  /**
   * @generated from field: repeated cosmos.base.v1beta1.DecCoin unclaimed_rewards_total = 5;
   */
  unclaimedRewardsTotal: DecCoin[] = [];

  constructor(data?: PartialMessage<AccumulatorPosition>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.liquiditypool.AccumulatorPosition";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "index", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "num_shares", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "accum_value_per_share", kind: "message", T: DecCoin, repeated: true },
    { no: 5, name: "unclaimed_rewards_total", kind: "message", T: DecCoin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccumulatorPosition {
    return new AccumulatorPosition().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccumulatorPosition {
    return new AccumulatorPosition().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccumulatorPosition {
    return new AccumulatorPosition().fromJsonString(jsonString, options);
  }

  static equals(a: AccumulatorPosition | PlainMessage<AccumulatorPosition> | undefined, b: AccumulatorPosition | PlainMessage<AccumulatorPosition> | undefined): boolean {
    return proto3.util.equals(AccumulatorPosition, a, b);
  }
}
