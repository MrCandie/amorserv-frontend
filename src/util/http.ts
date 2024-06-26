import axios from "axios";
import { getStoredItem } from "./lib";

const API_URL = "https://amorserv-backend.onrender.com/api/v1";

export async function signup(data: {
  email: string;
  password: string;
  name: string;
}) {
  const response = await axios.post(`${API_URL}/auth/signup`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
}

export async function login(data: { email: string; password: string }) {
  const response = await axios.post(`${API_URL}/auth/login`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
}

export async function listBooks() {
  const response = await axios.get(`${API_URL}/book`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
}

export async function listCategories() {
  const response = await axios.get(`${API_URL}/category`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
}

export async function uploadFile(data: { image: string }) {
  const TOKEN = getStoredItem("token");
  const response = await axios.post(`${API_URL}/book/upload-file`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return response.data;
}

export async function createBook(data: {
  name: string;
  author: string;
  category: string;
  url: string;
  cover_url: string;
}) {
  const TOKEN = getStoredItem("token");
  const response = await axios.post(`${API_URL}/book`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return response.data;
}

export async function listMyBooks() {
  const TOKEN = getStoredItem("token");
  const response = await axios.get(`${API_URL}/book/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return response.data;
}

export async function editBook(
  data: {
    name: string;
    author: string;
    category: string;
  },
  id: string
) {
  const TOKEN = getStoredItem("token");
  const response = await axios.patch(`${API_URL}/book/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return response.data;
}

export async function deleteBook(id: string) {
  const TOKEN = getStoredItem("token");
  const response = await axios.delete(`${API_URL}/book/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return response.data;
}

export async function getQuotes() {
  const response = await axios.get(
    `https://api.api-ninjas.com/v1/quotes?category=inspirational`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": "DsWmbMIIVjRAcuc973nZYw==A0VbABSP7XatBeR5",
      },
    }
  );

  return response.data;
}

export async function viewProfile() {
  const TOKEN = getStoredItem("token");
  const response = await axios.get(`${API_URL}/auth/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return response.data;
}

export async function editProfile(data: {
  name?: string;
  website?: string;
  twitter?: string;
  linkedin?: string;
}) {
  const TOKEN = getStoredItem("token");
  const response = await axios.patch(`${API_URL}/auth/me`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return response.data;
}
