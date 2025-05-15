import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    mobileNumber: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    guest: {
      type: Number,
      def: 1
    },
    date: {
      type: Date
    },
    startingTime: {
      type: Number,
      required: true,
    },
    endingTime: {
      type: Number,
      required: true,
    },
    game: {
      type: String,
      required: true,
    },
    flag: {
      type: String,
      def: "Waiting",
    }
  },
  { timestamps: true }
);

export const Ticket = mongoose.model("Ticket", ticketSchema);
