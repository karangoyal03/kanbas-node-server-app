import model from "./model.js";

export const findAllModules = async () => {
  return await model.find();
};

export const findModuleByCourseId = async (cid) => {
  return await model.find({ course: cid });
};

export const createModule = async (module) => {
  delete module._id;
  return await model.create(module);
};

export const updateModule = async (mid, module) =>
  await model.updateOne({ mid: mid }, { $set: module });

export const deleteModule = async (mid) => await model.deleteOne({ _id: mid });
