import { useState } from "react";

export default function FileUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const [tags, setTags] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0 || !tags) {
      alert("Veuillez sélectionner des fichiers et ajouter des tags.");
      return;
    }

    // Simuler l'upload des fichiers avec les tags
    const formData = new FormData();
    files.forEach((file) => formData.append("images", file));
    formData.append("tags", tags);

    console.log("Fichiers uploadés avec les tags :", formData);
    alert("Upload réussi !");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Sélectionner des images</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Tags (séparés par des virgules)</label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          placeholder="Ex: Vue avant, Vue arrière"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Upload
      </button>
    </form>
  );
}