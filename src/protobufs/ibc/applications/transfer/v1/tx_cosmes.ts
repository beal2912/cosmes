// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file ibc/applications/transfer/v1/tx.proto (package ibc.applications.transfer.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgTransfer, MsgTransferResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "ibc.applications.transfer.v1.Msg";

/**
 * Transfer defines a rpc handler method for MsgTransfer.
 *
 * @generated from rpc ibc.applications.transfer.v1.Msg.Transfer
 */
export const MsgTransferService = {
  typeName: TYPE_NAME,
  method: "Transfer",
  Request: MsgTransfer,
  Response: MsgTransferResponse,
} as const;

/**
 * UpdateParams defines a rpc handler for MsgUpdateParams.
 *
 * @generated from rpc ibc.applications.transfer.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

