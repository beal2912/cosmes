// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file kava/liquid/v1beta1/tx.proto (package kava.liquid.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgBurnDerivative, MsgBurnDerivativeResponse, MsgMintDerivative, MsgMintDerivativeResponse } from "./tx_pb.js";

const TYPE_NAME = "kava.liquid.v1beta1.Msg";

/**
 * MintDerivative defines a method for converting a delegation into staking deriviatives.
 *
 * @generated from rpc kava.liquid.v1beta1.Msg.MintDerivative
 */
export const MsgMintDerivativeService = {
  typeName: TYPE_NAME,
  method: "MintDerivative",
  Request: MsgMintDerivative,
  Response: MsgMintDerivativeResponse,
} as const;

/**
 * BurnDerivative defines a method for converting staking deriviatives into a delegation.
 *
 * @generated from rpc kava.liquid.v1beta1.Msg.BurnDerivative
 */
export const MsgBurnDerivativeService = {
  typeName: TYPE_NAME,
  method: "BurnDerivative",
  Request: MsgBurnDerivative,
  Response: MsgBurnDerivativeResponse,
} as const;

