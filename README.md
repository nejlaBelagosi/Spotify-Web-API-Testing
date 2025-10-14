# 🎧 Spotify Web API Testing

> **API Testing using Postman**

This project demonstrates **manual and automated testing** of the [Spotify Web API](https://developer.spotify.com/documentation/web-api) using **Postman**.  
It focuses on testing endpoints for **user library management**, **playlist manipulation**, and **authentication via OAuth 2.0**.

---

## 📂 Project Links

| Resource | Link |
|-----------|------|
| 🧪 Postman Documentation | [Spotify API Documentation](https://documenter.getpostman.com/view/48284099/2sB3QKsqag) |
| 💻 GitHub Repository | [Spotify Web API Testing](https://github.com/nejlaBelagosi/Spotify-Web-API-Testing) |
| 🎵 API Reference | [Spotify Web API Tutorial](https://developer.spotify.com/documentation/web-api/tutorials/getting-started) |

---

## 🧭 Overview

This testing project validates the behavior of Spotify Web API endpoints to ensure:
- Accurate **user data retrieval**
- Correct **playlist and track operations**
- Proper **authentication and authorization**
- Appropriate **error handling and performance** under different conditions

---

## 🧩 Collection Description

- **Collection name:** `Spotify Web API`  
- **Environment name:** `Spotify Web API`

**Collection Structure:**

├── Positive Endpoints/
│ ├── Playlist/
│ ├── User Profile/
│ └── Tracks/
└── Negative Endpoints/
└── Playlist/

---

## 🔐 Authentication

Spotify uses **OAuth 2.0** for authentication.

- Each request requires a **Bearer Token**.
- The **access token** is valid for **1 hour**.
- New tokens can be generated in Postman via:
  Authorization → OAuth 2.0 → Get New Access Token

---

### Required Scopes

user-read-private
user-read-email
playlist-read-private
user-library-read
user-library-modify
playlist-modify-public
playlist-modify-private

---

## 🛠️ Tools Used

- **Postman** – API Testing & Automation  
- **Newman** (optional) – CLI test execution  
- **Spotify Web API** – Test target  
- **OAuth 2.0** – Authentication mechanism  

---
