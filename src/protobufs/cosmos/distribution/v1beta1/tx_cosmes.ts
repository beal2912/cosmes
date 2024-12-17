// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file cosmos/distribution/v1beta1/tx.proto (package cosmos.distribution.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgCommunityPoolSpend, MsgCommunityPoolSpendResponse, MsgDepositValidatorRewardsPool, MsgDepositValidatorRewardsPoolResponse, MsgFundCommunityPool, MsgFundCommunityPoolResponse, MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse } from "./tx_pb.js";

const TYPE_NAME = "cosmos.distribution.v1beta1.Msg";

/**
 * SetWithdrawAddress defines a method to change the withdraw address
 * for a delegator (or validator self-delegation).
 *
 * @generated from rpc cosmos.distribution.v1beta1.Msg.SetWithdrawAddress
 */
export const MsgSetWithdrawAddressService = {
  typeName: TYPE_NAME,
  method: "SetWithdrawAddress",
  Request: MsgSetWithdrawAddress,
  Response: MsgSetWithdrawAddressResponse,
} as const;

/**
 * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
 * from a single validator.
 *
 * @generated from rpc cosmos.distribution.v1beta1.Msg.WithdrawDelegatorReward
 */
export const MsgWithdrawDelegatorRewardService = {
  typeName: TYPE_NAME,
  method: "WithdrawDelegatorReward",
  Request: MsgWithdrawDelegatorReward,
  Response: MsgWithdrawDelegatorRewardResponse,
} as const;

/**
 * WithdrawValidatorCommission defines a method to withdraw the
 * full commission to the validator address.
 *
 * @generated from rpc cosmos.distribution.v1beta1.Msg.WithdrawValidatorCommission
 */
export const MsgWithdrawValidatorCommissionService = {
  typeName: TYPE_NAME,
  method: "WithdrawValidatorCommission",
  Request: MsgWithdrawValidatorCommission,
  Response: MsgWithdrawValidatorCommissionResponse,
} as const;

/**
 * FundCommunityPool defines a method to allow an account to directly
 * fund the community pool.
 *
 * @generated from rpc cosmos.distribution.v1beta1.Msg.FundCommunityPool
 */
export const MsgFundCommunityPoolService = {
  typeName: TYPE_NAME,
  method: "FundCommunityPool",
  Request: MsgFundCommunityPool,
  Response: MsgFundCommunityPoolResponse,
} as const;

/**
 * UpdateParams defines a governance operation for updating the x/distribution
 * module parameters. The authority is defined in the keeper.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.distribution.v1beta1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

/**
 * CommunityPoolSpend defines a governance operation for sending tokens from
 * the community pool in the x/distribution module to another account, which
 * could be the governance module itself. The authority is defined in the
 * keeper.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.distribution.v1beta1.Msg.CommunityPoolSpend
 */
export const MsgCommunityPoolSpendService = {
  typeName: TYPE_NAME,
  method: "CommunityPoolSpend",
  Request: MsgCommunityPoolSpend,
  Response: MsgCommunityPoolSpendResponse,
} as const;

/**
 * DepositValidatorRewardsPool defines a method to provide additional rewards
 * to delegators to a specific validator.
 *
 * Since: cosmos-sdk 0.50
 *
 * @generated from rpc cosmos.distribution.v1beta1.Msg.DepositValidatorRewardsPool
 */
export const MsgDepositValidatorRewardsPoolService = {
  typeName: TYPE_NAME,
  method: "DepositValidatorRewardsPool",
  Request: MsgDepositValidatorRewardsPool,
  Response: MsgDepositValidatorRewardsPoolResponse,
} as const;

