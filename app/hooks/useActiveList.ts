import { create } from "zustand";

interface ActiveListProps {
  members: string[];
  add: (member: string) => void;
  remove: (member: string) => void;
  set: (members: string[]) => void;
}

const useActiveList = create<ActiveListProps>((set) => ({
  members: [],
  add: (id) => set((state) => ({ members: [...state.members, id] })),
  remove: (id) =>
    set((state) => ({
      members: state.members.filter((memberId) => memberId !== id),
    })),
  set: (ids) => set(() => ({ members: ids })),
}));

export default useActiveList;
