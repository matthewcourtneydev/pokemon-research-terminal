import { Route, Routes } from "react-router-dom";

import { AppShell } from "../layouts/AppShell";
import { CollectionPage } from "../pages/CollectionPage";
import { FavoritesPage } from "../pages/FavoritesPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PokedexPage } from "../pages/PokedexPage";
import { RaidPlannerPage } from "../pages/RaidPlannerPage";
import { SettingsPage } from "../pages/SettingsPage";
import { TeamBuilderPage } from "../pages/TeamBuilderPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="pokedex" element={<PokedexPage />} />
        <Route path="collection" element={<CollectionPage />} />
        <Route path="teams" element={<TeamBuilderPage />} />
        <Route path="raids" element={<RaidPlannerPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}