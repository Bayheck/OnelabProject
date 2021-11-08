import { useState } from "react";
import {
    Dialog,
    DialogTitle,
} from "@mui/material";

export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, open } = props;

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>Contract Info</DialogTitle>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda
                cum delectus dolores ducimus, eius harum illo ipsam iure perferendis
                perspiciatis quam quibusdam quis quo repudiandae similique suscipit temporibus ullam!
            </div>
        </Dialog>
    );
}

const ExpressCalculatorInfoModal = ()=>{
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
            <span onClick={handleClickOpen}>
                условиями соглашения
            </span>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
        </>
    )
}

export default ExpressCalculatorInfoModal;