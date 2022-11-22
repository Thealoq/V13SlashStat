const mongoose = require("mongoose");

const GuildSettings = mongoose.Schema(
  {
    GuildId: String,
    Set: Array,
    type: String
  },
  { minimize: false, collection: "GuildSettings" }
);

module.exports = mongoose.model("GuildSettings", GuildSettings);