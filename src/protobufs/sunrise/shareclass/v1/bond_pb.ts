// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file sunrise/shareclass/v1/bond.proto (package sunrise.shareclass.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * ValidatorBond
 *
 * @generated from message sunrise.shareclass.v1.ValidatorBond
 */
export class ValidatorBond extends Message<ValidatorBond> {
  /**
   * @generated from field: string validator_address = 1;
   */
  validatorAddress = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<ValidatorBond>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.shareclass.v1.ValidatorBond";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorBond {
    return new ValidatorBond().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorBond {
    return new ValidatorBond().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorBond {
    return new ValidatorBond().fromJsonString(jsonString, options);
  }

  static equals(a: ValidatorBond | PlainMessage<ValidatorBond> | undefined, b: ValidatorBond | PlainMessage<ValidatorBond> | undefined): boolean {
    return proto3.util.equals(ValidatorBond, a, b);
  }
}

/**
 * Unbonding
 *
 * @generated from message sunrise.shareclass.v1.Unbonding
 */
export class Unbonding extends Message<Unbonding> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * @generated from field: string recipient_address = 2;
   */
  recipientAddress = "";

  /**
   * @generated from field: string delegator_address = 3;
   */
  delegatorAddress = "";

  /**
   * @generated from field: string validator_address = 4;
   */
  validatorAddress = "";

  /**
   * @generated from field: google.protobuf.Timestamp completion_time = 5;
   */
  completionTime?: Timestamp;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 6;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<Unbonding>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.shareclass.v1.Unbonding";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "recipient_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "completion_time", kind: "message", T: Timestamp },
    { no: 6, name: "amount", kind: "message", T: Coin },
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

