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
import { useStayBooking } from "./useRecentStya";

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBooking();
  const { isLoading: isLoading2, stays, confrimedStays } = useStayBooking();
  console.log(bookings);

  if (isLoading || isLoading2) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <div>statistics</div>
      <div>Today s activity</div>
      <div>chart stay duration</div>
      <div>chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
