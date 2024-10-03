// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/icstaking/v1/sweep.proto (package pryzm.icstaking.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Information about an ongoing sweep ibc transfer waiting to be completed
 *
 * @generated from message pryzm.icstaking.v1.SweepTransfer
 */
export class SweepTransfer extends Message<SweepTransfer> {
  /**
   * the timeout timestamp set on the ibc transfer
   *
   * @generated from field: uint64 timeout = 1;
   */
  timeout = protoInt64.zero;

  /**
   * host chain id
   *
   * @generated from field: string host_chain = 2;
   */
  hostChain = "";

  /**
   * the channel of the transfer
   *
   * @generated from field: string channel = 3;
   */
  channel = "";

  /**
   * whether the transfer is meant to bring back Pryzm protocol fees, in which case the epochs field is empty
   *
   * @generated from field: bool fee = 4;
   */
  fee = false;

  /**
   * list of the epochs that the sweep transfer is related to
   *
   * @generated from field: repeated uint64 epochs = 5;
   */
  epochs: bigint[] = [];

  /**
   * the amount of tokens being transferred
   *
   * @generated from field: string amount = 6;
   */
  amount = "";

  constructor(data?: PartialMessage<SweepTransfer>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.icstaking.v1.SweepTransfer";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "timeout", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "host_chain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "channel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "fee", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "epochs", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 6, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SweepTransfer {
    return new SweepTransfer().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SweepTransfer {
    return new SweepTransfer().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SweepTransfer {
    return new SweepTransfer().fromJsonString(jsonString, options);
  }

  static equals(a: SweepTransfer | PlainMessage<SweepTransfer> | undefined, b: SweepTransfer | PlainMessage<SweepTransfer> | undefined): boolean {
    return proto3.util.equals(SweepTransfer, a, b);
  }
}
