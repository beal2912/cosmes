// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file elys/amm/tx.proto (package elys.amm, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgCreatePool, MsgCreatePoolResponse, MsgExitPool, MsgExitPoolResponse, MsgFeedMultipleExternalLiquidity, MsgFeedMultipleExternalLiquidityResponse, MsgJoinPool, MsgJoinPoolResponse, MsgSwapByDenom, MsgSwapByDenomResponse, MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdatePoolParams, MsgUpdatePoolParamsResponse, MsgUpFrontSwapExactAmountIn, MsgUpFrontSwapExactAmountInResponse } from "./tx_pb.js";

const TYPE_NAME = "elys.amm.Msg";

/**
 * @generated from rpc elys.amm.Msg.CreatePool
 */
export const MsgCreatePoolService = {
  typeName: TYPE_NAME,
  method: "CreatePool",
  Request: MsgCreatePool,
  Response: MsgCreatePoolResponse,
} as const;

/**
 * @generated from rpc elys.amm.Msg.JoinPool
 */
export const MsgJoinPoolService = {
  typeName: TYPE_NAME,
  method: "JoinPool",
  Request: MsgJoinPool,
  Response: MsgJoinPoolResponse,
} as const;

/**
 * @generated from rpc elys.amm.Msg.ExitPool
 */
export const MsgExitPoolService = {
  typeName: TYPE_NAME,
  method: "ExitPool",
  Request: MsgExitPool,
  Response: MsgExitPoolResponse,
} as const;

/**
 * @generated from rpc elys.amm.Msg.UpFrontSwapExactAmountIn
 */
export const MsgUpFrontSwapExactAmountInService = {
  typeName: TYPE_NAME,
  method: "UpFrontSwapExactAmountIn",
  Request: MsgUpFrontSwapExactAmountIn,
  Response: MsgUpFrontSwapExactAmountInResponse,
} as const;

/**
 * @generated from rpc elys.amm.Msg.SwapExactAmountIn
 */
export const MsgSwapExactAmountInService = {
  typeName: TYPE_NAME,
  method: "SwapExactAmountIn",
  Request: MsgSwapExactAmountIn,
  Response: MsgSwapExactAmountInResponse,
} as const;

/**
 * @generated from rpc elys.amm.Msg.SwapExactAmountOut
 */
export const MsgSwapExactAmountOutService = {
  typeName: TYPE_NAME,
  method: "SwapExactAmountOut",
  Request: MsgSwapExactAmountOut,
  Response: MsgSwapExactAmountOutResponse,
} as const;

/**
 * @generated from rpc elys.amm.Msg.SwapByDenom
 */
export const MsgSwapByDenomService = {
  typeName: TYPE_NAME,
  method: "SwapByDenom",
  Request: MsgSwapByDenom,
  Response: MsgSwapByDenomResponse,
} as const;

/**
 * @generated from rpc elys.amm.Msg.FeedMultipleExternalLiquidity
 */
export const MsgFeedMultipleExternalLiquidityService = {
  typeName: TYPE_NAME,
  method: "FeedMultipleExternalLiquidity",
  Request: MsgFeedMultipleExternalLiquidity,
  Response: MsgFeedMultipleExternalLiquidityResponse,
} as const;

/**
 * @generated from rpc elys.amm.Msg.UpdatePoolParams
 */
export const MsgUpdatePoolParamsService = {
  typeName: TYPE_NAME,
  method: "UpdatePoolParams",
  Request: MsgUpdatePoolParams,
  Response: MsgUpdatePoolParamsResponse,
} as const;

/**
 * @generated from rpc elys.amm.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

