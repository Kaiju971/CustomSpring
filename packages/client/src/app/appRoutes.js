import { Routes, Route } from "react-router-dom";
import React, { lazy } from "react";
import withSuspense from "../hoc/withSuspense";
import NotFound from "../pages/notFound/notFound";

const Accueil = lazy(() => import("../pages/accueil/accueil"));
const Produit = lazy(() => import("../pages/produits/produit"));
const Apropos = lazy(() => import("../pages/apropos/apropos"));
const Contact = lazy(() => import("../pages/contact/contact"));
const Inscription = lazy(() => import("../pages/inscription/inscription"));
const Admin = lazy(() => import("../pages/admin/admin"));

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={withSuspense(Accueil)} />
        <Route path="/accueil" element={withSuspense(Accueil)} />
        <Route path="/produit" element={withSuspense(Produit)} />
        <Route path="/apropos" element={withSuspense(Apropos)} />
        <Route path="/inscription" element={withSuspense(Inscription)} />
        <Route path="/contact" element={withSuspense(Contact)} />
        <Route path="/admin" element={withSuspense(Admin)} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
