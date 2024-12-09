import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

import React from "react";
import { useRecentBooking } from "./useRecentBooking";
import Spinner from "../../ui/Spinner";
import { useStayBooking } from "./useRecentStyas";
import Stats from "./Stats";
import { useCabins } from "../cabins/UseCabins";
import SalesChart from "./SalesChart";

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBooking();
  const {
    isLoading: isLoading2,
    stays,
    confrimedStays,
    numDays,
  } = useStayBooking();
  const { cabins, isLoading: isLoading3 } = useCabins();
  console.log(bookings);

  if (isLoading || isLoading2) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confrirmedStays={confrimedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />

      <div>Today s activity</div>
      <div>chart stay duration</div>
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
