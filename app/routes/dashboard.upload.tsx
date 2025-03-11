import FileUpload from "~/components/FileUpload";

export default function Upload() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Upload d'images</h1>
      <FileUpload />
    </div>
  );
}