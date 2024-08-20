import axios from "axios";

const authUrl = "http://20.244.56.144/test/auth";
const authData = {
  companyName: "BBDNITM",
  clientID: "ef680835-1311-40e6-a066-62d4974d2829",
  clientSecret: "ikhlnPnEQeXIslqL",
  ownerName: "ANAND KUMAR MAURYA",
  ownerEmail: "anandmaurya1610@gmail.com",
  rollNo: "2100540100034",
};

async function authenticate() {
  try {
    const response = await axios.post(authUrl, authData);
    console.log("Authentication successful:", response.data);
  } catch (error) {
    console.error(
      "Error authenticating:",
      error.response ? error.response.data : error.message
    );
  }
}

// Call the authenticate function
authenticate();
