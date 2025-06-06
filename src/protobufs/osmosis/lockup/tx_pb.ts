// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/lockup/tx.proto (package osmosis.lockup, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
import { PeriodLock } from "./lock_pb.js";

/**
 * @generated from message osmosis.lockup.MsgLockTokens
 */
export class MsgLockTokens extends Message<MsgLockTokens> {
  /**
   * @generated from field: string owner = 1;
   */
  owner = "";

  /**
   * @generated from field: google.protobuf.Duration duration = 2;
   */
  duration?: Duration;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 3;
   */
  coins: Coin[] = [];

  constructor(data?: PartialMessage<MsgLockTokens>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.lockup.MsgLockTokens";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "duration", kind: "message", T: Duration },
    { no: 3, name: "coins", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgLockTokens {
    return new MsgLockTokens().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgLockTokens {
    return new MsgLockTokens().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgLockTokens {
    return new MsgLockTokens().fromJsonString(jsonString, options);
  }

  static equals(a: MsgLockTokens | PlainMessage<MsgLockTokens> | undefined, b: MsgLockTokens | PlainMessage<MsgLockTokens> | undefined): boolean {
    return proto3.util.equals(MsgLockTokens, a, b);
  }
}

/**
 * @generated from message osmosis.lockup.MsgLockTokensResponse
 */
export class MsgLockTokensResponse extends Message<MsgLockTokensResponse> {
  /**
   * @generated from field: uint64 ID = 1;
   */
  ID = protoInt64.zero;

  constructor(data?: PartialMessage<MsgLockTokensResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.lockup.MsgLockTokensResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgLockTokensResponse {
    return new MsgLockTokensResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgLockTokensResponse {
    return new MsgLockTokensResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgLockTokensResponse {
    return new MsgLockTokensResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgLockTokensResponse | PlainMessage<MsgLockTokensResponse> | undefined, b: MsgLockTokensResponse | PlainMessage<MsgLockTokensResponse> | undefined): boolean {
    return proto3.util.equals(MsgLockTokensResponse, a, b);
  }
}

/**
 * @generated from message osmosis.lockup.MsgBeginUnlockingAll
 */
export class MsgBeginUnlockingAll extends Message<MsgBeginUnlockingAll> {
  /**
   * @generated from field: string owner = 1;
   */
  owner = "";

  constructor(data?: PartialMessage<MsgBeginUnlockingAll>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.lockup.MsgBeginUnlockingAll";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBeginUnlockingAll {
    return new MsgBeginUnlockingAll().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBeginUnlockingAll {
    return new MsgBeginUnlockingAll().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBeginUnlockingAll {
    return new MsgBeginUnlockingAll().fromJsonString(jsonString, options);
  }

  static equals(a: MsgBeginUnlockingAll | PlainMessage<MsgBeginUnlockingAll> | undefined, b: MsgBeginUnlockingAll | PlainMessage<MsgBeginUnlockingAll> | undefined): boolean {
    return proto3.util.equals(MsgBeginUnlockingAll, a, b);
  }
}

/**
 * @generated from message osmosis.lockup.MsgBeginUnlockingAllResponse
 */
export class MsgBeginUnlockingAllResponse extends Message<MsgBeginUnlockingAllResponse> {
  /**
   * @generated from field: repeated osmosis.lockup.PeriodLock unlocks = 1;
   */
  unlocks: PeriodLock[] = [];

  constructor(data?: PartialMessage<MsgBeginUnlockingAllResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.lockup.MsgBeginUnlockingAllResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "unlocks", kind: "message", T: PeriodLock, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBeginUnlockingAllResponse {
    return new MsgBeginUnlockingAllResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBeginUnlockingAllResponse {
    return new MsgBeginUnlockingAllResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBeginUnlockingAllResponse {
    return new MsgBeginUnlockingAllResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgBeginUnlockingAllResponse | PlainMessage<MsgBeginUnlockingAllResponse> | undefined, b: MsgBeginUnlockingAllResponse | PlainMessage<MsgBeginUnlockingAllResponse> | undefined): boolean {
    return proto3.util.equals(MsgBeginUnlockingAllResponse, a, b);
  }
}

/**
 * @generated from message osmosis.lockup.MsgBeginUnlocking
 */
export class MsgBeginUnlocking extends Message<MsgBeginUnlocking> {
  /**
   * @generated from field: string owner = 1;
   */
  owner = "";

  /**
   * @generated from field: uint64 ID = 2;
   */
  ID = protoInt64.zero;

  /**
   * Amount of unlocking coins. Unlock all if not set.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 3;
   */
  coins: Coin[] = [];

  constructor(data?: PartialMessage<MsgBeginUnlocking>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.lockup.MsgBeginUnlocking";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "coins", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBeginUnlocking {
    return new MsgBeginUnlocking().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBeginUnlocking {
    return new MsgBeginUnlocking().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBeginUnlocking {
    return new MsgBeginUnlocking().fromJsonString(jsonString, options);
  }

  static equals(a: MsgBeginUnlocking | PlainMessage<MsgBeginUnlocking> | undefined, b: MsgBeginUnlocking | PlainMessage<MsgBeginUnlocking> | undefined): boolean {
    return proto3.util.equals(MsgBeginUnlocking, a, b);
  }
}

/**
 * @generated from message osmosis.lockup.MsgBeginUnlockingResponse
 */
export class MsgBeginUnlockingResponse extends Message<MsgBeginUnlockingResponse> {
  /**
   * @generated from field: bool success = 1;
   */
  success = false;

  /**
   * @generated from field: uint64 unlockingLockID = 2;
   */
  unlockingLockID = protoInt64.zero;

  constructor(data?: PartialMessage<MsgBeginUnlockingResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.lockup.MsgBeginUnlockingResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "success", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "unlockingLockID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBeginUnlockingResponse {
    return new MsgBeginUnlockingResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBeginUnlockingResponse {
    return new MsgBeginUnlockingResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBeginUnlockingResponse {
    return new MsgBeginUnlockingResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgBeginUnlockingResponse | PlainMessage<MsgBeginUnlockingResponse> | undefined, b: MsgBeginUnlockingResponse | PlainMessage<MsgBeginUnlockingResponse> | undefined): boolean {
    return proto3.util.equals(MsgBeginUnlockingResponse, a, b);
  }
}

/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 *
 * @generated from message osmosis.lockup.MsgExtendLockup
 */
export class MsgExtendLockup extends Message<MsgExtendLockup> {
  /**
   * @generated from field: string owner = 1;
   */
  owner = "";

  /**
   * @generated from field: uint64 ID = 2;
   */
  ID = protoInt64.zero;

  /**
   * duration to be set. fails if lower than the current duration, or is
   * unlocking
   *
   * @generated from field: google.protobuf.Duration duration = 3;
   */
  duration?: Duration;

  constructor(data?: PartialMessage<MsgExtendLockup>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.lockup.MsgExtendLockup";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "duration", kind: "message", T: Duration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExtendLockup {
    return new MsgExtendLockup().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExtendLockup {
    return new MsgExtendLockup().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExtendLockup {
    return new MsgExtendLockup().fromJsonString(jsonString, options);
  }

  static equals(a: MsgExtendLockup | PlainMessage<MsgExtendLockup> | undefined, b: MsgExtendLockup | PlainMessage<MsgExtendLockup> | undefined): boolean {
    return proto3.util.equals(MsgExtendLockup, a, b);
  }
}

/**
 * @generated from message osmosis.lockup.MsgExtendLockupResponse
 */
export class MsgExtendLockupResponse extends Message<MsgExtendLockupResponse> {
  /**
   * @generated from field: bool success = 1;
   */
  success = false;

  constructor(data?: PartialMessage<MsgExtendLockupResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.lockup.MsgExtendLockupResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "success", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExtendLockupResponse {
    return new MsgExtendLockupResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExtendLockupResponse {
    return new MsgExtendLockupResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExtendLockupResponse {
    return new MsgExtendLockupResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgExtendLockupResponse | PlainMessage<MsgExtendLockupResponse> | undefined, b: MsgExtendLockupResponse | PlainMessage<MsgExtendLockupResponse> | undefined): boolean {
    return proto3.util.equals(MsgExtendLockupResponse, a, b);
  }
}

/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 *
 * @generated from message osmosis.lockup.MsgForceUnlock
 */
export class MsgForceUnlock extends Message<MsgForceUnlock> {
  /**
   * @generated from field: string owner = 1;
   */
  owner = "";

  /**
   * @generated from field: uint64 ID = 2;
   */
  ID = protoInt64.zero;

  /**
   * Amount of unlocking coins. Unlock all if not set.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 3;
   */
  coins: Coin[] = [];

  constructor(data?: PartialMessage<MsgForceUnlock>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.lockup.MsgForceUnlock";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "coins", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgForceUnlock {
    return new MsgForceUnlock().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgForceUnlock {
    return new MsgForceUnlock().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgForceUnlock {
    return new MsgForceUnlock().fromJsonString(jsonString, options);
  }

  static equals(a: MsgForceUnlock | PlainMessage<MsgForceUnlock> | undefined, b: MsgForceUnlock | PlainMessage<MsgForceUnlock> | undefined): boolean {
    return proto3.util.equals(MsgForceUnlock, a, b);
  }
}

/**
 * @generated from message osmosis.lockup.MsgForceUnlockResponse
 */
export class MsgForceUnlockResponse extends Message<MsgForceUnlockResponse> {
  /**
   * @generated from field: bool success = 1;
   */
  success = false;

  constructor(data?: PartialMessage<MsgForceUnlockResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.lockup.MsgForceUnlockResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "success", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgForceUnlockResponse {
    return new MsgForceUnlockResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgForceUnlockResponse {
    return new MsgForceUnlockResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgForceUnlockResponse {
    return new MsgForceUnlockResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgForceUnlockResponse | PlainMessage<MsgForceUnlockResponse> | undefined, b: MsgForceUnlockResponse | PlainMessage<MsgForceUnlockResponse> | undefined): boolean {
    return proto3.util.equals(MsgForceUnlockResponse, a, b);
  }
}

/**
 * @generated from message osmosis.lockup.MsgSetRewardReceiverAddress
 */
export class MsgSetRewardReceiverAddress extends Message<MsgSetRewardReceiverAddress> {
  /**
   * @generated from field: string owner = 1;
   */
  owner = "";

  /**
   * @generated from field: uint64 lockID = 2;
   */
  lockID = protoInt64.zero;

  /**
   * @generated from field: string reward_receiver = 3;
   */
  rewardReceiver = "";

  constructor(data?: PartialMessage<MsgSetRewardReceiverAddress>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.lockup.MsgSetRewardReceiverAddress";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "lockID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "reward_receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetRewardReceiverAddress {
    return new MsgSetRewardReceiverAddress().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetRewardReceiverAddress {
    return new MsgSetRewardReceiverAddress().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetRewardReceiverAddress {
    return new MsgSetRewardReceiverAddress().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSetRewardReceiverAddress | PlainMessage<MsgSetRewardReceiverAddress> | undefined, b: MsgSetRewardReceiverAddress | PlainMessage<MsgSetRewardReceiverAddress> | undefined): boolean {
    return proto3.util.equals(MsgSetRewardReceiverAddress, a, b);
  }
}

/**
 * @generated from message osmosis.lockup.MsgSetRewardReceiverAddressResponse
 */
export class MsgSetRewardReceiverAddressResponse extends Message<MsgSetRewardReceiverAddressResponse> {
  /**
   * @generated from field: bool success = 1;
   */
  success = false;

  constructor(data?: PartialMessage<MsgSetRewardReceiverAddressResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.lockup.MsgSetRewardReceiverAddressResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "success", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetRewardReceiverAddressResponse {
    return new MsgSetRewardReceiverAddressResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetRewardReceiverAddressResponse {
    return new MsgSetRewardReceiverAddressResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetRewardReceiverAddressResponse {
    return new MsgSetRewardReceiverAddressResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSetRewardReceiverAddressResponse | PlainMessage<MsgSetRewardReceiverAddressResponse> | undefined, b: MsgSetRewardReceiverAddressResponse | PlainMessage<MsgSetRewardReceiverAddressResponse> | undefined): boolean {
    return proto3.util.equals(MsgSetRewardReceiverAddressResponse, a, b);
  }
}

/**
 * DEPRECATED
 * Following messages are deprecated but kept to support indexing.
 *
 * @generated from message osmosis.lockup.MsgUnlockPeriodLock
 */
export class MsgUnlockPeriodLock extends Message<MsgUnlockPeriodLock> {
  /**
   * @generated from field: string owner = 1;
   */
  owner = "";

  /**
   * @generated from field: uint64 ID = 2;
   */
  ID = protoInt64.zero;

  constructor(data?: PartialMessage<MsgUnlockPeriodLock>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.lockup.MsgUnlockPeriodLock";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnlockPeriodLock {
    return new MsgUnlockPeriodLock().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnlockPeriodLock {
    return new MsgUnlockPeriodLock().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnlockPeriodLock {
    return new MsgUnlockPeriodLock().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUnlockPeriodLock | PlainMessage<MsgUnlockPeriodLock> | undefined, b: MsgUnlockPeriodLock | PlainMessage<MsgUnlockPeriodLock> | undefined): boolean {
    return proto3.util.equals(MsgUnlockPeriodLock, a, b);
  }
}

/**
 * @generated from message osmosis.lockup.MsgUnlockTokens
 */
export class MsgUnlockTokens extends Message<MsgUnlockTokens> {
  /**
   * @generated from field: string owner = 1;
   */
  owner = "";

  constructor(data?: PartialMessage<MsgUnlockTokens>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.lockup.MsgUnlockTokens";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnlockTokens {
    return new MsgUnlockTokens().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnlockTokens {
    return new MsgUnlockTokens().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnlockTokens {
    return new MsgUnlockTokens().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUnlockTokens | PlainMessage<MsgUnlockTokens> | undefined, b: MsgUnlockTokens | PlainMessage<MsgUnlockTokens> | undefined): boolean {
    return proto3.util.equals(MsgUnlockTokens, a, b);
  }
}

