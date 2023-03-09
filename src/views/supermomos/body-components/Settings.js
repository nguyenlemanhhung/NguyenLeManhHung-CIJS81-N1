import React from "react";
import SettingsCheckBox from "./SettingsCheckBox";
import SettingsRadios from "./SettingsRadios";
import SettingsChipsChoice from "./SettingsChipsChoice";

function Settings() {
  return (
    <div className="settings-container mb-5">
      <div className="title mb-5">Settings</div>
      <SettingsCheckBox />
      <SettingsRadios />
      <SettingsChipsChoice />
    </div>
  );
}

export default Settings;
