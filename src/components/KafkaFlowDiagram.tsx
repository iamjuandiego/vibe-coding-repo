export default function KafkaFlowDiagram(): JSX.Element {
  return (
    <div className="glass mt-6 rounded-2xl p-4 sm:p-5">
      <p className="mb-4 text-xs uppercase tracking-wide text-accent">Kafka Flow</p>
      <div className="grid gap-3 text-center text-xs text-white/80 sm:grid-cols-2 md:grid-cols-4">
        {["CORE-Extractor", "RabbitMQ", "Microservices", "Harmonizer & BBDD"].map((step) => (
          <div key={step} className="break-words rounded-xl border border-white/15 bg-black/25 p-3">
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
