import React from "react";

function SettingsRadios() {
  return (
    <div className="radios-group d-flex mb-5">
      <div class="form-check me-3">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="Radio1"
          // checked
        />
        <label class="form-check-label" for="Radio1">
          Public
        </label>
      </div>
      <div class="form-check me-3">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="Radio2"
        />
        <label class="form-check-label" for="Radio2">
          Curated Audience
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="Radio3"
        />
        <label class="form-check-label" for="Radio3">
          Community Only
        </label>
      </div>
    </div>
  );
}

export default SettingsRadios;
