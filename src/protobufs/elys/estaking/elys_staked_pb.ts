// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/estaking/elys_staked.proto (package elys.estaking, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Elys staked amount is tracked because EdenBoost has to be burnt when unstake
 * ELYS event happens, and there's no way to track staked amount change from
 * staking hook and this struct is added.
 *
 * @generated from message elys.estaking.ElysStaked
 */
export class ElysStaked extends Message<ElysStaked> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * @generated from field: string amount = 2;
   */
  amount = "";

  constructor(data?: PartialMessage<ElysStaked>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.estaking.ElysStaked";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ElysStaked {
    return new ElysStaked().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ElysStaked {
    return new ElysStaked().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ElysStaked {
    return new ElysStaked().fromJsonString(jsonString, options);
  }

  static equals(a: ElysStaked | PlainMessage<ElysStaked> | undefined, b: ElysStaked | PlainMessage<ElysStaked> | undefined): boolean {
    return proto3.util.equals(ElysStaked, a, b);
  }
}

