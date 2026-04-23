"use client";

import { QRCodeCanvas } from "qrcode.react";

export default function QRModal({ code, onClose }: any) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6">
        <QRCodeCanvas value={code} size={200} />
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4">
          Close
        </button>
      </div>
    </div>
  );
}