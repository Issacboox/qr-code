"use client";

export default function ConfirmModal({ onConfirm, onClose }: any) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-4">
        <p>ยืนยันการลบ?</p>

        <div className="flex gap-2 mt-4">
          <button onClick={onClose} className="px-3 py-1 border">
            ยกเลิก
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-3 py-1"
          >
            ลบ
          </button>
        </div>
      </div>
    </div>
  );
}