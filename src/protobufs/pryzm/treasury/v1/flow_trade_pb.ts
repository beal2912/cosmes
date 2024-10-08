// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/treasury/v1/flow_trade.proto (package pryzm.treasury.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { ActionType } from "./action_pb.js";

/**
 * @generated from message pryzm.treasury.v1.FlowTrade
 */
export class FlowTrade extends Message<FlowTrade> {
  /**
   * @generated from field: google.protobuf.Timestamp end_time = 1;
   */
  endTime?: Timestamp;

  /**
   * @generated from field: uint64 flow_id = 2;
   */
  flowId = protoInt64.zero;

  /**
   * @generated from field: pryzm.treasury.v1.ActionType action_type = 3;
   */
  actionType = ActionType.HOLD;

  constructor(data?: PartialMessage<FlowTrade>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.treasury.v1.FlowTrade";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "end_time", kind: "message", T: Timestamp },
    { no: 2, name: "flow_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "action_type", kind: "enum", T: proto3.getEnumType(ActionType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlowTrade {
    return new FlowTrade().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlowTrade {
    return new FlowTrade().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlowTrade {
    return new FlowTrade().fromJsonString(jsonString, options);
  }

  static equals(a: FlowTrade | PlainMessage<FlowTrade> | undefined, b: FlowTrade | PlainMessage<FlowTrade> | undefined): boolean {
    return proto3.util.equals(FlowTrade, a, b);
  }
}

