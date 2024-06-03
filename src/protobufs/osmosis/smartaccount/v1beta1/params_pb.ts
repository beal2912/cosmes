// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/smartaccount/v1beta1/params.proto (package osmosis.smartaccount.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Params defines the parameters for the module.
 *
 * @generated from message osmosis.smartaccount.v1beta1.Params
 */
export class Params extends Message<Params> {
  /**
   * MaximumUnauthenticatedGas defines the maximum amount of gas that can be
   * used to authenticate a transaction in ante handler without having fee payer
   * authenticated.
   *
   * @generated from field: uint64 maximum_unauthenticated_gas = 1;
   */
  maximumUnauthenticatedGas = protoInt64.zero;

  /**
   * IsSmartAccountActive defines the state of the authenticator.
   * If set to false, the authenticator module will not be used
   * and the classic cosmos sdk authentication will be used instead.
   *
   * @generated from field: bool is_smart_account_active = 2;
   */
  isSmartAccountActive = false;

  /**
   * CircuitBreakerControllers defines list of addresses that are allowed to
   * set is_smart_account_active without going through governance.
   *
   * @generated from field: repeated string circuit_breaker_controllers = 3;
   */
  circuitBreakerControllers: string[] = [];

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.smartaccount.v1beta1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "maximum_unauthenticated_gas", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "is_smart_account_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "circuit_breaker_controllers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
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
