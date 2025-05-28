import axios from "axios";

export const registerUser = async (user) => {
  console.log(user);
  const response = await axios.post(
    "http://localhost:8000/api/users/register",
    // "https://grumpy-heads-cheat.loca.lt/api/users/register",
    user,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const registerVicePresident = async (user) => {
  console.log(user);
  const response = await axios.post(
    "http://localhost:8000/admin/api/vpresidents/register",
    // "https://grumpy-heads-cheat.loca.lt/api/users/register",
    user,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const registerMainSecertary = async (user) => {
  console.log(user);
  const response = await axios.post(
    "http://localhost:8000/admin/api/msecetary/register",
    // "https://grumpy-heads-cheat.loca.lt/api/users/register",
    user,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const registerSecretary = async (user) => {
  console.log(user);
  const response = await axios.post(
    "http://localhost:8000/admin/api/secretary/register",
    // "https://grumpy-heads-cheat.loca.lt/api/users/register",
    user,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const registerPresident = async (user) => {
  const response = await axios.post(
    "http://localhost:8000/admin/api/presidents/register",
    // "https://grumpy-heads-cheat.loca.lt/api/users/register",
    user,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const getDataPresident = async (user) => {
  const response = await axios.get(
    "http://localhost:8000/admin/api/presidents/getdata",
    user,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const loginUser = async (user) => {
  const response = await axios.post(
    // "https://short-planets-talk.loca.lt/api/users/login",
    "http://localhost:8000/api/users/login",
    user,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const voteSci = async (user) => {
  const response = await axios.post(
    // "https://short-planets-talk.loca.lt/api/users/login",
    "http://localhost:8000/admin/api/votesci/register",
    user,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
