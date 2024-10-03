// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/masterchef/incentive.proto (package elys.masterchef, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Incentive Info
 *
 * @generated from message elys.masterchef.LegacyIncentiveInfo
 */
export class LegacyIncentiveInfo extends Message<LegacyIncentiveInfo> {
  /**
   * reward amount in eden for 1 year
   *
   * @generated from field: string eden_amount_per_year = 1;
   */
  edenAmountPerYear = "";

  /**
   * starting block height of the distribution
   *
   * @generated from field: string distribution_start_block = 2;
   */
  distributionStartBlock = "";

  /**
   * distribution duration - block number per year
   *
   * @generated from field: string total_blocks_per_year = 3;
   */
  totalBlocksPerYear = "";

  /**
   * blocks distributed
   *
   * @generated from field: string blocks_distributed = 4;
   */
  blocksDistributed = "";

  constructor(data?: PartialMessage<LegacyIncentiveInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.masterchef.LegacyIncentiveInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "eden_amount_per_year", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "distribution_start_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "total_blocks_per_year", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "blocks_distributed", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LegacyIncentiveInfo {
    return new LegacyIncentiveInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LegacyIncentiveInfo {
    return new LegacyIncentiveInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LegacyIncentiveInfo {
    return new LegacyIncentiveInfo().fromJsonString(jsonString, options);
  }

  static equals(a: LegacyIncentiveInfo | PlainMessage<LegacyIncentiveInfo> | undefined, b: LegacyIncentiveInfo | PlainMessage<LegacyIncentiveInfo> | undefined): boolean {
    return proto3.util.equals(LegacyIncentiveInfo, a, b);
  }
}

/**
 * @generated from message elys.masterchef.IncentiveInfo
 */
export class IncentiveInfo extends Message<IncentiveInfo> {
  /**
   * reward amount in eden for 1 year
   *
   * @generated from field: string eden_amount_per_year = 1;
   */
  edenAmountPerYear = "";

  /**
   * blocks distributed
   *
   * @generated from field: int64 blocks_distributed = 2;
   */
  blocksDistributed = protoInt64.zero;

  constructor(data?: PartialMessage<IncentiveInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.masterchef.IncentiveInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "eden_amount_per_year", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "blocks_distributed", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IncentiveInfo {
    return new IncentiveInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IncentiveInfo {
    return new IncentiveInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IncentiveInfo {
    return new IncentiveInfo().fromJsonString(jsonString, options);
  }

  static equals(a: IncentiveInfo | PlainMessage<IncentiveInfo> | undefined, b: IncentiveInfo | PlainMessage<IncentiveInfo> | undefined): boolean {
    return proto3.util.equals(IncentiveInfo, a, b);
  }
}
