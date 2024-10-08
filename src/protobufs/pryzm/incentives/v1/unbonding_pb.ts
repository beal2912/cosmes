// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/incentives/v1/unbonding.proto (package pryzm.incentives.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * @generated from message pryzm.incentives.v1.Unbonding
 */
export class Unbonding extends Message<Unbonding> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * @generated from field: google.protobuf.Timestamp completion_time = 2;
   */
  completionTime?: Timestamp;

  /**
   * @generated from field: string address = 3;
   */
  address = "";

  /**
   * @generated from field: string treasury_address = 4;
   */
  treasuryAddress = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 5;
   */
  amount?: Coin;

  /**
   * @generated from field: bool auto_claim = 6;
   */
  autoClaim = false;

  constructor(data?: PartialMessage<Unbonding>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.Unbonding";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "completion_time", kind: "message", T: Timestamp },
    { no: 3, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "treasury_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "amount", kind: "message", T: Coin },
    { no: 6, name: "auto_claim", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Unbonding {
    return new Unbonding().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Unbonding {
    return new Unbonding().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Unbonding {
    return new Unbonding().fromJsonString(jsonString, options);
  }

  static equals(a: Unbonding | PlainMessage<Unbonding> | undefined, b: Unbonding | PlainMessage<Unbonding> | undefined): boolean {
    return proto3.util.equals(Unbonding, a, b);
  }
}

