// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file neutron/interchaintxs/v1/params.proto (package neutron.interchaintxs.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * Params defines the parameters for the module.
 *
 * @generated from message neutron.interchaintxs.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * Defines maximum amount of messages to be passed in MsgSubmitTx
   *
   * @generated from field: uint64 msg_submit_tx_max_messages = 1;
   */
  msgSubmitTxMaxMessages = protoInt64.zero;

  /**
   * Defines a minimum fee required to register interchain account
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin register_fee = 2;
   */
  registerFee: Coin[] = [];

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.interchaintxs.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "msg_submit_tx_max_messages", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "register_fee", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params {
    return new Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJsonString(jsonString, options);
  }

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean {
    return proto3.util.equals(Params, a, b);
  }
}

