import "./scss/layout/header.scss";
import "./scss/layout/header_.scss";
import "./scss/typography.scss";

import "./App.scss";
import "./App_.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTransition, animated as a, config } from "@react-spring/web";
import HomePage from "./Home__Page";
import MenuBar from "./components/MenuBar";

import ManufacturaPage from "./Manufactura__Page";
import IngenieriaPage from "./Ingenieria__Page";
import ProductosPage from "./Productos__Page";

function App() {
  let location = useLocation();

  const transitions = useTransition(location, {
    // from: { opacity: 0, transform: "translate(-1%,0)" },
    from: { opacity: 0,  },
    enter: { opacity: 1,  },
    leave: { opacity: 0,  },
    config: {
      config: config.slow,
    },
  });

  return (
    <>
      <MenuBar />
      {transitions((props, item) => {
        return (
          <a.div id="main" style={props}>
            <Routes location={item}>
              <Route path="/manufactura" element={<ManufacturaPage />} />
              <Route path="/ingenieria" element={<IngenieriaPage />} />
              <Route path="/productos/*" element   ={<ProductosPage />}/>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </a.div>
        );
      })}
    </>
  );
}

export default App;
