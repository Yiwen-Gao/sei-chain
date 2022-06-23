/* eslint-disable */
import { positionDirectionFromJSON, denomFromJSON, positionEffectFromJSON, positionDirectionToJSON, denomToJSON, positionEffectToJSON, } from "../dex/enums";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "seiprotocol.seichain.dex";
const baseOrderCancellation = {
    positionDirection: 0,
    price: "",
    quantity: "",
    priceDenom: 0,
    assetDenom: 0,
    positionEffect: 0,
    leverage: "",
};
export const OrderCancellation = {
    encode(message, writer = Writer.create()) {
        if (message.positionDirection !== 0) {
            writer.uint32(8).int32(message.positionDirection);
        }
        if (message.price !== "") {
            writer.uint32(18).string(message.price);
        }
        if (message.quantity !== "") {
            writer.uint32(26).string(message.quantity);
        }
        if (message.priceDenom !== 0) {
            writer.uint32(32).int32(message.priceDenom);
        }
        if (message.assetDenom !== 0) {
            writer.uint32(40).int32(message.assetDenom);
        }
        if (message.positionEffect !== 0) {
            writer.uint32(48).int32(message.positionEffect);
        }
        if (message.leverage !== "") {
            writer.uint32(58).string(message.leverage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOrderCancellation };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionDirection = reader.int32();
                    break;
                case 2:
                    message.price = reader.string();
                    break;
                case 3:
                    message.quantity = reader.string();
                    break;
                case 4:
                    message.priceDenom = reader.int32();
                    break;
                case 5:
                    message.assetDenom = reader.int32();
                    break;
                case 6:
                    message.positionEffect = reader.int32();
                    break;
                case 7:
                    message.leverage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOrderCancellation };
        if (object.positionDirection !== undefined &&
            object.positionDirection !== null) {
            message.positionDirection = positionDirectionFromJSON(object.positionDirection);
        }
        else {
            message.positionDirection = 0;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = String(object.price);
        }
        else {
            message.price = "";
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = String(object.quantity);
        }
        else {
            message.quantity = "";
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = denomFromJSON(object.priceDenom);
        }
        else {
            message.priceDenom = 0;
        }
        if (object.assetDenom !== undefined && object.assetDenom !== null) {
            message.assetDenom = denomFromJSON(object.assetDenom);
        }
        else {
            message.assetDenom = 0;
        }
        if (object.positionEffect !== undefined && object.positionEffect !== null) {
            message.positionEffect = positionEffectFromJSON(object.positionEffect);
        }
        else {
            message.positionEffect = 0;
        }
        if (object.leverage !== undefined && object.leverage !== null) {
            message.leverage = String(object.leverage);
        }
        else {
            message.leverage = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.positionDirection !== undefined &&
            (obj.positionDirection = positionDirectionToJSON(message.positionDirection));
        message.price !== undefined && (obj.price = message.price);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.priceDenom !== undefined &&
            (obj.priceDenom = denomToJSON(message.priceDenom));
        message.assetDenom !== undefined &&
            (obj.assetDenom = denomToJSON(message.assetDenom));
        message.positionEffect !== undefined &&
            (obj.positionEffect = positionEffectToJSON(message.positionEffect));
        message.leverage !== undefined && (obj.leverage = message.leverage);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOrderCancellation };
        if (object.positionDirection !== undefined &&
            object.positionDirection !== null) {
            message.positionDirection = object.positionDirection;
        }
        else {
            message.positionDirection = 0;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = "";
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        else {
            message.quantity = "";
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = object.priceDenom;
        }
        else {
            message.priceDenom = 0;
        }
        if (object.assetDenom !== undefined && object.assetDenom !== null) {
            message.assetDenom = object.assetDenom;
        }
        else {
            message.assetDenom = 0;
        }
        if (object.positionEffect !== undefined && object.positionEffect !== null) {
            message.positionEffect = object.positionEffect;
        }
        else {
            message.positionEffect = 0;
        }
        if (object.leverage !== undefined && object.leverage !== null) {
            message.leverage = object.leverage;
        }
        else {
            message.leverage = "";
        }
        return message;
    },
};
