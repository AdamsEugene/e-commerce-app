"use client";

import { useState, useEffect, useCallback } from "react";
import { set, get, del, keys } from "idb-keyval";
import { simulateDelay } from "../utils/functions";

function useIndexedDB<T>(key: string, instantLoad = true) {
  const [value, setValue] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [allKeys, setAllKeys] = useState<IDBValidKey[]>([]);

  const loadValueFromDB = useCallback(
    async (delay?: boolean, _key = key) => {
      setLoading(true);
      try {
        const storedValue = (await get<T>(_key)) || null;
        setValue(storedValue);
      } catch (error) {
        console.error("Error loading value from IndexedDB:", error);
        setError("Error loading value from IndexedDB");
      } finally {
        if (delay) {
          const elapsed = await simulateDelay(0.1);
          elapsed && setLoading(false);
        } else setLoading(false);
      }
    },
    [key]
  );

  const loadAllKeys = useCallback(async () => {
    try {
      const allKeys = await keys();
      setAllKeys(allKeys);
    } catch (error) {
      console.error("Error loading all keys from IndexedDB:", error);
      setError("Error loading all keys from IndexedDB");
    }
  }, []);

  useEffect(() => {
    instantLoad && loadValueFromDB(true, key);
    return () => {};
  }, [instantLoad, key, loadValueFromDB]);

  const startLoading = (_key = key) => {
    loadValueFromDB(true, _key);
  };

  const setValueInDB = async (newValue: T, _key = key) => {
    try {
      setLoading(true);
      await set(_key, newValue);
      // setValue(newValue);
    } catch (error) {
      console.error("Error setting value in IndexedDB:", error);
      setError("Error setting value in IndexedDB");
    } finally {
      const elapsed = await simulateDelay(0.5);
      elapsed && setLoading(false);
    }
  };

  const deleteValueFromDB = async (_key = key) => {
    try {
      await del(_key);
      // setValue(null);
    } catch (error) {
      console.error("Error deleting value from IndexedDB:", error);
      setError("Error deleting value from IndexedDB");
    }
  };

  const getValueByKey = async (_key: string) => {
    console.log({ _key });

    try {
      const storedValue = (await get<T>(_key)) || null;
      setValue(storedValue);
    } catch (error) {
      console.error(
        `Error getting value for key ${_key} from IndexedDB:`,
        error
      );
      setError(`Error getting value for key ${_key} from IndexedDB`);
    }
  };

  return {
    value,
    setValueInDB,
    deleteValueFromDB,
    loading,
    error,
    startLoading,
    allKeys,
    loadAllKeys,
    getValueByKey,
  };
}

export default useIndexedDB;
