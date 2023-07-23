import mongoose from "mongoose";

const taskschema = new mongoose.Schema({
    name: { type: String, requred: true },
    description: { type: String, required: true },
    createdOn: { type: Date, required: true },
    deadline: { type: Date, required: true },
    completedOn: { type: Date },
    isCompleted: { type: Boolean, required: true, default: false }

});

export const Taskmodel = mongoose.model('taskdata',taskschema)