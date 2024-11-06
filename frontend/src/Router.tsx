import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { EditTaskPage } from "./pages/EditTask";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="task/:taskId/edit" element={<EditTaskPage />} />
      </Route>
    </Routes>
  );
}
