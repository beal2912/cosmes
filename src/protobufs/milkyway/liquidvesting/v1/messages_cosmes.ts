// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file milkyway/liquidvesting/v1/messages.proto (package milkyway.liquidvesting.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgBurnLockedRepresentation, MsgBurnLockedRepresentationResponse, MsgMintLockedRepresentation, MsgMintLockedRepresentationResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgWithdrawInsuranceFund, MsgWithdrawInsuranceFundResponse } from "./messages_pb.js";

const TYPE_NAME = "milkyway.liquidvesting.v1.Msg";

/**
 * MintLockedRepresentation defines the operation to mint a user's staked
 * locked tokens representation that can be used in the liquid vesting module.
 *
 * @generated from rpc milkyway.liquidvesting.v1.Msg.MintLockedRepresentation
 */
export const MsgMintLockedRepresentationService = {
  typeName: TYPE_NAME,
  method: "MintLockedRepresentation",
  Request: MsgMintLockedRepresentation,
  Response: MsgMintLockedRepresentationResponse,
} as const;

/**
 * BurnLockedRepresentation defines the operation to burn a user's staked
 * locked tokens representation.
 *
 * @generated from rpc milkyway.liquidvesting.v1.Msg.BurnLockedRepresentation
 */
export const MsgBurnLockedRepresentationService = {
  typeName: TYPE_NAME,
  method: "BurnLockedRepresentation",
  Request: MsgBurnLockedRepresentation,
  Response: MsgBurnLockedRepresentationResponse,
} as const;

/**
 * WithdrawInsuranceFund defines the operation to withdraw an amount
 * of tokens from the user's insurance fund.
 * This can be used from the user to withdraw their funds after
 * some of their staking representations have been burned or if the
 * balance in the insurance fund is more than the required to cover all
 * their staking representations.
 *
 * @generated from rpc milkyway.liquidvesting.v1.Msg.WithdrawInsuranceFund
 */
export const MsgWithdrawInsuranceFundService = {
  typeName: TYPE_NAME,
  method: "WithdrawInsuranceFund",
  Request: MsgWithdrawInsuranceFund,
  Response: MsgWithdrawInsuranceFundResponse,
} as const;

/**
 * UpdateParams defines a (governance) operation for updating the module
 * parameters.
 * The authority defaults to the x/gov module account.
 *
 * @generated from rpc milkyway.liquidvesting.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

