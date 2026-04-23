"use client";

import { useState } from "react";
import axios from "axios";

export default function AddForm({ refresh }: any) {
  const [code, setCode] = useState("");

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
      refresh();
    } catch (err: any) {
      alert(err.response?.data?.error || "Error");
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        value={code}
        onChange={(e) => setCode(formatCode(e.target.value.toUpperCase()))}
        className="border px-3 py-2 w-100"
        placeholder="XXXX-XXXX-XXXX-XXXX-XXXX-XXXX"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4"
      >
        ADD
      </button>
    </div>
  );
}