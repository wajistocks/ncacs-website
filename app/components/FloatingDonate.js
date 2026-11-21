import DonateButton from "./DonateButton";

export default function FloatingDonate() {
  return (
    <DonateButton className="floating-donate" aria-label="Donate now">
      <span aria-hidden="true">♥</span> Donate
    </DonateButton>
  );
}
