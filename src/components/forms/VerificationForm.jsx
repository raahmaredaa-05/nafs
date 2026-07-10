const [step, setStep] = useState(1);
const [formData, setFormData] = useState({});

const renderStep = () => {
  switch(step) {
    case 1: return <PersonalDetails />;
    case 2: return <DocumentUpload />;
    case 3: return <ReviewSubmission />;
    default: return <PersonalDetails />;
  }
};

