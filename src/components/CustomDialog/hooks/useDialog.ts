import { useState } from "react";

function useDialog() {
  const [open, setOpen] = useState(false);
  const handleOpen = (value: boolean) => setOpen(value);
  return {
    open,
    handleOpen,
  };
}

export default useDialog;
