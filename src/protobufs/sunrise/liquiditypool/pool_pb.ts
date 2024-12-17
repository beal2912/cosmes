// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file sunrise/liquiditypool/pool.proto (package sunrise.liquiditypool, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Pool
 *
 * @generated from message sunrise.liquiditypool.Pool
 */
export class Pool extends Message<Pool> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * @generated from field: string denom_base = 2;
   */
  denomBase = "";

  /**
   * @generated from field: string denom_quote = 3;
   */
  denomQuote = "";

  /**
   * @generated from field: string fee_rate = 4;
   */
  feeRate = "";

  /**
   * @generated from field: sunrise.liquiditypool.TickParams tick_params = 5;
   */
  tickParams?: TickParams;

  /**
   * @generated from field: int64 current_tick = 6;
   */
  currentTick = protoInt64.zero;

  /**
   * @generated from field: string current_tick_liquidity = 7;
   */
  currentTickLiquidity = "";

  /**
   * @generated from field: string current_sqrt_price = 8;
   */
  currentSqrtPrice = "";

  constructor(data?: PartialMessage<Pool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.liquiditypool.Pool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "denom_base", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "denom_quote", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "fee_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "tick_params", kind: "message", T: TickParams },
    { no: 6, name: "current_tick", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "current_tick_liquidity", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "current_sqrt_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Pool {
    return new Pool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Pool {
    return new Pool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Pool {
    return new Pool().fromJsonString(jsonString, options);
  }

  static equals(a: Pool | PlainMessage<Pool> | undefined, b: Pool | PlainMessage<Pool> | undefined): boolean {
    return proto3.util.equals(Pool, a, b);
  }
}

/**
 * TickParams
 * PriceRatio^(Tick - BaseOffSet)
 *
 * @generated from message sunrise.liquiditypool.TickParams
 */
export class TickParams extends Message<TickParams> {
  /**
   * Basically 1.0001
   *
   * @generated from field: string price_ratio = 1;
   */
  priceRatio = "";

  /**
   * basically 0 and (-1,0]. In the 1:1 stable pair, -0.5 would work
   *
   * @generated from field: string base_offset = 2;
   */
  baseOffset = "";

  constructor(data?: PartialMessage<TickParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.liquiditypool.TickParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "price_ratio", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "base_offset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TickParams {
    return new TickParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TickParams {
    return new TickParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TickParams {
    return new TickParams().fromJsonString(jsonString, options);
  }

  static equals(a: TickParams | PlainMessage<TickParams> | undefined, b: TickParams | PlainMessage<TickParams> | undefined): boolean {
    return proto3.util.equals(TickParams, a, b);
  }
}

