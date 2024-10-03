// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/evmos/blob/main/LICENSE)

// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file evmos/erc20/v1/tx.proto (package evmos.erc20.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgConvertERC20, MsgConvertERC20Response, MsgRegisterERC20, MsgRegisterERC20Response, MsgToggleConversion, MsgToggleConversionResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "evmos.erc20.v1.Msg";

/**
 * ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
 * contract that is registered on the token mapping.
 *
 * @generated from rpc evmos.erc20.v1.Msg.ConvertERC20
 */
export const MsgConvertERC20Service = {
  typeName: TYPE_NAME,
  method: "ConvertERC20",
  Request: MsgConvertERC20,
  Response: MsgConvertERC20Response,
} as const;

/**
 * UpdateParams defines a governance operation for updating the x/erc20 module parameters.
 * The authority is hard-coded to the Cosmos SDK x/gov module account
 *
 * @generated from rpc evmos.erc20.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

/**
 * RegisterERC20 defines a governance operation for registering a token pair for the specified erc20 contract.
 * The authority is hard-coded to the Cosmos SDK x/gov module account
 *
 * @generated from rpc evmos.erc20.v1.Msg.RegisterERC20
 */
export const MsgRegisterERC20Service = {
  typeName: TYPE_NAME,
  method: "RegisterERC20",
  Request: MsgRegisterERC20,
  Response: MsgRegisterERC20Response,
} as const;

/**
 * ToggleConversion defines a governance operation for enabling/disablen a token pair conversion.
 * The authority is hard-coded to the Cosmos SDK x/gov module account
 *
 * @generated from rpc evmos.erc20.v1.Msg.ToggleConversion
 */
export const MsgToggleConversionService = {
  typeName: TYPE_NAME,
  method: "ToggleConversion",
  Request: MsgToggleConversion,
  Response: MsgToggleConversionResponse,
} as const;

