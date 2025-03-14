// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file milkyway/liquidvesting/v1/params.proto (package milkyway.liquidvesting.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Params defines the parameters for the module.
 *
 * @generated from message milkyway.liquidvesting.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * This value represents the percentage that needs to be sent to the
   * insurance fund in order to restake a certain amount of locked tokens.
   * For example, if this value is 2%, a user must send 2 tokens to
   * the insurance fund to restake 100 locked tokens
   *
   * @generated from field: string insurance_percentage = 1;
   */
  insurancePercentage = "";

  /**
   * This value represents the list of users who are authorized to execute the
   * MsgBurnLockedRepresentation.
   *
   * @generated from field: repeated string burners = 2;
   */
  burners: string[] = [];

  /**
   * This value represents the list of users who are authorized to execute the
   * MsgMintLockedRepresentation.
   *
   * @generated from field: repeated string minters = 3;
   */
  minters: string[] = [];

  /**
   * List of channels from which is allowed to receive deposits to the insurance
   * fund.
   *
   * @generated from field: repeated string allowed_channels = 5;
   */
  allowedChannels: string[] = [];

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "milkyway.liquidvesting.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "insurance_percentage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "burners", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "minters", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "allowed_channels", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
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

