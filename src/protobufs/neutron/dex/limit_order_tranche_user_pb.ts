// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file neutron/dex/limit_order_tranche_user.proto (package neutron.dex, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { TradePairID } from "./trade_pair_id_pb.js";
import { LimitOrderType } from "./tx_pb.js";

/**
 * @generated from message neutron.dex.LimitOrderTrancheUser
 */
export class LimitOrderTrancheUser extends Message<LimitOrderTrancheUser> {
  /**
   * @generated from field: neutron.dex.TradePairID trade_pair_id = 1;
   */
  tradePairId?: TradePairID;

  /**
   * @generated from field: int64 tick_index_taker_to_maker = 2;
   */
  tickIndexTakerToMaker = protoInt64.zero;

  /**
   * @generated from field: string tranche_key = 3;
   */
  trancheKey = "";

  /**
   * @generated from field: string address = 4;
   */
  address = "";

  /**
   * @generated from field: string shares_owned = 5;
   */
  sharesOwned = "";

  /**
   * @generated from field: string shares_withdrawn = 6;
   */
  sharesWithdrawn = "";

  /**
   * TODO: remove this in next release. It is no longer used
   *
   * @generated from field: string shares_cancelled = 7;
   */
  sharesCancelled = "";

  /**
   * @generated from field: neutron.dex.LimitOrderType order_type = 8;
   */
  orderType = LimitOrderType.GOOD_TIL_CANCELLED;

  constructor(data?: PartialMessage<LimitOrderTrancheUser>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.dex.LimitOrderTrancheUser";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "trade_pair_id", kind: "message", T: TradePairID },
    { no: 2, name: "tick_index_taker_to_maker", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "tranche_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "shares_owned", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "shares_withdrawn", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "shares_cancelled", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "order_type", kind: "enum", T: proto3.getEnumType(LimitOrderType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LimitOrderTrancheUser {
    return new LimitOrderTrancheUser().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LimitOrderTrancheUser {
    return new LimitOrderTrancheUser().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LimitOrderTrancheUser {
    return new LimitOrderTrancheUser().fromJsonString(jsonString, options);
  }

  static equals(a: LimitOrderTrancheUser | PlainMessage<LimitOrderTrancheUser> | undefined, b: LimitOrderTrancheUser | PlainMessage<LimitOrderTrancheUser> | undefined): boolean {
    return proto3.util.equals(LimitOrderTrancheUser, a, b);
  }
}

