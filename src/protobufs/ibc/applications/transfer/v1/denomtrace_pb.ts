// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ibc/applications/transfer/v1/denomtrace.proto (package ibc.applications.transfer.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 *
 * @generated from message ibc.applications.transfer.v1.DenomTrace
 * @deprecated
 */
export class DenomTrace extends Message<DenomTrace> {
  /**
   * path defines the chain of port/channel identifiers used for tracing the
   * source of the fungible token.
   *
   * @generated from field: string path = 1;
   */
  path = "";

  /**
   * base denomination of the relayed fungible token.
   *
   * @generated from field: string base_denom = 2;
   */
  baseDenom = "";

  constructor(data?: PartialMessage<DenomTrace>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.DenomTrace";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "base_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DenomTrace {
    return new DenomTrace().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DenomTrace {
    return new DenomTrace().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DenomTrace {
    return new DenomTrace().fromJsonString(jsonString, options);
  }

  static equals(a: DenomTrace | PlainMessage<DenomTrace> | undefined, b: DenomTrace | PlainMessage<DenomTrace> | undefined): boolean {
    return proto3.util.equals(DenomTrace, a, b);
  }
}
