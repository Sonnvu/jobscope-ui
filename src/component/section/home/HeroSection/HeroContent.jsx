import Header from "./Header";
import MainDescription from "./MainDescription";
import MockBarChart from "../../../utils/chart/MockBarChart";

export default function HeroContent() {
    return (
        <div className="bg-gray-50">
            <Header />
            <div className="mx-auto p-10 flex max-w-4xl items-center justify-center">
                <div className="mx-auto flex">
                    <MainDescription />
                </div>
                <div className="mx-auto flex">
                    <MockBarChart aspectRatio={0.9} dataIndex={0} />
                </div>
            </div>
        </div>
    )
}