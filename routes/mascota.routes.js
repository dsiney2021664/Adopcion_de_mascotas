const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { mascotasPost, mascotasGet, getMascotaByid, mascotasPut, mascotasDelete } = require('../controllers/mascota.controller');
const { existeMascotaById } = require('../helpers/db-validator');

const router = Router();

router.get("/", mascotasGet);

router.get(
    "/:id",
    [
        check("id", "El id no es un formato valido de MongoDB").isMongoId(),
        check("id").custom(existeMascotaById),
        validarCampos
    ], getMascotaByid);

router.put(
    "/:id",
    [
        check("id", "El id no es un formato de MongoDB").isMongoId(),
        check("id").custom(existeMascotaById),
    ], mascotasPut);

router.delete(
    "/:id",
    [
        check("id", "El id no es un formato valido de MongoDB").isMongoId(),
        check("id").custom(existeMascotaById),
        validarCampos
    ], mascotasDelete);

router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        validarCampos
    ], mascotasPost);

    module.exports = router;
