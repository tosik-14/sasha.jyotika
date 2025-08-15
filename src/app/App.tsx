import { Routes, Route, Link} from "react-router-dom";
import {Homepage} from "@/pages/Homepage/ui/Homepage";
import {OfferDescription} from "@/pages/OfferDescription/ui/OfferDescription";
import {ScrollToTop} from "@/shared/hook/ScrollToTop";

export const App = () => {
    return (
        <div>
            <nav>
                <Link to="/" />
                <Link to="/offerDescription/:offerName" />
            </nav>

            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/offerDescription/:offerName" element={<OfferDescription />} />
            </Routes>

        </div>
    )
}
