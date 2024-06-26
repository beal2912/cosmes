// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file kava/incentive/v1beta1/tx.proto (package kava.incentive.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgClaimDelegatorReward, MsgClaimDelegatorRewardResponse, MsgClaimEarnReward, MsgClaimEarnRewardResponse, MsgClaimHardReward, MsgClaimHardRewardResponse, MsgClaimSavingsReward, MsgClaimSavingsRewardResponse, MsgClaimSwapReward, MsgClaimSwapRewardResponse, MsgClaimUSDXMintingReward, MsgClaimUSDXMintingRewardResponse } from "./tx_pb.js";

const TYPE_NAME = "kava.incentive.v1beta1.Msg";

/**
 * ClaimUSDXMintingReward is a message type used to claim USDX minting rewards
 *
 * @generated from rpc kava.incentive.v1beta1.Msg.ClaimUSDXMintingReward
 */
export const MsgClaimUSDXMintingRewardService = {
  typeName: TYPE_NAME,
  method: "ClaimUSDXMintingReward",
  Request: MsgClaimUSDXMintingReward,
  Response: MsgClaimUSDXMintingRewardResponse,
} as const;

/**
 * ClaimHardReward is a message type used to claim Hard liquidity provider rewards
 *
 * @generated from rpc kava.incentive.v1beta1.Msg.ClaimHardReward
 */
export const MsgClaimHardRewardService = {
  typeName: TYPE_NAME,
  method: "ClaimHardReward",
  Request: MsgClaimHardReward,
  Response: MsgClaimHardRewardResponse,
} as const;

/**
 * ClaimDelegatorReward is a message type used to claim delegator rewards
 *
 * @generated from rpc kava.incentive.v1beta1.Msg.ClaimDelegatorReward
 */
export const MsgClaimDelegatorRewardService = {
  typeName: TYPE_NAME,
  method: "ClaimDelegatorReward",
  Request: MsgClaimDelegatorReward,
  Response: MsgClaimDelegatorRewardResponse,
} as const;

/**
 * ClaimSwapReward is a message type used to claim swap rewards
 *
 * @generated from rpc kava.incentive.v1beta1.Msg.ClaimSwapReward
 */
export const MsgClaimSwapRewardService = {
  typeName: TYPE_NAME,
  method: "ClaimSwapReward",
  Request: MsgClaimSwapReward,
  Response: MsgClaimSwapRewardResponse,
} as const;

/**
 * ClaimSavingsReward is a message type used to claim savings rewards
 *
 * @generated from rpc kava.incentive.v1beta1.Msg.ClaimSavingsReward
 */
export const MsgClaimSavingsRewardService = {
  typeName: TYPE_NAME,
  method: "ClaimSavingsReward",
  Request: MsgClaimSavingsReward,
  Response: MsgClaimSavingsRewardResponse,
} as const;

/**
 * ClaimEarnReward is a message type used to claim earn rewards
 *
 * @generated from rpc kava.incentive.v1beta1.Msg.ClaimEarnReward
 */
export const MsgClaimEarnRewardService = {
  typeName: TYPE_NAME,
  method: "ClaimEarnReward",
  Request: MsgClaimEarnReward,
  Response: MsgClaimEarnRewardResponse,
} as const;

