// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file sunrise/lockup/v1/tx.proto (package sunrise.lockup.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgClaimRewards, MsgClaimRewardsResponse, MsgInitLockupAccount, MsgInitLockupAccountResponse, MsgNonVotingDelegate, MsgNonVotingDelegateResponse, MsgNonVotingUndelegate, MsgNonVotingUndelegateResponse, MsgSend, MsgSendResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "sunrise.lockup.v1.Msg";

/**
 * UpdateParams defines a (governance) operation for updating the module
 * parameters. The authority defaults to the x/gov module account.
 *
 * @generated from rpc sunrise.lockup.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

/**
 * InitLockupAccount
 *
 * @generated from rpc sunrise.lockup.v1.Msg.InitLockupAccount
 */
export const MsgInitLockupAccountService = {
  typeName: TYPE_NAME,
  method: "InitLockupAccount",
  Request: MsgInitLockupAccount,
  Response: MsgInitLockupAccountResponse,
} as const;

/**
 * NonVotingDelegate
 *
 * @generated from rpc sunrise.lockup.v1.Msg.NonVotingDelegate
 */
export const MsgNonVotingDelegateService = {
  typeName: TYPE_NAME,
  method: "NonVotingDelegate",
  Request: MsgNonVotingDelegate,
  Response: MsgNonVotingDelegateResponse,
} as const;

/**
 * NonVotingUndelegate
 *
 * @generated from rpc sunrise.lockup.v1.Msg.NonVotingUndelegate
 */
export const MsgNonVotingUndelegateService = {
  typeName: TYPE_NAME,
  method: "NonVotingUndelegate",
  Request: MsgNonVotingUndelegate,
  Response: MsgNonVotingUndelegateResponse,
} as const;

/**
 * ClaimRewards
 *
 * @generated from rpc sunrise.lockup.v1.Msg.ClaimRewards
 */
export const MsgClaimRewardsService = {
  typeName: TYPE_NAME,
  method: "ClaimRewards",
  Request: MsgClaimRewards,
  Response: MsgClaimRewardsResponse,
} as const;

/**
 * Send
 *
 * @generated from rpc sunrise.lockup.v1.Msg.Send
 */
export const MsgSendService = {
  typeName: TYPE_NAME,
  method: "Send",
  Request: MsgSend,
  Response: MsgSendResponse,
} as const;

