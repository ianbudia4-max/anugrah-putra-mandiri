"use client";

import { useState } from "react";
import { RotateCcw, MessageCircle } from "lucide-react";
import { getProductBySlug } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { WhatsAppButton } from "./WhatsAppButton";
import { productWhatsAppMessage } from "@/lib/whatsapp";

type Usage = "Sekolah" | "Kantor" | "Meeting" | "Rumah" | "Lainnya";
type Magnet = "Ya" | "Tidak";
type Size = "Kecil" | "Sedang" | "Besar" | "Custom";

interface Answers {
  usage: Usage | null;
  magnet: Magnet | null;
  size: Size | null;
}

const usageOptions: Usage[] = ["Sekolah", "Kantor", "Meeting", "Rumah", "Lainnya"];
const magnetOptions: Magnet[] = ["Ya", "Tidak"];
const sizeOptions: Size[] = ["Kecil", "Sedang", "Besar", "Custom"];

function recommend(answers: Answers): string[] {
  if (answers.size === "Custom") {
    return ["papan-tulis-custom"];
  }

  if (answers.magnet === "Ya") {
    return ["whiteboard-magnetik-premium"];
  }

  if (answers.usage === "Meeting") {
    return ["glassboard-premium", "whiteboard-standing-portable"];
  }

  if (answers.usage === "Kantor") {
    return ["glassboard-premium", "whiteboard-standar"];
  }

  if (answers.usage === "Sekolah") {
    return ["whiteboard-standar", "whiteboard-magnetik-premium"];
  }

  return ["whiteboard-standar"];
}

export function ProductFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({ usage: null, magnet: null, size: null });

  const totalSteps = 3;
  const isDone = step >= totalSteps;

  function reset() {
    setAnswers({ usage: null, magnet: null, size: null });
    setStep(0);
  }

  function selectOption<K extends keyof Answers>(key: K, value: Answers[K]) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep((s) => s + 1);
  }

  const recommendedSlugs = isDone ? recommend(answers) : [];
  const recommendedProducts = recommendedSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="rounded-2xl border border-line bg-white p-5 sm:p-8">
      {!isDone && (
        <div className="mb-6 flex gap-1.5">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-blue" : "bg-line"}`}
            />
          ))}
        </div>
      )}

      {step === 0 && (
        <FinderStep
          question="Digunakan untuk apa?"
          options={usageOptions}
          onSelect={(v) => selectOption("usage", v as Usage)}
        />
      )}

      {step === 1 && (
        <FinderStep
          question="Membutuhkan magnet?"
          options={magnetOptions}
          onSelect={(v) => selectOption("magnet", v as Magnet)}
        />
      )}

      {step === 2 && (
        <FinderStep
          question="Ukuran yang dibutuhkan?"
          options={sizeOptions}
          onSelect={(v) => selectOption("size", v as Size)}
        />
      )}

      {isDone && (
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-navy">Rekomendasi Produk</h3>
            <button
              type="button"
              onClick={reset}
              className="focus-ring inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-semibold text-blue hover:bg-blue/5"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Ulangi
            </button>
          </div>
          <p className="mt-1.5 text-sm text-ink/60">
            Berdasarkan jawaban Anda, berikut produk yang paling sesuai.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {recommendedProducts[0] && (
            <div className="mt-6 border-t border-line pt-5">
              <WhatsAppButton
                message={productWhatsAppMessage(recommendedProducts[0].name)}
                className="w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                Tanyakan Produk Ini
              </WhatsAppButton>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FinderStep({
  question,
  options,
  onSelect,
}: {
  question: string;
  options: string[];
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <h3 className="text-lg font-bold text-navy">{question}</h3>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className="focus-ring rounded-lg border border-line bg-surface px-4 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-blue hover:bg-blue/5"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
