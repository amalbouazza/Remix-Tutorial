import { useState } from "react";
import JSZip from "jszip";
//import { saveAs } from "file-saver";
import fileSaver from "file-saver"; // Importez le module par défaut
const { saveAs } = fileSaver; // Destructurez `saveAs` depuis l'objet importé

export default function DatasetExport() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleExport = async () => {
    if (files.length === 0) {
      alert("Veuillez sélectionner des fichiers.");
      return;
    }

    const zip = new JSZip();
    files.forEach((file) => {
      zip.file(file.name, file);
    });

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "dataset.zip");
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Sélectionner des images</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        onClick={handleExport}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Exporter le dataset
      </button>
    </div>
  );
}