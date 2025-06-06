// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file elys/parameter/tx.proto (package elys.parameter, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgUpdateMaxVotingPower, MsgUpdateMaxVotingPowerResponse, MsgUpdateMinCommission, MsgUpdateMinCommissionResponse, MsgUpdateMinSelfDelegation, MsgUpdateMinSelfDelegationResponse, MsgUpdateRewardsDataLifetime, MsgUpdateRewardsDataLifetimeResponse, MsgUpdateTakerFees, MsgUpdateTakerFeesResponse, MsgUpdateTotalBlocksPerYear, MsgUpdateTotalBlocksPerYearResponse } from "./tx_pb.js";

const TYPE_NAME = "elys.parameter.Msg";

/**
 * @generated from rpc elys.parameter.Msg.UpdateMinCommission
 */
export const MsgUpdateMinCommissionService = {
  typeName: TYPE_NAME,
  method: "UpdateMinCommission",
  Request: MsgUpdateMinCommission,
  Response: MsgUpdateMinCommissionResponse,
} as const;

/**
 * @generated from rpc elys.parameter.Msg.UpdateMaxVotingPower
 */
export const MsgUpdateMaxVotingPowerService = {
  typeName: TYPE_NAME,
  method: "UpdateMaxVotingPower",
  Request: MsgUpdateMaxVotingPower,
  Response: MsgUpdateMaxVotingPowerResponse,
} as const;

/**
 * @generated from rpc elys.parameter.Msg.UpdateMinSelfDelegation
 */
export const MsgUpdateMinSelfDelegationService = {
  typeName: TYPE_NAME,
  method: "UpdateMinSelfDelegation",
  Request: MsgUpdateMinSelfDelegation,
  Response: MsgUpdateMinSelfDelegationResponse,
} as const;

/**
 * @generated from rpc elys.parameter.Msg.UpdateTotalBlocksPerYear
 */
export const MsgUpdateTotalBlocksPerYearService = {
  typeName: TYPE_NAME,
  method: "UpdateTotalBlocksPerYear",
  Request: MsgUpdateTotalBlocksPerYear,
  Response: MsgUpdateTotalBlocksPerYearResponse,
} as const;

/**
 * @generated from rpc elys.parameter.Msg.UpdateRewardsDataLifetime
 */
export const MsgUpdateRewardsDataLifetimeService = {
  typeName: TYPE_NAME,
  method: "UpdateRewardsDataLifetime",
  Request: MsgUpdateRewardsDataLifetime,
  Response: MsgUpdateRewardsDataLifetimeResponse,
} as const;

/**
 * @generated from rpc elys.parameter.Msg.UpdateTakerFees
 */
export const MsgUpdateTakerFeesService = {
  typeName: TYPE_NAME,
  method: "UpdateTakerFees",
  Request: MsgUpdateTakerFees,
  Response: MsgUpdateTakerFeesResponse,
} as const;

