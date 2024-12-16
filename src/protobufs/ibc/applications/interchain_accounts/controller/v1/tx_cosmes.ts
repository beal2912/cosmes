// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file ibc/applications/interchain_accounts/controller/v1/tx.proto (package ibc.applications.interchain_accounts.controller.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgRegisterInterchainAccount, MsgRegisterInterchainAccountResponse, MsgSendTx, MsgSendTxResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "ibc.applications.interchain_accounts.controller.v1.Msg";

/**
 * RegisterInterchainAccount defines a rpc handler for MsgRegisterInterchainAccount.
 *
 * @generated from rpc ibc.applications.interchain_accounts.controller.v1.Msg.RegisterInterchainAccount
 */
export const MsgRegisterInterchainAccountService = {
  typeName: TYPE_NAME,
  method: "RegisterInterchainAccount",
  Request: MsgRegisterInterchainAccount,
  Response: MsgRegisterInterchainAccountResponse,
} as const;

/**
 * SendTx defines a rpc handler for MsgSendTx.
 *
 * @generated from rpc ibc.applications.interchain_accounts.controller.v1.Msg.SendTx
 */
export const MsgSendTxService = {
  typeName: TYPE_NAME,
  method: "SendTx",
  Request: MsgSendTx,
  Response: MsgSendTxResponse,
} as const;

/**
 * UpdateParams defines a rpc handler for MsgUpdateParams.
 *
 * @generated from rpc ibc.applications.interchain_accounts.controller.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

