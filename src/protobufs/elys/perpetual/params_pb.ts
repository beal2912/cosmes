// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/perpetual/params.proto (package elys.perpetual, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Params defines the parameters for the module.
 *
 * @generated from message elys.perpetual.LegacyParams
 */
export class LegacyParams extends Message<LegacyParams> {
  /**
   * @generated from field: string leverage_max = 1;
   */
  leverageMax = "";

  /**
   * @generated from field: string borrow_interest_rate_max = 2;
   */
  borrowInterestRateMax = "";

  /**
   * @generated from field: string borrow_interest_rate_min = 3;
   */
  borrowInterestRateMin = "";

  /**
   * @generated from field: string borrow_interest_rate_increase = 4;
   */
  borrowInterestRateIncrease = "";

  /**
   * @generated from field: string borrow_interest_rate_decrease = 5;
   */
  borrowInterestRateDecrease = "";

  /**
   * @generated from field: string health_gain_factor = 6;
   */
  healthGainFactor = "";

  /**
   * @generated from field: int64 max_open_positions = 7;
   */
  maxOpenPositions = protoInt64.zero;

  /**
   * @generated from field: string pool_open_threshold = 8;
   */
  poolOpenThreshold = "";

  /**
   * @generated from field: string force_close_fund_percentage = 9;
   */
  forceCloseFundPercentage = "";

  /**
   * @generated from field: string force_close_fund_address = 10;
   */
  forceCloseFundAddress = "";

  /**
   * @generated from field: string incremental_borrow_interest_payment_fund_percentage = 11;
   */
  incrementalBorrowInterestPaymentFundPercentage = "";

  /**
   * @generated from field: string incremental_borrow_interest_payment_fund_address = 12;
   */
  incrementalBorrowInterestPaymentFundAddress = "";

  /**
   * @generated from field: string safety_factor = 13;
   */
  safetyFactor = "";

  /**
   * @generated from field: bool incremental_borrow_interest_payment_enabled = 14;
   */
  incrementalBorrowInterestPaymentEnabled = false;

  /**
   * @generated from field: bool whitelisting_enabled = 15;
   */
  whitelistingEnabled = false;

  /**
   * @generated from field: string perpetual_swap_fee = 16;
   */
  perpetualSwapFee = "";

  /**
   * @generated from field: int64 max_limit_order = 17;
   */
  maxLimitOrder = protoInt64.zero;

  /**
   * @generated from field: string fixed_funding_rate = 18;
   */
  fixedFundingRate = "";

  /**
   * minimum value for take_profit_price/current price for long, should be
   * greater than 1
   *
   * @generated from field: string minimum_long_take_profit_price_ratio = 19;
   */
  minimumLongTakeProfitPriceRatio = "";

  /**
   * max value for take_profit_price/current price for long, should be greater
   * than 1
   *
   * @generated from field: string maximum_long_take_profit_price_ratio = 20;
   */
  maximumLongTakeProfitPriceRatio = "";

  /**
   * max value for take_profit_price/current price for short, should be less
   * than 1
   *
   * @generated from field: string maximum_short_take_profit_price_ratio = 21;
   */
  maximumShortTakeProfitPriceRatio = "";

  /**
   * No need for minimumShortTakeProfitPriceRatio as it will be 0, checked in
   * validate message
   *
   * @generated from field: bool enable_take_profit_custody_liabilities = 22;
   */
  enableTakeProfitCustodyLiabilities = false;

  /**
   * We create this and send this value to estimate swap ONLY when opening and
   * closing the position Ideally this value is set to half. When trader open a
   * position if they receive a weight balance bonus (which is half of weight
   * breaking fee, ideally) then while closing position they are charged weight
   * breaking fee. So we just directly apply half weight breaking fee on
   * perpetual swaps Question: does each need to have separate value of this
   * because PoolParams.WeightRecoveryFeePortion can be different Also, if
   * trader has no bonus only fee, then overall we are only applying the fee
   * half time
   *
   * @generated from field: string weight_breaking_fee_factor = 23;
   */
  weightBreakingFeeFactor = "";

