import React, { useState } from 'react';


const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleFormSubmit = (data) => {
    // Logic to handle form submission
  };

  const handleFormChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Render different form steps based on the current step state

  return (
    <div className="multi-step-form">
      {step === 1 && (
        <Step1
          data={formData}
          onChange={handleFormChange}
          onNext={handleNextStep}
        />
      )}
      {step === 2 && (
        <Step2
          data={formData}
          onChange={handleFormChange}
          onPrevious={handlePreviousStep}
          onSubmit={handleFormSubmit}
        />
      )}
      {step === 3 && (
        <Step3
          data={formData}
          onPrevious={handlePreviousStep}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
}

export default MultiStepForm;