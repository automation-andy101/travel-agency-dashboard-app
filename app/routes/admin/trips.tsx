import {Header} from "../../../components";
import React from "react";

const Trips = () => {
    return (
        <main className="all-wrappers wrapper">
            <Header
                title="Trips"
                description="View and Edit AI-generated travel plan"
                ctaText={"Create a trip"}
                ctaUrl={"/trips/create"}
            />
        </main>
    )
}
export default Trips
