// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/oracle/asset_info.proto (package elys.oracle, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message elys.oracle.AssetInfo
 */
export class AssetInfo extends Message<AssetInfo> {
  /**
   * @generated from field: string denom = 1;
   */
  denom = "";

  /**
   * @generated from field: string display = 2;
   */
  display = "";

  /**
   * @generated from field: string band_ticker = 3;
   */
  bandTicker = "";

  /**
   * @generated from field: string elys_ticker = 4;
   */
  elysTicker = "";

  /**
   * @generated from field: uint64 decimal = 5;
   */
  decimal = protoInt64.zero;

  constructor(data?: PartialMessage<AssetInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.oracle.AssetInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "display", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "band_ticker", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "elys_ticker", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "decimal", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetInfo {
    return new AssetInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetInfo {
    return new AssetInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetInfo {
    return new AssetInfo().fromJsonString(jsonString, options);
  }

  static equals(a: AssetInfo | PlainMessage<AssetInfo> | undefined, b: AssetInfo | PlainMessage<AssetInfo> | undefined): boolean {
    return proto3.util.equals(AssetInfo, a, b);
  }
}

