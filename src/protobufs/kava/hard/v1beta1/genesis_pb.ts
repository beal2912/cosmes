// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/hard/v1beta1/genesis.proto (package kava.hard.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Borrow, Deposit, Params } from "./hard_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * GenesisState defines the hard module's genesis state.
 *
 * @generated from message kava.hard.v1beta1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * @generated from field: kava.hard.v1beta1.Params params = 1;
   */
  params?: Params;

  /**
   * @generated from field: repeated kava.hard.v1beta1.GenesisAccumulationTime previous_accumulation_times = 2;
   */
  previousAccumulationTimes: GenesisAccumulationTime[] = [];

  /**
   * @generated from field: repeated kava.hard.v1beta1.Deposit deposits = 3;
   */
  deposits: Deposit[] = [];

  /**
   * @generated from field: repeated kava.hard.v1beta1.Borrow borrows = 4;
   */
  borrows: Borrow[] = [];

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin total_supplied = 5;
   */
  totalSupplied: Coin[] = [];

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin total_borrowed = 6;
   */
  totalBorrowed: Coin[] = [];

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin total_reserves = 7;
   */
  totalReserves: Coin[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.hard.v1beta1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "previous_accumulation_times", kind: "message", T: GenesisAccumulationTime, repeated: true },
    { no: 3, name: "deposits", kind: "message", T: Deposit, repeated: true },
    { no: 4, name: "borrows", kind: "message", T: Borrow, repeated: true },
    { no: 5, name: "total_supplied", kind: "message", T: Coin, repeated: true },
    { no: 6, name: "total_borrowed", kind: "message", T: Coin, repeated: true },
    { no: 7, name: "total_reserves", kind: "message", T: Coin, repeated: true },
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
 * GenesisAccumulationTime stores the previous distribution time and its corresponding denom.
 *
 * @generated from message kava.hard.v1beta1.GenesisAccumulationTime
 */
export class GenesisAccumulationTime extends Message<GenesisAccumulationTime> {
  /**
   * @generated from field: string collateral_type = 1;
   */
  collateralType = "";

  /**
   * @generated from field: google.protobuf.Timestamp previous_accumulation_time = 2;
   */
  previousAccumulationTime?: Timestamp;

  /**
   * @generated from field: string supply_interest_factor = 3;
   */
  supplyInterestFactor = "";

  /**
   * @generated from field: string borrow_interest_factor = 4;
   */
  borrowInterestFactor = "";

  constructor(data?: PartialMessage<GenesisAccumulationTime>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.hard.v1beta1.GenesisAccumulationTime";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collateral_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "previous_accumulation_time", kind: "message", T: Timestamp },
    { no: 3, name: "supply_interest_factor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "borrow_interest_factor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisAccumulationTime {
    return new GenesisAccumulationTime().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisAccumulationTime {
    return new GenesisAccumulationTime().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisAccumulationTime {
    return new GenesisAccumulationTime().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisAccumulationTime | PlainMessage<GenesisAccumulationTime> | undefined, b: GenesisAccumulationTime | PlainMessage<GenesisAccumulationTime> | undefined): boolean {
    return proto3.util.equals(GenesisAccumulationTime, a, b);
  }
}

