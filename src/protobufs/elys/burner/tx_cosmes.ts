// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file elys/burner/tx.proto (package elys.burner, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "elys.burner.Msg";

/**
 * @generated from rpc elys.burner.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;
