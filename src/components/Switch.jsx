import SwitchKey from "@mui/material/Switch";

export default function Switch(props) {
  const { checked, onChange } = props;

  return (
    <>
      <SwitchKey checked={checked} onChange={onChange} />
    </>
  );
}
