import { create } from "zustand";

const useStore = create((set) => ({
  userName: "",
  userPassword: "",
  userEmail: "",
  userTelephone: "",
  isSubmitEnabled: false,

  setUserName: (eventTargetValue) =>
    set((state) => ({ userName: eventTargetValue })),

  setUserPassword: (eventTargetValue) =>
    set((state) => ({ userPassword: eventTargetValue })),

  setUserEmail: (eventTargetValue) =>
    set((state) => ({ userEmail: eventTargetValue })),

  setUserTelephone: (eventTargetValue) =>
    set((state) => ({ userTelephone: eventTargetValue })),

  setIsSubmitEnabled: (eventTargetValue) =>
    set((state) => ({ isSubmitEnabled: eventTargetValue })),
}));

export default useStore;
