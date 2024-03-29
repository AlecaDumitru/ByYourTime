import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";
import { isTemplateExpression } from "typescript";
import { useStoreContext } from "../../app/context/StoreContext";

export default function BasketSummary() {
    const {basket} = useStoreContext();
    // the basket can be undefined, if the subtotal does not have a value from the reduce function, is returning null or undefined, I give it a value of 0
    const subtotal = basket?.items.reduce((sum, item) => sum + (item.quantity*item.price), 0) ?? 0;
    const deliveryFee = subtotal >= 100 ? 0 : 20;

  return (
    <>
      <TableContainer component={Paper} variant={"outlined"}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{subtotal} lei</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Delivery fee*</TableCell>
              <TableCell align="right">{deliveryFee} lei</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{subtotal + deliveryFee} lei</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span style={{ fontStyle: "italic" }}>
                  *Orders over 100 lei qualify for free delivery
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
