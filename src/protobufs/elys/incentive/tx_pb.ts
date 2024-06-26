// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/incentive/tx.proto (package elys.incentive, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";

/**
 * @generated from message elys.incentive.MsgBeginRedelegate
 */
export class MsgBeginRedelegate extends Message<MsgBeginRedelegate> {
  /**
   * @generated from field: string delegator_address = 1;
   */
  delegatorAddress = "";

  /**
   * @generated from field: string validator_src_address = 2;
   */
  validatorSrcAddress = "";

  /**
   * @generated from field: string validator_dst_address = 3;
   */
  validatorDstAddress = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 4;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<MsgBeginRedelegate>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.incentive.MsgBeginRedelegate";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_src_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "validator_dst_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBeginRedelegate {
    return new MsgBeginRedelegate().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBeginRedelegate {
    return new MsgBeginRedelegate().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBeginRedelegate {
    return new MsgBeginRedelegate().fromJsonString(jsonString, options);
  }

  static equals(a: MsgBeginRedelegate | PlainMessage<MsgBeginRedelegate> | undefined, b: MsgBeginRedelegate | PlainMessage<MsgBeginRedelegate> | undefined): boolean {
    return proto3.util.equals(MsgBeginRedelegate, a, b);
  }
}

/**
 * @generated from message elys.incentive.MsgCancelUnbondingDelegation
 */
export class MsgCancelUnbondingDelegation extends Message<MsgCancelUnbondingDelegation> {
  /**
   * @generated from field: string delegator_address = 1;
   */
  delegatorAddress = "";

  /**
   * @generated from field: string validator_address = 2;
   */
  validatorAddress = "";

  /**
   * amount is always less than or equal to unbonding delegation entry balance 
   *
   * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
   */
  amount?: Coin;

  /**
   * creation_height is the height which the unbonding took place.
   *
   * @generated from field: int64 creation_height = 4;
   */
  creationHeight = protoInt64.zero;

  constructor(data?: PartialMessage<MsgCancelUnbondingDelegation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.incentive.MsgCancelUnbondingDelegation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin },
    { no: 4, name: "creation_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelUnbondingDelegation {
    return new MsgCancelUnbondingDelegation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelUnbondingDelegation {
    return new MsgCancelUnbondingDelegation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelUnbondingDelegation {
    return new MsgCancelUnbondingDelegation().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCancelUnbondingDelegation | PlainMessage<MsgCancelUnbondingDelegation> | undefined, b: MsgCancelUnbondingDelegation | PlainMessage<MsgCancelUnbondingDelegation> | undefined): boolean {
    return proto3.util.equals(MsgCancelUnbondingDelegation, a, b);
  }
}

