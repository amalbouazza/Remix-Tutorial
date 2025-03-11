import Chart from "~/components/Chart";

export default function Overview() {
  const data = {
    labels: ["Marque A", "Marque B", "Marque C"],
    datasets: [
      {
        label: "Nombre d'images",
        data: [120, 90, 200],
        backgroundColor: ["#3b82f6", "#ef4444", "#10b981"],
      },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Vue d'ensemble</h1>
      <div className="grid grid-cols-2 gap-6">
        <Chart type="bar" data={data} title="Images par marque" />
        <Chart type="pie" data={data} title="Distribution des images" />
      </div>
    </div>
  );
}