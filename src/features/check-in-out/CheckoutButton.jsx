import Button from "../../ui/Button";
import { useCheckOut } from "./useCheckOut";

function CheckoutButton({ bookingId }) {
  const { checkout, isChekingOut } = useCheckOut();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isChekingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
