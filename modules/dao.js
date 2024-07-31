import model from "./model";

export const findAllModules = () => {
  model.find();
};

export const findModuleByCourseId  = (cid) => {
  model.findOne({ course: cid });
};

export const createModule = (module) => {
  delete module._id;
  return model.create(module);
};

export const updateModule= (cid, module) =>
  model.updateOne({ cid: cid }, { $set: module });

export const deleteModule = (cid) => model.deleteOne({ cid: cid });