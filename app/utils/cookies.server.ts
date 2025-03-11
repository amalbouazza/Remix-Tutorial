import { createCookie } from "@remix-run/node";

// Créez un cookie pour stocker les informations de l'utilisateur
export const userCookie = createCookie("user", {
  httpOnly: true, // Empêche l'accès via JavaScript côté client
  secure: process.env.NODE_ENV === "production", // Utilisez HTTPS en production
  sameSite: "lax", // Protection contre les attaques CSRF
  maxAge: 60 * 60 * 24 * 7, // Durée de vie du cookie (1 semaine)
  path: "/", // Accessible sur tout le site
});