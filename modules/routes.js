import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  const findAllModulesById = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModuleByCourseId(cid);
    res.json(modules);
  };

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const module = req.body;
    const status = await dao.updateModule(mid, module);
    res.sendStatus(204);
  };

  const createModule = async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    const status = await dao.createModule(newModule);
    res.send(newModule);
  };

  const deleteModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.deleteModule(mid);
    res.sendStatus(200);
  };

  app.delete("/api/modules/:mid", deleteModule);

  app.put("/api/modules/:mid", updateModule);

  app.post("/api/courses/:cid/modules", createModule);

  app.get("/api/courses/:cid/modules", findAllModulesById);
}
