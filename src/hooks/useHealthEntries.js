import { useState, useEffect } from "react";

export function useHealthEntries() {
  // Logic ambil data dari localStorage
  const [entries, setEntries] = useState(() => {
    try {
      const savedEntries = localStorage.getItem("healthEntries");
      if (savedEntries) {
        return JSON.parse(savedEntries).map((entry) => ({
          ...entry,
          createdAt: new Date(entry.createdAt),
        }));
      }
    } catch (error) {
      console.error("Error parsing health entries from localStorage:", error);
    }
    // Default data jika tidak ada di localStorage
    return [
      {
        id: "1",
        type: "sugar",
        value: 100,
        description: "i think i had too much sugar today",
        createdAt: new Date("2025-07-23T10:56:00"),
      },
      {
        id: "2",
        type: "sugar",
        value: 100,
        description: "i think i had too much sugar today",
        createdAt: new Date("2025-07-23T10:56:00"),
      },
      {
        id: "3",
        type: "condition",
        value: 0,
        description: "Flu and headaches",
        createdAt: new Date("2025-07-23T10:56:00"),
      },
    ];
  });

  // Logic simpan data ke localStorage setiap kali entries berubah
  useEffect(() => {
    if (entries) {
      localStorage.setItem("healthEntries", JSON.stringify(entries));
    }
  }, [entries]);

  // Fungsi untuk menambah entry
  const addEntry = (type, value, description) => {
    const newEntry = {
      id: Date.now().toString(),
      type,
      value: type === "Condition" ? 0 : parseFloat(value),
      description: description.trim(),
      createdAt: new Date(),
    };
    setEntries([newEntry, ...entries]);
  };

  // Fungsi untuk menghapus entry
  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return { entries, setEntries, addEntry, deleteEntry };
}
