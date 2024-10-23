import { useState } from "react";
import { Switch } from "antd";

interface TogglerProps {
  children: React.ReactNode;
}

export default function Toggler({ children }: TogglerProps) {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Switch
        onClick={handleToggleChange}
        className={toggle ? "toggler__BGPrimary" : ""}
        checkedChildren="Si"
        unCheckedChildren="No"
        checked={toggle}
      />
      {toggle ? children : null}
    </>
  );
}
