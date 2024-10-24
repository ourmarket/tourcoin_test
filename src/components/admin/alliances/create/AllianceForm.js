"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";

import styles from "./AllianceForm.module.css"; // Importa los estilos de CSS Modules
import allianceValidationYup from "@/validations/allianceValidationYup";
import { v4 as uuidv4 } from "uuid";
import UploadImageBtn from "./UploadImage";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllianceForm = ({ onSubmit }) => {
  const initialValues = {
    // Localización
    localization: {
      es: {
        title: "",
        sub_title: "",
        details: "",
        service_1: "",
        service_1_details: "",
        service_2: "",
        service_2_details: "",
      },
      en: {
        title: "",
        sub_title: "",
        details: "",
        service_1: "",
        service_1_details: "",
        service_2: "",
        service_2_details: "",
      },
      pt: {
        title: "",
        sub_title: "",
        details: "",
        service_1: "",
        service_1_details: "",
        service_2: "",
        service_2_details: "",
      },
    },
    // Datos generales
    category: "",
    position: undefined,
    lat: "",
    lng: "",
    accept_TRC: false,
    wallet: "",

    //ubicación
    city: "",
    province: "",
    country: "",

    // Enlaces de contacto
    link_whatsapp: "",
    link_instagram: "",
    link_tiktok: "",
    link_website: "",
    link_airbnb: "",

    // Otros
    outstanding: false, // Puede ser un checkbox
    order: 0, // Puede ser un checkbox
  };

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (values, resetForm) => {
    setIsLoading(true);
    const formData = new FormData();

    // Serializar el campo localization como JSON
    formData.append("data", JSON.stringify(values));

    // Agregar los archivos seleccionados al FormData
    selectedFiles.forEach((file) => {
      formData.append("images", file); // "images" debe coincidir con el nombre del campo en multer
    });

    // Iterar sobre el formData y mostrar su contenido
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      // Hacer la solicitud POST al servidor
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/alliances`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Indicar que estamos enviando FormData
          },
        }
      );

      console.log(response.data); // Manejar la respuesta como sea necesario

      if (response?.data?.ok) {
        toast.success("Alianza creada con éxito!");
        resetForm();
        setPreviews([]);
        setSelectedFiles([]);
      }
    } catch (error) {
      setError(error);
      console.error("Error uploading data:", error); // Manejar el error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className={styles.title}>
        <h1>Crear nueva alianza</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={allianceValidationYup}
        enableReinitialize
        onSubmit={(values, { resetForm }) => {
          handleSubmit(
            {
              ...values,
              allianceId: uuidv4(),
            },
            resetForm
          );
        }}
      >
        {({ setFieldValue }) => (
          <Form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.column}>
                <h3>Español</h3>
                <div className={styles.field}>
                  <label
                    className={styles.label}
                    htmlFor="localization.es.title"
                  >
                    Titulo ES
                  </label>
                  <Field
                    className={styles.textInput}
                    type="text"
                    id="localization.es.title"
                    name="localization.es.title"
                  />
                  <ErrorMessage
                    name="localization.es.title"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <div className={styles.field}>
                  <label
                    className={styles.label}
                    htmlFor="localization.es.sub_title"
                  >
                    Subtitulo ES
                  </label>
                  <Field
                    className={styles.textInput}
                    type="text"
                    id="localization.es.sub_title"
                    name="localization.es.sub_title"
                  />
                  <ErrorMessage
                    name="localization.es.sub_title"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <div className={styles.field}>
                  <label
                    className={styles.label}
                    htmlFor="localization.es.details"
                  >
                    Detalle ES
                  </label>
                  <Field
                    as="textarea"
                    className={styles.textArea}
                    id="localization.es.details"
                    name="localization.es.details"
                  />
                  <ErrorMessage
                    name="localization.es.details"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <div className={styles.field}>
                  <label
                    className={styles.label}
                    htmlFor="localization.es.service_1"
                  >
                    Servicio 1 ES
                  </label>
                  <Field
                    className={styles.textInput}
                    type="text"
                    id="localization.es.service_1"
                    name="localization.es.service_1"
                  />
                  <ErrorMessage
                    name="localization.es.service_1"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <div className={styles.field}>
                  <label
                    className={styles.label}
                    htmlFor="localization.es.service_1_details"
                  >
                    Servicio 1 detalle ES
                  </label>
                  <Field
                    as="textarea"
                    className={styles.textArea}
                    id="localization.es.service_1_details"
                    name="localization.es.service_1_details"
                  />
                  <ErrorMessage
                    name="localization.es.service_1_details"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <div className={styles.field}>
                  <label
                    className={styles.label}
                    htmlFor="localization.es.service_2"
                  >
                    Servicio 2 ES
                  </label>
                  <Field
                    className={styles.textInput}
                    type="text"
                    id="localization.es.service_2"
                    name="localization.es.service_2"
                  />
                  <ErrorMessage
                    name="localization.es.service_2"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <div className={styles.field}>
                  <label
                    className={styles.label}
                    htmlFor="localization.es.service_2_details"
                  >
                    Servicio 2 detalle ES
                  </label>
                  <Field
                    as="textarea"
                    className={styles.textArea}
                    id="localization.es.service_2_details"
                    name="localization.es.service_2_details"
                  />
                  <ErrorMessage
                    name="localization.es.service_2_details"
                    component="div"
                    className={styles.error}
                  />
                </div>
              </div>
              <div className={styles.column}>
                <h3>Inglés</h3>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="title_en">
                    Título EN
                  </label>
                  <Field
                    className={styles.textInput}
                    type="text"
                    id="title_en"
                    name="localization.en.title"
                  />
                  <ErrorMessage
                    name="localization.en.title"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="sub_title_en">
                    Subtítulo EN
                  </label>
                  <Field
                    className={styles.textInput}
                    type="text"
                    id="sub_title_en"
                    name="localization.en.sub_title"
                  />
                  <ErrorMessage
                    name="localization.en.sub_title"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="details_en">
                    Detalle EN
                  </label>
                  <Field
                    as="textarea"
                    className={styles.textArea}
                    id="details_en"
                    name="localization.en.details"
                  />
                  <ErrorMessage
                    name="localization.en.details"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="service_1_en">
                    Servicio 1 EN
                  </label>
                  <Field
                    className={styles.textInput}
                    type="text"
                    id="service_1_en"
                    name="localization.en.service_1"
                  />
                  <ErrorMessage
                    name="localization.en.service_1"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.field}>
                  <label
                    className={styles.label}
                    htmlFor="service_1_details_en"
                  >
                    Servicio 1 detalle EN
                  </label>
                  <Field
                    as="textarea"
                    className={styles.textArea}
                    id="service_1_details_en"
                    name="localization.en.service_1_details"
                  />
                  <ErrorMessage
                    name="localization.en.service_1_details"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="service_2_en">
                    Servicio 2 EN
                  </label>
                  <Field
                    className={styles.textInput}
                    type="text"
                    id="service_2_en"
                    name="localization.en.service_2"
                  />
                  <ErrorMessage
                    name="localization.en.service_2"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.field}>
                  <label
                    className={styles.label}
                    htmlFor="service_2_details_en"
                  >
                    Servicio 2 detalle EN
                  </label>
                  <Field
                    as="textarea"
                    className={styles.textArea}
                    id="service_2_details_en"
                    name="localization.en.service_2_details"
                  />
                  <ErrorMessage
                    name="localization.en.service_2_details"
                    component="div"
                    className={styles.error}
                  />
                </div>
              </div>
              <div className={styles.column}>
                <h3>Portugués</h3>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="title_pt">
                    Título PT
                  </label>
                  <Field
                    className={styles.textInput}
                    type="text"
                    id="title_pt"
                    name="localization.pt.title"
                  />
                  <ErrorMessage
                    name="localization.pt.title"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="sub_title_pt">
                    Subtítulo PT
                  </label>
                  <Field
                    className={styles.textInput}
                    type="text"
                    id="sub_title_pt"
                    name="localization.pt.sub_title"
                  />
                  <ErrorMessage
                    name="localization.pt.sub_title"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="details_pt">
                    Detalle PT
                  </label>
                  <Field
                    as="textarea"
                    className={styles.textArea}
                    id="details_pt"
                    name="localization.pt.details"
                  />
                  <ErrorMessage
                    name="localization.pt.details"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="service_1_pt">
                    Servicio 1 PT
                  </label>
                  <Field
                    className={styles.textInput}
                    type="text"
                    id="service_1_pt"
                    name="localization.pt.service_1"
                  />
                  <ErrorMessage
                    name="localization.pt.service_1"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.field}>
                  <label
                    className={styles.label}
                    htmlFor="service_1_details_pt"
                  >
                    Servicio 1 detalle PT
                  </label>
                  <Field
                    as="textarea"
                    className={styles.textArea}
                    id="service_1_details_pt"
                    name="localization.pt.service_1_details"
                  />
                  <ErrorMessage
                    name="localization.pt.service_1_details"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="service_2_pt">
                    Servicio 2 PT
                  </label>
                  <Field
                    className={styles.textInput}
                    type="text"
                    id="service_2_pt"
                    name="localization.pt.service_2"
                  />
                  <ErrorMessage
                    name="localization.pt.service_2"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.field}>
                  <label
                    className={styles.label}
                    htmlFor="service_2_details_pt"
                  >
                    Servicio 2 detalle PT
                  </label>
                  <Field
                    as="textarea"
                    className={styles.textArea}
                    id="service_2_details_pt"
                    name="localization.pt.service_2_details"
                  />
                  <ErrorMessage
                    name="localization.pt.service_2_details"
                    component="div"
                    className={styles.error}
                  />
                </div>
              </div>
            </div>

            <h3>Información general</h3>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="category">
                Categoría
              </label>
              <Field
                as="select"
                className={styles.selectInput}
                id="category"
                name="category"
              >
                <option value="" label="Selecciona una categoría" />
                <option value="services" label="Servicios" />
                <option value="activities" label="Actividades" />
                <option value="gastronomy" label="Gastronomía" />
                <option value="accommodation" label="Departamentos" />
              </Field>
              <ErrorMessage
                name="category"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="accept_TRC">
                Acepta TRC
              </label>
              <Field
                as="select"
                className={styles.selectInput}
                id="accept_TRC"
                name="accept_TRC"
              >
                <option value="false" label="NO" />
                <option value="true" label="SI" />
              </Field>
              <ErrorMessage
                name="accept_TRC"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="wallet">
                Wallet
              </label>
              <Field
                className={styles.textInput}
                type="text"
                id="wallet"
                name="wallet"
                placeholder="Ingresa si corresponde"
              />
              <ErrorMessage
                name="wallet"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="position">
                Posición
              </label>
              <Field
                className={styles.textInput}
                type="number"
                id="position"
                name="position"
                placeholder="Ingresa un numero entero"
              />
              <ErrorMessage
                name="position"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Destacado</label>
              <Field
                className={styles.checkboxInput}
                type="checkbox"
                id="outstanding"
                name="outstanding"
              />
            </div>

            <h3>Ubicación</h3>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="lat">
                Latitud
              </label>
              <Field
                className={styles.textInput}
                type="text"
                id="lat"
                name="lat"
              />
              <ErrorMessage
                name="lat"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="lng">
                Longitud
              </label>
              <Field
                className={styles.textInput}
                type="text"
                id="lng"
                name="lng"
              />
              <ErrorMessage
                name="lng"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="city">
                Ciudad
              </label>
              <Field
                className={styles.textInput}
                type="text"
                id="city"
                name="city"
                placeholder="Ingresa la ciudad"
              />
              <ErrorMessage
                name="city"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="province">
                Provincia
              </label>
              <Field
                className={styles.textInput}
                type="text"
                id="province"
                name="province"
                placeholder="Ingresa la provincia"
              />
              <ErrorMessage
                name="province"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="country">
                País
              </label>
              <Field
                className={styles.textInput}
                type="text"
                id="country"
                name="country"
                placeholder="Ingresa el país"
              />
              <ErrorMessage
                name="country"
                component="div"
                className={styles.error}
              />
            </div>

            <h3>Contacto</h3>
            <div className={styles.field}>
              <label className={styles.label}>WhatsApp</label>
              <Field
                className={styles.textInput}
                type="text"
                name="link_whatsapp"
              />
              <ErrorMessage
                name="link_whatsapp"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Instagram</label>
              <Field
                className={styles.textInput}
                type="text"
                name="link_instagram"
              />
              <ErrorMessage
                name="link_instagram"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>TikTok</label>
              <Field
                className={styles.textInput}
                type="text"
                name="link_tiktok"
              />
              <ErrorMessage
                name="link_tiktok"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Pagina web</label>
              <Field
                className={styles.textInput}
                type="text"
                name="link_website"
              />
              <ErrorMessage
                name="link_website"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Airbnb</label>
              <Field
                className={styles.textInput}
                type="text"
                name="link_airbnb"
              />
              <ErrorMessage
                name="link_airbnb"
                component="div"
                className={styles.error}
              />
            </div>
            <h3>Imágenes</h3>
            <UploadImageBtn
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
              previews={previews}
              setPreviews={setPreviews}
            />

            {isLoading && (
              <button type="submit" className={styles.submitButton_loading}>
                <div className="spinner"></div>Cargando...
              </button>
            )}
            {!isLoading && (
              <button type="submit" className={styles.submitButton}>
                Crear Alianza
              </button>
            )}
            {error && <div className={styles.form_error}>⚠️Error: {error}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AllianceForm;
