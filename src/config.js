let BASE_URL = "https://sigar.onrender.com/";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "https://sigar.onrender.com/";
}

export { BASE_URL };
