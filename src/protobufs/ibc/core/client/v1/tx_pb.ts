// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ibc/core/client/v1/tx.proto (package ibc.core.client.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";

/**
 * MsgCreateClient defines a message to create an IBC client
 *
 * @generated from message ibc.core.client.v1.MsgCreateClient
 */
export class MsgCreateClient extends Message<MsgCreateClient> {
  /**
   * light client state
   *
   * @generated from field: google.protobuf.Any client_state = 1;
   */
  clientState?: Any;

  /**
   * consensus state associated with the client that corresponds to a given
   * height.
   *
   * @generated from field: google.protobuf.Any consensus_state = 2;
   */
  consensusState?: Any;

  /**
   * signer address
   *
   * @generated from field: string signer = 3;
   */
  signer = "";

  constructor(data?: PartialMessage<MsgCreateClient>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.core.client.v1.MsgCreateClient";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "client_state", kind: "message", T: Any },
    { no: 2, name: "consensus_state", kind: "message", T: Any },
    { no: 3, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateClient {
    return new MsgCreateClient().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateClient {
    return new MsgCreateClient().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateClient {
    return new MsgCreateClient().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateClient | PlainMessage<MsgCreateClient> | undefined, b: MsgCreateClient | PlainMessage<MsgCreateClient> | undefined): boolean {
    return proto3.util.equals(MsgCreateClient, a, b);
  }
}

/**
 * MsgCreateClientResponse defines the Msg/CreateClient response type.
 *
 * @generated from message ibc.core.client.v1.MsgCreateClientResponse
 */
export class MsgCreateClientResponse extends Message<MsgCreateClientResponse> {
  constructor(data?: PartialMessage<MsgCreateClientResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.core.client.v1.MsgCreateClientResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateClientResponse {
    return new MsgCreateClientResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateClientResponse {
    return new MsgCreateClientResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateClientResponse {
    return new MsgCreateClientResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateClientResponse | PlainMessage<MsgCreateClientResponse> | undefined, b: MsgCreateClientResponse | PlainMessage<MsgCreateClientResponse> | undefined): boolean {
    return proto3.util.equals(MsgCreateClientResponse, a, b);
  }
}

/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given client message.
 *
 * @generated from message ibc.core.client.v1.MsgUpdateClient
 */
export class MsgUpdateClient extends Message<MsgUpdateClient> {
  /**
   * client unique identifier
   *
   * @generated from field: string client_id = 1;
   */
  clientId = "";

  /**
   * client message to update the light client
   *
   * @generated from field: google.protobuf.Any client_message = 2;
   */
  clientMessage?: Any;

  /**
   * signer address
   *
   * @generated from field: string signer = 3;
   */
  signer = "";

  constructor(data?: PartialMessage<MsgUpdateClient>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.core.client.v1.MsgUpdateClient";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_message", kind: "message", T: Any },
    { no: 3, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateClient {
    return new MsgUpdateClient().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateClient {
    return new MsgUpdateClient().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateClient {
    return new MsgUpdateClient().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateClient | PlainMessage<MsgUpdateClient> | undefined, b: MsgUpdateClient | PlainMessage<MsgUpdateClient> | undefined): boolean {
    return proto3.util.equals(MsgUpdateClient, a, b);
  }
}

/**
 * MsgUpdateClientResponse defines the Msg/UpdateClient response type.
 *
 * @generated from message ibc.core.client.v1.MsgUpdateClientResponse
 */
export class MsgUpdateClientResponse extends Message<MsgUpdateClientResponse> {
  constructor(data?: PartialMessage<MsgUpdateClientResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.core.client.v1.MsgUpdateClientResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateClientResponse {
    return new MsgUpdateClientResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateClientResponse {
    return new MsgUpdateClientResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateClientResponse {
    return new MsgUpdateClientResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateClientResponse | PlainMessage<MsgUpdateClientResponse> | undefined, b: MsgUpdateClientResponse | PlainMessage<MsgUpdateClientResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateClientResponse, a, b);
  }
}

/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 *
 * @generated from message ibc.core.client.v1.MsgUpgradeClient
 */
export class MsgUpgradeClient extends Message<MsgUpgradeClient> {
  /**
   * client unique identifier
   *
   * @generated from field: string client_id = 1;
   */
  clientId = "";

  /**
   * upgraded client state
   *
   * @generated from field: google.protobuf.Any client_state = 2;
   */
  clientState?: Any;

  /**
   * upgraded consensus state, only contains enough information to serve as a
   * basis of trust in update logic
   *
   * @generated from field: google.protobuf.Any consensus_state = 3;
   */
  consensusState?: Any;

  /**
   * proof that old chain committed to new client
   *
   * @generated from field: bytes proof_upgrade_client = 4;
   */
  proofUpgradeClient = new Uint8Array(0);

  /**
   * proof that old chain committed to new consensus state
   *
   * @generated from field: bytes proof_upgrade_consensus_state = 5;
   */
  proofUpgradeConsensusState = new Uint8Array(0);

  /**
   * signer address
   *
   * @generated from field: string signer = 6;
   */
  signer = "";

  constructor(data?: PartialMessage<MsgUpgradeClient>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.core.client.v1.MsgUpgradeClient";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_state", kind: "message", T: Any },
    { no: 3, name: "consensus_state", kind: "message", T: Any },
    { no: 4, name: "proof_upgrade_client", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "proof_upgrade_consensus_state", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpgradeClient {
    return new MsgUpgradeClient().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpgradeClient {
    return new MsgUpgradeClient().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpgradeClient {
    return new MsgUpgradeClient().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpgradeClient | PlainMessage<MsgUpgradeClient> | undefined, b: MsgUpgradeClient | PlainMessage<MsgUpgradeClient> | undefined): boolean {
    return proto3.util.equals(MsgUpgradeClient, a, b);
  }
}

/**
 * MsgUpgradeClientResponse defines the Msg/UpgradeClient response type.
 *
 * @generated from message ibc.core.client.v1.MsgUpgradeClientResponse
 */
export class MsgUpgradeClientResponse extends Message<MsgUpgradeClientResponse> {
  constructor(data?: PartialMessage<MsgUpgradeClientResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.core.client.v1.MsgUpgradeClientResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpgradeClientResponse {
    return new MsgUpgradeClientResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpgradeClientResponse {
    return new MsgUpgradeClientResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpgradeClientResponse {
    return new MsgUpgradeClientResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpgradeClientResponse | PlainMessage<MsgUpgradeClientResponse> | undefined, b: MsgUpgradeClientResponse | PlainMessage<MsgUpgradeClientResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpgradeClientResponse, a, b);
  }
}

/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * Warning: DEPRECATED
 *
 * @generated from message ibc.core.client.v1.MsgSubmitMisbehaviour
 */
export class MsgSubmitMisbehaviour extends Message<MsgSubmitMisbehaviour> {
  /**
   * client unique identifier
   *
   * @generated from field: string client_id = 1 [deprecated = true];
   * @deprecated
   */
  clientId = "";

  /**
   * misbehaviour used for freezing the light client
   *
   * @generated from field: google.protobuf.Any misbehaviour = 2 [deprecated = true];
   * @deprecated
   */
  misbehaviour?: Any;

  /**
   * signer address
   *
   * @generated from field: string signer = 3 [deprecated = true];
   * @deprecated
   */
  signer = "";

  constructor(data?: PartialMessage<MsgSubmitMisbehaviour>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.core.client.v1.MsgSubmitMisbehaviour";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "misbehaviour", kind: "message", T: Any },
    { no: 3, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitMisbehaviour {
    return new MsgSubmitMisbehaviour().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitMisbehaviour {
    return new MsgSubmitMisbehaviour().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitMisbehaviour {
    return new MsgSubmitMisbehaviour().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSubmitMisbehaviour | PlainMessage<MsgSubmitMisbehaviour> | undefined, b: MsgSubmitMisbehaviour | PlainMessage<MsgSubmitMisbehaviour> | undefined): boolean {
    return proto3.util.equals(MsgSubmitMisbehaviour, a, b);
  }
}

/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 *
 * @generated from message ibc.core.client.v1.MsgSubmitMisbehaviourResponse
 */
export class MsgSubmitMisbehaviourResponse extends Message<MsgSubmitMisbehaviourResponse> {
  constructor(data?: PartialMessage<MsgSubmitMisbehaviourResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.core.client.v1.MsgSubmitMisbehaviourResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitMisbehaviourResponse {
    return new MsgSubmitMisbehaviourResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitMisbehaviourResponse {
    return new MsgSubmitMisbehaviourResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitMisbehaviourResponse {
    return new MsgSubmitMisbehaviourResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSubmitMisbehaviourResponse | PlainMessage<MsgSubmitMisbehaviourResponse> | undefined, b: MsgSubmitMisbehaviourResponse | PlainMessage<MsgSubmitMisbehaviourResponse> | undefined): boolean {
    return proto3.util.equals(MsgSubmitMisbehaviourResponse, a, b);
  }
}

