import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FUser-Profile-PNG-Clipart.png&f=1&nofb=1&ipt=3c5a20aac82dccb7f4931ff64dba53d75887f4f0a86fcff80dac66e1a16e65a1&ipo=images",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
