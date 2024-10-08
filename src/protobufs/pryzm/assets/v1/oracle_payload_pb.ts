// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/assets/v1/oracle_payload.proto (package pryzm.assets.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Height } from "../../../ibc/core/client/v1/client_pb.js";

/**
 * OraclePayload defines the structure of oracle vote payload
 *
 * @generated from message pryzm.assets.v1.OraclePayload
 */
export class OraclePayload extends Message<OraclePayload> {
  /**
   * @generated from field: ibc.core.client.v1.Height block_height = 1;
   */
  blockHeight?: Height;

  /**
   * @generated from field: string exchange_rate = 2;
   */
  exchangeRate = "";

  constructor(data?: PartialMessage<OraclePayload>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.assets.v1.OraclePayload";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "block_height", kind: "message", T: Height },
    { no: 2, name: "exchange_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OraclePayload {
    return new OraclePayload().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OraclePayload {
    return new OraclePayload().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OraclePayload {
    return new OraclePayload().fromJsonString(jsonString, options);
  }

  static equals(a: OraclePayload | PlainMessage<OraclePayload> | undefined, b: OraclePayload | PlainMessage<OraclePayload> | undefined): boolean {
    return proto3.util.equals(OraclePayload, a, b);
  }
}

