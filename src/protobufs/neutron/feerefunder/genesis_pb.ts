// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file neutron/feerefunder/genesis.proto (package neutron.feerefunder, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Fee, PacketID } from "./fee_pb.js";

/**
 * GenesisState defines the fee module's genesis state.
 *
 * @generated from message neutron.feerefunder.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * @generated from field: neutron.feerefunder.Params params = 1;
   */
  params?: Params;

  /**
   * this line is used by starport scaffolding # genesis/proto/state
   *
   * @generated from field: repeated neutron.feerefunder.FeeInfo fee_infos = 2;
   */
  feeInfos: FeeInfo[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.feerefunder.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "fee_infos", kind: "message", T: FeeInfo, repeated: true },
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
 * @generated from message neutron.feerefunder.FeeInfo
 */
export class FeeInfo extends Message<FeeInfo> {
  /**
   * @generated from field: string payer = 1;
   */
  payer = "";

  /**
   * @generated from field: neutron.feerefunder.PacketID packet_id = 2;
   */
  packetId?: PacketID;

  /**
   * @generated from field: neutron.feerefunder.Fee fee = 3;
   */
  fee?: Fee;

  constructor(data?: PartialMessage<FeeInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "neutron.feerefunder.FeeInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "payer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "packet_id", kind: "message", T: PacketID },
    { no: 3, name: "fee", kind: "message", T: Fee },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeeInfo {
    return new FeeInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeeInfo {
    return new FeeInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeeInfo {
    return new FeeInfo().fromJsonString(jsonString, options);
  }

  static equals(a: FeeInfo | PlainMessage<FeeInfo> | undefined, b: FeeInfo | PlainMessage<FeeInfo> | undefined): boolean {
    return proto3.util.equals(FeeInfo, a, b);
  }
}

