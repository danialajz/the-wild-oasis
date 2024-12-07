import { useSearchParams } from "react-router";
import { subDays } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { getStaysAfterDate } from "../../services/apiBookings";

export function useStayBooking() {
  const [searchparams] = useSearchParams();
  const numDays = !searchparams.get("last")
    ? 7
    : Number(searchparams.get("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ["stays", `last-${numDays}`],
  });

  const confrimedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  return { isLoading, stays, confrimedStays, numDays };
}
