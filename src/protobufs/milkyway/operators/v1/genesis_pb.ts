// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file milkyway/operators/v1/genesis.proto (package milkyway.operators.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Operator, OperatorParams } from "./models_pb.js";

/**
 * GenesisState defines the operators module's genesis state.
 *
 * @generated from message milkyway.operators.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * Params defines the parameters of the module.
   *
   * @generated from field: milkyway.operators.v1.Params params = 1;
   */
  params?: Params;

  /**
   * NextOperatorID defines the ID that will be assigned to the
   * next operator that gets created.
   *
   * @generated from field: uint32 next_operator_id = 2;
   */
  nextOperatorId = 0;

  /**
   * Operators defines the list of operators.
   *
   * @generated from field: repeated milkyway.operators.v1.Operator operators = 3;
   */
  operators: Operator[] = [];

  /**
   * UnbondingOperators defines the list of operators that are currently being
   * unbonded.
   *
   * @generated from field: repeated milkyway.operators.v1.UnbondingOperator unbonding_operators = 4;
   */
  unbondingOperators: UnbondingOperator[] = [];

  /**
   * OperatorsParams defines the list of operators params.
   *
   * @generated from field: repeated milkyway.operators.v1.OperatorParamsRecord operators_params = 5;
   */
  operatorsParams: OperatorParamsRecord[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "milkyway.operators.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "next_operator_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "operators", kind: "message", T: Operator, repeated: true },
    { no: 4, name: "unbonding_operators", kind: "message", T: UnbondingOperator, repeated: true },
    { no: 5, name: "operators_params", kind: "message", T: OperatorParamsRecord, repeated: true },
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
 * UnbondingOperator contains the data about an operator that is currently being
 * unbonded.
 *
 * @generated from message milkyway.operators.v1.UnbondingOperator
 */
export class UnbondingOperator extends Message<UnbondingOperator> {
  /**
   * OperatorID is the ID of the operator that is being unbonded.
   *
   * @generated from field: uint32 operator_id = 1;
   */
  operatorId = 0;

  /**
   * UnbondingCompletionTime is the time at which the unbonding of the operator
   * will be completed
   *
   * @generated from field: google.protobuf.Timestamp unbonding_completion_time = 2;
   */
  unbondingCompletionTime?: Timestamp;

  constructor(data?: PartialMessage<UnbondingOperator>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "milkyway.operators.v1.UnbondingOperator";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "operator_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "unbonding_completion_time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnbondingOperator {
    return new UnbondingOperator().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnbondingOperator {
    return new UnbondingOperator().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnbondingOperator {
    return new UnbondingOperator().fromJsonString(jsonString, options);
  }

  static equals(a: UnbondingOperator | PlainMessage<UnbondingOperator> | undefined, b: UnbondingOperator | PlainMessage<UnbondingOperator> | undefined): boolean {
    return proto3.util.equals(UnbondingOperator, a, b);
  }
}

/**
 * OperatorParamsRecord represents the params that have been set for an
 * individual operator.
 *
 * @generated from message milkyway.operators.v1.OperatorParamsRecord
 */
export class OperatorParamsRecord extends Message<OperatorParamsRecord> {
  /**
   * OperatorID is the ID of the operator.
   *
   * @generated from field: uint32 operator_id = 1;
   */
  operatorId = 0;

  /**
   * Params defines the parameters for the operators module.
   *
   * @generated from field: milkyway.operators.v1.OperatorParams params = 2;
   */
  params?: OperatorParams;

  constructor(data?: PartialMessage<OperatorParamsRecord>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "milkyway.operators.v1.OperatorParamsRecord";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "operator_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "params", kind: "message", T: OperatorParams },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OperatorParamsRecord {
    return new OperatorParamsRecord().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OperatorParamsRecord {
    return new OperatorParamsRecord().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OperatorParamsRecord {
    return new OperatorParamsRecord().fromJsonString(jsonString, options);
  }

  static equals(a: OperatorParamsRecord | PlainMessage<OperatorParamsRecord> | undefined, b: OperatorParamsRecord | PlainMessage<OperatorParamsRecord> | undefined): boolean {
    return proto3.util.equals(OperatorParamsRecord, a, b);
  }
}

