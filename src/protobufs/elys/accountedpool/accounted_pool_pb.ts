// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/accountedpool/accounted_pool.proto (package elys.accountedpool, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
import { PoolAsset } from "../amm/pool_asset_pb.js";

/**
 * @generated from message elys.accountedpool.AccountedPool
 */
export class AccountedPool extends Message<AccountedPool> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin total_shares = 2;
   */
  totalShares?: Coin;

  /**
   * @generated from field: repeated elys.amm.PoolAsset pool_assets = 3;
   */
  poolAssets: PoolAsset[] = [];

  /**
   * @generated from field: string total_weight = 4;
   */
  totalWeight = "";

  constructor(data?: PartialMessage<AccountedPool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.accountedpool.AccountedPool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "total_shares", kind: "message", T: Coin },
    { no: 3, name: "pool_assets", kind: "message", T: PoolAsset, repeated: true },
    { no: 4, name: "total_weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountedPool {
    return new AccountedPool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountedPool {
    return new AccountedPool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountedPool {
    return new AccountedPool().fromJsonString(jsonString, options);
  }

  static equals(a: AccountedPool | PlainMessage<AccountedPool> | undefined, b: AccountedPool | PlainMessage<AccountedPool> | undefined): boolean {
    return proto3.util.equals(AccountedPool, a, b);
  }
}
