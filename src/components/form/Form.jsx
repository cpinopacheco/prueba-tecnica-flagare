import styles from "./Form.module.css";
import rectangleSection from "../../assets/img/rectangleFormSection.png";
import iconEmail from "../../assets/img/iconEmail.svg";

const Form = () => {
  return (
    <>
      <img
        src={rectangleSection}
        className={styles.imgRectangle}
        alt="img-rectangle"
      />
      <section className={styles.containerSection}>
        <h2 className="fw-bold">
          ¡Reúnete con nosotros y hablemos de negocios!
        </h2>

        <form className="container my-lg-5">
          <div className="row">
            <div className="d-lg-flex justify-content-between">
              {/* sección datos personales */}
              <div className="col-lg-3 my-5 my-lg-0">
                <h5 className="fw-bold my-3">Datos Personales</h5>
                <div className="col-12 d-flex flex-column my-4">
                  <label htmlFor="nombre" className="">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className={styles.inputForm}
                  />
                </div>
                <div className="col-12 d-flex flex-column my-4">
                  <label htmlFor="apellidoPaterno">Apellido Paterno</label>
                  <input
                    type="text"
                    id="apellidoPaterno"
                    name="apellidoPaterno"
                    className={styles.inputForm}
                  />
                </div>
                <div className="col-12 d-flex flex-column my-4">
                  <label htmlFor="apellidoMaterno">Apellido Materno</label>
                  <input
                    type="text"
                    id="apellidoMaterno"
                    name="apellidoMaterno"
                    className={styles.inputForm}
                  />
                </div>
              </div>

              <div className={styles.verticalLine}></div>

              {/* sección medios de comunicación */}
              <div className="col-lg-3 my-5 my-lg-0">
                <h5 className="fw-bold my-3">Medios de comunicación</h5>
                <div className="col-12 d-flex flex-column my-4">
                  <label htmlFor="correoElectronico" className="">
                    Correo Electrónico
                  </label>
                  <input
                    type="text"
                    id="correoElectronico"
                    name="correoElectronico"
                    className={styles.inputForm}
                  />
                </div>
                <div className="col-12 d-flex flex-column my-4">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="number"
                    id="telefono"
                    name="telefono"
                    className={styles.inputForm}
                  />
                </div>

                <p className="d-block">Favor responder a</p>
                <div className="col-12 d-flex gap-3 ">
                  <label>
                    <input
                      type="radio"
                      name="reply"
                      id="reply"
                      value="correo-electronico"
                      className="mx-1"
                      defaultChecked
                    />
                    Correo Electronico
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="reply"
                      id="reply"
                      value="Telefono"
                      className="mx-1"
                    />
                    Teléfono
                  </label>
                </div>
              </div>

              <div className={styles.verticalLine}></div>

              {/* sección de contacto */}
              <div className="col-lg-3 my-5 my-lg-0">
                <h5 className="fw-bold my-3">Motivo del contacto</h5>
                <div className="col-12 d-flex flex-column my-4">
                  <label htmlFor="nombre" className="">
                    Motivo
                  </label>
                  <select
                    name="nombre"
                    id="nombre"
                    className={styles.inputForm}
                  >
                    <option
                      value="Seleccione un motivo"
                      className={styles.inputForm}
                      disabled
                    >
                      Seleccione un motivo
                    </option>
                    <option value="opcion-1" className={styles.inputForm}>
                      opcion 1
                    </option>
                    <option value="opcion-2" className={styles.inputForm}>
                      opcion 2
                    </option>
                  </select>
                </div>

                <div className="col-12 d-flex flex-column my-4">
                  <label htmlFor="detalle">Detalle</label>
                  <textarea
                    name="detalle"
                    id=""
                    cols="0"
                    rows="3"
                    className={styles.inputForm}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-center my-5">
                  <button
                    type="submit"
                    className="btn btn-primary text-white d-flex align-items-center"
                  >
                    Enviar
                    <img src={iconEmail} alt="icon-email" className="mx-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
