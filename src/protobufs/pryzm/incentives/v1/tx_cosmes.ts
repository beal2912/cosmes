// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file pryzm/incentives/v1/tx.proto (package pryzm.incentives.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgAddRewardTokenToPool, MsgAddRewardTokenToPoolResponse, MsgBond, MsgBondResponse, MsgCancelUnbonding, MsgCancelUnbondingResponse, MsgClaimReward, MsgClaimRewardResponse, MsgClaimUnbonding, MsgClaimUnbondingResponse, MsgCreatePool, MsgCreatePoolResponse, MsgIncentivizePool, MsgIncentivizePoolResponse, MsgUnbond, MsgUnbondResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdateRewardTokenWeight, MsgUpdateRewardTokenWeightResponse } from "./tx_pb.js";

const TYPE_NAME = "pryzm.incentives.v1.Msg";

/**
 * @generated from rpc pryzm.incentives.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

/**
 * @generated from rpc pryzm.incentives.v1.Msg.CreatePool
 */
export const MsgCreatePoolService = {
  typeName: TYPE_NAME,
  method: "CreatePool",
  Request: MsgCreatePool,
  Response: MsgCreatePoolResponse,
} as const;

/**
 * @generated from rpc pryzm.incentives.v1.Msg.UpdateRewardTokenWeight
 */
export const MsgUpdateRewardTokenWeightService = {
  typeName: TYPE_NAME,
  method: "UpdateRewardTokenWeight",
  Request: MsgUpdateRewardTokenWeight,
  Response: MsgUpdateRewardTokenWeightResponse,
} as const;

/**
 * @generated from rpc pryzm.incentives.v1.Msg.AddRewardTokenToPool
 */
export const MsgAddRewardTokenToPoolService = {
  typeName: TYPE_NAME,
  method: "AddRewardTokenToPool",
  Request: MsgAddRewardTokenToPool,
  Response: MsgAddRewardTokenToPoolResponse,
} as const;

/**
 * @generated from rpc pryzm.incentives.v1.Msg.Bond
 */
export const MsgBondService = {
  typeName: TYPE_NAME,
  method: "Bond",
  Request: MsgBond,
  Response: MsgBondResponse,
} as const;

/**
 * @generated from rpc pryzm.incentives.v1.Msg.Unbond
 */
export const MsgUnbondService = {
  typeName: TYPE_NAME,
  method: "Unbond",
  Request: MsgUnbond,
  Response: MsgUnbondResponse,
} as const;

/**
 * @generated from rpc pryzm.incentives.v1.Msg.ClaimReward
 */
export const MsgClaimRewardService = {
  typeName: TYPE_NAME,
  method: "ClaimReward",
  Request: MsgClaimReward,
  Response: MsgClaimRewardResponse,
} as const;

/**
 * @generated from rpc pryzm.incentives.v1.Msg.ClaimUnbonding
 */
export const MsgClaimUnbondingService = {
  typeName: TYPE_NAME,
  method: "ClaimUnbonding",
  Request: MsgClaimUnbonding,
  Response: MsgClaimUnbondingResponse,
} as const;

/**
 * @generated from rpc pryzm.incentives.v1.Msg.CancelUnbonding
 */
export const MsgCancelUnbondingService = {
  typeName: TYPE_NAME,
  method: "CancelUnbonding",
  Request: MsgCancelUnbonding,
  Response: MsgCancelUnbondingResponse,
} as const;

/**
 * this line is used by starport scaffolding # proto/tx/rpc
 *
 * @generated from rpc pryzm.incentives.v1.Msg.IncentivizePool
 */
export const MsgIncentivizePoolService = {
  typeName: TYPE_NAME,
  method: "IncentivizePool",
  Request: MsgIncentivizePool,
  Response: MsgIncentivizePoolResponse,
} as const;

