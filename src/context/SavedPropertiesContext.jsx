"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";
import { properties } from "@/data/properties";

const STORAGE_KEY = "haven-saved-properties:v1";
const DEFAULT_SAVED = JSON.stringify(["prop-1", "prop-8", "prop-13"]);

function subscribe(callback) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("haven-saved-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("haven-saved-change", callback);
  };
}

function getSnapshot() {
  if (typeof window === "undefined") return DEFAULT_SAVED;
  const val = localStorage.getItem(STORAGE_KEY);
  return val || DEFAULT_SAVED;
}

function getServerSnapshot() {
  return DEFAULT_SAVED;
}

const SavedPropertiesContext = createContext({
  savedIds: [],
  savedProperties: [],
  savedCount: 0,
  isSaved: () => false,
  toggleSave: () => {},
  removeSave: () => {},
  hydrated: true,
});

export function SavedPropertiesProvider({ children }) {
  const rawSaved = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  let savedIds = [];
  try {
    const parsed = JSON.parse(rawSaved);
    if (Array.isArray(parsed)) {
      savedIds = parsed;
    }
  } catch {
    savedIds = ["prop-1", "prop-8", "prop-13"];
  }

  const saveToStorage = (newIds) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newIds));
      window.dispatchEvent(new Event("haven-saved-change"));
    } catch {
      // quota or private mode
    }
  };

  const toggleSave = (id) => {
    const exists = savedIds.includes(id);
    const updated = exists ? savedIds.filter((item) => item !== id) : [...savedIds, id];
    saveToStorage(updated);
  };

  const removeSave = (id) => {
    const updated = savedIds.filter((item) => item !== id);
    saveToStorage(updated);
  };

  const isSaved = (id) => savedIds.includes(id);
  const savedProperties = properties.filter((p) => savedIds.includes(p.id));

  return (
    <SavedPropertiesContext.Provider
      value={{
        savedIds,
        savedProperties,
        savedCount: savedIds.length,
        isSaved,
        toggleSave,
        removeSave,
        hydrated: true,
      }}
    >
      {children}
    </SavedPropertiesContext.Provider>
  );
}

export function useSavedProperties() {
  return useContext(SavedPropertiesContext);
}
