// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/tradeshield/params.proto (package elys.tradeshield, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Params defines the parameters for the module.
 *
 * @generated from message elys.tradeshield.Params
 */
export class Params extends Message<Params> {
  /**
   * @generated from field: bool market_order_enabled = 1;
   */
  marketOrderEnabled = false;

  /**
   * @generated from field: bool stake_enabled = 2;
   */
  stakeEnabled = false;

  /**
   * @generated from field: bool process_orders_enabled = 3;
   */
  processOrdersEnabled = false;

  /**
   * @generated from field: bool swap_enabled = 4;
   */
  swapEnabled = false;

  /**
   * @generated from field: bool perpetual_enabled = 5;
   */
  perpetualEnabled = false;

  /**
   * @generated from field: bool reward_enabled = 6;
   */
  rewardEnabled = false;

  /**
   * @generated from field: bool leverage_enabled = 7;
   */
  leverageEnabled = false;

  /**
   * @generated from field: uint64 limit_process_order = 8;
   */
  limitProcessOrder = protoInt64.zero;

  /**
   * For incentive system v2
   *
   * @generated from field: string reward_percentage = 9;
   */
  rewardPercentage = "";

  /**
   * @generated from field: string margin_error = 10;
   */
  marginError = "";

  /**
   * @generated from field: string minimum_deposit = 11;
   */
  minimumDeposit = "";

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tradeshield.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "market_order_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "stake_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "process_orders_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "swap_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "perpetual_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "reward_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "leverage_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "limit_process_order", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 9, name: "reward_percentage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "margin_error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "minimum_deposit", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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

