const mongoose = require("mongoose");

const User = mongoose.Schema(
  {
    GuildId: String,
    MemberId: String,
    VoiceTime: Number,
  },
  { minimize: false, collection: "User" }
);

module.exports = mongoose.model("User", User);