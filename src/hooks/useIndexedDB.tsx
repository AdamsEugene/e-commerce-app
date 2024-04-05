// useIndexedDB.tsx
import { useState, useEffect } from "react";
import { set, get, del, keys } from "idb-keyval";

function useIndexedDB<T>(key: string) {
  const [value, setValue] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load initial value from IndexedDB
    async function loadValueFromDB(_key = key) {
      try {
        const storedValue = (await get<T>(key)) || null;
        setValue(storedValue);
      } catch (error) {
        console.error("Error loading value from IndexedDB:", error);
        setError("Error loading value from IndexedDB");
      } finally {
        setLoading(false);
      }
    }

    loadValueFromDB(key);

    // Cleanup function
    return () => {
      // No cleanup needed for now
    };
  }, [key]);

  const setValueInDB = async (newValue: T, _key = key) => {
    try {
      await set(_key, newValue);
      setValue(newValue);
    } catch (error) {
      console.error("Error setting value in IndexedDB:", error);
      setError("Error setting value in IndexedDB");
    }
  };

  const deleteValueFromDB = async (_key = key) => {
    try {
      await del(_key);
      setValue(null);
    } catch (error) {
      console.error("Error deleting value from IndexedDB:", error);
      setError("Error deleting value from IndexedDB");
    }
  };

  return { value, setValueInDB, deleteValueFromDB, loading, error };
}

export default useIndexedDB;
