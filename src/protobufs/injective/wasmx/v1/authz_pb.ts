// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/wasmx/v1/authz.proto (package injective.wasmx.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ContractGrant } from "../../../cosmwasm/wasm/v1/authz_pb.js";

/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 *
 * @generated from message injective.wasmx.v1.ContractExecutionCompatAuthorization
 */
export class ContractExecutionCompatAuthorization extends Message<ContractExecutionCompatAuthorization> {
  /**
   * Grants for contract executions
   *
   * @generated from field: repeated cosmwasm.wasm.v1.ContractGrant grants = 1;
   */
  grants: ContractGrant[] = [];

  constructor(data?: PartialMessage<ContractExecutionCompatAuthorization>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.wasmx.v1.ContractExecutionCompatAuthorization";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "grants", kind: "message", T: ContractGrant, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractExecutionCompatAuthorization {
    return new ContractExecutionCompatAuthorization().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractExecutionCompatAuthorization {
    return new ContractExecutionCompatAuthorization().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractExecutionCompatAuthorization {
    return new ContractExecutionCompatAuthorization().fromJsonString(jsonString, options);
  }

  static equals(a: ContractExecutionCompatAuthorization | PlainMessage<ContractExecutionCompatAuthorization> | undefined, b: ContractExecutionCompatAuthorization | PlainMessage<ContractExecutionCompatAuthorization> | undefined): boolean {
    return proto3.util.equals(ContractExecutionCompatAuthorization, a, b);
  }
}

