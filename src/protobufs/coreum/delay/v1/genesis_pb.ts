// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file coreum/delay/v1/genesis.proto (package coreum.delay.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * GenesisState defines the module genesis state.
 *
 * @generated from message coreum.delay.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * delayed_items is a list of delayed items.
   *
   * @generated from field: repeated coreum.delay.v1.DelayedItem delayed_items = 1;
   */
  delayedItems: DelayedItem[] = [];

  /**
   * block_items is a list of block items.
   *
   * @generated from field: repeated coreum.delay.v1.BlockItem block_items = 2;
   */
  blockItems: BlockItem[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "coreum.delay.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "delayed_items", kind: "message", T: DelayedItem, repeated: true },
    { no: 2, name: "block_items", kind: "message", T: BlockItem, repeated: true },
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
 * @generated from message coreum.delay.v1.DelayedItem
 */
export class DelayedItem extends Message<DelayedItem> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: google.protobuf.Timestamp execution_time = 2;
   */
  executionTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Any data = 3;
   */
  data?: Any;

  constructor(data?: PartialMessage<DelayedItem>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "coreum.delay.v1.DelayedItem";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "execution_time", kind: "message", T: Timestamp },
    { no: 3, name: "data", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DelayedItem {
    return new DelayedItem().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DelayedItem {
    return new DelayedItem().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DelayedItem {
    return new DelayedItem().fromJsonString(jsonString, options);
  }

  static equals(a: DelayedItem | PlainMessage<DelayedItem> | undefined, b: DelayedItem | PlainMessage<DelayedItem> | undefined): boolean {
    return proto3.util.equals(DelayedItem, a, b);
  }
}

/**
 * @generated from message coreum.delay.v1.BlockItem
 */
export class BlockItem extends Message<BlockItem> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: uint64 height = 2;
   */
  height = protoInt64.zero;

  /**
   * @generated from field: google.protobuf.Any data = 3;
   */
  data?: Any;

  constructor(data?: PartialMessage<BlockItem>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "coreum.delay.v1.BlockItem";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "data", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockItem {
    return new BlockItem().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockItem {
    return new BlockItem().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockItem {
    return new BlockItem().fromJsonString(jsonString, options);
  }

  static equals(a: BlockItem | PlainMessage<BlockItem> | undefined, b: BlockItem | PlainMessage<BlockItem> | undefined): boolean {
    return proto3.util.equals(BlockItem, a, b);
  }
}

