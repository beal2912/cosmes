// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file milkyway/services/v1/messages.proto (package milkyway.services.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgAccreditService, MsgAccreditServiceResponse, MsgActivateService, MsgActivateServiceResponse, MsgCreateService, MsgCreateServiceResponse, MsgDeactivateService, MsgDeactivateServiceResponse, MsgDeleteService, MsgDeleteServiceResponse, MsgRevokeServiceAccreditation, MsgRevokeServiceAccreditationResponse, MsgSetServiceParams, MsgSetServiceParamsResponse, MsgTransferServiceOwnership, MsgTransferServiceOwnershipResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdateService, MsgUpdateServiceResponse } from "./messages_pb.js";

const TYPE_NAME = "milkyway.services.v1.Msg";

/**
 * CreateService defines the operation for registering a new service.
 *
 * @generated from rpc milkyway.services.v1.Msg.CreateService
 */
export const MsgCreateServiceService = {
  typeName: TYPE_NAME,
  method: "CreateService",
  Request: MsgCreateService,
  Response: MsgCreateServiceResponse,
} as const;

/**
 * UpdateService defines the operation for updating an existing service.
 *
 * @generated from rpc milkyway.services.v1.Msg.UpdateService
 */
export const MsgUpdateServiceService = {
  typeName: TYPE_NAME,
  method: "UpdateService",
  Request: MsgUpdateService,
  Response: MsgUpdateServiceResponse,
} as const;

/**
 * ActivateService defines the operation for activating an existing
 * service.
 *
 * @generated from rpc milkyway.services.v1.Msg.ActivateService
 */
export const MsgActivateServiceService = {
  typeName: TYPE_NAME,
  method: "ActivateService",
  Request: MsgActivateService,
  Response: MsgActivateServiceResponse,
} as const;

/**
 * DeactivateService defines the operation for deactivating an existing
 * service.
 *
 * @generated from rpc milkyway.services.v1.Msg.DeactivateService
 */
export const MsgDeactivateServiceService = {
  typeName: TYPE_NAME,
  method: "DeactivateService",
  Request: MsgDeactivateService,
  Response: MsgDeactivateServiceResponse,
} as const;

/**
 * DeleteService defines the operation for deleting an existing service
 * that has been deactivated.
 *
 * @generated from rpc milkyway.services.v1.Msg.DeleteService
 */
export const MsgDeleteServiceService = {
  typeName: TYPE_NAME,
  method: "DeleteService",
  Request: MsgDeleteService,
  Response: MsgDeleteServiceResponse,
} as const;

/**
 * TransferServiceOwnership defines the operation for transferring the
 * ownership of a service to another account.
 *
 * @generated from rpc milkyway.services.v1.Msg.TransferServiceOwnership
 */
export const MsgTransferServiceOwnershipService = {
  typeName: TYPE_NAME,
  method: "TransferServiceOwnership",
  Request: MsgTransferServiceOwnership,
  Response: MsgTransferServiceOwnershipResponse,
} as const;

/**
 * SetServiceParams defines the operation for setting a service's
 * parameters.
 *
 * @generated from rpc milkyway.services.v1.Msg.SetServiceParams
 */
export const MsgSetServiceParamsService = {
  typeName: TYPE_NAME,
  method: "SetServiceParams",
  Request: MsgSetServiceParams,
  Response: MsgSetServiceParamsResponse,
} as const;

/**
 * UpdateParams defines a (governance) operation for updating the module
 * parameters.
 * The authority defaults to the x/gov module account.
 *
 * @generated from rpc milkyway.services.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

/**
 * AccreditService defines a (governance) operation for accrediting a service.
 * Since: v1.4.0
 *
 * @generated from rpc milkyway.services.v1.Msg.AccreditService
 */
export const MsgAccreditServiceService = {
  typeName: TYPE_NAME,
  method: "AccreditService",
  Request: MsgAccreditService,
  Response: MsgAccreditServiceResponse,
} as const;

/**
 * RevokeServiceAccreditation defines a (governance) operation for revoking a
 * service's accreditation. Since: v1.4.0
 *
 * @generated from rpc milkyway.services.v1.Msg.RevokeServiceAccreditation
 */
export const MsgRevokeServiceAccreditationService = {
  typeName: TYPE_NAME,
  method: "RevokeServiceAccreditation",
  Request: MsgRevokeServiceAccreditation,
  Response: MsgRevokeServiceAccreditationResponse,
} as const;

