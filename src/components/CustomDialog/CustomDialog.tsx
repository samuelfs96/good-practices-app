import { Dialog } from "@mui/material";
import React from "react";

export type CustomDialogProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: (value: string) => void;
};

const CustomDialog: React.FC<CustomDialogProps> = ({
  children,
  open,
  onClose
}: CustomDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      {children}
    </Dialog>
  );
};

export default CustomDialog;
