import model from "./model";

export const findAllCourses = () => {
  model.find();
};

export const findByCourseId = (id) => {
  model.findOne({ cid: id });
};

export const createCourse = (course) => {
  delete course._id;
  return model.create(course);
};

export const updateCourse = (cid, course) =>
  model.updateOne({ cid: cid }, { $set: course });

export const deleteCourse = (cid) => model.deleteOne({ cid: cid });
