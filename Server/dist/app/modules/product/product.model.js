"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    id: { type: String, required: false },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    rating: { type: Number, default: 0 },
    image: { type: String, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
}, { timestamps: true });
exports.Product = (0, mongoose_1.model)("Product", productSchema);
