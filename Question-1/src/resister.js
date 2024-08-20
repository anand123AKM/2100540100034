import axios from "axios";

const registerUrl = "http://20.244.56.144/test/register";
const registrationData = {
  companyName: "BBDNITM",
  ownerName: "ANAND KUMAR MAURYA",
  rollNo: "2100540100034",
  ownerEmail: "anandmaurya1610@gmail.com",
  accessCode: "YLoQJB",
};

async function register() {
  try {
    const response = await axios.post(registerUrl, registrationData);
    console.log("Registration successful:", response.data);
  } catch (error) {
    console.error("Error registering:", error);
  }
}

register();
