// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file market/params.proto (package pendulumlabs.market.market, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Params defines the parameters for the module.
 *
 * @generated from message pendulumlabs.market.market.Params
 */
export class Params extends Message<Params> {
  /**
   * leader earnings rates
   * 1,2,3 Comma separated, no space
   *
   * @generated from field: string earn_rates = 1;
   */
  earnRates = "";

  /**
   * pool burning rate
   *
   * @generated from field: string burn_rate = 2;
   */
  burnRate = "";

  /**
   * burn coin
   *
   * @generated from field: string burn_coin = 3;
   */
  burnCoin = "";

  /**
   * market_fee (parameter / 10000), 9999 representing as 99.99%
   *
   * @generated from field: string market_fee = 4;
   */
  marketFee = "";

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pendulumlabs.market.market.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "earn_rates", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "burn_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "burn_coin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "market_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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

