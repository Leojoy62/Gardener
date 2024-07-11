"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    id: { type: String, required: false },
    name: { type: String, required: true },
    phone: { type: Number, default: 0 },
    address: { type: String, required: true },
    payableTotal: { type: Number, required: true },
}, { timestamps: true });
exports.Order = (0, mongoose_1.model)("Order", orderSchema);
