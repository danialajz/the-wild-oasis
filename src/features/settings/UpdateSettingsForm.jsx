import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./UseSettings";
import Spinner from "../../ui/Spinner";
import { useUpdateSetting } from "./UseUpdateSetting";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLenght,
      maxBookingLenght,
      maxGuestsPerBooking,
      breakFastPrice,
    } = {},
  } = useSettings();
  const { updateSetting, isUpdating } = useUpdateSetting();
  if (isLoading) return <Spinner />;
  function handelUpdate(e, feild) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [feild]: value });
  }
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLenght}
          disabled={isUpdating}
          onBlur={(e) => handelUpdate(e, "minBookingLenght")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLenght}
          disabled={isUpdating}
          onBlur={(e) => handelUpdate(e, "maxBookingLenght")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          disabled={isUpdating}
          onBlur={(e) => handelUpdate(e, "maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakFastPrice}
          disabled={isUpdating}
          onBlur={(e) => handelUpdate(e, "breakFastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
