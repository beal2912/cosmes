// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file ibc/applications/interchain_accounts/host/v1/tx.proto (package ibc.applications.interchain_accounts.host.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgModuleQuerySafe, MsgModuleQuerySafeResponse } from "./tx_pb.js";

const TYPE_NAME = "ibc.applications.interchain_accounts.host.v1.Msg";

/**
 * ModuleQuerySafe defines a rpc handler for MsgModuleQuerySafe.
 *
 * @generated from rpc ibc.applications.interchain_accounts.host.v1.Msg.ModuleQuerySafe
 */
export const MsgModuleQuerySafeService = {
  typeName: TYPE_NAME,
  method: "ModuleQuerySafe",
  Request: MsgModuleQuerySafe,
  Response: MsgModuleQuerySafeResponse,
} as const;

