// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/tokenfactory/v1beta1/events.proto (package injective.tokenfactory.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { Metadata } from "../../../cosmos/bank/v1beta1/bank_pb.js";

/**
 * @generated from message injective.tokenfactory.v1beta1.EventCreateDenom
 */
export class EventCreateDenom extends Message<EventCreateDenom> {
  /**
   * @generated from field: string account = 1;
   */
  account = "";

  /**
   * @generated from field: string denom = 2;
   */
  denom = "";

  constructor(data?: PartialMessage<EventCreateDenom>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.tokenfactory.v1beta1.EventCreateDenom";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventCreateDenom {
    return new EventCreateDenom().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventCreateDenom {
    return new EventCreateDenom().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventCreateDenom {
    return new EventCreateDenom().fromJsonString(jsonString, options);
  }

  static equals(a: EventCreateDenom | PlainMessage<EventCreateDenom> | undefined, b: EventCreateDenom | PlainMessage<EventCreateDenom> | undefined): boolean {
    return proto3.util.equals(EventCreateDenom, a, b);
  }
}

/**
 * @generated from message injective.tokenfactory.v1beta1.EventMint
 */
export class EventMint extends Message<EventMint> {
  /**
   * @generated from field: string minter = 1;
   */
  minter = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
   */
  amount?: Coin;

  /**
   * @generated from field: string receiver = 3;
   */
  receiver = "";

  constructor(data?: PartialMessage<EventMint>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.tokenfactory.v1beta1.EventMint";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "minter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin },
    { no: 3, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventMint {
    return new EventMint().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventMint {
    return new EventMint().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventMint {
    return new EventMint().fromJsonString(jsonString, options);
  }

  static equals(a: EventMint | PlainMessage<EventMint> | undefined, b: EventMint | PlainMessage<EventMint> | undefined): boolean {
    return proto3.util.equals(EventMint, a, b);
  }
}

/**
 * @generated from message injective.tokenfactory.v1beta1.EventBurn
 */
export class EventBurn extends Message<EventBurn> {
  /**
   * @generated from field: string burner = 1;
   */
  burner = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
   */
  amount?: Coin;

  /**
   * @generated from field: string burn_from = 3;
   */
  burnFrom = "";

  constructor(data?: PartialMessage<EventBurn>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.tokenfactory.v1beta1.EventBurn";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "burner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin },
    { no: 3, name: "burn_from", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBurn {
    return new EventBurn().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBurn {
    return new EventBurn().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBurn {
    return new EventBurn().fromJsonString(jsonString, options);
  }

  static equals(a: EventBurn | PlainMessage<EventBurn> | undefined, b: EventBurn | PlainMessage<EventBurn> | undefined): boolean {
    return proto3.util.equals(EventBurn, a, b);
  }
}

/**
 * @generated from message injective.tokenfactory.v1beta1.EventChangeAdmin
 */
export class EventChangeAdmin extends Message<EventChangeAdmin> {
  /**
   * @generated from field: string denom = 1;
   */
  denom = "";

  /**
   * @generated from field: string new_admin_address = 2;
   */
  newAdminAddress = "";

  constructor(data?: PartialMessage<EventChangeAdmin>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.tokenfactory.v1beta1.EventChangeAdmin";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "new_admin_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventChangeAdmin {
    return new EventChangeAdmin().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventChangeAdmin {
    return new EventChangeAdmin().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventChangeAdmin {
    return new EventChangeAdmin().fromJsonString(jsonString, options);
  }

  static equals(a: EventChangeAdmin | PlainMessage<EventChangeAdmin> | undefined, b: EventChangeAdmin | PlainMessage<EventChangeAdmin> | undefined): boolean {
    return proto3.util.equals(EventChangeAdmin, a, b);
  }
}

/**
 * @generated from message injective.tokenfactory.v1beta1.EventSetDenomMetadata
 */
export class EventSetDenomMetadata extends Message<EventSetDenomMetadata> {
  /**
   * @generated from field: string denom = 1;
   */
  denom = "";

  /**
   * @generated from field: cosmos.bank.v1beta1.Metadata metadata = 2;
   */
  metadata?: Metadata;

  constructor(data?: PartialMessage<EventSetDenomMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.tokenfactory.v1beta1.EventSetDenomMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metadata", kind: "message", T: Metadata },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetDenomMetadata {
    return new EventSetDenomMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetDenomMetadata {
    return new EventSetDenomMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetDenomMetadata {
    return new EventSetDenomMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetDenomMetadata | PlainMessage<EventSetDenomMetadata> | undefined, b: EventSetDenomMetadata | PlainMessage<EventSetDenomMetadata> | undefined): boolean {
    return proto3.util.equals(EventSetDenomMetadata, a, b);
  }
}

