// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/amm/v1/token_weight.proto (package pryzm.amm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message pryzm.amm.v1.TokenWeight
 */
export class TokenWeight extends Message<TokenWeight> {
  /**
   * @generated from field: string denom = 1;
   */
  denom = "";

  /**
   * @generated from field: string normalized_weight = 2;
   */
  normalizedWeight = "";

  constructor(data?: PartialMessage<TokenWeight>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.amm.v1.TokenWeight";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "normalized_weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenWeight {
    return new TokenWeight().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenWeight {
    return new TokenWeight().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenWeight {
    return new TokenWeight().fromJsonString(jsonString, options);
  }

  static equals(a: TokenWeight | PlainMessage<TokenWeight> | undefined, b: TokenWeight | PlainMessage<TokenWeight> | undefined): boolean {
    return proto3.util.equals(TokenWeight, a, b);
  }
}

