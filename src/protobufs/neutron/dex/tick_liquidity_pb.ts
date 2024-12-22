// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file neutron/dex/tick_liquidity.proto (package neutron.dex, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PoolReserves } from "./pool_reserves_pb.js";
import { LimitOrderTranche } from "./limit_order_tranche_pb.js";

/**
 * @generated from message neutron.dex.TickLiquidity
 */
export class TickLiquidity extends Message<TickLiquidity> {
  /**
   * @generated from oneof neutron.dex.TickLiquidity.liquidity
   */
  liquidity: {
    /**
     * @generated from field: neutron.dex.PoolReserves pool_reserves = 1;
     */
    value: PoolReserves;
    case: "poolReserves";
  } | {
    /**
     * @generated from field: neutron.dex.LimitOrderTranche limit_order_tranche = 2;
     */
    value: LimitOrderTranche;
    case: "limitOrderTranche";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<TickLiquidity>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.TickLiquidity";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_reserves", kind: "message", T: PoolReserves, oneof: "liquidity" },
    { no: 2, name: "limit_order_tranche", kind: "message", T: LimitOrderTranche, oneof: "liquidity" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TickLiquidity {
    return new TickLiquidity().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TickLiquidity {
    return new TickLiquidity().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TickLiquidity {
    return new TickLiquidity().fromJsonString(jsonString, options);
  }

  static equals(a: TickLiquidity | PlainMessage<TickLiquidity> | undefined, b: TickLiquidity | PlainMessage<TickLiquidity> | undefined): boolean {
    return proto3.util.equals(TickLiquidity, a, b);
  }
}

