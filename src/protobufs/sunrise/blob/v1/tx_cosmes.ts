// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file sunrise/blob/v1/tx.proto (package sunrise.blob.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgPayForBlobs, MsgPayForBlobsResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "sunrise.blob.v1.Msg";

/**
 * UpdateParams defines a (governance) operation for updating the module
 * parameters. The authority defaults to the x/gov module account.
 *
 * @generated from rpc sunrise.blob.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

/**
 * @generated from rpc sunrise.blob.v1.Msg.PayForBlobs
 */
export const MsgPayForBlobsService = {
  typeName: TYPE_NAME,
  method: "PayForBlobs",
  Request: MsgPayForBlobs,
  Response: MsgPayForBlobsResponse,
} as const;

