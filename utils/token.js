import crypto from "crypto";

// Tokens are stores hashed, so in case that the DB is leaked somehow, it doesn't expose usable JWTs
export const hashToken = (token) => crypto.createHash('sha256').update(token).digest('hex');