import * as Yup from "yup";

const allianceValidationYup = Yup.object().shape({
  // Localización
  localization: Yup.object().shape({
    es: Yup.object().shape({
      title: Yup.string().required("El título en español es obligatorio"),
      sub_title: Yup.string().required(
        "El subtítulo en español es obligatorio"
      ),
      details: Yup.string().required(
        "Los detalles en español son obligatorios"
      ),
      service_1: Yup.string().nullable(),
      service_1_details: Yup.string().nullable(),
      service_2: Yup.string().nullable(),
      service_2_details: Yup.string().nullable(),
    }),
    en: Yup.object().shape({
      title: Yup.string().required("El título en inglés es obligatorio"),
      sub_title: Yup.string().required("El subtítulo en inglés es obligatorio"),
      details: Yup.string().required("Los detalles en inglés son obligatorios"),
      service_1: Yup.string().nullable(),
      service_1_details: Yup.string().nullable(),
      service_2: Yup.string().nullable(),
      service_2_details: Yup.string().nullable(),
    }),
    pt: Yup.object().shape({
      title: Yup.string().required("El título en portugués es obligatorio"),
      sub_title: Yup.string().required(
        "El subtítulo en portugués es obligatorio"
      ),
      details: Yup.string().required(
        "Los detalles en portugués son obligatorios"
      ),
      service_1: Yup.string().nullable(),
      service_1_details: Yup.string().nullable(),
      service_2: Yup.string().nullable(),
      service_2_details: Yup.string().nullable(),
    }),
  }),

  // Datos generales
  category: Yup.string().required("La categoría es obligatoria"),
  position: Yup.number()
    .typeError("La posición debe ser un número")
    .required("La posición es obligatoria"),
  lat: Yup.number()
    .typeError("La latitud debe ser un número")
    .required("La latitud es obligatoria"),
  lng: Yup.number()
    .typeError("La longitud debe ser un número")
    .required("La longitud es obligatoria"),
  wallet: Yup.string().typeError("La wallet debe ser un string"),
  city: Yup.string().required("La ciudad es obligatoria"),
  province: Yup.string().required("La provincia es obligatoria"),
  country: Yup.string().required("El país es obligatorio"),

  // Enlaces de contacto (opcionales)
  link_whatsapp: Yup.string().url("Debe ser una URL válida").nullable(),
  link_instagram: Yup.string().url("Debe ser una URL válida").nullable(),
  link_tiktok: Yup.string().url("Debe ser una URL válida").nullable(),
  link_website: Yup.string().url("Debe ser una URL válida").nullable(),
  link_airbnb: Yup.string().url("Debe ser una URL válida").nullable(),

  // Imágenes
  images: Yup.array()
    .of(Yup.string().url("Debe ser una URL válida"))
    .nullable(),

  // Otros
  outstanding: Yup.boolean(), // Campo opcional, por defecto es falso
});

export default allianceValidationYup;
