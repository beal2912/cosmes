// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/tokenomics/airdrop.proto (package elys.tokenomics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message elys.tokenomics.Airdrop
 */
export class Airdrop extends Message<Airdrop> {
  /**
   * @generated from field: string intent = 1;
   */
  intent = "";

  /**
   * @generated from field: uint64 amount = 2;
   */
  amount = protoInt64.zero;

  /**
   * @generated from field: string authority = 3;
   */
  authority = "";

  /**
   * @generated from field: uint64 expiry = 4;
   */
  expiry = protoInt64.zero;

  constructor(data?: PartialMessage<Airdrop>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tokenomics.Airdrop";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "intent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "expiry", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Airdrop {
    return new Airdrop().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Airdrop {
    return new Airdrop().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Airdrop {
    return new Airdrop().fromJsonString(jsonString, options);
  }

  static equals(a: Airdrop | PlainMessage<Airdrop> | undefined, b: Airdrop | PlainMessage<Airdrop> | undefined): boolean {
    return proto3.util.equals(Airdrop, a, b);
  }
}

