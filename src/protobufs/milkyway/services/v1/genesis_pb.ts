// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file milkyway/services/v1/genesis.proto (package milkyway.services.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Service, ServiceParams } from "./models_pb.js";

/**
 * GenesisState defines the services module's genesis state.
 *
 * @generated from message milkyway.services.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * Params defines the parameters of the module.
   *
   * @generated from field: milkyway.services.v1.Params params = 1;
   */
  params?: Params;

  /**
   * Services defines the list of services.
   *
   * @generated from field: repeated milkyway.services.v1.Service services = 2;
   */
  services: Service[] = [];

  /**
   * NextServiceID defines the ID that will be assigned to the
   * next service that gets created.
   *
   * @generated from field: uint32 next_service_id = 3;
   */
  nextServiceId = 0;

  /**
   * ServicesParams defines the list of service parameters.
   *
   * @generated from field: repeated milkyway.services.v1.ServiceParamsRecord services_params = 4;
   */
  servicesParams: ServiceParamsRecord[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "milkyway.services.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "services", kind: "message", T: Service, repeated: true },
    { no: 3, name: "next_service_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "services_params", kind: "message", T: ServiceParamsRecord, repeated: true },
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
 * ServiceParamsRecord represents the parameters that have been set for
 * a specific service.
 *
 * @generated from message milkyway.services.v1.ServiceParamsRecord
 */
export class ServiceParamsRecord extends Message<ServiceParamsRecord> {
  /**
   * ServiceID represents the ID of the service to which the parameters
   * should be set.
   *
   * @generated from field: uint32 service_id = 1;
   */
  serviceId = 0;

  /**
   * Params represents the parameters that should be set to the
   * service.
   *
   * @generated from field: milkyway.services.v1.ServiceParams params = 2;
   */
  params?: ServiceParams;

  constructor(data?: PartialMessage<ServiceParamsRecord>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "milkyway.services.v1.ServiceParamsRecord";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "service_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "params", kind: "message", T: ServiceParams },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServiceParamsRecord {
    return new ServiceParamsRecord().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServiceParamsRecord {
    return new ServiceParamsRecord().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServiceParamsRecord {
    return new ServiceParamsRecord().fromJsonString(jsonString, options);
  }

  static equals(a: ServiceParamsRecord | PlainMessage<ServiceParamsRecord> | undefined, b: ServiceParamsRecord | PlainMessage<ServiceParamsRecord> | undefined): boolean {
    return proto3.util.equals(ServiceParamsRecord, a, b);
  }
}

