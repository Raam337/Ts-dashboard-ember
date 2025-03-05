
export interface AppContextType {
  activeAddress: number | null;
  setActiveAddress: React.Dispatch<React.SetStateAction<number | null>>;
}
