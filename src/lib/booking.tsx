import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type BookingCtx = {
  isOpen: boolean;
  preselectedProgram?: string;
  open: (programId?: string) => void;
  close: () => void;
};

const Ctx = createContext<BookingCtx>({ isOpen: false, open: () => {}, close: () => {} });

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedProgram, setPreselected] = useState<string | undefined>();
  const open = useCallback((programId?: string) => {
    setPreselected(programId);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);
  return (
    <Ctx.Provider value={{ isOpen, preselectedProgram, open, close }}>
      {children}
    </Ctx.Provider>
  );
}

export const useBooking = () => useContext(Ctx);
