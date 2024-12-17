// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ibc/lightclients/wasm/v1/genesis.proto (package ibc.lightclients.wasm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck


import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * GenesisState defines 08-wasm's keeper genesis state
 *
 * @generated from message ibc.lightclients.wasm.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * uploaded light client wasm contracts
   *
   * @generated from field: repeated ibc.lightclients.wasm.v1.Contract contracts = 1;
   */
  contracts: Contract[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.lightclients.wasm.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "contracts", kind: "message", T: Contract, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}

/**
 * Contract stores contract code
 *
 * @generated from message ibc.lightclients.wasm.v1.Contract
 */
export class Contract extends Message<Contract> {
  /**
   * contract byte code
   *
   * @generated from field: bytes code_bytes = 1;
   */
  codeBytes = new Uint8Array(0);

  constructor(data?: PartialMessage<Contract>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.lightclients.wasm.v1.Contract";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Contract {
    return new Contract().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Contract {
    return new Contract().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Contract {
    return new Contract().fromJsonString(jsonString, options);
  }

  static equals(a: Contract | PlainMessage<Contract> | undefined, b: Contract | PlainMessage<Contract> | undefined): boolean {
    return proto3.util.equals(Contract, a, b);
  }
}

