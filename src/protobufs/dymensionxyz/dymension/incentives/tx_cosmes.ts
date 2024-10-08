// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file dymensionxyz/dymension/incentives/tx.proto (package dymensionxyz.dymension.incentives, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgAddToGauge, MsgAddToGaugeResponse, MsgCreateGauge, MsgCreateGaugeResponse } from "./tx_pb.js";

const TYPE_NAME = "dymensionxyz.dymension.incentives.Msg";

/**
 * @generated from rpc dymensionxyz.dymension.incentives.Msg.CreateGauge
 */
export const MsgCreateGaugeService = {
  typeName: TYPE_NAME,
  method: "CreateGauge",
  Request: MsgCreateGauge,
  Response: MsgCreateGaugeResponse,
} as const;

/**
 * @generated from rpc dymensionxyz.dymension.incentives.Msg.AddToGauge
 */
export const MsgAddToGaugeService = {
  typeName: TYPE_NAME,
  method: "AddToGauge",
  Request: MsgAddToGauge,
  Response: MsgAddToGaugeResponse,
} as const;

