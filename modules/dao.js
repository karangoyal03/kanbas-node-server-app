import model from "./model.js";

export const findAllModules = async() => {
  await model.find();
};

export const findModuleByCourseId  = async(cid) => {
  await model.findOne({ course: cid });
};

export const createModule = async(module) => {
  delete module._id;
  return await model.create(module);
};

export const updateModule= async(cid, module) =>
  await model.updateOne({ cid: cid }, { $set: module });

export const deleteModule = async(cid) => await model.deleteOne({ cid: cid });