import { api } from "@/services/api";
import type { NavigateFunction } from "react-router";
import { create } from "zustand";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface useAuthStoreType {
  user: User | null;
  loading: boolean;
  error: string | null;
  fetchProfile: () => void;
  login: (userData: User, navigateFn: NavigateFunction) => void;
  logout: (nabigateFn: NavigateFunction) => void;
  clearError: () => void;
}

const useAuthStore = create<useAuthStoreType>()((set) => ({
  user: null,
  loading: true,
  error: null,

  fetchProfile: async () => {
    try {
      const response = await api.get("/api/v1/userInfo");
      set({ user: response.data.user });
    } catch (err) {
      set({ user: null, error: (err as Error).message });
    } finally {
      set({ loading: false });
    }
  },
  login: async (userData, navigateFn) => {
    set({ user: userData, error: null });
    if (navigateFn) navigateFn("/");
  },
  logout: async (navigateFn) => {
    set({ loading: true, error: null });
    try {
      await api.post("/logout");
      set({ user: null });
      if (navigateFn) navigateFn("/login");
    } catch (err) {
      set({ error: (err as Error).message });
    } finally {
      set({ loading: false });
    }
  },
  clearError: () => set({ error: null }),
}));

export default useAuthStore;
