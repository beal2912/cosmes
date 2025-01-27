// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file milkyway/operators/v1/models.proto (package milkyway.operators.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * OperatorStatus defines the possible statuses of an operator
 *
 * @generated from enum milkyway.operators.v1.OperatorStatus
 */
export enum OperatorStatus {
  /**
   * OPERATOR_STATUS_UNSPECIFIED defines an unspecified status
   *
   * @generated from enum value: OPERATOR_STATUS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * OPERATOR_STATUS_ACTIVE identifies an active operator which is providing
   * services
   *
   * @generated from enum value: OPERATOR_STATUS_ACTIVE = 1;
   */
  ACTIVE = 1,

  /**
   * OPERATOR_STATUS_INACTIVATING identifies an operator that is in the process
   * of becoming inactive
   *
   * @generated from enum value: OPERATOR_STATUS_INACTIVATING = 2;
   */
  INACTIVATING = 2,

  /**
   * OPERATOR_STATUS_INACTIVE defines an inactive operator that is not providing
   * services
   *
   * @generated from enum value: OPERATOR_STATUS_INACTIVE = 3;
   */
  INACTIVE = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(OperatorStatus)
proto3.util.setEnumType(OperatorStatus, "milkyway.operators.v1.OperatorStatus", [
  { no: 0, name: "OPERATOR_STATUS_UNSPECIFIED" },
  { no: 1, name: "OPERATOR_STATUS_ACTIVE" },
  { no: 2, name: "OPERATOR_STATUS_INACTIVATING" },
  { no: 3, name: "OPERATOR_STATUS_INACTIVE" },
]);

/**
 * Operator defines the fields of an operator
 *
 * @generated from message milkyway.operators.v1.Operator
 */
export class Operator extends Message<Operator> {
  /**
   * ID is the auto-generated unique identifier for the operator
   *
   * @generated from field: uint32 id = 1;
   */
  id = 0;

  /**
   * Status is the status of the operator
   *
   * @generated from field: milkyway.operators.v1.OperatorStatus status = 2;
   */
  status = OperatorStatus.UNSPECIFIED;

  /**
   * Admin is the address of the user that can manage the operator
   *
   * @generated from field: string admin = 3;
   */
  admin = "";

  /**
   * Moniker is the identifier of the operator
   *
   * @generated from field: string moniker = 4;
   */
  moniker = "";

  /**
   * Website is the website of the operator
   *
   * @generated from field: string website = 5;
   */
  website = "";

  /**
   * PictureURL is the URL of the picture of the operator
   *
   * @generated from field: string picture_url = 6;
   */
  pictureUrl = "";

  /**
   * Address is the address of the account associated to the operator.
   * This will be used to store tokens that are delegated to this operator.
   *
   * @generated from field: string address = 7;
   */
  address = "";

  /**
   * Tokens define the delegated tokens.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin tokens = 8;
   */
  tokens: Coin[] = [];

  /**
   * DelegatorShares define the total shares issued to an operator's delegators.
   *
   * @generated from field: repeated cosmos.base.v1beta1.DecCoin delegator_shares = 9;
   */
  delegatorShares: DecCoin[] = [];

  constructor(data?: PartialMessage<Operator>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "milkyway.operators.v1.Operator";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "status", kind: "enum", T: proto3.getEnumType(OperatorStatus) },
    { no: 3, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "moniker", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "website", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "picture_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "tokens", kind: "message", T: Coin, repeated: true },
    { no: 9, name: "delegator_shares", kind: "message", T: DecCoin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Operator {
    return new Operator().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Operator {
    return new Operator().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Operator {
    return new Operator().fromJsonString(jsonString, options);
  }

  static equals(a: Operator | PlainMessage<Operator> | undefined, b: Operator | PlainMessage<Operator> | undefined): boolean {
    return proto3.util.equals(Operator, a, b);
  }
}

/**
 * OperatorParams represent the params that have been set for an individual
 * operator.
 *
 * @generated from message milkyway.operators.v1.OperatorParams
 */
export class OperatorParams extends Message<OperatorParams> {
  /**
   * CommissionRate defines the commission rate charged to delegators, as a
   * fraction.
   *
   * @generated from field: string commission_rate = 1;
   */
  commissionRate = "";

  constructor(data?: PartialMessage<OperatorParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "milkyway.operators.v1.OperatorParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "commission_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OperatorParams {
    return new OperatorParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OperatorParams {
    return new OperatorParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OperatorParams {
    return new OperatorParams().fromJsonString(jsonString, options);
  }

  static equals(a: OperatorParams | PlainMessage<OperatorParams> | undefined, b: OperatorParams | PlainMessage<OperatorParams> | undefined): boolean {
    return proto3.util.equals(OperatorParams, a, b);
  }
}

