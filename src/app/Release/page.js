import DiscountImage from "../components/discountImage";
import H1Release from "../components/h1Release";
import H2Release from "../components/h2Release";
import PRelease from "../components/pRelease";
import PropertyImage from "../components/propertyImage";

export default function Release() {
    return (
        <div className="md:relative w-full bg-[#F9F9F9] md:h-[709px] min-h-screen md:mx-auto md:flex md:items-center md:flex-row flex-col">
            <div className="hidden md:flex md:w-[50%] md:h-full md:justify-center md:items-center">
                <PropertyImage />
            </div>
            <div className="md:w-[50%] space-y-6 md:px-32 mx-auto flex md:justify-start md:items-start justify-center items-center h-full flex-col md:pl-8 md:space-y-9">
                <H1Release />
                <H2Release />
                <PRelease />
                <DiscountImage />
            <div>
                <PropertyImage />
            </div>
            </div>
        </div>
    );
}
