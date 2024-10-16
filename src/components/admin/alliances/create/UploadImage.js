/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./uploadImage.module.css";
import { ReactSortable } from "react-sortablejs";
import { MdDeleteForever } from "react-icons/md";

export default function UploadImageBtn({
  selectedFiles,
  setSelectedFiles,
  previews,
  setPreviews,
}) {
  // Maneja la selección de imágenes
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // Definir tamaño máximo en bytes (2MB)
    const maxSize = 150 * 1024; // 150 KB

    // Filtrar imágenes que cumplan con los formatos permitidos y el tamaño
    const validFormats = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
    const validFiles = [];
    const newPreviews = [];

    files.forEach((file) => {
      if (!validFormats.includes(file.type)) {
        alert(
          `El formato de la imagen ${file.name} no es válido. Solo se permiten archivos JPG, JPEG, PNG o WEBP.`
        );
      } else if (file.size > maxSize) {
        alert(
          `La imagen ${file.name} excede el tamaño máximo permitido de 150KB.`
        );
      } else {
        validFiles.push(file);
        newPreviews.push(URL.createObjectURL(file)); // Crear URL de vista previa
      }
    });

    if (validFiles.length > 0) {
      setSelectedFiles((prevFiles) => [...prevFiles, ...validFiles]);
      setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
    }
  };

  // Maneja la eliminación de imágenes seleccionadas
  const handleRemoveImage = (index) => {
    setPreviews((prev) => prev.filter((_, i) => i !== index));
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      <span className={styles.customLabel}>Subir imágenes</span>
      <label htmlFor="file-upload" className={styles.customFileUpload}>
        Selecciona hasta 5 imágenes
      </label>

      <input
        id="file-upload"
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageChange}
        className={styles.input}
      />

      <ReactSortable
        group="groupName"
        animation={200}
        delayOnTouchStart={true}
        delay={2}
        list={previews}
        setList={setPreviews}
        className={styles.previewContainer}
      >
        {previews.map((image, index) => (
          <div key={index} className={styles.previewItem}>
            <img
              src={image}
              alt={`preview-${index}`}
              className={styles.thumbnail}
            />
            <button
              onClick={() => handleRemoveImage(index)}
              className={styles.removeButton}
            >
              <MdDeleteForever />
            </button>
          </div>
        ))}
      </ReactSortable>
    </div>
  );
}
