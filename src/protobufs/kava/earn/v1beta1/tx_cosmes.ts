// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file kava/earn/v1beta1/tx.proto (package kava.earn.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgDeposit, MsgDepositResponse, MsgWithdraw, MsgWithdrawResponse } from "./tx_pb.js";

const TYPE_NAME = "kava.earn.v1beta1.Msg";

/**
 * Deposit defines a method for depositing assets into a vault
 *
 * @generated from rpc kava.earn.v1beta1.Msg.Deposit
 */
export const MsgDepositService = {
  typeName: TYPE_NAME,
  method: "Deposit",
  Request: MsgDeposit,
  Response: MsgDepositResponse,
} as const;

/**
 * Withdraw defines a method for withdrawing assets into a vault
 *
 * @generated from rpc kava.earn.v1beta1.Msg.Withdraw
 */
export const MsgWithdrawService = {
  typeName: TYPE_NAME,
  method: "Withdraw",
  Request: MsgWithdraw,
  Response: MsgWithdrawResponse,
} as const;

