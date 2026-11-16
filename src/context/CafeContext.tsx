"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useSyncExternalStore,
} from "react";
import { Lang, MenuItem, MENU_ITEMS } from "@/data/cafeData";

export interface CartEntry {
  item: MenuItem;
  quantity: number;
}

interface CafeContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (text: { en: string; fr: string }) => string;
  cart: CartEntry[];
  addItem: (item: MenuItem) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalMad: number;
}

const CafeContext = createContext<CafeContextValue | null>(null);
const LANG_EVENT = "locas-lang-change";

function subscribeLang(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(LANG_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LANG_EVENT, callback);
  };
}

function getLangSnapshot(): Lang {
  const saved = window.localStorage.getItem("locas_lang");
  return saved === "fr" ? "fr" : "en";
}

function getLangServerSnapshot(): Lang {
  return "en";
}

export function CafeProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(
    subscribeLang,
    getLangSnapshot,
    getLangServerSnapshot
  );

  const [cart, setCart] = useState<CartEntry[]>([
    { item: MENU_ITEMS[4], quantity: 1 },
  ]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    window.localStorage.setItem("locas_lang", next);
    window.dispatchEvent(new Event(LANG_EVENT));
  }, []);

  const t = useCallback(
    (text: { en: string; fr: string }) => text[lang],
    [lang]
  );

  const addItem = useCallback((item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((e) => e.item.id === item.id);
      if (existing) {
        return prev.map((e) =>
          e.item.id === item.id ? { ...e, quantity: e.quantity + 1 } : e
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((e) =>
          e.item.id === id ? { ...e, quantity: e.quantity + delta } : e
        )
        .filter((e) => e.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const totalItems = cart.reduce((sum, e) => sum + e.quantity, 0);
  const totalMad = cart.reduce((sum, e) => sum + e.item.priceMad * e.quantity, 0);

  return (
    <CafeContext.Provider
      value={{
        lang,
        setLang,
        t,
        cart,
        addItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalMad,
      }}
    >
      {children}
    </CafeContext.Provider>
  );
}

export function useCafe() {
  const ctx = useContext(CafeContext);
  if (!ctx) {
    throw new Error("useCafe must be used within CafeProvider");
  }
  return ctx;
}
