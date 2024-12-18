import { useState } from "react";
import { Button, TextField } from "@mui/material";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-5 flex flex-col items-center">
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Register User Form
        </h1>
      </div>
      <form
        className="space-y-4 flex flex-col items-center w-1/2"
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          onChange={handleInputChange}
          value={formData.name}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          onChange={handleInputChange}
          value={formData.email}
        />

        <Button variant="contained" type="submit">
          Register User
        </Button>
      </form>

      {/* Result */}
      <div className="text-2xl text-green-600 text-center mt-10">
        {/* Registration successfully! */}
      </div>
    </div>
  );
};

export default App;
