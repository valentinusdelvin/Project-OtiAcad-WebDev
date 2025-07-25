import { useMemo, useState } from "react";
import { useHealthEntries } from "../../hooks/useHealthEntries";
import HeaderHealth from "./HeaderHealth";
import HealthStats from "./HealthStats";
import HealthForm from "./HealthForm";
import HealthHistory from "./HealthHistory";

const HealthTracker = () => {
  const { entries, setEntries, addEntry, deleteEntry } = useHealthEntries();
  const [inputType, setInputType] = useState("Calories");
  const [inputValue, setInputValue] = useState("");
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState("all");

  const todayStats = useMemo(() => {
    const today = new Date().toDateString();
    const todayEntries = entries.filter(
      (entry) => entry.createdAt.toDateString() === today,
    );

    const calories = todayEntries
      .filter((entry) => entry.type === "Calories")
      .reduce((acc, entry) => acc + entry.value, 0);

    const sugar = todayEntries
      .filter((entry) => entry.type === "Sugar")
      .reduce((sum, entry) => sum + Number(entry.value), 0);

    const water = todayEntries
      .filter((entry) => entry.type === "Water")
      .reduce((sum, entry) => sum + Number(entry.value), 0);

    const conditions = todayEntries
      .filter((entry) => entry.type === "Condition")
      .map((entry) => entry.description);

    return { calories, sugar, water, conditions };
  }, [entries]);

  const filteredEntries = useMemo(() => {
    if (filter === "all") return entries;
    return entries.filter((entry) => entry.type.toLowerCase() === filter);
  }, [entries, filter]);

  const handleAddEntry = () => {
    if (
      (inputType !== "Condition" && inputValue && description.trim()) ||
      (inputType === "Condition" && description.trim())
    ) {
      addEntry(inputType, inputValue, description);
      setInputValue("");
      setDescription("");
    }
  };

  const getFilterCounts = () => {
    const counts = {
      all: entries.length,
      calories: entries.filter((e) => e.type === "Calories").length,
      sugar: entries.filter((e) => e.type === "Sugar").length,
      water: entries.filter((e) => e.type === "Water").length,
      condition: entries.filter((e) => e.type === "Condition").length,
    };
    return counts;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddEntry();
  };

  const getDescriptionPlaceholder = () => {
    switch (inputType) {
      case "Calories":
        return "What did you eat?";
      case "Sugar":
        return "Any worries?";
      case "Water":
        return "Any notes?";
      case "Condition":
        return "Describe your condition & mood";
      default:
        return "Any notes?";
    }
  };

  // Perbaiki logic validasi form
  const isFormValid = () => {
    if (inputType === "Condition") {
      return description.trim() !== "";
    } else {
      return inputValue !== "" && description.trim() !== "";
    }
  };

  const counts = getFilterCounts();

  return (
    <>
      {/* Header */}
      <HeaderHealth />
      {/* Today's Summary */}
      <HealthStats todayStats={todayStats} />
      {/* Entry Form */}
      <HealthForm
        inputType={inputType}
        setInputType={setInputType}
        inputValue={inputValue}
        setInputValue={setInputValue}
        description={description}
        setDescription={setDescription}
        handleSubmit={handleSubmit}
        getDescriptionPlaceholder={getDescriptionPlaceholder}
        isFormValid={isFormValid}
      />
      {/* Entry History */}
      <HealthHistory
        setFilter={setFilter}
        counts={counts}
        filter={filter}
        filteredEntries={filteredEntries}
        deleteEntry={deleteEntry}
      />
    </>
  );
};

export default HealthTracker;
