// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file milkyway/services/v1/params.proto (package milkyway.services.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * Params defines the parameters for the module.
 *
 * @generated from message milkyway.services.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * ServiceRegistrationFee defines the fee to register a new service.
   * The fee is drawn from the MsgRegisterService sender's account,
   * and transferred to the community pool.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin service_registration_fee = 1;
   */
  serviceRegistrationFee: Coin[] = [];

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "milkyway.services.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "service_registration_fee", kind: "message", T: Coin, repeated: true },
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

