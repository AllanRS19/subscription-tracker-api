import mongoose from "mongoose";

// This model stores the tokens of users who signed out so they can't be used again
const blackListedTokenSchema = new mongoose.Schema({
    tokenHash: {
        type: String,
        required: true,
        unique: true
    },
    expiresAt: {
        type: Date,
        required: true
    }
});

// Remove each document automatically once the token expires
blackListedTokenSchema.index({ expiresAt: 1 }, { expiresAfterSeconds: 0 });

const BlacklistedToken = mongoose.model('BlacklistedToken', blackListedTokenSchema);

export default BlacklistedToken;