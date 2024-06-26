// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file kava/router/v1beta1/tx.proto (package kava.router.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgDelegateMintDeposit, MsgDelegateMintDepositResponse, MsgMintDeposit, MsgMintDepositResponse, MsgWithdrawBurn, MsgWithdrawBurnResponse, MsgWithdrawBurnUndelegate, MsgWithdrawBurnUndelegateResponse } from "./tx_pb.js";

const TYPE_NAME = "kava.router.v1beta1.Msg";

/**
 * MintDeposit converts a delegation into staking derivatives and deposits it all into an earn vault.
 *
 * @generated from rpc kava.router.v1beta1.Msg.MintDeposit
 */
export const MsgMintDepositService = {
  typeName: TYPE_NAME,
  method: "MintDeposit",
  Request: MsgMintDeposit,
  Response: MsgMintDepositResponse,
} as const;

/**
 * DelegateMintDeposit delegates tokens to a validator, then converts them into staking derivatives,
 * then deposits to an earn vault.
 *
 * @generated from rpc kava.router.v1beta1.Msg.DelegateMintDeposit
 */
export const MsgDelegateMintDepositService = {
  typeName: TYPE_NAME,
  method: "DelegateMintDeposit",
  Request: MsgDelegateMintDeposit,
  Response: MsgDelegateMintDepositResponse,
} as const;

/**
 * WithdrawBurn removes staking derivatives from an earn vault and converts them back to a staking delegation.
 *
 * @generated from rpc kava.router.v1beta1.Msg.WithdrawBurn
 */
export const MsgWithdrawBurnService = {
  typeName: TYPE_NAME,
  method: "WithdrawBurn",
  Request: MsgWithdrawBurn,
  Response: MsgWithdrawBurnResponse,
} as const;

/**
 * WithdrawBurnUndelegate removes staking derivatives from an earn vault, converts them to a staking delegation,
 * then undelegates them from their validator.
 *
 * @generated from rpc kava.router.v1beta1.Msg.WithdrawBurnUndelegate
 */
export const MsgWithdrawBurnUndelegateService = {
  typeName: TYPE_NAME,
  method: "WithdrawBurnUndelegate",
  Request: MsgWithdrawBurnUndelegate,
  Response: MsgWithdrawBurnUndelegateResponse,
} as const;

