"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AddForm({ refresh }: any) {
  const [code, setCode] = useState("");
  const router = useRouter();

  const formatCode = (value: string) => {
    return (
      value
        .replace(/[^A-Z0-9]/g, "")
        .slice(0, 24)
        .match(/.{1,4}/g)
        ?.join("-") || ""
    );
  };

  const handleAdd = async () => {
    try {
      await axios.post("/api/products", { code });
      setCode("");
      router.refresh(); 
    } catch (err: any) {
      console.log(err.response);
      alert(err.response?.data?.error || "Error");
    }
  };

  return (
    <div className="flex justify-center items-center w-full mb-10">
      <div className="flex w-full gap-2">
        <input
          value={code}
          onChange={(e) => setCode(formatCode(e.target.value.toUpperCase()))}
          className="border px-3 py-2 w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 rounded-2xl hover:bg-blue-600"
        >
          ADD
        </button>
      </div>
    </div>
  );
}
