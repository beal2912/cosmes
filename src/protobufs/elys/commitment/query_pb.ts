// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/commitment/query.proto (package elys.commitment, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Commitments } from "./commitments_pb.js";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message elys.commitment.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.QueryParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean {
    return proto3.util.equals(QueryParamsRequest, a, b);
  }
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message elys.commitment.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: elys.commitment.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.QueryParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean {
    return proto3.util.equals(QueryParamsResponse, a, b);
  }
}

/**
 * @generated from message elys.commitment.QueryShowCommitmentsRequest
 */
export class QueryShowCommitmentsRequest extends Message<QueryShowCommitmentsRequest> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  constructor(data?: PartialMessage<QueryShowCommitmentsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.QueryShowCommitmentsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryShowCommitmentsRequest {
    return new QueryShowCommitmentsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryShowCommitmentsRequest {
    return new QueryShowCommitmentsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryShowCommitmentsRequest {
    return new QueryShowCommitmentsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryShowCommitmentsRequest | PlainMessage<QueryShowCommitmentsRequest> | undefined, b: QueryShowCommitmentsRequest | PlainMessage<QueryShowCommitmentsRequest> | undefined): boolean {
    return proto3.util.equals(QueryShowCommitmentsRequest, a, b);
  }
}

/**
 * @generated from message elys.commitment.QueryShowCommitmentsResponse
 */
export class QueryShowCommitmentsResponse extends Message<QueryShowCommitmentsResponse> {
  /**
   * @generated from field: elys.commitment.Commitments commitments = 1;
   */
  commitments?: Commitments;

  constructor(data?: PartialMessage<QueryShowCommitmentsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.QueryShowCommitmentsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "commitments", kind: "message", T: Commitments },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryShowCommitmentsResponse {
    return new QueryShowCommitmentsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryShowCommitmentsResponse {
    return new QueryShowCommitmentsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryShowCommitmentsResponse {
    return new QueryShowCommitmentsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryShowCommitmentsResponse | PlainMessage<QueryShowCommitmentsResponse> | undefined, b: QueryShowCommitmentsResponse | PlainMessage<QueryShowCommitmentsResponse> | undefined): boolean {
    return proto3.util.equals(QueryShowCommitmentsResponse, a, b);
  }
}

/**
 * @generated from message elys.commitment.QueryNumberOfCommitmentsRequest
 */
export class QueryNumberOfCommitmentsRequest extends Message<QueryNumberOfCommitmentsRequest> {
  constructor(data?: PartialMessage<QueryNumberOfCommitmentsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.QueryNumberOfCommitmentsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNumberOfCommitmentsRequest {
    return new QueryNumberOfCommitmentsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNumberOfCommitmentsRequest {
    return new QueryNumberOfCommitmentsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNumberOfCommitmentsRequest {
    return new QueryNumberOfCommitmentsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryNumberOfCommitmentsRequest | PlainMessage<QueryNumberOfCommitmentsRequest> | undefined, b: QueryNumberOfCommitmentsRequest | PlainMessage<QueryNumberOfCommitmentsRequest> | undefined): boolean {
    return proto3.util.equals(QueryNumberOfCommitmentsRequest, a, b);
  }
}

/**
 * @generated from message elys.commitment.QueryNumberOfCommitmentsResponse
 */
export class QueryNumberOfCommitmentsResponse extends Message<QueryNumberOfCommitmentsResponse> {
  /**
   * @generated from field: int64 number = 1;
   */
  number = protoInt64.zero;

  constructor(data?: PartialMessage<QueryNumberOfCommitmentsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.QueryNumberOfCommitmentsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "number", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNumberOfCommitmentsResponse {
    return new QueryNumberOfCommitmentsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNumberOfCommitmentsResponse {
    return new QueryNumberOfCommitmentsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNumberOfCommitmentsResponse {
    return new QueryNumberOfCommitmentsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryNumberOfCommitmentsResponse | PlainMessage<QueryNumberOfCommitmentsResponse> | undefined, b: QueryNumberOfCommitmentsResponse | PlainMessage<QueryNumberOfCommitmentsResponse> | undefined): boolean {
    return proto3.util.equals(QueryNumberOfCommitmentsResponse, a, b);
  }
}

/**
 * @generated from message elys.commitment.QueryCommittedTokensLockedRequest
 */
export class QueryCommittedTokensLockedRequest extends Message<QueryCommittedTokensLockedRequest> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  constructor(data?: PartialMessage<QueryCommittedTokensLockedRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.QueryCommittedTokensLockedRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCommittedTokensLockedRequest {
    return new QueryCommittedTokensLockedRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCommittedTokensLockedRequest {
    return new QueryCommittedTokensLockedRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCommittedTokensLockedRequest {
    return new QueryCommittedTokensLockedRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCommittedTokensLockedRequest | PlainMessage<QueryCommittedTokensLockedRequest> | undefined, b: QueryCommittedTokensLockedRequest | PlainMessage<QueryCommittedTokensLockedRequest> | undefined): boolean {
    return proto3.util.equals(QueryCommittedTokensLockedRequest, a, b);
  }
}

/**
 * @generated from message elys.commitment.QueryCommittedTokensLockedResponse
 */
export class QueryCommittedTokensLockedResponse extends Message<QueryCommittedTokensLockedResponse> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin locked_committed = 2;
   */
  lockedCommitted: Coin[] = [];

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin total_committed = 3;
   */
  totalCommitted: Coin[] = [];

  constructor(data?: PartialMessage<QueryCommittedTokensLockedResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.QueryCommittedTokensLockedResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "locked_committed", kind: "message", T: Coin, repeated: true },
    { no: 3, name: "total_committed", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCommittedTokensLockedResponse {
    return new QueryCommittedTokensLockedResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCommittedTokensLockedResponse {
    return new QueryCommittedTokensLockedResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCommittedTokensLockedResponse {
    return new QueryCommittedTokensLockedResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCommittedTokensLockedResponse | PlainMessage<QueryCommittedTokensLockedResponse> | undefined, b: QueryCommittedTokensLockedResponse | PlainMessage<QueryCommittedTokensLockedResponse> | undefined): boolean {
    return proto3.util.equals(QueryCommittedTokensLockedResponse, a, b);
  }
}

/**
 * @generated from message elys.commitment.QueryCommitmentVestingInfoRequest
 */
export class QueryCommitmentVestingInfoRequest extends Message<QueryCommitmentVestingInfoRequest> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  constructor(data?: PartialMessage<QueryCommitmentVestingInfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.QueryCommitmentVestingInfoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCommitmentVestingInfoRequest {
    return new QueryCommitmentVestingInfoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCommitmentVestingInfoRequest {
    return new QueryCommitmentVestingInfoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCommitmentVestingInfoRequest {
    return new QueryCommitmentVestingInfoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCommitmentVestingInfoRequest | PlainMessage<QueryCommitmentVestingInfoRequest> | undefined, b: QueryCommitmentVestingInfoRequest | PlainMessage<QueryCommitmentVestingInfoRequest> | undefined): boolean {
    return proto3.util.equals(QueryCommitmentVestingInfoRequest, a, b);
  }
}

/**
 * @generated from message elys.commitment.QueryCommitmentVestingInfoResponse
 */
export class QueryCommitmentVestingInfoResponse extends Message<QueryCommitmentVestingInfoResponse> {
  /**
   * @generated from field: string total = 1;
   */
  total = "";

  /**
   * @generated from field: repeated elys.commitment.VestingDetails vesting_details = 2;
   */
  vestingDetails: VestingDetails[] = [];

  constructor(data?: PartialMessage<QueryCommitmentVestingInfoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.QueryCommitmentVestingInfoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "total", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "vesting_details", kind: "message", T: VestingDetails, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCommitmentVestingInfoResponse {
    return new QueryCommitmentVestingInfoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCommitmentVestingInfoResponse {
    return new QueryCommitmentVestingInfoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCommitmentVestingInfoResponse {
    return new QueryCommitmentVestingInfoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCommitmentVestingInfoResponse | PlainMessage<QueryCommitmentVestingInfoResponse> | undefined, b: QueryCommitmentVestingInfoResponse | PlainMessage<QueryCommitmentVestingInfoResponse> | undefined): boolean {
    return proto3.util.equals(QueryCommitmentVestingInfoResponse, a, b);
  }
}

/**
 * @generated from message elys.commitment.VestingDetails
 */
export class VestingDetails extends Message<VestingDetails> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string total_vesting = 2;
   */
  totalVesting = "";

  /**
   * @generated from field: string claimed = 3;
   */
  claimed = "";

  /**
   * @generated from field: string vested_so_far = 4;
   */
  vestedSoFar = "";

  /**
   * @generated from field: int64 remaining_blocks = 5;
   */
  remainingBlocks = protoInt64.zero;

  constructor(data?: PartialMessage<VestingDetails>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.VestingDetails";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "total_vesting", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "claimed", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "vested_so_far", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "remaining_blocks", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VestingDetails {
    return new VestingDetails().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VestingDetails {
    return new VestingDetails().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VestingDetails {
    return new VestingDetails().fromJsonString(jsonString, options);
  }

  static equals(a: VestingDetails | PlainMessage<VestingDetails> | undefined, b: VestingDetails | PlainMessage<VestingDetails> | undefined): boolean {
    return proto3.util.equals(VestingDetails, a, b);
  }
}

/**
 * @generated from message elys.commitment.QueryAirDropRequest
 */
export class QueryAirDropRequest extends Message<QueryAirDropRequest> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  constructor(data?: PartialMessage<QueryAirDropRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.QueryAirDropRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAirDropRequest {
    return new QueryAirDropRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAirDropRequest {
    return new QueryAirDropRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAirDropRequest {
    return new QueryAirDropRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAirDropRequest | PlainMessage<QueryAirDropRequest> | undefined, b: QueryAirDropRequest | PlainMessage<QueryAirDropRequest> | undefined): boolean {
    return proto3.util.equals(QueryAirDropRequest, a, b);
  }
}

/**
 * @generated from message elys.commitment.QueryAirDropResponse
 */
export class QueryAirDropResponse extends Message<QueryAirDropResponse> {
  /**
   * @generated from field: string atom_staking = 1;
   */
  atomStaking = "";

  /**
   * @generated from field: string cadet = 2;
   */
  cadet = "";

  /**
   * @generated from field: string nft_holder = 3;
   */
  nftHolder = "";

  /**
   * @generated from field: string governor = 4;
   */
  governor = "";

  /**
   * @generated from field: bool claimed = 5;
   */
  claimed = false;

  constructor(data?: PartialMessage<QueryAirDropResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.QueryAirDropResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "atom_staking", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "cadet", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "nft_holder", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "governor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "claimed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAirDropResponse {
    return new QueryAirDropResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAirDropResponse {
    return new QueryAirDropResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAirDropResponse {
    return new QueryAirDropResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAirDropResponse | PlainMessage<QueryAirDropResponse> | undefined, b: QueryAirDropResponse | PlainMessage<QueryAirDropResponse> | undefined): boolean {
    return proto3.util.equals(QueryAirDropResponse, a, b);
  }
}

/**
 * @generated from message elys.commitment.QueryTotalAirDropClaimedRequest
 */
export class QueryTotalAirDropClaimedRequest extends Message<QueryTotalAirDropClaimedRequest> {
  constructor(data?: PartialMessage<QueryTotalAirDropClaimedRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.QueryTotalAirDropClaimedRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalAirDropClaimedRequest {
    return new QueryTotalAirDropClaimedRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalAirDropClaimedRequest {
    return new QueryTotalAirDropClaimedRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalAirDropClaimedRequest {
    return new QueryTotalAirDropClaimedRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryTotalAirDropClaimedRequest | PlainMessage<QueryTotalAirDropClaimedRequest> | undefined, b: QueryTotalAirDropClaimedRequest | PlainMessage<QueryTotalAirDropClaimedRequest> | undefined): boolean {
    return proto3.util.equals(QueryTotalAirDropClaimedRequest, a, b);
  }
}

/**
 * @generated from message elys.commitment.QueryTotalAirDropClaimedResponse
 */
export class QueryTotalAirDropClaimedResponse extends Message<QueryTotalAirDropClaimedResponse> {
  /**
   * @generated from field: string total_elys_claimed = 1;
   */
  totalElysClaimed = "";

  /**
   * @generated from field: string total_eden_claimed = 2;
   */
  totalEdenClaimed = "";

  constructor(data?: PartialMessage<QueryTotalAirDropClaimedResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.QueryTotalAirDropClaimedResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "total_elys_claimed", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "total_eden_claimed", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalAirDropClaimedResponse {
    return new QueryTotalAirDropClaimedResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalAirDropClaimedResponse {
    return new QueryTotalAirDropClaimedResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalAirDropClaimedResponse {
    return new QueryTotalAirDropClaimedResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryTotalAirDropClaimedResponse | PlainMessage<QueryTotalAirDropClaimedResponse> | undefined, b: QueryTotalAirDropClaimedResponse | PlainMessage<QueryTotalAirDropClaimedResponse> | undefined): boolean {
    return proto3.util.equals(QueryTotalAirDropClaimedResponse, a, b);
  }
}

/**
 * @generated from message elys.commitment.QueryKolRequest
 */
export class QueryKolRequest extends Message<QueryKolRequest> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  constructor(data?: PartialMessage<QueryKolRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.QueryKolRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryKolRequest {
    return new QueryKolRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryKolRequest {
    return new QueryKolRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryKolRequest {
    return new QueryKolRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryKolRequest | PlainMessage<QueryKolRequest> | undefined, b: QueryKolRequest | PlainMessage<QueryKolRequest> | undefined): boolean {
    return proto3.util.equals(QueryKolRequest, a, b);
  }
}

/**
 * @generated from message elys.commitment.QueryKolResponse
 */
export class QueryKolResponse extends Message<QueryKolResponse> {
  /**
   * @generated from field: string elys_amount = 1;
   */
  elysAmount = "";

  /**
   * @generated from field: bool claimed = 2;
   */
  claimed = false;

  /**
   * @generated from field: bool refunded = 3;
   */
  refunded = false;

  constructor(data?: PartialMessage<QueryKolResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.QueryKolResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "elys_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "claimed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "refunded", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryKolResponse {
    return new QueryKolResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryKolResponse {
    return new QueryKolResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryKolResponse {
    return new QueryKolResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryKolResponse | PlainMessage<QueryKolResponse> | undefined, b: QueryKolResponse | PlainMessage<QueryKolResponse> | undefined): boolean {
    return proto3.util.equals(QueryKolResponse, a, b);
  }
}

/**
 * @generated from message elys.commitment.QueryTotalSupplyRequest
 */
export class QueryTotalSupplyRequest extends Message<QueryTotalSupplyRequest> {
  constructor(data?: PartialMessage<QueryTotalSupplyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.QueryTotalSupplyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalSupplyRequest {
    return new QueryTotalSupplyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalSupplyRequest {
    return new QueryTotalSupplyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalSupplyRequest {
    return new QueryTotalSupplyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryTotalSupplyRequest | PlainMessage<QueryTotalSupplyRequest> | undefined, b: QueryTotalSupplyRequest | PlainMessage<QueryTotalSupplyRequest> | undefined): boolean {
    return proto3.util.equals(QueryTotalSupplyRequest, a, b);
  }
}

/**
 * @generated from message elys.commitment.QueryTotalSupplyResponse
 */
export class QueryTotalSupplyResponse extends Message<QueryTotalSupplyResponse> {
  /**
   * @generated from field: string total_eden = 1;
   */
  totalEden = "";

  /**
   * @generated from field: string total_edenb = 2;
   */
  totalEdenb = "";

  constructor(data?: PartialMessage<QueryTotalSupplyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.commitment.QueryTotalSupplyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "total_eden", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "total_edenb", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalSupplyResponse {
    return new QueryTotalSupplyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalSupplyResponse {
    return new QueryTotalSupplyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalSupplyResponse {
    return new QueryTotalSupplyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryTotalSupplyResponse | PlainMessage<QueryTotalSupplyResponse> | undefined, b: QueryTotalSupplyResponse | PlainMessage<QueryTotalSupplyResponse> | undefined): boolean {
    return proto3.util.equals(QueryTotalSupplyResponse, a, b);
  }
}

