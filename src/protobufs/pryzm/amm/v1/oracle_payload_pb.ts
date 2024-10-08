// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/amm/v1/oracle_payload.proto (package pryzm.amm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Height } from "../../../ibc/core/client/v1/client_pb.js";
import { Pair } from "./oracle_price_pair_pb.js";

/**
 * @generated from message pryzm.amm.v1.OraclePayloadDataSourceBlockHeight
 */
export class OraclePayloadDataSourceBlockHeight extends Message<OraclePayloadDataSourceBlockHeight> {
  /**
   * @generated from field: string data_source = 1;
   */
  dataSource = "";

  /**
   * @generated from field: ibc.core.client.v1.Height block_height = 2;
   */
  blockHeight?: Height;

  constructor(data?: PartialMessage<OraclePayloadDataSourceBlockHeight>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.amm.v1.OraclePayloadDataSourceBlockHeight";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data_source", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "block_height", kind: "message", T: Height },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OraclePayloadDataSourceBlockHeight {
    return new OraclePayloadDataSourceBlockHeight().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OraclePayloadDataSourceBlockHeight {
    return new OraclePayloadDataSourceBlockHeight().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OraclePayloadDataSourceBlockHeight {
    return new OraclePayloadDataSourceBlockHeight().fromJsonString(jsonString, options);
  }

  static equals(a: OraclePayloadDataSourceBlockHeight | PlainMessage<OraclePayloadDataSourceBlockHeight> | undefined, b: OraclePayloadDataSourceBlockHeight | PlainMessage<OraclePayloadDataSourceBlockHeight> | undefined): boolean {
    return proto3.util.equals(OraclePayloadDataSourceBlockHeight, a, b);
  }
}

/**
 * OraclePayload defines the structure of oracle vote payload
 *
 * @generated from message pryzm.amm.v1.OraclePayload
 */
export class OraclePayload extends Message<OraclePayload> {
  /**
   * @generated from field: repeated pryzm.amm.v1.OraclePayloadDataSourceBlockHeight data_source_block_heights = 1;
   */
  dataSourceBlockHeights: OraclePayloadDataSourceBlockHeight[] = [];

  /**
   * @generated from field: string price = 2;
   */
  price = "";

  /**
   * @generated from field: repeated pryzm.amm.v1.Pair pairs = 3;
   */
  pairs: Pair[] = [];

  /**
   * @generated from field: string quote_token = 4;
   */
  quoteToken = "";

  constructor(data?: PartialMessage<OraclePayload>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.amm.v1.OraclePayload";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data_source_block_heights", kind: "message", T: OraclePayloadDataSourceBlockHeight, repeated: true },
    { no: 2, name: "price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "pairs", kind: "message", T: Pair, repeated: true },
    { no: 4, name: "quote_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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

