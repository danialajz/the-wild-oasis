import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/UseBooking";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckIn";
import { useSettings } from "../settings/UseSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const moveBack = useMoveBack();
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakeFast, setAddBreakeFast] = useState(false);
  const { booking = {}, isLoading } = useBooking();
  const { settings, isLoading: isLoadingSettings } = useSettings();

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking.isPaid]);
  const { checkin, isChekingIn } = useCheckin();
  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  function handleCheckin() {
    if (!confirmPaid) return;
    if (addBreakeFast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakeFastPrice,
          totalPrice: totalPrice + optionalBreakeFastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }
  const optionalBreakeFastPrice =
    settings?.breakFastPrice * numNights * numGuests;

  if (isLoading || isLoadingSettings) return <Spinner></Spinner>;
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakeFast}
            onChange={() => {
              setAddBreakeFast((add) => !add);
              setConfirmPaid(false);
            }}
            id="breakfast"
          >
            Want to add breakFast to for{" "}
            {formatCurrency(optionalBreakeFastPrice)}?
          </Checkbox>
        </Box>
      )}
      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confrim) => !confrim)}
          disabled={confirmPaid || isChekingIn}
          id="confirm"
        >
          I Confirm that {guests.fullName}has paid the total amount of{" "}
          {!addBreakeFast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakeFastPrice
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalBreakeFastPrice
              )})`}
        </Checkbox>
      </Box>
      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isChekingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
