// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/evmos/blob/main/LICENSE)

// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file evmos/inflation/v1/tx.proto (package evmos.inflation.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "evmos.inflation.v1.Msg";

/**
 * UpdateParams defined a governance operation for updating the x/inflation module parameters.
 * The authority is hard-coded to the Cosmos SDK x/gov module account
 *
 * @generated from rpc evmos.inflation.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