  constructor(data?: PartialMessage<LegacyParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.LegacyParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "leverage_max", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "borrow_interest_rate_max", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "borrow_interest_rate_min", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "borrow_interest_rate_increase", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "borrow_interest_rate_decrease", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "health_gain_factor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "max_open_positions", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "pool_open_threshold", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "force_close_fund_percentage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "force_close_fund_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "incremental_borrow_interest_payment_fund_percentage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "incremental_borrow_interest_payment_fund_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "safety_factor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "incremental_borrow_interest_payment_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 15, name: "whitelisting_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 16, name: "perpetual_swap_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "max_limit_order", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 18, name: "fixed_funding_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 19, name: "minimum_long_take_profit_price_ratio", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "maximum_long_take_profit_price_ratio", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "maximum_short_take_profit_price_ratio", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 22, name: "enable_take_profit_custody_liabilities", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 23, name: "weight_breaking_fee_factor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LegacyParams {
    return new LegacyParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LegacyParams {
    return new LegacyParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LegacyParams {
    return new LegacyParams().fromJsonString(jsonString, options);
  }

  static equals(a: LegacyParams | PlainMessage<LegacyParams> | undefined, b: LegacyParams | PlainMessage<LegacyParams> | undefined): boolean {
    return proto3.util.equals(LegacyParams, a, b);
  }
}

/**
 * @generated from message elys.perpetual.Params
 */
export class Params extends Message<Params> {
  /**
   * @generated from field: string leverage_max = 1;
   */
  leverageMax = "";

  /**
   * @generated from field: string borrow_interest_rate_max = 2;
   */
  borrowInterestRateMax = "";

  /**
   * @generated from field: string borrow_interest_rate_min = 3;
   */
  borrowInterestRateMin = "";

  /**
   * @generated from field: string borrow_interest_rate_increase = 4;
   */
  borrowInterestRateIncrease = "";

  /**
   * @generated from field: string borrow_interest_rate_decrease = 5;
   */
  borrowInterestRateDecrease = "";

  /**
   * @generated from field: string health_gain_factor = 6;
   */
  healthGainFactor = "";

  /**
   * @generated from field: int64 max_open_positions = 7;
   */
  maxOpenPositions = protoInt64.zero;

  /**
   * @generated from field: string pool_open_threshold = 8;
   */
  poolOpenThreshold = "";

  /**
   * @generated from field: string borrow_interest_payment_fund_percentage = 9;
   */
  borrowInterestPaymentFundPercentage = "";

  /**
   * @generated from field: string borrow_interest_payment_fund_address = 10;
   */
  borrowInterestPaymentFundAddress = "";

  /**
   * @generated from field: string safety_factor = 11;
   */
  safetyFactor = "";

  /**
   * @generated from field: bool borrow_interest_payment_enabled = 12;
   */
  borrowInterestPaymentEnabled = false;

  /**
   * @generated from field: bool whitelisting_enabled = 13;
   */
  whitelistingEnabled = false;

  /**
   * @generated from field: string perpetual_swap_fee = 14;
   */
  perpetualSwapFee = "";

  /**
   * @generated from field: int64 max_limit_order = 15;
   */
  maxLimitOrder = protoInt64.zero;

  /**
   * @generated from field: string fixed_funding_rate = 16;
   */
  fixedFundingRate = "";

  /**
   * minimum value for take_profit_price/current price for long, should be
   * greater than 1
   *
   * @generated from field: string minimum_long_take_profit_price_ratio = 17;
   */
  minimumLongTakeProfitPriceRatio = "";

  /**
   * max value for take_profit_price/current price for long, should be greater
   * than 1
   *
   * @generated from field: string maximum_long_take_profit_price_ratio = 18;
   */
  maximumLongTakeProfitPriceRatio = "";

  /**
   * max value for take_profit_price/current price for short, should be less
   * than 1
   *
   * @generated from field: string maximum_short_take_profit_price_ratio = 19;
   */
  maximumShortTakeProfitPriceRatio = "";

  /**
   * No need for minimumShortTakeProfitPriceRatio as it will be 0, checked in
   * validate message
   *
   * @generated from field: bool enable_take_profit_custody_liabilities = 20;
   */
  enableTakeProfitCustodyLiabilities = false;

  /**
   * We create this and send this value to estimate swap ONLY when opening and
   * closing the position Ideally this value is set to half. When trader open a
   * position if they receive a weight balance bonus (which is half of weight
   * breaking fee, ideally) then while closing position they are charged weight
   * breaking fee. So we just directly apply half weight breaking fee on
   * perpetual swaps Question: does each need to have separate value of this
   * because PoolParams.WeightRecoveryFeePortion can be different Also, if
   * trader has no bonus only fee, then overall we are only applying the fee
   * half time
   *
   * @generated from field: string weight_breaking_fee_factor = 21;
   */
  weightBreakingFeeFactor = "";

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.perpetual.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "leverage_max", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "borrow_interest_rate_max", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "borrow_interest_rate_min", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "borrow_interest_rate_increase", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "borrow_interest_rate_decrease", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "health_gain_factor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "max_open_positions", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "pool_open_threshold", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "borrow_interest_payment_fund_percentage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "borrow_interest_payment_fund_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "safety_factor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "borrow_interest_payment_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "whitelisting_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "perpetual_swap_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "max_limit_order", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 16, name: "fixed_funding_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "minimum_long_take_profit_price_ratio", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "maximum_long_take_profit_price_ratio", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 19, name: "maximum_short_take_profit_price_ratio", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "enable_take_profit_custody_liabilities", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 21, name: "weight_breaking_fee_factor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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

