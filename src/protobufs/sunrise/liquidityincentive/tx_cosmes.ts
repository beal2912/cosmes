// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file sunrise/liquidityincentive/tx.proto (package sunrise.liquidityincentive, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgCollectVoteRewards, MsgCollectVoteRewardsResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgVoteGauge, MsgVoteGaugeResponse } from "./tx_pb.js";

const TYPE_NAME = "sunrise.liquidityincentive.Msg";

/**
 * UpdateParams defines a (governance) operation for updating the module
 * parameters. The authority defaults to the x/gov module account.
 *
 * @generated from rpc sunrise.liquidityincentive.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

/**
 * VoteGauge
 *
 * @generated from rpc sunrise.liquidityincentive.Msg.VoteGauge
 */
export const MsgVoteGaugeService = {
  typeName: TYPE_NAME,
  method: "VoteGauge",
  Request: MsgVoteGauge,
  Response: MsgVoteGaugeResponse,
} as const;

/**
 * CollectVoteRewards
 *
 * @generated from rpc sunrise.liquidityincentive.Msg.CollectVoteRewards
 */
export const MsgCollectVoteRewardsService = {
  typeName: TYPE_NAME,
  method: "CollectVoteRewards",
  Request: MsgCollectVoteRewards,
  Response: MsgCollectVoteRewardsResponse,
} as const;

