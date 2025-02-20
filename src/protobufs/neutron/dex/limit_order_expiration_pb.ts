// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file neutron/dex/limit_order_expiration.proto (package neutron.dex, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message neutron.dex.LimitOrderExpiration
 */
export class LimitOrderExpiration extends Message<LimitOrderExpiration> {
  /**
   * see limitOrderTranche.proto for details on expiration_time
   *
   * @generated from field: google.protobuf.Timestamp expiration_time = 1;
   */
  expirationTime?: Timestamp;

  /**
   * @generated from field: bytes tranche_ref = 2;
   */
  trancheRef = new Uint8Array(0);

  constructor(data?: PartialMessage<LimitOrderExpiration>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.LimitOrderExpiration";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "expiration_time", kind: "message", T: Timestamp },
    { no: 2, name: "tranche_ref", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LimitOrderExpiration {
    return new LimitOrderExpiration().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LimitOrderExpiration {
    return new LimitOrderExpiration().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LimitOrderExpiration {
    return new LimitOrderExpiration().fromJsonString(jsonString, options);
  }

  static equals(a: LimitOrderExpiration | PlainMessage<LimitOrderExpiration> | undefined, b: LimitOrderExpiration | PlainMessage<LimitOrderExpiration> | undefined): boolean {
    return proto3.util.equals(LimitOrderExpiration, a, b);
  }
}

