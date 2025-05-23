// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/txfees/v1beta1/txfees.proto (package injective.txfees.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message injective.txfees.v1beta1.Params
 */
export class Params extends Message<Params> {
  /**
   * @generated from field: uint64 max_gas_wanted_per_tx = 1;
   */
  maxGasWantedPerTx = protoInt64.zero;

  /**
   * @generated from field: uint64 high_gas_tx_threshold = 2;
   */
  highGasTxThreshold = protoInt64.zero;

  /**
   * @generated from field: string min_gas_price_for_high_gas_tx = 3;
   */
  minGasPriceForHighGasTx = "";

  /**
   * @generated from field: bool mempool1559_enabled = 4;
   */
  mempool1559Enabled = false;

  /**
   * @generated from field: string min_gas_price = 5;
   */
  minGasPrice = "";

  /**
   * @generated from field: string default_base_fee_multiplier = 6;
   */
  defaultBaseFeeMultiplier = "";

  /**
   * @generated from field: string max_base_fee_multiplier = 7;
   */
  maxBaseFeeMultiplier = "";

  /**
   * @generated from field: int64 reset_interval = 8;
   */
  resetInterval = protoInt64.zero;

  /**
   * @generated from field: string max_block_change_rate = 9;
   */
  maxBlockChangeRate = "";

  /**
   * @generated from field: string target_block_space_percent_rate = 10;
   */
  targetBlockSpacePercentRate = "";

  /**
   * @generated from field: string recheck_fee_low_base_fee = 11;
   */
  recheckFeeLowBaseFee = "";

  /**
   * @generated from field: string recheck_fee_high_base_fee = 12;
   */
  recheckFeeHighBaseFee = "";

  /**
   * @generated from field: string recheck_fee_base_fee_threshold_multiplier = 13;
   */
  recheckFeeBaseFeeThresholdMultiplier = "";

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.txfees.v1beta1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "max_gas_wanted_per_tx", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "high_gas_tx_threshold", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "min_gas_price_for_high_gas_tx", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "mempool1559_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "min_gas_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "default_base_fee_multiplier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "max_base_fee_multiplier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "reset_interval", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "max_block_change_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "target_block_space_percent_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "recheck_fee_low_base_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "recheck_fee_high_base_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "recheck_fee_base_fee_threshold_multiplier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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

