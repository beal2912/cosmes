// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file sunrise/tokenconverter/events.proto (package sunrise.tokenconverter, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * EventConvert
 *
 * @generated from message sunrise.tokenconverter.EventConvert
 */
export class EventConvert extends Message<EventConvert> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * @generated from field: string amount = 2;
   */
  amount = "";

  constructor(data?: PartialMessage<EventConvert>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.tokenconverter.EventConvert";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventConvert {
    return new EventConvert().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventConvert {
    return new EventConvert().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventConvert {
    return new EventConvert().fromJsonString(jsonString, options);
  }

  static equals(a: EventConvert | PlainMessage<EventConvert> | undefined, b: EventConvert | PlainMessage<EventConvert> | undefined): boolean {
    return proto3.util.equals(EventConvert, a, b);
  }
}
